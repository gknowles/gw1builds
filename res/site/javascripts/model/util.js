/*
Copyright Glen Knowles 2006 - 2024.
Distributed under the Boost Software License, Version 1.0.

util.js - gw1builds model
*/

/**
 * Extracts parameters from a location object and returns them as
 * a hash. Most commonly used for parse document.location
 *
 * @qs          querystring
 * @return      hash of parameters
 */
function parseQueryString(qs) {
  var params = {};
  var pairs = qs.split('&');
  var key, val;
  for (var i1 = 0; i1 < pairs.length; ++i1) {
    var kv = pairs[i1].split('=');
    key = decodeURIComponent(kv[0]);
    val = decodeURIComponent(kv[1]);
    params[key] = val;
  }
  return params;
}

/**
 * Builds a query string from a hash of parameter key/value pairs.
 * The returned string is in the form:
 *   key1=apple&key2=orange
 *
 * @param   params  hash of parameters
 * @return          query string
 */
function toQueryString(params) {
  var out = "";
  for (p in params) {
    if (out.length) out += "&";
    var key = encodeURIComponent(p).replace("'", "%27").replace('"', "%22");
    var val = encodeURIComponent(params[p]).replace("'", "%27").replace('"', "%22");
    out += key + "=" + val;
  }
  return out;
}

function isArray(val) {
 return (val && val instanceof Array || typeof it == "array"); // Boolean
} // isArray

// Round to nearest quarter and replace decimals with vulgar fractions
//
// param [number] in string or number form
//
function changeDec(num) {
  var newNum = (Math.round(parseFloat(num) * 4) / 4);
  var newDec = newNum - parseInt(newNum.toString().split(".")[0]);

  if (newDec) {
    var vulgars = new Array("", "&frac14;", "&frac12;", "&frac34;");
    var wholeNum = newNum.toString().split(".")[0];
    newNum = ((wholeNum > 0) ? wholeNum + "" : "") +
      vulgars[parseInt(newDec * 4)];
  }
  return newNum;
} // changeDec


function changeDec2(num) {
  var newNum = (Math.round(parseFloat(num) * 4) / 4);
  var newDec = newNum - parseInt(newNum.toString().split(".")[0]);

  if (newDec) {
    var vulgars = new Array("",
      String.fromCharCode(0xbc), String.fromCharCode(0xbd), String.fromCharCode(0xbe));
    var wholeNum = newNum.toString().split(".")[0];
    newNum = ((wholeNum > 0) ? wholeNum + "" : "") +
      vulgars[parseInt(newDec * 4)];
  }
  return newNum;
} // changeDec2


/**
 * Clone all objects in an array and return them in a new array. All
 * Objects in the source array must have a clone method.
 *
 * @param   a   source array
 * @return      array of cloned objects
 */
function cloneArray(a) {
  var out = new Array;
  for (var i1 = 0; i1 < a.length; ++i1) {
    out.push(a[i1].clone());
  }
  return out;
} // cloneArray(a)


/**
 * Shallow compare of object properties, returns true if all
 * properties of a and b are equal (==) to the corresponding
 * properties in the other.
 */
function equalProperties(a, b) {
  for (var k in a) {
    if (a[k] != b[k]) return false;
  }
  for (var k in b) {
    if (a[k] != b[k]) return false;
  }
  return true;
} // equalProperties


/**
 * Do alerts displaying properties of object, up to 20 per alert
 *
 * @param   obj   object whose properties are to be shown in alert(s)
 */
function alertObject(obj) {
  var num = 0;
  var out = "";
  for (var n in obj) {
    num += 1;
    out += n + ": ";
    if (typeof obj[n] == 'function') out += "[function]";
    else out += obj[n];
    out += '\n';
    if (num % 20 == 0) {
      alert(out);
      out = "";
    }
  }
  if (num == 0) {
    alert('Object has no properties');
  } else if (num % 20 != 0) {
    alert(out);
  }
} // alertObject(obj)


function htmlstring2(str) {
  return '"' +
   String(str).replace(/&/g, '&amp;').replace(/\"/g, '&quot;') +
   '"';
}
function jstring2(str) {
  return '"' + String(str).replace(/\"/g, '\\"') + '"';
}
function jstring1(str) {
  return "'" + String(str).replace(/\'/g, "\\'") + "'";
}
function trim(str) {
  return String(str).replace(/^\s+|\s+$/g, "");
}

function getCheckedOption(form, name) {
  var opt = form[name];
  if (opt.length == null) return opt;

  for (var i1 = 0; i1 < opt.length; ++i1) {
    if (opt[i1].checked) {
      return opt[i1];
    }
  }
  return null;
} // getCheckedOption(form, name)

function getSelectValue(el) {
  var value = '', opt, index = el.selectedIndex;
  if (index >= 0) {
    opt = el.options[index];
    value = opt.value || opt.text;
  }
  return value;
} // getSelectValue

function setSelectValue(el, val, choices) {
  var opts = el.options;
  if (choices) {
    for (var i1 = 0; i1 < choices.length; ++i1) {
      if (i1 >= opts.length) opts[i1] = new Option;
      var choice = choices[i1];
      if (isArray(choice)) {
        opts[i1].value = choice[0];
        opts[i1].text = choice[1];
        if (choice[2]) opts[i1].title = choice[2];
      } else {
        opts[i1].value = '';
        opts[i1].text = choice;
      }
    }
    for (; i1 < opts.length; ) el.remove(i1);
  }
  for (var i1 = 0; i1 < opts.length; ++i1) {
    if (val == opts[i1].value) {
      el.selectedIndex = i1;
      return true;
    }
  }
  for (var i1 = 0; i1 < opts.length; ++i1) {
    if (val == opts[i1].text) {
      el.selectedIndex = i1;
      return true;
    }
  }
  return false;
} // setSelectValue

