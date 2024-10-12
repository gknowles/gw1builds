'use strict';
/*
Copyright Glen Knowles 2006 - 2024.
Distributed under the Boost Software License, Version 1.0.

account-mock.js - gw1builds ui
*/

/////////////////////////////////////////////////
// Account related functions
/////////////////////////////////////////////////

function drawAccountLogin() {
  var el = document.getElementById('mockLogin').cloneNode(true);
  el.removeAttribute('id');
  var pane = new Pane({divEl: el});
  pane.loadElems();
  var elems = pane.elems;
  for (var k in elems) {
    var sec = elems[k];
    if (sec.errpaneEl) hideElem(sec.errpaneEl);
    if (sec.errorsEl) sec.errorsEl.innerHTML = '';
  }
  pane.openDiv('login');
  return el;
}


function showAccountLogin() {
    showDialog("<h2>Login<\/h2>", drawAccountLogin(), "accountPane")
}


function accountLogin(form) {
  var name = form['user.name'].value;
  api.user.login(handler, name);

  function handler(data) {
    if (data.result == 'ok') {
      return accountLoginSuccess(data);
    }

    var pane = new Pane({divEl: form.parentNode.parentNode});
    pane.loadElems();
    var elems = pane.elems;
    if (data.result == 'setup_needed') {
      elems.login.setupUrlEl.href = data.setup_url;
      showElem(elems.login.setupEl);
      hideElem(elems.login.errorsEl);
    } else if (data.result == 'signup_needed') {
      pane.openDiv('signup');
      elems.signup.formEl['name'].value = data.user.name;
    } else { // assume data.result == 'bad'
      showElem(elems.login.errorsEl);
      elems.login.errorsEl.innerHTML = pane.formatErrors(
        data.errors, 'login');
    }
    var dlg = document.getElementById("dialog");
    dlg.showModal();
  }
}


function accountSignup(form) {
  var name = form['name'].value;
  api.user.signup(handler, new User(name));

  function handler(data) {
    if (data.result == 'ok') return accountLoginSuccess(data);

    var pane = new Pane({divEl: form.parentNode.parentNode});
    pane.loadElems();
    var elems = pane.elems;
    showElem(elems.signup.errorsEl);
    elems.signup.errorsEl.innerHTML = pane.formatErrors(
      data.errors, 'sign up');
    var dlg = document.getElementById("dialog");
    dlg.showModal();
  }
}


function accountLoginSuccess(data) {
  g_user.id = data.user.id;
  g_user.name = data.user.name;
  g_user.role = data.user.role;
  groupListHandler(data);
  hideDialog();
  updRootAll( {keys: {user: true} } );
}
