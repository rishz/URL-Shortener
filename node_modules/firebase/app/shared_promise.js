/*! @license Firebase v3.9.0
Build: rev-cc77c9e
Terms: https://firebase.google.com/terms/ */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var scope = void 0;
if (typeof global !== 'undefined') {
    scope = global;
} else if (typeof self !== 'undefined') {
    scope = self;
} else {
    try {
        scope = Function('return this')();
    } catch (e) {
        throw new Error('polyfill failed because global object is unavailable in this environment');
    }
}
var PromiseImpl = scope.Promise || require('promise-polyfill');
var local = exports.local = {
    Promise: PromiseImpl,
    GoogPromise: PromiseImpl
};
//# sourceMappingURL=shared_promise.js.map
