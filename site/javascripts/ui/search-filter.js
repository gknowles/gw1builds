/*
Copyright Glen Knowles 2006 - 2024.
Distributed under the Boost Software License, Version 1.0.

part.js - gw1builds ui

Generic multidimensional filter
*/

function SearchDimension(disabled, name, propName, minSize, maxSize) {
  this.init(disabled, name, propName, minSize, maxSize);
} // SearchDimension(...)

SearchDimension.prototype.init = function(disabled/*=false*/,
  name, propName, minSize/*=6*/, maxSize/*=6*/)
{
  this.name = name;
  this.property = propName;
  this.selectedValues = null;
  this.values = new Object; // { key:['display value',num] }
  this.disabled = (disabled != null) ? disabled : false;
  this.minSize = minSize != null ? minSize : 6;
  this.maxSize = maxSize != null ? maxSize : 6;
} // SearchDimension.init(name, skillProp, disabled)

/**
 * Returns string gauranteed to be free of &, +, and =
 */
SearchDimension.prototype.exportSelected = function() {
  var out = [];
  if (this.selectedValues != null) {
    for (var n in this.selectedValues) {
      out.push(encodeURIComponent(n));
    }
  }
  return out.join(',');
} // SearchDimension.exportSelected()

SearchDimension.prototype.importSelected = function(selected) {
  this.removeSelectedValues();
  if (selected.length == 0) return;
  var sels = selected.split(',');
  for (var i1 = 0; i1 < sels.length; ++i1) {
    this.addSelectedValue(sels[i1]);
  }
} // SearchDimension.importSelected(selected)

SearchDimension.prototype.clone = function(out) {
  if (out == null) {
    out = new this.constructor(this.disabled, this.name, this.property,
      this.minSize, this.maxSize);
  } else {
    out.name = this.name;
    out.property = this.property;
    out.disabled = this.disabled;
    out.minSize = this.minSize;
    out.maxSize = this.maxSize;
  }
  if (this.selectedValues != null) {
    out.selectedValues = new Object;
    for (var n in this.selectedValues) {
      out.selectedValues[n] = true;
    }
  }
  for (var n in this.values) {
    var v = this.values[n];
    out.values[n] = [v[0],v[1]];
  }
  return out;
} // SearchDimension.clone(out)

SearchDimension.prototype.include = function(obj) {
  if (this.selectedValues == null) return true;

  if (obj[this.property] in this.selectedValues) {
    return true;
  } else {
    return false;
  }
} // SearchDimension.include(s)

SearchDimension.prototype.addSelectedValue = function(val) {
  if (this.selectedValues == null) {
    this.selectedValues = new Object;
  }
  this.selectedValues[val] = true;
}

SearchDimension.prototype.removeSelectedValues = function() {
  this.selectedValues = null;
}

SearchDimension.prototype.addObject = function(obj) {
  var val = obj[this.property];
  if (val in this.values) {
    this.values[val][1] += 1;
  } else {
    this.values[val] = [val,1];
  }
} // SearchDimension.addObject(obj)

SearchDimension.prototype.removeValues = function() {
  this.values = new Object;
}

SearchDimension.prototype.getValueArray = function() {
  var values = this.values;
  var valArray = [];
  for (var v in values) {
    var value = values[v];
    var val = { text: (value[0] + ' (' + value[1] + ')'),
                value: v,
                key: value[0]
              };
    valArray.push(val);
  }
  var cmp = this.compareValues;
  valArray.sort(
    function(a,b) { return cmp(a.key, b.key); }
  );
  return valArray;
} // SearchDimension.getValueArray()

SearchDimension.prototype.compareValues = function(a,b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}


/////////////////////////////////////////////////
// SearchFilter
/////////////////////////////////////////////////
function SearchFilter(dims) {
  this.init(dims);
}

SearchFilter.prototype.init = function(dims) {
  this.dims = dims || []; // SearchDimensions
  this.dimsByName = {};
  for (var i1 = 0; i1 < this.dims.length; ++i1) {
    var dim = this.dims[i1];
    this.dimsByName[dim.name] = dim;
  }
  this.matches = new Object; // values that matched
  this.searched = 0; // number of vals searched
  this.matched = 0; // number of vals matched
} // SearchFilter.init(dims)

SearchFilter.prototype.exportSelected = function() {
  var out = [];
  for (var i1 = 0; i1 < this.dims.length; ++i1) {
    var dim = this.dims[i1];
    if (dim.disabled) continue;
    // not first dim? add separator
    out.push(encodeURIComponent(dim.name) + '=' + dim.exportSelected());
  }
  return out.join('&');
} // SearchFilter.exportSelected()

SearchFilter.prototype.importSelected = function(selected) {
  var sels = selected.split('&');
  var dimsels = {};
  for (var i1 = 0; i1 < sels.length; ++i1) {
    var nv = sels[i1].split('=');
    dimsels[decodeURIComponent(nv[0])] = decodeURIComponent(nv[1]);
  }
  for (var i1 = 0; i1 < this.dims.length; ++i1) {
    var dim = this.dims[i1];
    var sel = dimsels[dim.name];
    if (sel == null) {
      dim.disabled = true;
      dim.removeSelectedValues();
    }
    else {
      dim.disabled = false;
      dim.importSelected(sel);
    }
  }
} // SearchFilter.importSelected(selected)

