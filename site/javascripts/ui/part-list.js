/*
Copyright Glen Knowles 2006 - 2024.
Distributed under the Boost Software License, Version 1.0.

part-list.js - gw1builds ui
*/

/**
 * DDMixPartList - DragDrop policy that provides
 * - delegated tooltip
 * - mouse over highlighting
 * - delegated click function
 */
var DDMixPartList = {
  ddPolicyName: 'DDSkillList',
  elemId: 'skillList',
  partType: 'skill',
  storeKeys: {
    filter: g_store.keys.SKILL_SEARCH_FILTER,
    sort: g_store.keys.SKILL_LIST_SORT
  },
  squery: null, // SearchQuery
  sorts: {}, // { name: { key:, desc:, group: }, ... }
  drawTooltipBody: null, // function(part, obj)
  drawDragBody: null, // function(part, obj)
  drawPartDetail: null, // function(part), used in <td> of part list,
                        //   return null to skip part
  showPart: null, // function(part, ['view' || 'edit'])
  opts: {},
  isLoaded: false,
  changeKeys: {}
}
DDMixPartList.drawTooltip = function(obj) {
  // obj = { id:<id> }
  if (this.drawTooltipBody == null) return null;
  var part = this.squery.filter.matches[obj.id];
  if (!part) return null;
  var res = { width: 'auto' }
  res.body = this.drawTooltipBody(part, obj);
  return res.body.body ? res.body : res;
} // drawTooltip
DDMixPartList.drawDrag = function(obj) {
  // obj = { id:<id> }
  if (this.drawDragBody == null) return null;
  var part = this.squery.filter.matches[obj.id];
  if (!part) return null;
  var body = this.drawDragBody(part, obj);
  if (obj.type == null) {
    obj.type = {};
    obj.type[this.partType] = true;
  }
  if (obj.value == null) obj.value = part.clone();
  return body;
} // drawDrag
DDMixPartList.mouseOver = function(obj, dragObj) {
  if (/*dojo.render.html.ie*/ false) {
    hoverOverStyle(obj.srcEl, cssHover.partListTableTr);
  }
} // mouseOver
DDMixPartList.mouseOut = function(obj, dragObj) {
  if (/*dojo.render.html.ie*/ false) {
    hoverOutStyle(obj.srcEl, cssHover.partListTableTr);
  }
} // mouseOver


// Direct call - NOT A CALL BACK
DDMixPartList.view = function(el, event, obj) {
  this._showPart(el, event, obj, 'view');
}
DDMixPartList.edit = function(el, event, obj) {
  this._showPart(el, event, obj, 'edit');
}
DDMixPartList.destroy = function(el, event, obj) {
  // obj = { id:<id> }
  var part = this.squery.filter.matches[obj.id];
  if (confirm("Deleting '" + part.fullName() +
    "'. Are you sure?"))
  {
    api[this.partType].destroy(handler, part, this.squery);
  }

  var self = this;
  function handler(data) {
    if (badResultAlert(data)) return;
    self.updWidget( {keys: self.changeKeys} );
  }
}
DDMixPartList._showPart = function(el, event, obj, action) {
  // obj = { id:<id> }
  if (this.showPart == null) return;
  var part = this.squery.filter.matches[obj.id];
  this.showPart(part, action);
}


DDMixPartList.initPartList = function() {
  var elems = loadVarElems(document.getElementById(this.elemId));
  this.elems = elems;
  var squery = this.squery;
  var sorts = this.sorts;

  // Sort dropdown
  var key = g_store.get(this.storeKeys.sort);
  squery.sort = sorts[key];
  if (squery.sort == null) {
    key = 'Name';
    squery.sort = sorts[key];
  }
  if (elems.sortEl && elems.sortEl.tagName == 'SELECT') {
    for (var s in sorts) {
      var sort = sorts[s];
      var opt = new Option(s);
      opt.value = s;
      opt.title = sort.desc;
      elems.sortEl.options[elems.sortEl.options.length] = opt;
    }
    elems.sortEl.value = key;
  }


  this.changeKey = this.partType + 'Search';
  this.changeKeys = {};
  this.changeKeys[this.changeKey] = true;
  this.updWidget( {keys: this.changeKeys}, /*initOnly=*/true );
  this.isLoaded = false;
} // init()


