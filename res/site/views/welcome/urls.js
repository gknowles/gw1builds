/*
Copyright Glen Knowles 2006 - 2025.
Distributed under the Boost Software License, Version 1.0.

urls.js - gw1builds view welcome
*/

function apiUrls() {
  var urls = {
    'api.group.list': new URL('api/group/list', appRoot),
    'api.group.create': new URL('api/group/create', appRoot),
    'api.group.invite_user': new URL('api/group/invite_user', appRoot),
    'api.group.promote_member': new URL('api/group/promote_member', appRoot),
    'api.group.demote_member': new URL('api/group/demote_member', appRoot),
    'api.group.kick_member': new URL('api/group/kick_member', appRoot),
    'api.group.join': new URL('api/group/join', appRoot),
    'api.group.leave': new URL('api/group/leave', appRoot),
    'api.user.current': new URL('api/user/current', appRoot),
    'api.user.signup': new URL('api/user/signup', appRoot),
    'api.user.login': new URL('api/user/login', appRoot),
    'api.user.logout': new URL('api/user/logout', appRoot),
    'api.build.list': new URL('api/build/list', appRoot),
    'api.build.create': new URL('api/build/create', appRoot),
    'api.build.update': new URL('api/build/update', appRoot),
    'api.build.destroy': new URL('api/build/destroy', appRoot),
    'api.misc.download': new URL('api/welcome/download', appRoot),
    '': null
  }
  return urls;
}
