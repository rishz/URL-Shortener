/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var esm = {};

var k, goog = goog || {}, l = commonjsGlobal || self;
function aa() { }
function ba(a) { var b = typeof a; b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"; return "array" == b || "object" == b && "number" == typeof a.length; }
function p(a) { var b = typeof a; return "object" == b && null != a || "function" == b; }
function ca(a) { return Object.prototype.hasOwnProperty.call(a, da) && a[da] || (a[da] = ++ea); }
var da = "closure_uid_" + (1E9 * Math.random() >>> 0), ea = 0;
function fa(a, b, c) { return a.call.apply(a.bind, arguments); }
function ha(a, b, c) { if (!a)
    throw Error(); if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function () { var e = Array.prototype.slice.call(arguments); Array.prototype.unshift.apply(e, d); return a.apply(b, e); };
} return function () { return a.apply(b, arguments); }; }
function q(a, b, c) { Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? q = fa : q = ha; return q.apply(null, arguments); }
function ia(a, b) { var c = Array.prototype.slice.call(arguments, 1); return function () { var d = c.slice(); d.push.apply(d, arguments); return a.apply(this, d); }; }
function t(a, b) { function c() { } c.prototype = b.prototype; a.X = b.prototype; a.prototype = new c; a.prototype.constructor = a; a.Wb = function (d, e, f) { for (var h = Array(arguments.length - 2), n = 2; n < arguments.length; n++)
    h[n - 2] = arguments[n]; return b.prototype[e].apply(d, h); }; }
function v() { this.s = this.s; this.o = this.o; }
var ja = 0;
v.prototype.s = !1;
v.prototype.na = function () { if (!this.s && (this.s = !0, this.M(), 0 != ja)) {
    ca(this);
} };
v.prototype.M = function () { if (this.o)
    for (; this.o.length;)
        this.o.shift()(); };
var la = Array.prototype.indexOf ? function (a, b) { return Array.prototype.indexOf.call(a, b, void 0); } : function (a, b) { if ("string" === typeof a)
    return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0); for (var c = 0; c < a.length; c++)
    if (c in a && a[c] === b)
        return c; return -1; };
function ma(a) { var b = a.length; if (0 < b) {
    var c = Array(b);
    for (var d = 0; d < b; d++)
        c[d] = a[d];
    return c;
} return []; }
function na(a, b) { for (var c = 1; c < arguments.length; c++) {
    var d = arguments[c];
    if (ba(d)) {
        var e = a.length || 0, f = d.length || 0;
        a.length = e + f;
        for (var h = 0; h < f; h++)
            a[e + h] = d[h];
    }
    else
        a.push(d);
} }
function w(a, b) { this.type = a; this.g = this.target = b; this.defaultPrevented = !1; }
w.prototype.h = function () { this.defaultPrevented = !0; };
var oa = function () { if (!l.addEventListener || !Object.defineProperty)
    return !1; var a = !1, b = Object.defineProperty({}, "passive", { get: function () { a = !0; } }); try {
    l.addEventListener("test", aa, b), l.removeEventListener("test", aa, b);
}
catch (c) { } return a; }();
function pa(a) { return /^[\s\xa0]*$/.test(a); }
var qa = String.prototype.trim ? function (a) { return a.trim(); } : function (a) { return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]; };
function ra(a, b) { return a < b ? -1 : a > b ? 1 : 0; }
function sa() { var a = l.navigator; return a && (a = a.userAgent) ? a : ""; }
function x(a) { return -1 != sa().indexOf(a); }
function ta(a) { ta[" "](a); return a; }
ta[" "] = aa;
function ua(a) { var b = va; return Object.prototype.hasOwnProperty.call(b, 9) ? b[9] : b[9] = a(9); }
var wa = x("Opera"), y = x("Trident") || x("MSIE"), xa = x("Edge"), ya = xa || y, za = x("Gecko") && !(-1 != sa().toLowerCase().indexOf("webkit") && !x("Edge")) && !(x("Trident") || x("MSIE")) && !x("Edge"), Aa = -1 != sa().toLowerCase().indexOf("webkit") && !x("Edge");
function Ba() { var a = l.document; return a ? a.documentMode : void 0; }
var Ea;
a: {
    var Fa = "", Ga = function () { var a = sa(); if (za)
        return /rv:([^\);]+)(\)|;)/.exec(a); if (xa)
        return /Edge\/([\d\.]+)/.exec(a); if (y)
        return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a); if (Aa)
        return /WebKit\/(\S+)/.exec(a); if (wa)
        return /(?:Version)[ \/]?(\S+)/.exec(a); }();
    Ga && (Fa = Ga ? Ga[1] : "");
    if (y) {
        var Ha = Ba();
        if (null != Ha && Ha > parseFloat(Fa)) {
            Ea = String(Ha);
            break a;
        }
    }
    Ea = Fa;
}
var va = {};
function Ia() { return ua(function () { var a = 0; var b = qa(String(Ea)).split("."), c = qa("9").split("."), d = Math.max(b.length, c.length); for (var h = 0; 0 == a && h < d; h++) {
    var e = b[h] || "", f = c[h] || "";
    do {
        e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
        f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
        if (0 == e[0].length && 0 == f[0].length)
            break;
        a = ra(0 == e[1].length ? 0 : parseInt(e[1], 10), 0 == f[1].length ? 0 : parseInt(f[1], 10)) || ra(0 == e[2].length, 0 == f[2].length) || ra(e[2], f[2]);
        e = e[3];
        f = f[3];
    } while (0 == a);
} return 0 <= a; }); }
var Ja;
if (l.document && y) {
    var Ka = Ba();
    Ja = Ka ? Ka : parseInt(Ea, 10) || void 0;
}
else
    Ja = void 0;
var La = Ja;
function z(a, b) {
    w.call(this, a ? a.type : "");
    this.relatedTarget = this.g = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.pointerId = 0;
    this.pointerType = "";
    this.i = null;
    if (a) {
        var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.g = b;
        if (b = a.relatedTarget) {
            if (za) {
                a: {
                    try {
                        ta(b.nodeName);
                        var e = !0;
                        break a;
                    }
                    catch (f) { }
                    e =
                        !1;
                }
                e || (b = null);
            }
        }
        else
            "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.key = a.key || "";
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey =
            a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Ma[a.pointerType] || "";
        this.state = a.state;
        this.i = a;
        a.defaultPrevented && z.X.h.call(this);
    }
}
t(z, w);
var Ma = { 2: "touch", 3: "pen", 4: "mouse" };
z.prototype.h = function () { z.X.h.call(this); var a = this.i; a.preventDefault ? a.preventDefault() : a.returnValue = !1; };
var A = "closure_listenable_" + (1E6 * Math.random() | 0);
var Na = 0;
function Oa(a, b, c, d, e) { this.listener = a; this.proxy = null; this.src = b; this.type = c; this.capture = !!d; this.ha = e; this.key = ++Na; this.ba = this.ea = !1; }
function Pa(a) { a.ba = !0; a.listener = null; a.proxy = null; a.src = null; a.ha = null; }
function Qa(a, b, c) { for (var d in a)
    b.call(c, a[d], d, a); }
function Ra(a) { var b = {}; for (var c in a)
    b[c] = a[c]; return b; }
