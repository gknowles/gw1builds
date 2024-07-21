
/**
 * Calculates the value of an effect that varies with an
 * attribute.
 * 
 * @param   attr    value of attribute
 * @param   at0     value of effect when attr is 0
 * @param   at15    value of effect when attr is 15
 */
function effectValue(attr, at0, at15, factor) {
  factor = factor || 1;
  var val = Math.round( ( ((at15 - at0) / 15 * attr) + at0 ) );
  return Math.round(factor * val);
}

  
function clearValues() {
  var inputs = document.getElementById("inputs").elements;
  for (var i1 = 0; inputs.length > i1; ++i1) {
    inputs[i1].value = "";
  }
  update();
  try {
    inputs[0].focus();
  } catch (e) {}
}

function update() {
  var v0 = null, v1 = null;
  // count filled in points
  var inputs = document.getElementById("inputs").elements;
  var pts = [];
  for (var i1 = 0; i1 < inputs.length; ++i1) {
    var val = Number(inputs[i1].value);
    if (val != NaN && inputs[i1].value.length > 0) {
      pts.push([i1, val]);
    }
  }
  var result = findParms(pts);
  document.getElementById("result").textContent = result.text;
  for (var i1 = 0; i1 < 17; ++i1) {
    if (result.at0 != null) {
      out = effectValue(i1, result.at0, result.at15, result.factor);
    } else {
      out = '';
    }
    document.getElementById("out." + i1).innerHTML = out;
  }
}

function findParms(pts) {
  var m, b0, b15, x1, y1, x2, y2;
  var r0, r15;
  if (pts.length < 2) return {text: "Need at least two values"};
  x1 = pts[0][0];
  y1 = pts[0][1];
  x2 = pts[pts.length - 1][0];
  y2 = pts[pts.length - 1][1];
  m = (y2 - y1) / (x2 - x1);
  b0 = (y1*x2 - y2*x1) / (x2 - x1);
  b15 = 15*m + b0;
  if (x1 == 0) {
    r0 = [y1,y1];
  } else {
    r0 = [Math.round(b0/2), Math.round(2*b0)];
  }
  for (var i1 = 0; i1 < pts.length; ++i1) {
    if (pts[i1][0] == 15) {
      r15 = [ pts[i1][1], pts[i1][1] ];
      break;
    }
  }
  if (r15 == null) {
    r15 = [Math.round(b15/2), Math.round(2*b15)];
  }
  var of, o0, o15;
  var f, i0, i15;
  var gf, g0, g15;
  var pgf, pg0, pg15;
  pgf = gf = false;
  for (f = 1; f < (b0 + b15) / 2; f += 0.05) {
    pg0 = g0 = false;
    for (i0 = Math.round(r0[0] / f); i0 <= Math.round(r0[1] / f); ++i0) {
      var pg15 = false;
      for (i15 = Math.round(r15[0] / f); i15 <= Math.round(r15[1] / f); ++i15) {
        var g15 = true;
        for (var p = 0; p < pts.length; ++p) {
          if (pts[p][1] != effectValue(pts[p][0], i0, i15, f)) {
            g15 = false;
            break;
          }
        }
        if (g15) {
          g0 = gf = true;
          if (of == null) of = [f, f];
          else if (f < of[0]) of[0] = f;
          else if (f > of[1]) of[1] = f;
          if (o0 == null) o0 = [i0, i0];
          else if (i0 < o0[0]) o0[0] = i0;
          else if (i0 > o0[1]) o0[1] = i0;
          if (o15 == null) o15 = [i15, i15];
          else if (i15 < o15[0]) o15[0] = i15;
          else if (i15 > o15[1]) o15[1] = i15;
        }
        if (pg15 && !g15) break;
        pg15 = g15;
      } // for i15
      if (pg0 && !g0) break;
      pg0 = g0;
    } // for i0
    if (pgf && !gf) break;
    pgf = gf;
    if (f == 1 && gf) break;
  } // for f
  if (of == null) return {text: "IMPOSSIBLE"}
  var matched = 0;
  var out = '';
  if (o0[0] == o0[1]) {
    matched += 1;
    out += 'at0: ' + o0[0];
  } else {
    out += 'at0: [' + o0[0] + ' - ' + o0[1] + ']';
  }
  if (o15[0] == o15[1]) {
    matched += 1;
    out += ',  at15: ' + o15[0];
  } else {
    out += ',  at15: [' + o15[0] + ' - ' + o15[1] + ']';
  }
  if (of[0] == of[1]) {
    matched += 1;
    out += ',  factor: ' + Math.round(100*of[0]);
  } else {
    out += ',  factor: [' + Math.round(100*of[0]) + 
      ' - ' + Math.round(100*of[1]) + ']';
  }
  out = {text: out}
  if (matched == 3) {
    out.at0 = o0[0];
    out.at15 = o15[0];
    out.factor = of[0];
  }
  return out;
}