SearchFilter.prototype.clone = function(out) {
  if (out == null) out = new this.constructor;
  out.searched = this.searched;
  out.matched = this.matched;
  out.matches = new Object;
  for (var n in this.matches) {
    out.matches[n] = this.matches[n];
  }
  out.dims = [];
  for (var i1 = 0; i1 < this.dims.length; ++i1) {
    out.dims.push(this.dims[i1].clone());
  }
  return out;
} // SearchFilter.clone(out)

/**
 * Update matches and all dimension values using objs
 * as the domain. Each object is filtered using the
 * selected values of each dimension, then the dimension values
 * are recalculated from the set of matches. Keys of the filtered
 * objects are saved and used for matching objects against the
 * filter as a whole.
 *
 * @param objs  hash of objects being searched
 */
SearchFilter.prototype.updValues = function(objs) {
  var self = this;
  this.matches = new Object;
  this.searched = 0;
  this.matched = 0;
  var matches = this.matches;
  var dims = this.dims;

  for (var i1 = 0; i1 < dims.length; ++i1) {
    dims[i1].removeValues();
  }

  if (dojo.lang.isArrayLike(objs)) {
    for (var i2 = 0; i2 < objs.length; ++i2) {
      var obj = objs[i2];
      if (obj) updValue(this.getKey(obj), obj);
    }
  } else {
    for (var k in objs) {
      var obj = objs[k];
      if (obj) updValue(k, objs[k]);
    }
  }

  function updValue(k, obj) {
    self.searched += 1;
    for (var i1 = 0; i1 < dims.length; ++i1) {
      if (!dims[i1].include(obj)) return;
    }

    self.matched += 1;
    matches[k] = obj;
    for (var i1 = 0; i1 < dims.length; ++i1) {
      dims[i1].addObject(obj);
    }
  } // updValue(...)
} // SearchFilter.updValues(objs)

/**
 * Get key from object equivalent to the keys used in the hash
 * passed to updValues, and compare it with the keys of all matched
 * objects.
 */
SearchFilter.prototype.include = function(obj) {
  return (this.getKey(obj) in this.matches);
} // SearchFilter.include(obj)

SearchFilter.prototype.getKey = function(obj) {
  return obj.name;
} // SearchFilter.getKey


/////////////////////////////////////////////////
// Search
/////////////////////////////////////////////////
function SearchQuery(filter, sort) {
  this.filter = filter || new SearchFilter;
  this.sort = sort || {};
  this.pages = { current: 1, count: 1, pageSize: 25 }
  this.values = [];
}
SearchQuery.prototype.resetPages = function() {
  var pages = this.pages;
  pages.current = 1;
  pages.count = (this.filter.matched - 1) / pages.pageSize + 1;
} // SearchQuery.resetPages

/**
 * Filters and sorts values into an array. The array includes both
 * section titles (strings) and skill objects. In addition the array
 * has 'matches' and 'count' properties that return the number of
 * values in the filtered and source lists respectively.
 *
 * filter is an object with method:
 *   include(val)
 * sort is an object with methods:
 *   compare(val1, val2)
 *   title(val)
 *
 * @param   values  array or hash of skills to process
 * @param   filter  filter to use (null -> include all skills)
 * @param   sort    sortation to use
 * @return          array of Skill objects and titles
 *    two properties: count and matches
 */
SearchQuery.prototype.sortedArray = function(values, filter, sort) {
  var out = new Array;
  out.count = 0;
  out.matches = 0;

  if (values == null) return out;
  if (filter == null) filter = this.filter;
  if (sort == null) sort = this.sort;

  if (dojo.lang.isArray(values)) {
    out.count = values.length;
    for (var i1 = 0; i1 < values.length; ++i1) {
      var val = values[i1];
      if (!filter.include(val)) continue;
      out.push(val);
    }
  } else {
    for (var k in values) {
      out.count += 1;
      var val = values[k];
      if (!filter.include(val)) continue;
      out.push(val);
    }
  }
  out.matches = out.length;
  var cmpFn, grpFn;
  if (!dojo.lang.isArray(sort)) {
    cmpFn = sort.compare;
    grpFn = sort.group;
  } else {
    cmpFn = function(a,b) {
      for (var i1 = 0; i1 < sort.length; ++i1) {
        var rc = sort[i1].compare(a,b);
        if (rc) return rc;
      }
      return 0;
    }
    grpFn = sort[0].group;
  }
  out.sort(cmpFn);

  // insert group titles
  if (out.length == 0) {
    out.push("No Matches");
  } else {
    var title = grpFn(out[out.length - 1]);
    for (var i1 = out.length - 2; i1 >= 0; --i1) {
      var t2 = grpFn(out[i1]);
      if (t2 != title) {
        out.splice(i1 + 1, 0, title);
        title = t2;
      }
    }
    // no title if all titles are null
    if (title) out.splice(0,0,title);
  }

  return out;
} // sortedArray
