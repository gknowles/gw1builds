/*
Copyright Glen Knowles 2006 - 2025.
Distributed under the Boost Software License, Version 1.0.

skill-search.js - gw1builds ui

Common functions and variables
*/

/////////////////////////////////////////////////
// Skill Dimension - Attribute
/////////////////////////////////////////////////
function SkillDimensionAttribute(disabled) {
  this.init(disabled, 'Attribute', 'attr');
}
inherits(SkillDimensionAttribute, SearchDimension);

//===========================================================================
SkillDimensionAttribute.prototype.compareValues = function(a,b) {
  if (a == b) return 0;
  // sort skills with no attribute to the bottom
  if (a == ATTR_NO_ATTRIBUTE) return 1;
  if (b == ATTR_NO_ATTRIBUTE) return -1;
  if (a < b) return -1;
  return 1;
}


/////////////////////////////////////////////////
// Skill Dimension - Category
/////////////////////////////////////////////////
function SkillDimensionCategory(disabled) {
  this.init(disabled, 'Category', 'categories');
}
inherits(SkillDimensionCategory, SearchDimension);

//===========================================================================
SkillDimensionCategory.prototype.addObject = function(obj) {
  for (var val in obj.categories) {
    if (val in this.values) {
      this.values[val][1] += 1;
    } else {
      this.values[val] = [val,1];
    }
  }
}

//===========================================================================
SkillDimensionCategory.prototype.include = function(obj) {
  if (this.selectedValues == null) return true;

  for (var val in obj.categories) {
    if (val in this.selectedValues) return true;
  }
  return false;
}


/////////////////////////////////////////////////
// Skill Dimension - Effect
/////////////////////////////////////////////////
function SkillDimensionTag(disabled) {
  this.init(disabled, 'Tag', 'tags');
}
inherits(SkillDimensionTag, SearchDimension);

//===========================================================================
SkillDimensionTag.prototype.addObject = function(obj) {
  for (var val in obj.tags) {
    if (val in this.values) {
      this.values[val][1] += 1;
    } else {
      this.values[val] = [val,1];
    }
  }
}

//===========================================================================
SkillDimensionTag.prototype.include = function(obj) {
  if (this.selectedValues == null) return true;

  for (var val in obj.tags) {
    if (val in this.selectedValues) return true;
  }
  return false;
}


/////////////////////////////////////////////////
// Skill Dimension - Profession
/////////////////////////////////////////////////
function SkillDimensionProfession(disabled) {
  this.init(disabled, 'Profession', 'pro', 4, 12);
}
inherits(SkillDimensionProfession, SearchDimension);

//===========================================================================
SkillDimensionProfession.prototype.addObject = function(obj) {
  var val = obj.pro;
  if (val in this.values) {
    this.values[val][1] += 1;
  } else {
    var disp = (val == '') ? '- common -' : g_pros[val].name;
    this.values[val] = [disp,1];
  }
}


/////////////////////////////////////////////////
// Skill Dimension - Type
/////////////////////////////////////////////////
function SkillDimensionType(disabled) {
  this.init(disabled, 'Type', 'type');
}
inherits(SkillDimensionType, SearchDimension);

//===========================================================================
SkillDimensionType.prototype.compareValues = function(a,b) {
  // sort by last word first so that attacks (Axe Attack, Spear Attack, ...)
  // enchants, etc are grouped together
  var ta = a.split(' ').reverse().join(' ');
  var tb = b.split(' ').reverse().join(' ');
  if (ta < tb) return -1;
  if (ta > tb) return 1;
  return 0;
}


/////////////////////////////////////////////////
// Skill Filter
/////////////////////////////////////////////////
function SkillSearchFilter(dims) {
  this.init(dims);
}
inherits(SkillSearchFilter, SearchFilter);

//===========================================================================
SkillSearchFilter.prototype.getKey = function(obj) {
  return obj.id;
}


/////////////////////////////////////////////////
// Skill Search
/////////////////////////////////////////////////
var g_skillSearch = new SearchQuery;

//===========================================================================
function initSkillSearch() {
  var dims = [
    new SearchDimension(/*disabled=*/true, 'Name', 'name'),
    new SkillDimensionProfession(/*disabled=*/false),
    new SkillDimensionAttribute(false),
    new SkillDimensionType(/*disabled=*/false),
    new SearchDimension(/*disabled=*/true, 'Upkeep', 'upkeep', 2, 2),
    new SearchDimension(/*disabled=*/true, 'Cost', 'enCost'/*+adCost?*/),
    new SearchDimension(false, 'Activation', 'activation'),
    new SearchDimension(false, 'Recharge', 'recharge'),
    new SearchDimension(/*disabled=*/false, 'Campaign', 'campaign', 4, 4),
    new SearchDimension(false, 'Elite', 'elite', 2, 2),
    new SearchDimension(false, 'PvE Only', 'pveOnly', 2, 2),
    new SearchDimension(false, 'Exhaustion', 'exhaustion', 2, 2),
    new SearchDimension(false, 'Failure', 'failure', 3, 3),
    new SkillDimensionTag(/*disabled=*/true),
    new SkillDimensionCategory(/*disabled=*/false)
  ];

  var filter = new SkillSearchFilter(dims);
  var val = g_store.get(g_store.keys.SKILL_SEARCH_FILTER);
  if (val != null) {
    filter.importSelected(val);
  }
  filter.updValues(g_skillsById);
  g_skillSearch.filter = filter;
}

//===========================================================================
function editSkillSearch() {
  var filter = g_skillSearch.filter.clone();
  var dlgWgt = document.getElementById("dialog");

  var skills = DDSkillList.filteredSkills();
  g_currentSearch = new SearchWindow('Skill Search', dlgWgt, filter,
    skills);
  g_currentSearch.filterChanged = function() {
    g_skillSearch.filter = g_currentSearch.filter;
    DDSkillList.chgFilter();
  }
  g_currentSearch.show();
}
