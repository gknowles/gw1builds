/*
Copyright Glen Knowles 2006 - 2025.
Distributed under the Boost Software License, Version 1.0.

api-http.js - gw1builds ui
*/

/**
 * Defines the interface to the backend authentication and data
 * storage, primary goals are:
 * - single point of definition for enums, constants etc
 * - minimize number of round trips required
 * - allow for the possibility of some enterprising soul implementing
 *   a backend for a different application stack
 *
  * FUNCTIONS
 *   api.impl.init
 *   api.impl.query
*/

api.impl.init = function() {
    api.impl.urls = apiUrls();
}

api.impl.query: function(handler, method, qs) {
    api.beforeQuery(handler, method);
    var url = this.urls[method] || method;
    //alert([url, qs]);
    dojo.io.bind({
      headers: {'X-Requested-With': 'XMLHttpRequest'},
      method: 'post',
      url: url,
      handle: metaHandler,
      mimetype: 'text/plain',
      postContent: qs
    });
    api.afterQuery(handler, method);

    function metaHandler(type, data, impl) {
      if (type == 'load' &&
        impl.responseText.substr(0, 11) != "Status: 500")
      {
        try {
          var jsonStr = impl.responseText;
          data = dojo.json.evalJson(jsonStr.slice(3, jsonStr.length - 3));
        } catch(e) {
          data = null;
        }
        if (data) {
          api.beforeHandler(handler, method, data);
          handler(data);
          api.afterHandler(handler, method, data);
          return;
        }
        data = { message: "Error parsing JSON response" }
      }
      var win = window.open("","errorWindow","");
      var doc = win.document;
      if (data && data.message) {
        doc.write("<pre>" + data.message + "</pre><hr>");
      }
      doc.write(impl.responseText + "<hr>");
      var jsonStr = impl.getResponseHeader('X-JSON');
      if (jsonStr) doc.write(jsonStr + "<hr>");
      doc.close();
    } // metaHandler(type, obj, impl)
}
