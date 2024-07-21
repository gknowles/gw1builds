
if (typeof dojo != 'undefined') { dojo.provide("ui.state"); }

function updObjInfo(upd) {
  var formEl = dojo.byId('stateActions');
  var obj = g_state.getBuild();
  var isMember = g_user.hasRole();
  if (upd.keys.user) {
    if (obj.access) {
      obj.access.role = groupAccess(obj.access.owner);
    }
    formEl.fSave.style.display = 
      (obj.access && obj.access.role >= User.EDITOR) ? '' : 'none';
    formEl.fSaveAs.style.display = isMember ? '' : 'none';
    formEl.fSaveMemberAs.style.display = 
      (isMember && obj.isTeam) ? '' : 'none';
  } // upd.user
  if (upd.keys.characters) {
    formEl.fSave.style.display = 
      (obj.access && obj.access.role >= User.EDITOR) ? '' : 'none';
    dojo.byId('header_current').innerHTML = obj.fullName();
  } // upd.characters
} // updObjInfo(...)


function drawObjSaveAs(what) {
  var obj = g_state.getBuild();
  var toon = g_state.getMember();
  var out = ["<div class='pdiv-saveAs minwidth'",
    " style='text-align: center'><form>",
    "<div class='errpane section errorExplaination'></div>"];
  if (what == g_state.dataTypes.TEAM_MEMBER) {
    out.push("Save: <select name='memberPos'",
      " onchange='updObjSaveAsSelect(this)'>");
    var slots = obj.slotRefs(/*inclNulls=*/false);
    var found = 0;
    for (var i1 = 0; i1 < slots.length; ++i1) {
      var slot = slots[i1];
      found += 1;
      if (toon == null) toon = slot.value;
      var bullet = obj.makeBullet(slot.pos, slot.alt);
      out.push("<option value='", bullet, "'",
        slot.value == toon ? ' selected' : '', ">", 
        bullet, '. ', slot.value.name, "</option>");
    }
    out.push("</select><br>As...<br>");
    if (found == 0) {
      out = ["<div class='pdiv-saveAs'><form>",
        "Team has no members",
        "<div>",
        "<button class='focusFirst' type='button'",
          " onclick=\"hideDialog()\">Cancel</button>",
        "</div></form></div>"];
      return out.join('');
    }
  }
  out.push("Name: <input class='firstFocus firstSelect'",
    " type='text' name='name'",
    " onkeydown='return enterSubmits(this, event)'",
    " maxlength='20'");
  out.push(" value=", jstring1((toon && toon.name) ? toon.name : obj.name));
  out.push("><table>\n",
    "<tr><th></th><th>Owner</th><th>Visibility</th></tr>\n");
  var groups = SGroupList.search.values;
  // personal group
  var gname = '~' + g_user.name;
  out.push("<tr><td>(personal)</td>",
    "<td><input type='radio' name='owner' value='", gname, "'",
      " checked onclick='updObjSaveAs(this)'></td>",
    "<td><input type='radio' name='viewer' value='", gname, "'",
      " checked></td>",
    "</tr>");
  // other groups
  for (var i1 = 0; i1 < groups.length; ++i1) {
    var group = groups[i1];
    if (!group.hasRole()) continue;
    out.push("<tr><td>", group.name, "</td>",
      "<td><input type='radio' name='owner' value='", group.name, "'",
        group.hasRole(User.EDITOR) ? '' : ' disabled',
        " onclick='updObjSaveAs(this)'",
        "></td>",
      "<td><input type='radio' name='viewer' value='", group.name, "'",
        "></td>",
      "</tr>");
  } // for each group
  // public "group"
  gname = '~';
  out.push("<tr><td>(public)</td><td></td>",
    "<td><input type='radio' name='viewer' value='", gname, "'></td>",
    "</tr>");
  // close
  out.push("</table>",
    "<div style='text-align: right'>",
    "<input type='button' name='submit' value='Save'",
      " onclick=\"saveObjAs(this.form)\">",
    "<input type='button' value='Cancel'",
      " onclick=\"hideDialog()\">",
    "</div>");
  out.push("</form></div>");
  out = out.join('');
  return out;
} // drawObjSaveAs()


function updObjSaveAsSelect(el) {
  var team = g_state.getTeam();
  var bullet = getSelectValue(el);
  var toon = team.slotValue(bullet);
  var nameEl = el.form.name;
  nameEl.value = toon.name;
  dojo.html.selectInputText(nameEl);
} // updObjSaveAsSelect

function updObjSaveAs(el) {
  var form = el.form;
  var val = el.value;
  var viewEls = form.elements['viewer'];
  var firstOpt = null;
  var changeOpt = false;
  var pgroup = '~' + g_user.name; // personal group
  for (var i1 = 0; i1 < viewEls.length; ++i1) {
    var viewEl = viewEls[i1];
    viewEl.disabled = !(val == pgroup || // personal owner
      val == viewEl.value || // viewer same as owner
      viewEl.value == '~'); // public viewer
    if (viewEl.disabled) {
      if (viewEl.checked) changeOpt = true;
    } else {
      if (firstOpt == null) firstOpt = viewEl;
    }
  }
  if (changeOpt) firstOpt.checked = true;
} // updObjSaveAs(el)


function saveObjAs(form) {
  var obj = g_state.getBuild();
  var oldName = obj.name;
  var newName = form['name'].value;
  var followSaved = true; // replace current state
  if (form['memberPos']) {
    var bullet = getSelectValue(form['memberPos']);
    var toon = obj.slotValue(bullet);
    var o2 = new Build(toon.name, null, false, obj.isPve, obj.type);
    o2.setSlot(0, toon);
    obj = o2;
    followSaved = false; // keep current state
  } else if (!obj.isTeam) {
    obj.slotValue(0).setName(newName);
  }
  obj.setName(newName);
  obj.access = {
    owner: getCheckedOption(form, 'owner').value,
    viewer: getCheckedOption(form, 'viewer').value
  }
  form['name'].value = obj.name;
  api.build.create(handler, obj, /*replace=*/false);
  obj.setName(oldName);

  function handler(data) {
    // json = { result:, toon: }
    if (data.result == 'ok') {
      if (followSaved) {
        obj.setName(newName);
        obj.id = data.build.id;
        obj.access = data.build.access;
        g_state.updBaseline();
        updObjInfo( {keys: {characters: true} } );
      }
      dijit.byId('dialog').hide();
      return;
    } 
    
    if (data.result == 'exists') {
      var repl = confirm("'" + newName + 
        "' already exists. Do you want to replace it?");
      if (repl) {
        obj.setName(newName);
        api.build.update(handler, obj, /*replace=*/true);
        obj.setName(oldName);
      }
    } else { // assume json.result == 'bad'
      var errEl = dojo.html.getElementsByClass('errorExplaination', 
        form, 'div')[0];
      errEl.innerHTML = Pane.prototype.formatErrors(
        data.errors, null);
    }
    var wgt = dijit.byId("dialog");
    wgt.placeModalDialog();
  } // handler(data)
} // saveObjAs(obj, form)


function saveObj() {
  var obj = g_state.getBuild();
  api.build.update(handler, obj);

  function handler(data) {
    // json = { result:<result>, toon:<id,name,packed,desc> }
    if (badResultAlert(data)) return;
    g_state.updBaseline();
    dojo.byId('header_current').innerHTML = obj.fullName();
  } // handler(data)
} // saveObj()


/////////////////////////////////////////////////
// Globals
/////////////////////////////////////////////////
g_state = new State;
