/*
Copyright Glen Knowles 2006 - 2025.
Distributed under the Boost Software License, Version 1.0.

base64codec.js - gw1builds model
*/

/////////////////////////////////////////////////
// bit encoding into base64 anet format (wish it was
// url safe base64 a la section 4 of rfc3548)
/////////////////////////////////////////////////
function Base64Codec(str) {
  this.str = str ? String(str) : "";
  this.pval = 0;
  this.pused = 0;
  this.gval = 0;
  this.gused = this.BASE64_BITS;
  this.gnext = 0;
}
Base64Codec.prototype.BASE64_BITS = 6;
Base64Codec.prototype.base64 =
//           1         2         3         4         5         6
// 0123456789012345678901234567890123456789012345678901234567890123
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

/**
 * Encode and append small precision numbers into a base64
 * text string
 *
 * Assuming the output already has 4 bits of data pending a put
 * of 5 bits would be placed like this (high bit first):
 * +-+-+-+-+-+-+ +-+-+-+-+-+-+
 * |1|0|X|X|X|X| | | | |4|3|2|
 * +-+-+-+-+-+-+ +-+-+-+-+-+-+
 * The X's represent the old data and the blanks are initialized
 * to zero.
 *
 * When a set of 6 bits is filled it is translated into a character
 * using the base64 table above and added to the string.
 *
 * @param val   number to be encoded
 * @param bits  magnatude of number in bits
 */
Base64Codec.prototype.put = function(val, bits) {
  var num = this.pval;
  var used = this.pused;
  var avail = this.BASE64_BITS - used;
  if (val >= (1 << bits)) {
    alert("Base64Codec.put: " + val + " to large for field (" + bits + " bits)");
    return;
  }
  var astr = this.str + "[" + num + "," + used + "] + " + val + " (" + bits + " bits)";
  while (bits > avail) {
    var tval = (val << used) % 64;
    num += tval;

    val >>= avail;
    bits -= avail;

    this.str += this.base64.charAt(num);
    num = 0;
    used = 0;

    avail = this.BASE64_BITS;
  }
  if (bits) {
    num += val << used;
    used += bits;
    if (used == this.BASE64_BITS) {
      this.str += this.base64.charAt(num);
      num = 0;
      used = 0;
    }
  }
  this.pval = num;
  this.pused = used;
  //alert(astr + " -> " + this.str + "[" + num + "," + used + "]");
} // put(val, bits)


Base64Codec.prototype.putBoundary = function() {
  var num = this.pval;
  var used = this.pused;
  if (used) {
    this.str += this.base64.charAt(num);
  }
  this.pval = 0;
  this.pused = 0;
} // putBoundary()


Base64Codec.prototype.putTail = function(tail) {
  this.putBoundary();
  this.str += tail;
} // putTail(tail)


Base64Codec.prototype.get = function(reqbits) {
  var num = 0;
  var val = this.gval;
  var used = this.gused;
  var avail = this.BASE64_BITS - used;
  var bits = reqbits;
  var astr = this.str + "[" + val + "," + used + "," + this.gnext + "].get(" + bits + ")";
  while (avail < bits) {
    if (avail) {
      num += (val >>> used) << (reqbits - bits);
      bits -= avail;
    }
    if (this.gnext >= this.str.length) {
      val = 0;
    } else {
      val = this.base64.indexOf(this.str.charAt(this.gnext));
      this.gnext += 1;
    }
    used = 0;
    avail = this.BASE64_BITS;
  }
  if (bits) {
    num += ((val >>> used) % (1 << bits)) << (reqbits - bits);
    used += bits;
  }
  //alert("bitGet: " + astr + " -> " + num);
  this.gval = val;
  this.gused = used;
  return num;
} // get(bits)


Base64Codec.prototype.skipBoundary = function(src) {
  this.gused = this.BASE64_BITS;
} // skipBoundary()


Base64Codec.prototype.getTail = function() {
  this.skipBoundary();
  var out = this.str.substr(this.gnext);
  this.gnext = this.str.length;
  return out;
} // getTail()


Base64Codec.prototype.dumpBits = function(src) {
  var codec = new Base64Codec(src);
  var out = "<pre>";
  out += "   0      1      2      3      4      5      6      7      8      9";
  out += "<br>";
  for (var i1 = 0; i1 < src.length; ++i1) {
    val = Number(codec.get(6)).toString(2);
    val = "000000".substr(val.length) + val;
    out += val + ' ';
    if (i1 % 10 == 9) {
      out += '   ' + src.substr(i1 - 9, 10);
      out += '<br>';
    }
  }
  for (; i1 % 10; ++i1) {
    out += '      ' + ' ';
    if (i1 % 10 == 9) {
      out += '   ' + src.substr(i1 - 9, 10);
      out += '<br>';
    }
  }
  out += "\n</pre>";
  return out;
} // dumpBits