DDMixPartList.updRoot = function(upd) {
  updRoot(upd || {keys: this.changeKeys} );
} // updRoot


DDMixPartList.chgFilter = function() {
  var squery = this.squery;
  var data = squery.filter.exportSelected();
  g_store.set(this.storeKeys.filter, data);
  squery.pages.current = 0;
  this.updRoot();
} // chgFilter(key)


DDMixPartList.chgSort = function(key) {
  g_store.set(this.storeKeys.sort, key);
  this.squery.sort = this.sorts[key];
  this.squery.pages.current = 0;
  this.updRoot();
} // chgSort(key)


DDMixPartList.ensureListFormat = function(opts) {
  if (!this.isLoaded) {
    this.updRoot();
  } else {
    if (opts && !equalProperties(this.opts, opts)) {
      this.opts = opts;
      this.updWidget( {keys: this.changeKeys} );
    }
  }
} // ensureListFormat


/**
 * Updates matchesEl and listEl with data returned from
 * api[partType].list
 *
 * this.squery  parts and paging as returned from api[partType].list()
 * this.opts    hash of things to include
 *   actions - view, edit, and delete links
 *   drag    - allow drag operations
 *   owner   - name of owner (~ is public)
 */
DDMixPartList.updWidget = function(upd) {
  if (!hasUpdateKey(upd, this.changeKeys)) return;

  this.isLoaded = true;

  var opts = this.opts;
  var elems = this.elems;
  var squery = this.squery;
  if (elems.matchesEl) {
    elems.matchesEl.innerHTML = squery.filter.matched + " matches";
  }
  var parts = squery.values;

  var out = ["<div>", DataPager.draw(), "</div>",
    "<div style='clear: both' class='scroll' onselectstart='return false'>",
    "<table class='detail' cellspacing='0'>"];
  for (var i1 = 0; i1 < parts.length; i1++) {
    var part = parts[i1];
    // not a part? must be a title, draw it
    if (!part.name) {
      out.push("<tr class='sortGroup'><td colspan='0'>", part, "</td></tr>");
      continue;
    }

    // its a part, draw it
    var detail = this.drawPartDetail(part);
    if (detail == null) continue;
    var self = this;
    function ddCall(fn) {
      return self.ddPolicyName + '.' + fn +
        "(this,event,{id:" + part.id + "})";
    }
    out.push("<tr",
        " onMouseOver='", ddCall('over'), "'",
        " onMouseOut='", ddCall('out'), "'");
    if (opts.drag) {
      out.push(" onMouseDown='", ddCall('down'), "'",
        " onMouseUp='", ddCall('up'), "'");
    }
    out.push(">");

    var tdAttrs = opts.actions ?
      "class='part detail action' onclick='" + ddCall('view') + "'" :
      "class='part detail'";
    if (opts.owner) {
      out.push("<td ", tdAttrs, "><span class='partName'>",
        part.access ? part.access.owner : '',
        "</span></td>");
    }
    out.push("<td style='width: 100%' ", tdAttrs, ">",
      detail, "</td>");
    if (opts.actions) {
      var hasEdit = groupAccess(part.access.owner) >= User.EDITOR;
      if (!hasEdit) out.push("<td ", tdAttrs, "></td><td ", tdAttrs, "></td>");
      else {
        out.push("<td class='part detail'>");
        out.push("<button type='button' class='action' onclick='", ddCall('edit'),
          "'>Edit</button>");
        out.push("</td>");
        out.push("<td class='part detail'>");
        out.push("<button type='button' class='action' onclick='", ddCall('destroy'),
          "'>Delete</button>");
        out.push("</td>");
      }
    }
    out.push("</tr>");
  }
  out.push("</table></div>");
  out = out.join('');
  elems.listEl.innerHTML = out;
  DataPager.update(elems.listEl.firstChild, squery.pages,
    this.ddPolicyName + '.query');
} // updWidget


DDMixPartList.query = function(page, opts) {
  if (isNaN(page)) opts = page;
  else this.squery.pages.current = page;

  this.elems.matchesEl.innerHTML = "Loading...";
  if (opts) this.opts = opts;

  api[this.partType].list(handler, this.squery);

  var self = this;
  function handler(data) {
    if (badResultAlert(data)) return;
    self.updWidget( {keys: self.changeKeys} );
  }
} // query
