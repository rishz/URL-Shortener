/*! @license Firebase v3.9.0
Build: rev-cc77c9e
Terms: https://firebase.google.com/terms/ */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var firebase = require('./app-node');
require('./auth-node');

require('./server-auth-node');
require('./database-node');
var Storage = require('dom-storage');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
firebase.INTERNAL.extendNamespace({
    'INTERNAL': {
        'node': {
            'localStorage': new Storage(null, { strict: true }),
            'sessionStorage': new Storage(null, { strict: true }),
            'XMLHttpRequest': XMLHttpRequest
        }
    }
});
var AsyncStorage;

exports.default = firebase;
module.exports = exports['default'];
//# sourceMappingURL=firebase.js.map
