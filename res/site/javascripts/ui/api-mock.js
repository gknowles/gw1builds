/*
Copyright Glen Knowles 2006 - 2025.
Distributed under the Boost Software License, Version 1.0.

api-mock.js - gw1builds ui
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
    srv.mock.init()
}

api.impl.query = function(handler, method, qs) {
    api.beforeQuery(handler, method);
    let res = srv.mock.query(method, qs)
    if (res == null) {
        res = errRes("Error processing method: " + method)
    }
    api.afterQuery(handler, method);

    setTimeout(callback, 1)

    function callback() {
        api.beforeHandler(handler, method, res);
        handler(res);
        api.afterHandler(handler, method, res);
    }
}