var Sa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Ta(a, b) { var c, d; for (var e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d)
        a[c] = d[c];
    for (var f = 0; f < Sa.length; f++)
        c = Sa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
} }
function Ua(a) { this.src = a; this.g = {}; this.h = 0; }
Ua.prototype.add = function (a, b, c, d, e) { var f = a.toString(); a = this.g[f]; a || (a = this.g[f] = [], this.h++); var h = Va(a, b, d, e); -1 < h ? (b = a[h], c || (b.ea = !1)) : (b = new Oa(b, this.src, f, !!d, e), b.ea = c, a.push(b)); return b; };
function Wa(a, b) { var c = b.type; if (c in a.g) {
    var d = a.g[c], e = la(d, b), f;
    (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
    f && (Pa(b), 0 == a.g[c].length && (delete a.g[c], a.h--));
} }
function Va(a, b, c, d) { for (var e = 0; e < a.length; ++e) {
    var f = a[e];
    if (!f.ba && f.listener == b && f.capture == !!c && f.ha == d)
        return e;
} return -1; }
var Xa = "closure_lm_" + (1E6 * Math.random() | 0), Ya = {};
function $a(a, b, c, d, e) { if (d && d.once)
    return ab(a, b, c, d, e); if (Array.isArray(b)) {
    for (var f = 0; f < b.length; f++)
        $a(a, b[f], c, d, e);
    return null;
} c = bb(c); return a && a[A] ? a.N(b, c, p(d) ? !!d.capture : !!d, e) : cb(a, b, c, !1, d, e); }
function cb(a, b, c, d, e, f) { if (!b)
    throw Error("Invalid event type"); var h = p(e) ? !!e.capture : !!e, n = db(a); n || (a[Xa] = n = new Ua(a)); c = n.add(b, c, d, h, f); if (c.proxy)
    return c; d = eb(); c.proxy = d; d.src = a; d.listener = c; if (a.addEventListener)
    oa || (e = h), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
else if (a.attachEvent)
    a.attachEvent(fb(b.toString()), d);
else if (a.addListener && a.removeListener)
    a.addListener(d);
else
    throw Error("addEventListener and attachEvent are unavailable."); return c; }
function eb() { function a(c) { return b.call(a.src, a.listener, c); } var b = gb; return a; }
function ab(a, b, c, d, e) { if (Array.isArray(b)) {
    for (var f = 0; f < b.length; f++)
        ab(a, b[f], c, d, e);
    return null;
} c = bb(c); return a && a[A] ? a.O(b, c, p(d) ? !!d.capture : !!d, e) : cb(a, b, c, !0, d, e); }
function hb(a, b, c, d, e) { if (Array.isArray(b))
    for (var f = 0; f < b.length; f++)
        hb(a, b[f], c, d, e);
else
    (d = p(d) ? !!d.capture : !!d, c = bb(c), a && a[A]) ? (a = a.i, b = String(b).toString(), b in a.g && (f = a.g[b], c = Va(f, c, d, e), -1 < c && (Pa(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.g[b], a.h--)))) : a && (a = db(a)) && (b = a.g[b.toString()], a = -1, b && (a = Va(b, c, d, e)), (c = -1 < a ? b[a] : null) && ib(c)); }
function ib(a) { if ("number" !== typeof a && a && !a.ba) {
    var b = a.src;
    if (b && b[A])
        Wa(b.i, a);
    else {
        var c = a.type, d = a.proxy;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(fb(c), d) : b.addListener && b.removeListener && b.removeListener(d);
        (c = db(b)) ? (Wa(c, a), 0 == c.h && (c.src = null, b[Xa] = null)) : Pa(a);
    }
} }
function fb(a) { return a in Ya ? Ya[a] : Ya[a] = "on" + a; }
function gb(a, b) { if (a.ba)
    a = !0;
else {
    b = new z(b, this);
    var c = a.listener, d = a.ha || a.src;
    a.ea && ib(a);
    a = c.call(d, b);
} return a; }
function db(a) { a = a[Xa]; return a instanceof Ua ? a : null; }
var jb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function bb(a) { if ("function" === typeof a)
    return a; a[jb] || (a[jb] = function (b) { return a.handleEvent(b); }); return a[jb]; }
function B() { v.call(this); this.i = new Ua(this); this.P = this; this.I = null; }
t(B, v);
B.prototype[A] = !0;
B.prototype.removeEventListener = function (a, b, c, d) { hb(this, a, b, c, d); };
function C(a, b) { var c, d = a.I; if (d)
    for (c = []; d; d = d.I)
        c.push(d); a = a.P; d = b.type || b; if ("string" === typeof b)
    b = new w(b, a);
else if (b instanceof w)
    b.target = b.target || a;
else {
    var e = b;
    b = new w(d, a);
    Ta(b, e);
} e = !0; if (c)
    for (var f = c.length - 1; 0 <= f; f--) {
        var h = b.g = c[f];
        e = kb(h, d, !0, b) && e;
    } h = b.g = a; e = kb(h, d, !0, b) && e; e = kb(h, d, !1, b) && e; if (c)
    for (f = 0; f < c.length; f++)
        h = b.g = c[f], e = kb(h, d, !1, b) && e; }
B.prototype.M = function () { B.X.M.call(this); if (this.i) {
    var a = this.i, c;
    for (c in a.g) {
        for (var d = a.g[c], e = 0; e < d.length; e++)
            Pa(d[e]);
        delete a.g[c];
        a.h--;
    }
} this.I = null; };
B.prototype.N = function (a, b, c, d) { return this.i.add(String(a), b, !1, c, d); };
B.prototype.O = function (a, b, c, d) { return this.i.add(String(a), b, !0, c, d); };
function kb(a, b, c, d) { b = a.i.g[String(b)]; if (!b)
    return !0; b = b.concat(); for (var e = !0, f = 0; f < b.length; ++f) {
    var h = b[f];
    if (h && !h.ba && h.capture == c) {
        var n = h.listener, u = h.ha || h.src;
        h.ea && Wa(a.i, h);
        e = !1 !== n.call(u, d) && e;
    }
} return e && !d.defaultPrevented; }
var lb = l.JSON.stringify;
function mb() { var a = nb; var b = null; a.g && (b = a.g, a.g = a.g.next, a.g || (a.h = null), b.next = null); return b; }
var ob = /** @class */ (function () {
    function ob() {
        this.h = this.g = null;
    }
    ob.prototype.add = function (a, b) { var c = pb.get(); c.set(a, b); this.h ? this.h.next = c : this.g = c; this.h = c; };
    return ob;
}());
var pb = new /** @class */ (function () {
    function class_1(a, b) {
        this.i = a;
        this.j = b;
        this.h = 0;
        this.g = null;
    }
    class_1.prototype.get = function () { var a; 0 < this.h ? (this.h--, a = this.g, this.g = a.next, a.next = null) : a = this.i(); return a; };
    return class_1;
}())(function () { return new qb; }, function (a) { return a.reset(); });
var qb = /** @class */ (function () {
    function qb() {
        this.next = this.g = this.h = null;
    }
    qb.prototype.set = function (a, b) { this.h = a; this.g = b; this.next = null; };
    qb.prototype.reset = function () { this.next = this.g = this.h = null; };
    return qb;
}());
function rb(a) { l.setTimeout(function () { throw a; }, 0); }
function sb(a, b) { ub || vb(); wb || (ub(), wb = !0); nb.add(a, b); }
var ub;
function vb() { var a = l.Promise.resolve(void 0); ub = function () { a.then(xb); }; }
var wb = !1, nb = new ob;
function xb() { for (var a; a = mb();) {
    try {
        a.h.call(a.g);
    }
    catch (c) {
        rb(c);
    }
    var b = pb;
    b.j(a);
    100 > b.h && (b.h++, a.next = b.g, b.g = a);
} wb = !1; }
function yb(a, b) { B.call(this); this.h = a || 1; this.g = b || l; this.j = q(this.lb, this); this.l = Date.now(); }
t(yb, B);
k = yb.prototype;
k.ca = !1;
k.R = null;
k.lb = function () { if (this.ca) {
    var a = Date.now() - this.l;
    0 < a && a < .8 * this.h ? this.R = this.g.setTimeout(this.j, this.h - a) : (this.R && (this.g.clearTimeout(this.R), this.R = null), C(this, "tick"), this.ca && (zb(this), this.start()));
} };
k.start = function () { this.ca = !0; this.R || (this.R = this.g.setTimeout(this.j, this.h), this.l = Date.now()); };
function zb(a) { a.ca = !1; a.R && (a.g.clearTimeout(a.R), a.R = null); }
k.M = function () { yb.X.M.call(this); zb(this); delete this.g; };
function Ab(a, b, c) { if ("function" === typeof a)
    c && (a = q(a, c));
else if (a && "function" == typeof a.handleEvent)
    a = q(a.handleEvent, a);
else
    throw Error("Invalid listener argument"); return 2147483647 < Number(b) ? -1 : l.setTimeout(a, b || 0); }
function Bb(a) { a.g = Ab(function () { a.g = null; a.i && (a.i = !1, Bb(a)); }, a.j); var b = a.h; a.h = null; a.m.apply(null, b); }
var Cb = /** @class */ (function (_super) {
    __extends(Cb, _super);
    function Cb(a, b) {
        var _this = _super.call(this) || this;
        _this.m = a;
        _this.j = b;
        _this.h = null;
        _this.i = !1;
        _this.g = null;
        return _this;
    }
    Cb.prototype.l = function (a) { this.h = arguments; this.g ? this.i = !0 : Bb(this); };
    Cb.prototype.M = function () { _super.prototype.M.call(this); this.g && (l.clearTimeout(this.g), this.g = null, this.i = !1, this.h = null); };
    return Cb;
}(v));
function D(a) { v.call(this); this.h = a; this.g = {}; }
t(D, v);
var Db = [];
function Eb(a, b, c, d) { Array.isArray(c) || (c && (Db[0] = c.toString()), c = Db); for (var e = 0; e < c.length; e++) {
    var f = $a(b, c[e], d || a.handleEvent, !1, a.h || a);
    if (!f)
        break;
    a.g[f.key] = f;
} }
function Fb(a) { Qa(a.g, function (b, c) { this.g.hasOwnProperty(c) && ib(b); }, a); a.g = {}; }
D.prototype.M = function () { D.X.M.call(this); Fb(this); };
D.prototype.handleEvent = function () { throw Error("EventHandler.handleEvent not implemented"); };
function Gb() { this.g = !0; }
Gb.prototype.Aa = function () { this.g = !1; };
function Hb(a, b, c, d, e, f) { a.info(function () { if (a.g)
    if (f) {
        var h = "";
        for (var n = f.split("&"), u = 0; u < n.length; u++) {
            var m = n[u].split("=");
            if (1 < m.length) {
                var r = m[0];
                m = m[1];
                var F = r.split("_");
                h = 2 <= F.length && "type" == F[1] ? h + (r + "=" + m + "&") : h + (r + "=redacted&");
            }
        }
    }
    else
        h = null;
else
    h = f; return "XMLHTTP REQ (" + d + ") [attempt " + e + "]: " + b + "\n" + c + "\n" + h; }); }
function Ib(a, b, c, d, e, f, h) { a.info(function () { return "XMLHTTP RESP (" + d + ") [ attempt " + e + "]: " + b + "\n" + c + "\n" + f + " " + h; }); }
function E(a, b, c, d) { a.info(function () { return "XMLHTTP TEXT (" + b + "): " + Jb(a, c) + (d ? " " + d : ""); }); }
function Kb(a, b) { a.info(function () { return "TIMEOUT: " + b; }); }
Gb.prototype.info = function () { };
function Jb(a, b) { if (!a.g)
    return b; if (!b)
    return null; try {
    var c = JSON.parse(b);
    if (c)
        for (a = 0; a < c.length; a++)
            if (Array.isArray(c[a])) {
                var d = c[a];
                if (!(2 > d.length)) {
                    var e = d[1];
                    if (Array.isArray(e) && !(1 > e.length)) {
                        var f = e[0];
                        if ("noop" != f && "stop" != f && "close" != f)
                            for (var h = 1; h < e.length; h++)
                                e[h] = "";
                    }
                }
            }
    return lb(c);
}
catch (n) {
    return b;
} }
var G = {}, Lb = null;
function Mb() { return Lb = Lb || new B; }
G.Pa = "serverreachability";
function Nb(a) { w.call(this, G.Pa, a); }
t(Nb, w);
function H(a) { var b = Mb(); C(b, new Nb(b)); }
G.STAT_EVENT = "statevent";
function Ob(a, b) { w.call(this, G.STAT_EVENT, a); this.stat = b; }
t(Ob, w);
function I(a) { var b = Mb(); C(b, new Ob(b, a)); }
G.Qa = "timingevent";
function Pb(a, b) { w.call(this, G.Qa, a); this.size = b; }
t(Pb, w);
function J(a, b) { if ("function" !== typeof a)
    throw Error("Fn must not be null and must be a function"); return l.setTimeout(function () { a(); }, b); }
var Qb = { NO_ERROR: 0, mb: 1, zb: 2, yb: 3, tb: 4, xb: 5, Ab: 6, Ma: 7, TIMEOUT: 8, Db: 9 };
var Rb = { rb: "complete", Nb: "success", Na: "error", Ma: "abort", Fb: "ready", Gb: "readystatechange", TIMEOUT: "timeout", Bb: "incrementaldata", Eb: "progress", ub: "downloadprogress", Vb: "uploadprogress" };
function Sb() { }
Sb.prototype.h = null;
function Tb(a) { return a.h || (a.h = a.i()); }
function Ub() { }
var K = { OPEN: "a", qb: "b", Na: "c", Cb: "d" };
function Vb() { w.call(this, "d"); }
t(Vb, w);
function Wb() { w.call(this, "c"); }
t(Wb, w);
var Xb;
function Yb() { }
t(Yb, Sb);
Yb.prototype.g = function () { return new XMLHttpRequest; };
Yb.prototype.i = function () { return {}; };
Xb = new Yb;
function L(a, b, c, d) { this.l = a; this.j = b; this.m = c; this.U = d || 1; this.S = new D(this); this.O = Zb; a = ya ? 125 : void 0; this.T = new yb(a); this.H = null; this.i = !1; this.s = this.A = this.v = this.K = this.F = this.V = this.B = null; this.D = []; this.g = null; this.C = 0; this.o = this.u = null; this.Y = -1; this.I = !1; this.N = 0; this.L = null; this.$ = this.J = this.Z = this.P = !1; this.h = new $b; }
function $b() { this.i = null; this.g = ""; this.h = !1; }
var Zb = 45E3, ac = {}, bc = {};
k = L.prototype;
k.setTimeout = function (a) { this.O = a; };
function cc(a, b, c) { a.K = 1; a.v = dc(M(b)); a.s = c; a.P = !0; ec(a, null); }
function ec(a, b) { a.F = Date.now(); N(a); a.A = M(a.v); var c = a.A, d = a.U; Array.isArray(d) || (d = [String(d)]); fc(c.i, "t", d); a.C = 0; c = a.l.H; a.h = new $b; a.g = gc(a.l, c ? b : null, !a.s); 0 < a.N && (a.L = new Cb(q(a.La, a, a.g), a.N)); Eb(a.S, a.g, "readystatechange", a.ib); b = a.H ? Ra(a.H) : {}; a.s ? (a.u || (a.u = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.g.da(a.A, a.u, a.s, b)) : (a.u = "GET", a.g.da(a.A, a.u, null, b)); H(); Hb(a.j, a.u, a.A, a.m, a.U, a.s); }
k.ib = function (a) { a = a.target; var b = this.L; b && 3 == O(a) ? b.l() : this.La(a); };
k.La = function (a) {
    try {
        if (a == this.g)
            a: {
                var r = O(this.g);
                var b = this.g.Ea();
                var F = this.g.aa();
                if (!(3 > r) && (3 != r || ya || this.g && (this.h.h || this.g.fa() || hc(this.g)))) {
                    this.I || 4 != r || 7 == b || (8 == b || 0 >= F ? H(3) : H(2));
                    ic(this);
                    var c = this.g.aa();
                    this.Y = c;
                    b: if (jc(this)) {
                        var d = hc(this.g);
                        a = "";
                        var e = d.length, f = 4 == O(this.g);
                        if (!this.h.i) {
                            if ("undefined" === typeof TextDecoder) {
                                P(this);
                                Q(this);
                                var h = "";
                                break b;
                            }
                            this.h.i = new l.TextDecoder;
                        }
                        for (b = 0; b < e; b++)
                            this.h.h = !0, a += this.h.i.decode(d[b], { stream: f && b == e - 1 });
                        d.splice(0, e);
                        this.h.g += a;
                        this.C = 0;
                        h = this.h.g;
                    }
                    else
                        h = this.g.fa();
                    this.i = 200 == c;
                    Ib(this.j, this.u, this.A, this.m, this.U, r, c);
                    if (this.i) {
                        if (this.Z && !this.J) {
                            b: {
                                if (this.g) {
                                    var n, u = this.g;
                                    if ((n = u.g ? u.g.getResponseHeader("X-HTTP-Initial-Response") : null) && !pa(n)) {
                                        var m = n;
                                        break b;
                                    }
                                }
                                m = null;
                            }
                            if (c = m)
                                E(this.j, this.m, c, "Initial handshake response via X-HTTP-Initial-Response"), this.J = !0, kc(this, c);
                            else {
                                this.i = !1;
                                this.o = 3;
                                I(12);
                                P(this);
                                Q(this);
                                break a;
                            }
                        }
                        this.P ? (lc(this, r, h), ya && this.i && 3 == r && (Eb(this.S, this.T, "tick", this.hb),
                            this.T.start())) : (E(this.j, this.m, h, null), kc(this, h));
                        4 == r && P(this);
                        this.i && !this.I && (4 == r ? mc(this.l, this) : (this.i = !1, N(this)));
                    }
                    else
                        400 == c && 0 < h.indexOf("Unknown SID") ? (this.o = 3, I(12)) : (this.o = 0, I(13)), P(this), Q(this);
                }
            }
    }
    catch (r) { }
    finally { }
};
function jc(a) { return a.g ? "GET" == a.u && 2 != a.K && a.l.Da : !1; }
function lc(a, b, c) {
    var d = !0, e;
    for (; !a.I && a.C < c.length;)
        if (e = nc(a, c), e == bc) {
            4 == b && (a.o = 4, I(14), d = !1);
            E(a.j, a.m, null, "[Incomplete Response]");
            break;
        }
        else if (e == ac) {
            a.o = 4;
            I(15);
            E(a.j, a.m, c, "[Invalid Chunk]");
            d = !1;
            break;
        }
        else
            E(a.j, a.m, e, null), kc(a, e);
    jc(a) && e != bc && e != ac && (a.h.g = "", a.C = 0);
    4 != b || 0 != c.length || a.h.h || (a.o = 1, I(16), d = !1);
    a.i = a.i && d;
    d ? 0 < c.length && !a.$ && (a.$ = !0, b = a.l, b.g == a && b.$ && !b.K && (b.j.info("Great, no buffering proxy detected. Bytes received: " + c.length), oc(b), b.K = !0, I(11))) : (E(a.j, a.m, c, "[Invalid Chunked Response]"), P(a), Q(a));
}
k.hb = function () { if (this.g) {
    var a = O(this.g), b = this.g.fa();
    this.C < b.length && (ic(this), lc(this, a, b), this.i && 4 != a && N(this));
} };
function nc(a, b) { var c = a.C, d = b.indexOf("\n", c); if (-1 == d)
    return bc; c = Number(b.substring(c, d)); if (isNaN(c))
    return ac; d += 1; if (d + c > b.length)
    return bc; b = b.substr(d, c); a.C = d + c; return b; }
k.cancel = function () { this.I = !0; P(this); };
function N(a) { a.V = Date.now() + a.O; pc(a, a.O); }
function pc(a, b) { if (null != a.B)
    throw Error("WatchDog timer not null"); a.B = J(q(a.gb, a), b); }
function ic(a) { a.B && (l.clearTimeout(a.B), a.B = null); }
k.gb = function () { this.B = null; var a = Date.now(); 0 <= a - this.V ? (Kb(this.j, this.A), 2 != this.K && (H(), I(17)), P(this), this.o = 2, Q(this)) : pc(this, this.V - a); };
function Q(a) { 0 == a.l.G || a.I || mc(a.l, a); }
function P(a) { ic(a); var b = a.L; b && "function" == typeof b.na && b.na(); a.L = null; zb(a.T); Fb(a.S); a.g && (b = a.g, a.g = null, b.abort(), b.na()); }
function kc(a, b) {
    try {
        var c = a.l;
        if (0 != c.G && (c.g == a || qc(c.h, a)))
            if (!a.J && qc(c.h, a) && 3 == c.G) {
                try {
                    var d = c.Fa.g.parse(b);
                }
                catch (m) {
                    d = null;
                }
                if (Array.isArray(d) && 3 == d.length) {
                    var e = d;
                    if (0 == e[0])
                        a: {
                            if (!c.u) {
                                if (c.g)
                                    if (c.g.F + 3E3 < a.F)
                                        rc(c), sc(c);
                                    else
                                        break a;
                                tc(c);
                                I(18);
                            }
                        }
                    else
                        c.Ba = e[1], 0 < c.Ba - c.T && 37500 > e[2] && c.L && 0 == c.A && !c.v && (c.v = J(q(c.cb, c), 6E3));
                    if (1 >= uc(c.h) && c.ja) {
                        try {
                            c.ja();
                        }
                        catch (m) { }
                        c.ja = void 0;
                    }
                }
                else
                    R(c, 11);
            }
            else if ((a.J || c.g == a) && rc(c), !pa(b))
                for (e = c.Fa.g.parse(b), b = 0; b < e.length; b++) {
                    var m = e[b];
                    c.T =
                        m[0];
                    m = m[1];
                    if (2 == c.G)
                        if ("c" == m[0]) {
                            c.I = m[1];
                            c.ka = m[2];
                            var r = m[3];
                            null != r && (c.ma = r, c.j.info("VER=" + c.ma));
                            var F = m[4];
                            null != F && (c.Ca = F, c.j.info("SVER=" + c.Ca));
                            var Ca = m[5];
                            null != Ca && "number" === typeof Ca && 0 < Ca && (d = 1.5 * Ca, c.J = d, c.j.info("backChannelRequestTimeoutMs_=" + d));
                            d = c;
                            var Z = a.g;
                            if (Z) {
                                var Da = Z.g ? Z.g.getResponseHeader("X-Client-Wire-Protocol") : null;
                                if (Da) {
                                    var f = d.h;
                                    f.g || -1 == Da.indexOf("spdy") && -1 == Da.indexOf("quic") && -1 == Da.indexOf("h2") || (f.j = f.l, f.g = new Set, f.h && (vc(f, f.h), f.h = null));
                                }
                                if (d.D) {
                                    var tb = Z.g ? Z.g.getResponseHeader("X-HTTP-Session-Id") : null;
                                    tb && (d.za = tb, S(d.F, d.D, tb));
                                }
                            }
                            c.G = 3;
                            c.l && c.l.xa();
                            c.$ && (c.P = Date.now() - a.F, c.j.info("Handshake RTT: " + c.P + "ms"));
                            d = c;
                            var h = a;
                            d.sa = wc(d, d.H ? d.ka : null, d.V);
                            if (h.J) {
                                xc(d.h, h);
                                var n = h, u = d.J;
                                u && n.setTimeout(u);
                                n.B && (ic(n), N(n));
                                d.g = h;
                            }
                            else
                                yc(d);
                            0 < c.i.length && zc(c);
                        }
                        else
                            "stop" != m[0] && "close" != m[0] || R(c, 7);
                    else
                        3 == c.G && ("stop" == m[0] || "close" == m[0] ? "stop" == m[0] ? R(c, 7) : Ac(c) : "noop" != m[0] && c.l && c.l.wa(m), c.A = 0);
                }
        H(4);
    }
    catch (m) { }
}
function Bc(a) { if (a.W && "function" == typeof a.W)
    return a.W(); if ("undefined" !== typeof Map && a instanceof Map || "undefined" !== typeof Set && a instanceof Set)
    return Array.from(a.values()); if ("string" === typeof a)
    return a.split(""); if (ba(a)) {
    for (var b = [], c = a.length, d = 0; d < c; d++)
        b.push(a[d]);
    return b;
} b = []; c = 0; for (d in a)
    b[c++] = a[d]; return b; }
function Cc(a) { if (a.oa && "function" == typeof a.oa)
    return a.oa(); if (!a.W || "function" != typeof a.W) {
    if ("undefined" !== typeof Map && a instanceof Map)
        return Array.from(a.keys());
    if (!("undefined" !== typeof Set && a instanceof Set)) {
        if (ba(a) || "string" === typeof a) {
            var b = [];
            a = a.length;
            for (var c = 0; c < a; c++)
                b.push(c);
            return b;
        }
        b = [];
        c = 0;
        for (var d in a)
            b[c++] = d;
        return b;
    }
} }
function Dc(a, b) { if (a.forEach && "function" == typeof a.forEach)
    a.forEach(b, void 0);
else if (ba(a) || "string" === typeof a)
    Array.prototype.forEach.call(a, b, void 0);
else
    for (var c = Cc(a), d = Bc(a), e = d.length, f = 0; f < e; f++)
        b.call(void 0, d[f], c && c[f], a); }
var Ec = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
function Fc(a, b) { if (a) {
    a = a.split("&");
    for (var c = 0; c < a.length; c++) {
        var d = a[c].indexOf("="), e = null;
        if (0 <= d) {
            var f = a[c].substring(0, d);
            e = a[c].substring(d + 1);
        }
        else
            f = a[c];
        b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
    }
} }
function T(a, b) { this.g = this.s = this.j = ""; this.m = null; this.o = this.l = ""; this.h = !1; if (a instanceof T) {
    this.h = void 0 !== b ? b : a.h;
    Gc(this, a.j);
    this.s = a.s;
    this.g = a.g;
    Hc(this, a.m);
    this.l = a.l;
    b = a.i;
    var c = new Ic;
    c.i = b.i;
    b.g && (c.g = new Map(b.g), c.h = b.h);
    Jc(this, c);
    this.o = a.o;
}
else
    a && (c = String(a).match(Ec)) ? (this.h = !!b, Gc(this, c[1] || "", !0), this.s = Kc(c[2] || ""), this.g = Kc(c[3] || "", !0), Hc(this, c[4]), this.l = Kc(c[5] || "", !0), Jc(this, c[6] || "", !0), this.o = Kc(c[7] || "")) : (this.h = !!b, this.i = new Ic(null, this.h)); }
T.prototype.toString = function () { var a = [], b = this.j; b && a.push(Lc(b, Mc, !0), ":"); var c = this.g; if (c || "file" == b)
    a.push("//"), (b = this.s) && a.push(Lc(b, Mc, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.m, null != c && a.push(":", String(c)); if (c = this.l)
    this.g && "/" != c.charAt(0) && a.push("/"), a.push(Lc(c, "/" == c.charAt(0) ? Nc : Oc, !0)); (c = this.i.toString()) && a.push("?", c); (c = this.o) && a.push("#", Lc(c, Pc)); return a.join(""); };
function M(a) { return new T(a); }
function Gc(a, b, c) { a.j = c ? Kc(b, !0) : b; a.j && (a.j = a.j.replace(/:$/, "")); }
function Hc(a, b) { if (b) {
    b = Number(b);
    if (isNaN(b) || 0 > b)
        throw Error("Bad port number " + b);
    a.m = b;
}
else
    a.m = null; }
function Jc(a, b, c) { b instanceof Ic ? (a.i = b, Qc(a.i, a.h)) : (c || (b = Lc(b, Rc)), a.i = new Ic(b, a.h)); }
function S(a, b, c) { a.i.set(b, c); }
function dc(a) { S(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)); return a; }
function Kc(a, b) { return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""; }
function Lc(a, b, c) { return "string" === typeof a ? (a = encodeURI(a).replace(b, Sc), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null; }
function Sc(a) { a = a.charCodeAt(0); return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16); }
var Mc = /[#\/\?@]/g, Oc = /[#\?:]/g, Nc = /[#\?]/g, Rc = /[#\?@]/g, Pc = /#/g;
function Ic(a, b) { this.h = this.g = null; this.i = a || null; this.j = !!b; }
function U(a) { a.g || (a.g = new Map, a.h = 0, a.i && Fc(a.i, function (b, c) { a.add(decodeURIComponent(b.replace(/\+/g, " ")), c); })); }
k = Ic.prototype;
k.add = function (a, b) { U(this); this.i = null; a = V(this, a); var c = this.g.get(a); c || this.g.set(a, c = []); c.push(b); this.h += 1; return this; };
function Tc(a, b) { U(a); b = V(a, b); a.g.has(b) && (a.i = null, a.h -= a.g.get(b).length, a.g.delete(b)); }
function Uc(a, b) { U(a); b = V(a, b); return a.g.has(b); }
k.forEach = function (a, b) { U(this); this.g.forEach(function (c, d) { c.forEach(function (e) { a.call(b, e, d, this); }, this); }, this); };
k.oa = function () { U(this); var a = Array.from(this.g.values()), b = Array.from(this.g.keys()), c = []; for (var d = 0; d < b.length; d++) {
    var e = a[d];
    for (var f = 0; f < e.length; f++)
        c.push(b[d]);
} return c; };
k.W = function (a) { U(this); var b = []; if ("string" === typeof a)
    Uc(this, a) && (b = b.concat(this.g.get(V(this, a))));
else {
    a = Array.from(this.g.values());
    for (var c = 0; c < a.length; c++)
        b = b.concat(a[c]);
} return b; };
k.set = function (a, b) { U(this); this.i = null; a = V(this, a); Uc(this, a) && (this.h -= this.g.get(a).length); this.g.set(a, [b]); this.h += 1; return this; };
k.get = function (a, b) { if (!a)
    return b; a = this.W(a); return 0 < a.length ? String(a[0]) : b; };
function fc(a, b, c) { Tc(a, b); 0 < c.length && (a.i = null, a.g.set(V(a, b), ma(c)), a.h += c.length); }
k.toString = function () { if (this.i)
    return this.i; if (!this.g)
    return ""; var a = [], b = Array.from(this.g.keys()); for (var c = 0; c < b.length; c++) {
    var d = b[c];
    var f = encodeURIComponent(String(d)), h = this.W(d);
    for (d = 0; d < h.length; d++) {
        var e = f;
        "" !== h[d] && (e += "=" + encodeURIComponent(String(h[d])));
        a.push(e);
    }
} return this.i = a.join("&"); };
function V(a, b) { b = String(b); a.j && (b = b.toLowerCase()); return b; }
function Qc(a, b) { b && !a.j && (U(a), a.i = null, a.g.forEach(function (c, d) { var e = d.toLowerCase(); d != e && (Tc(this, d), fc(this, e, c)); }, a)); a.j = b; }
var Vc = /** @class */ (function () {
    function Vc(a, b) {
        this.h = a;
        this.g = b;
    }
    return Vc;
}());
function Wc(a) { this.l = a || Xc; l.PerformanceNavigationTiming ? (a = l.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(l.g && l.g.Ga && l.g.Ga() && l.g.Ga().$b); this.j = a ? this.l : 1; this.g = null; 1 < this.j && (this.g = new Set); this.h = null; this.i = []; }
var Xc = 10;
function Yc(a) { return a.h ? !0 : a.g ? a.g.size >= a.j : !1; }
function uc(a) { return a.h ? 1 : a.g ? a.g.size : 0; }
function qc(a, b) { return a.h ? a.h == b : a.g ? a.g.has(b) : !1; }
function vc(a, b) { a.g ? a.g.add(b) : a.h = b; }
function xc(a, b) { a.h && a.h == b ? a.h = null : a.g && a.g.has(b) && a.g.delete(b); }
Wc.prototype.cancel = function () {
    var e_1, _a;
    this.i = Zc(this);
    if (this.h)
        this.h.cancel(), this.h = null;
    else if (this.g && 0 !== this.g.size) {
        try {
            for (var _b = __values(this.g.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var a = _c.value;
                a.cancel();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.g.clear();
    }
};
function Zc(a) {
    var e_2, _a;
    if (null != a.h)
        return a.i.concat(a.h.D);
    if (null != a.g && 0 !== a.g.size) {
        var b = a.i;
        try {
            for (var _b = __values(a.g.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                b = b.concat(c.D);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return b;
    }
    return ma(a.i);
}
function $c() { }
$c.prototype.stringify = function (a) { return l.JSON.stringify(a, void 0); };
$c.prototype.parse = function (a) { return l.JSON.parse(a, void 0); };
function ad() { this.g = new $c; }
function bd(a, b, c) { var d = c || ""; try {
    Dc(a, function (e, f) { var h = e; p(e) && (h = lb(e)); b.push(d + f + "=" + encodeURIComponent(h)); });
}
catch (e) {
    throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
} }
function cd(a, b) { var c = new Gb; if (l.Image) {
    var d_1 = new Image;
    d_1.onload = ia(dd, c, d_1, "TestLoadImage: loaded", !0, b);
    d_1.onerror = ia(dd, c, d_1, "TestLoadImage: error", !1, b);
    d_1.onabort = ia(dd, c, d_1, "TestLoadImage: abort", !1, b);
    d_1.ontimeout = ia(dd, c, d_1, "TestLoadImage: timeout", !1, b);
    l.setTimeout(function () { if (d_1.ontimeout)
        d_1.ontimeout(); }, 1E4);
    d_1.src = a;
}
else
    b(!1); }
function dd(a, b, c, d, e) { try {
    b.onload = null, b.onerror = null, b.onabort = null, b.ontimeout = null, e(d);
}
catch (f) { } }
function ed(a) { this.l = a.ac || null; this.j = a.jb || !1; }
t(ed, Sb);
ed.prototype.g = function () { return new fd(this.l, this.j); };
ed.prototype.i = function (a) { return function () { return a; }; }({});
function fd(a, b) { B.call(this); this.D = a; this.u = b; this.m = void 0; this.readyState = gd; this.status = 0; this.responseType = this.responseText = this.response = this.statusText = ""; this.onreadystatechange = null; this.v = new Headers; this.h = null; this.C = "GET"; this.B = ""; this.g = !1; this.A = this.j = this.l = null; }
t(fd, B);
var gd = 0;
k = fd.prototype;
k.open = function (a, b) { if (this.readyState != gd)
    throw this.abort(), Error("Error reopening a connection"); this.C = a; this.B = b; this.readyState = 1; hd(this); };
k.send = function (a) { if (1 != this.readyState)
    throw this.abort(), Error("need to call open() first. "); this.g = !0; var b = { headers: this.v, method: this.C, credentials: this.m, cache: void 0 }; a && (b.body = a); (this.D || l).fetch(new Request(this.B, b)).then(this.Wa.bind(this), this.ga.bind(this)); };
k.abort = function () { this.response = this.responseText = ""; this.v = new Headers; this.status = 0; this.j && this.j.cancel("Request was aborted.").catch(function () { }); 1 <= this.readyState && this.g && 4 != this.readyState && (this.g = !1, id(this)); this.readyState = gd; };
k.Wa = function (a) {
    if (this.g && (this.l = a, this.h || (this.status = this.l.status, this.statusText = this.l.statusText, this.h = a.headers, this.readyState = 2, hd(this)), this.g && (this.readyState = 3, hd(this), this.g)))
        if ("arraybuffer" === this.responseType)
            a.arrayBuffer().then(this.Ua.bind(this), this.ga.bind(this));
        else if ("undefined" !== typeof l.ReadableStream && "body" in a) {
            this.j = a.body.getReader();
            if (this.u) {
                if (this.responseType)
                    throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
                this.response =
                    [];
            }
            else
                this.response = this.responseText = "", this.A = new TextDecoder;
            jd(this);
        }
        else
            a.text().then(this.Va.bind(this), this.ga.bind(this));
};
function jd(a) { a.j.read().then(a.Ta.bind(a)).catch(a.ga.bind(a)); }
k.Ta = function (a) { if (this.g) {
    if (this.u && a.value)
        this.response.push(a.value);
    else if (!this.u) {
        var b = a.value ? a.value : new Uint8Array(0);
        if (b = this.A.decode(b, { stream: !a.done }))
            this.response = this.responseText += b;
    }
    a.done ? id(this) : hd(this);
    3 == this.readyState && jd(this);
} };
k.Va = function (a) { this.g && (this.response = this.responseText = a, id(this)); };
k.Ua = function (a) { this.g && (this.response = a, id(this)); };
k.ga = function () { this.g && id(this); };
function id(a) { a.readyState = 4; a.l = null; a.j = null; a.A = null; hd(a); }
k.setRequestHeader = function (a, b) { this.v.append(a, b); };
k.getResponseHeader = function (a) { return this.h ? this.h.get(a.toLowerCase()) || "" : ""; };
k.getAllResponseHeaders = function () { if (!this.h)
    return ""; var a = [], b = this.h.entries(); for (var c = b.next(); !c.done;)
    c = c.value, a.push(c[0] + ": " + c[1]), c = b.next(); return a.join("\r\n"); };
function hd(a) { a.onreadystatechange && a.onreadystatechange.call(a); }
Object.defineProperty(fd.prototype, "withCredentials", { get: function () { return "include" === this.m; }, set: function (a) { this.m = a ? "include" : "same-origin"; } });
var kd = l.JSON.parse;
function W(a) { B.call(this); this.headers = new Map; this.u = a || null; this.h = !1; this.C = this.g = null; this.H = ""; this.m = 0; this.j = ""; this.l = this.F = this.v = this.D = !1; this.B = 0; this.A = null; this.J = ld; this.K = this.L = !1; }
t(W, B);
var ld = "", md = /^https?$/i, nd = ["POST", "PUT"];
k = W.prototype;
k.Ka = function (a) { this.L = a; };
k.da = function (a, b, c, d) {
    var e_3, _a, e_4, _b;
    if (this.g)
        throw Error("[goog.net.XhrIo] Object is active with another request=" + this.H + "; newUri=" + a);
    b = b ? b.toUpperCase() : "GET";
    this.H = a;
    this.j = "";
    this.m = 0;
    this.D = !1;
    this.h = !0;
    this.g = this.u ? this.u.g() : Xb.g();
    this.C = this.u ? Tb(this.u) : Tb(Xb);
    this.g.onreadystatechange = q(this.Ha, this);
    try {
        this.F = !0, this.g.open(b, String(a), !0), this.F = !1;
    }
    catch (f) {
        od(this, f);
        return;
    }
    a = c || "";
    c = new Map(this.headers);
    if (d)
        if (Object.getPrototypeOf(d) === Object.prototype)
            for (var e in d)
                c.set(e, d[e]);
        else if ("function" ===
            typeof d.keys && "function" === typeof d.get)
            try {
                for (var _c = __values(d.keys()), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var f = _d.value;
                    c.set(f, d.get(f));
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_3) throw e_3.error; }
            }
        else
            throw Error("Unknown input type for opt_headers: " + String(d));
    d = Array.from(c.keys()).find(function (f) { return "content-type" == f.toLowerCase(); });
    e = l.FormData && a instanceof l.FormData;
    !(0 <= la(nd, b)) || d || e || c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    try {
        for (var c_1 = __values(c), c_1_1 = c_1.next(); !c_1_1.done; c_1_1 = c_1.next()) {
            var _e = __read(c_1_1.value, 2), f = _e[0], h = _e[1];
            this.g.setRequestHeader(f, h);
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (c_1_1 && !c_1_1.done && (_b = c_1.return)) _b.call(c_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
    this.J && (this.g.responseType = this.J);
    "withCredentials" in this.g && this.g.withCredentials !== this.L && (this.g.withCredentials =
        this.L);
    try {
        pd(this), 0 < this.B && ((this.K = qd(this.g)) ? (this.g.timeout = this.B, this.g.ontimeout = q(this.qa, this)) : this.A = Ab(this.qa, this.B, this)), this.v = !0, this.g.send(a), this.v = !1;
    }
    catch (f) {
        od(this, f);
    }
};
function qd(a) { return y && Ia() && "number" === typeof a.timeout && void 0 !== a.ontimeout; }
k.qa = function () { "undefined" != typeof goog && this.g && (this.j = "Timed out after " + this.B + "ms, aborting", this.m = 8, C(this, "timeout"), this.abort(8)); };
function od(a, b) { a.h = !1; a.g && (a.l = !0, a.g.abort(), a.l = !1); a.j = b; a.m = 5; rd(a); sd(a); }
function rd(a) { a.D || (a.D = !0, C(a, "complete"), C(a, "error")); }
k.abort = function (a) { this.g && this.h && (this.h = !1, this.l = !0, this.g.abort(), this.l = !1, this.m = a || 7, C(this, "complete"), C(this, "abort"), sd(this)); };
k.M = function () { this.g && (this.h && (this.h = !1, this.l = !0, this.g.abort(), this.l = !1), sd(this, !0)); W.X.M.call(this); };
k.Ha = function () { this.s || (this.F || this.v || this.l ? td(this) : this.fb()); };
k.fb = function () { td(this); };
function td(a) {
    if (a.h && "undefined" != typeof goog && (!a.C[1] || 4 != O(a) || 2 != a.aa()))
        if (a.v && 4 == O(a))
            Ab(a.Ha, 0, a);
        else if (C(a, "readystatechange"), 4 == O(a)) {
            a.h = !1;
            try {
                var n = a.aa();
                a: switch (n) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                        var b = !0;
                        break a;
                    default: b = !1;
                }
                var c;
                if (!(c = b)) {
                    var d;
                    if (d = 0 === n) {
                        var e = String(a.H).match(Ec)[1] || null;
                        if (!e && l.self && l.self.location) {
                            var f = l.self.location.protocol;
                            e = f.substr(0, f.length - 1);
                        }
                        d = !md.test(e ? e.toLowerCase() : "");
                    }
                    c = d;
                }
                if (c)
                    C(a, "complete"), C(a, "success");
                else {
                    a.m = 6;
                    try {
                        var h = 2 < O(a) ? a.g.statusText : "";
                    }
                    catch (u) {
                        h = "";
                    }
                    a.j = h + " [" + a.aa() + "]";
                    rd(a);
                }
            }
            finally {
                sd(a);
            }
        }
}
function sd(a, b) { if (a.g) {
    pd(a);
    var c = a.g, d = a.C[0] ? aa : null;
    a.g = null;
    a.C = null;
    b || C(a, "ready");
    try {
        c.onreadystatechange = d;
    }
    catch (e) { }
} }
function pd(a) { a.g && a.K && (a.g.ontimeout = null); a.A && (l.clearTimeout(a.A), a.A = null); }
function O(a) { return a.g ? a.g.readyState : 0; }
k.aa = function () { try {
    return 2 < O(this) ? this.g.status : -1;
}
catch (a) {
    return -1;
} };
k.fa = function () { try {
    return this.g ? this.g.responseText : "";
}
catch (a) {
    return "";
} };
k.Sa = function (a) { if (this.g) {
    var b = this.g.responseText;
    a && 0 == b.indexOf(a) && (b = b.substring(a.length));
    return kd(b);
} };
function hc(a) { try {
    if (!a.g)
        return null;
    if ("response" in a.g)
        return a.g.response;
    switch (a.J) {
        case ld:
        case "text": return a.g.responseText;
        case "arraybuffer": if ("mozResponseArrayBuffer" in a.g)
            return a.g.mozResponseArrayBuffer;
    }
    return null;
}
catch (b) {
    return null;
} }
k.Ea = function () { return this.m; };
k.Oa = function () { return "string" === typeof this.j ? this.j : String(this.j); };
function ud(a) { var b = ""; Qa(a, function (c, d) { b += d; b += ":"; b += c; b += "\r\n"; }); return b; }
function vd(a, b, c) { a: {
    for (d in c) {
        var d = !1;
        break a;
    }
    d = !0;
} d || (c = ud(c), "string" === typeof a ? (null != c && encodeURIComponent(String(c))) : S(a, b, c)); }
function wd(a, b, c) { return c && c.internalChannelParams ? c.internalChannelParams[a] || b : b; }
function xd(a) {
    this.Ca = 0;
    this.i = [];
    this.j = new Gb;
    this.ka = this.sa = this.F = this.V = this.g = this.za = this.D = this.ia = this.o = this.S = this.s = null;
    this.ab = this.U = 0;
    this.Za = wd("failFast", !1, a);
    this.L = this.v = this.u = this.m = this.l = null;
    this.Y = !0;
    this.pa = this.Ba = this.T = -1;
    this.Z = this.A = this.C = 0;
    this.Xa = wd("baseRetryDelayMs", 5E3, a);
    this.bb = wd("retryDelaySeedMs", 1E4, a);
    this.$a = wd("forwardChannelMaxRetries", 2, a);
    this.ta = wd("forwardChannelRequestTimeoutMs", 2E4, a);
    this.ra = a && a.xmlHttpFactory || void 0;
    this.Da = a && a.Zb || !1;
    this.J = void 0;
    this.H = a && a.supportsCrossDomainXhr || !1;
    this.I = "";
    this.h = new Wc(a && a.concurrentRequestLimit);
    this.Fa = new ad;
    this.O = a && a.fastHandshake || !1;
    this.N = a && a.encodeInitMessageHeaders || !1;
    this.O && this.N && (this.N = !1);
    this.Ya = a && a.Xb || !1;
    a && a.Aa && this.j.Aa();
    a && a.forceLongPolling && (this.Y = !1);
    this.$ = !this.O && this.Y && a && a.detectBufferingProxy || !1;
    this.ja = void 0;
    this.P = 0;
    this.K = !1;
    this.la = this.B = null;
}
k = xd.prototype;
k.ma = 8;
k.G = 1;
function Ac(a) { yd(a); if (3 == a.G) {
    var b = a.U++, c = M(a.F);
    S(c, "SID", a.I);
    S(c, "RID", b);
    S(c, "TYPE", "terminate");
    zd(a, c);
    b = new L(a, a.j, b, void 0);
    b.K = 2;
    b.v = dc(M(c));
    c = !1;
    l.navigator && l.navigator.sendBeacon && (c = l.navigator.sendBeacon(b.v.toString(), ""));
    !c && l.Image && ((new Image).src = b.v, c = !0);
    c || (b.g = gc(b.l, null), b.g.da(b.v));
    b.F = Date.now();
    N(b);
} Ad(a); }
function sc(a) { a.g && (oc(a), a.g.cancel(), a.g = null); }
function yd(a) { sc(a); a.u && (l.clearTimeout(a.u), a.u = null); rc(a); a.h.cancel(); a.m && ("number" === typeof a.m && l.clearTimeout(a.m), a.m = null); }
function zc(a) { Yc(a.h) || a.m || (a.m = !0, sb(a.Ja, a), a.C = 0); }
function Bd(a, b) { if (uc(a.h) >= a.h.j - (a.m ? 1 : 0))
    return !1; if (a.m)
    return a.i = b.D.concat(a.i), !0; if (1 == a.G || 2 == a.G || a.C >= (a.Za ? 0 : a.$a))
    return !1; a.m = J(q(a.Ja, a, b), Cd(a, a.C)); a.C++; return !0; }
k.Ja = function (a) {
    if (this.m)
        if (this.m = null, 1 == this.G) {
            if (!a) {
                this.U = Math.floor(1E5 * Math.random());
                a = this.U++;
                var e = new L(this, this.j, a, void 0);
                var f = this.s;
                this.S && (f ? (f = Ra(f), Ta(f, this.S)) : f = this.S);
                null !== this.o || this.N || (e.H = f, f = null);
                if (this.O)
                    a: {
                        var b = 0;
                        for (var c = 0; c < this.i.length; c++) {
                            b: {
                                var d = this.i[c];
                                if ("__data__" in d.g && (d = d.g.__data__, "string" === typeof d)) {
                                    d = d.length;
                                    break b;
                                }
                                d = void 0;
                            }
                            if (void 0 === d)
                                break;
                            b += d;
                            if (4096 < b) {
                                b = c;
                                break a;
                            }
                            if (4096 === b || c === this.i.length - 1) {
                                b = c + 1;
                                break a;
                            }
                        }
                        b = 1E3;
                    }
                else
                    b =
                        1E3;
                b = Dd(this, e, b);
                c = M(this.F);
                S(c, "RID", a);
                S(c, "CVER", 22);
                this.D && S(c, "X-HTTP-Session-Id", this.D);
                zd(this, c);
                f && (this.N ? b = "headers=" + encodeURIComponent(String(ud(f))) + "&" + b : this.o && vd(c, this.o, f));
                vc(this.h, e);
                this.Ya && S(c, "TYPE", "init");
                this.O ? (S(c, "$req", b), S(c, "SID", "null"), e.Z = !0, cc(e, c, null)) : cc(e, c, b);
                this.G = 2;
            }
        }
        else
            3 == this.G && (a ? Ed(this, a) : 0 == this.i.length || Yc(this.h) || Ed(this));
};
function Ed(a, b) { var c; b ? c = b.m : c = a.U++; var d = M(a.F); S(d, "SID", a.I); S(d, "RID", c); S(d, "AID", a.T); zd(a, d); a.o && a.s && vd(d, a.o, a.s); c = new L(a, a.j, c, a.C + 1); null === a.o && (c.H = a.s); b && (a.i = b.D.concat(a.i)); b = Dd(a, c, 1E3); c.setTimeout(Math.round(.5 * a.ta) + Math.round(.5 * a.ta * Math.random())); vc(a.h, c); cc(c, d, b); }
function zd(a, b) { a.ia && Qa(a.ia, function (c, d) { S(b, d, c); }); a.l && Dc({}, function (c, d) { S(b, d, c); }); }
function Dd(a, b, c) { c = Math.min(a.i.length, c); var d = a.l ? q(a.l.Ra, a.l, a) : null; a: {
    var e = a.i;
    var f = -1;
    for (;;) {
        var h = ["count=" + c];
        -1 == f ? 0 < c ? (f = e[0].h, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
        var n = !0;
        for (var u = 0; u < c; u++) {
            var m = e[u].h;
            var r = e[u].g;
            m -= f;
            if (0 > m)
                f = Math.max(0, e[u].h - 100), n = !1;
            else
                try {
                    bd(r, h, "req" + m + "_");
                }
                catch (F) {
                    d && d(r);
                }
        }
        if (n) {
            d = h.join("&");
            break a;
        }
    }
} a = a.i.splice(0, c); b.D = a; return d; }
function yc(a) { a.g || a.u || (a.Z = 1, sb(a.Ia, a), a.A = 0); }
function tc(a) { if (a.g || a.u || 3 <= a.A)
    return !1; a.Z++; a.u = J(q(a.Ia, a), Cd(a, a.A)); a.A++; return !0; }
k.Ia = function () { this.u = null; Fd(this); if (this.$ && !(this.K || null == this.g || 0 >= this.P)) {
    var a = 2 * this.P;
    this.j.info("BP detection timer enabled: " + a);
    this.B = J(q(this.eb, this), a);
} };
k.eb = function () { this.B && (this.B = null, this.j.info("BP detection timeout reached."), this.j.info("Buffering proxy detected and switch to long-polling!"), this.L = !1, this.K = !0, I(10), sc(this), Fd(this)); };
function oc(a) { null != a.B && (l.clearTimeout(a.B), a.B = null); }
function Fd(a) { a.g = new L(a, a.j, "rpc", a.Z); null === a.o && (a.g.H = a.s); a.g.N = 0; var b = M(a.sa); S(b, "RID", "rpc"); S(b, "SID", a.I); S(b, "CI", a.L ? "0" : "1"); S(b, "AID", a.T); S(b, "TYPE", "xmlhttp"); zd(a, b); a.o && a.s && vd(b, a.o, a.s); a.J && a.g.setTimeout(a.J); var c = a.g; a = a.ka; c.K = 1; c.v = dc(M(b)); c.s = null; c.P = !0; ec(c, a); }
k.cb = function () { null != this.v && (this.v = null, sc(this), tc(this), I(19)); };
function rc(a) { null != a.v && (l.clearTimeout(a.v), a.v = null); }
function mc(a, b) { var c = null; if (a.g == b) {
    rc(a);
    oc(a);
    a.g = null;
    var d = 2;
}
else if (qc(a.h, b))
    c = b.D, xc(a.h, b), d = 1;
else
    return; if (0 != a.G)
    if (a.pa = b.Y, b.i)
        if (1 == d) {
            c = b.s ? b.s.length : 0;
            b = Date.now() - b.F;
            var e = a.C;
            d = Mb();
            C(d, new Pb(d, c));
            zc(a);
        }
        else
            yc(a);
    else if (e = b.o, 3 == e || 0 == e && 0 < a.pa || !(1 == d && Bd(a, b) || 2 == d && tc(a)))
        switch (c && 0 < c.length && (b = a.h, b.i = b.i.concat(c)), e) {
            case 1:
                R(a, 5);
                break;
            case 4:
                R(a, 10);
                break;
            case 3:
                R(a, 6);
                break;
            default: R(a, 2);
        } }
function Cd(a, b) { var c = a.Xa + Math.floor(Math.random() * a.bb); a.l || (c *= 2); return c * b; }
function R(a, b) { a.j.info("Error code " + b); if (2 == b) {
    var c = null;
    a.l && (c = null);
    var d = q(a.kb, a);
    c || (c = new T("//www.google.com/images/cleardot.gif"), l.location && "http" == l.location.protocol || Gc(c, "https"), dc(c));
    cd(c.toString(), d);
}
else
    I(2); a.G = 0; a.l && a.l.va(b); Ad(a); yd(a); }
k.kb = function (a) { a ? (this.j.info("Successfully pinged google.com"), I(2)) : (this.j.info("Failed to ping google.com"), I(1)); };
function Ad(a) { a.G = 0; a.la = []; if (a.l) {
    var b = Zc(a.h);
    if (0 != b.length || 0 != a.i.length)
        na(a.la, b), na(a.la, a.i), a.h.i.length = 0, ma(a.i), a.i.length = 0;
    a.l.ua();
} }
function wc(a, b, c) { var d = c instanceof T ? M(c) : new T(c, void 0); if ("" != d.g)
    b && (d.g = b + "." + d.g), Hc(d, d.m);
else {
    var e = l.location;
    d = e.protocol;
    b = b ? b + "." + e.hostname : e.hostname;
    e = +e.port;
    var f = new T(null, void 0);
    d && Gc(f, d);
    b && (f.g = b);
    e && Hc(f, e);
    c && (f.l = c);
    d = f;
} c = a.D; b = a.za; c && b && S(d, c, b); S(d, "VER", a.ma); zd(a, d); return d; }
function gc(a, b, c) { if (b && !a.H)
    throw Error("Can't create secondary domain capable XhrIo object."); b = c && a.Da && !a.ra ? new W(new ed({ jb: !0 })) : new W(a.ra); b.Ka(a.H); return b; }
function Gd() { }
k = Gd.prototype;
k.xa = function () { };
k.wa = function () { };
k.va = function () { };
k.ua = function () { };
k.Ra = function () { };
function Hd() { if (y && !(10 <= Number(La)))
    throw Error("Environmental error: no available transport."); }
Hd.prototype.g = function (a, b) { return new X(a, b); };
function X(a, b) {
    B.call(this);
    this.g = new xd(b);
    this.l = a;
    this.h = b && b.messageUrlParams || null;
    a = b && b.messageHeaders || null;
    b && b.clientProtocolHeaderRequired && (a ? a["X-Client-Protocol"] = "webchannel" : a = { "X-Client-Protocol": "webchannel" });
    this.g.s = a;
    a = b && b.initMessageHeaders || null;
    b && b.messageContentType && (a ? a["X-WebChannel-Content-Type"] = b.messageContentType : a = { "X-WebChannel-Content-Type": b.messageContentType });
    b && b.ya && (a ? a["X-WebChannel-Client-Profile"] = b.ya : a = { "X-WebChannel-Client-Profile": b.ya });
    this.g.S =
        a;
    (a = b && b.Yb) && !pa(a) && (this.g.o = a);
    this.A = b && b.supportsCrossDomainXhr || !1;
    this.v = b && b.sendRawJson || !1;
    (b = b && b.httpSessionIdParam) && !pa(b) && (this.g.D = b, a = this.h, null !== a && b in a && (a = this.h, b in a && delete a[b]));
    this.j = new Y(this);
}
t(X, B);
X.prototype.m = function () { this.g.l = this.j; this.A && (this.g.H = !0); var a = this.g, b = this.l, c = this.h || void 0; I(0); a.V = b; a.ia = c || {}; a.L = a.Y; a.F = wc(a, null, a.V); zc(a); };
X.prototype.close = function () { Ac(this.g); };
X.prototype.u = function (a) { var b = this.g; if ("string" === typeof a) {
    var c = {};
    c.__data__ = a;
    a = c;
}
else
    this.v && (c = {}, c.__data__ = lb(a), a = c); b.i.push(new Vc(b.ab++, a)); 3 == b.G && zc(b); };
X.prototype.M = function () { this.g.l = null; delete this.j; Ac(this.g); delete this.g; X.X.M.call(this); };
function Id(a) { Vb.call(this); var b = a.__sm__; if (b) {
    a: {
        for (var c in b) {
            a = c;
            break a;
        }
        a = void 0;
    }
    if (this.i = a)
        a = this.i, b = null !== b && a in b ? b[a] : void 0;
    this.data = b;
}
else
    this.data = a; }
t(Id, Vb);
function Jd() { Wb.call(this); this.status = 1; }
t(Jd, Wb);
function Y(a) { this.g = a; }
t(Y, Gd);
Y.prototype.xa = function () { C(this.g, "a"); };
Y.prototype.wa = function (a) { C(this.g, new Id(a)); };
Y.prototype.va = function (a) { C(this.g, new Jd()); };
Y.prototype.ua = function () { C(this.g, "b"); }; /*

 Copyright 2017 Google LLC

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
Hd.prototype.createWebChannel = Hd.prototype.g;
X.prototype.send = X.prototype.u;
X.prototype.open = X.prototype.m;
X.prototype.close = X.prototype.close;
Qb.NO_ERROR = 0;
Qb.TIMEOUT = 8;
Qb.HTTP_ERROR = 6;
Rb.COMPLETE = "complete";
Ub.EventType = K;
K.OPEN = "a";
K.CLOSE = "b";
K.ERROR = "c";
K.MESSAGE = "d";
B.prototype.listen = B.prototype.N;
W.prototype.listenOnce = W.prototype.O;
W.prototype.getLastError = W.prototype.Oa;
W.prototype.getLastErrorCode = W.prototype.Ea;
W.prototype.getStatus = W.prototype.aa;
W.prototype.getResponseJson = W.prototype.Sa;
W.prototype.getResponseText = W.prototype.fa;
W.prototype.send = W.prototype.da;
W.prototype.setWithCredentials = W.prototype.Ka;
var createWebChannelTransport = esm.createWebChannelTransport = function () { return new Hd; };
var getStatEventTarget = esm.getStatEventTarget = function () { return Mb(); };
var ErrorCode = esm.ErrorCode = Qb;
var EventType = esm.EventType = Rb;
var Event = esm.Event = G;
var Stat = esm.Stat = { sb: 0, vb: 1, wb: 2, Pb: 3, Ub: 4, Rb: 5, Sb: 6, Qb: 7, Ob: 8, Tb: 9, PROXY: 10, NOPROXY: 11, Mb: 12, Ib: 13, Jb: 14, Hb: 15, Kb: 16, Lb: 17, ob: 18, nb: 19, pb: 20 };
var FetchXmlHttpFactory = esm.FetchXmlHttpFactory = ed;
var WebChannel = esm.WebChannel = Ub;
var XhrIo = esm.XhrIo = W;

export { ErrorCode, Event, EventType, FetchXmlHttpFactory, Stat, WebChannel, XhrIo, createWebChannelTransport, esm as default, getStatEventTarget };
//# sourceMappingURL=index.esm.js.map
