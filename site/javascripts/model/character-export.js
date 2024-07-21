// Guild Wars character data objects

if (typeof dojo != 'undefined') { dojo.provide("model.character-export"); }

/////////////////////////////////////////////////
// Character - represents an in game character
// with associated professions, skills, etc
// 
// Queries
//   toGwBBCode()
/////////////////////////////////////////////////

/////////////////////////////////////////////////
// Queries
/////////////////////////////////////////////////
/**
 * Convert to gwBBCode formatted Skill Template string. 
 */
Character.prototype.toGwBBCode = function(args/*=false*/) {
  args = args || {desc: true};
  var out = ['[build',
    ' name="', this.name, '"',
    ' prof=', this.primary.abbrev, '/', this.secondary.abbrev];
  if (args.pickup) out.push(' pickup="', this.name, '"');
  if (args.desc && this.desc) {
    out.push(' desc=', htmlstring2(trim(this.desc)));
  }
  var pattrs = this.pattrArray();
  for (var i1 = 0; i1 < pattrs.length; ++i1) {
    var pattr = pattrs[i1];
    if (pattr.value == 0) continue;
    out.push(' ', pattr.name.split(' ').join(''), '=', 
      pattr.rawValue());
    if (pattr.headgear) out.push('+1');
    if (pattr.rune != 'None') {
      out.push('+', Character.prototype.runeTypes[pattr.rune][0]);
    }
  }
  out.push(']');
  var skills = this.slotPrimes();
  for (var i1 = 0; i1 < skills.length; ++i1) {
    var skill = skills[i1];
    if (skill) out.push('[', skill.name, ']');
    else out.push('[no skill]');
  }
  out.push('[/build]');
  
  return out.join('');
} // toGwBBCode()
