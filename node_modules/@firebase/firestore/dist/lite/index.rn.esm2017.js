import { _getProvider, getApp as t, _removeServiceInstance as e, _registerComponent as n, registerVersion as r, SDK_VERSION as s } from "@firebase/app";

import { Component as i } from "@firebase/component";

import { Logger as o, LogLevel as u } from "@firebase/logger";

import { FirebaseError as c, base64 as a, getDefaultEmulatorHostnameAndPort as h, createMockUserToken as l, getModularInstance as f, deepEqual as d } from "@firebase/util";

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Simple wrapper around a nullable UID. Mostly exists to make code more
 * readable.
 */
class w {
    constructor(t) {
        this.uid = t;
    }
    isAuthenticated() {
        return null != this.uid;
    }
    /**
     * Returns a key representing this user, suitable for inclusion in a
     * dictionary.
     */    toKey() {
        return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
    }
    isEqual(t) {
        return t.uid === this.uid;
    }
}

/** A user with a null UID. */ w.UNAUTHENTICATED = new w(null), 
// TODO(mikelehen): Look into getting a proper uid-equivalent for
// non-FirebaseAuth providers.
w.GOOGLE_CREDENTIALS = new w("google-credentials-uid"), w.FIRST_PARTY = new w("first-party-uid"), 
w.MOCK_USER = new w("mock-user");

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let m = "9.15.0";

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const p = new o("@firebase/firestore");

/**
 * Sets the verbosity of Cloud Firestore logs (debug, error, or silent).
 *
 * @param logLevel - The verbosity you set for activity and error logging. Can
 *   be any of the following values:
 *
 *   <ul>
 *     <li>`debug` for the most verbose logging level, primarily for
 *     debugging.</li>
 *     <li>`error` to log errors only.</li>
 *     <li><code>`silent` to turn off logging.</li>
 *   </ul>
 */ function y(t) {
    p.setLogLevel(t);
}

function g(t, ...e) {
    if (p.logLevel <= u.DEBUG) {
        const n = e.map(b);
        p.debug(`Firestore (${m}): ${t}`, ...n);
    }
}

function _(t, ...e) {
    if (p.logLevel <= u.ERROR) {
        const n = e.map(b);
        p.error(`Firestore (${m}): ${t}`, ...n);
    }
}

/**
 * @internal
 */ function v(t, ...e) {
    if (p.logLevel <= u.WARN) {
        const n = e.map(b);
        p.warn(`Firestore (${m}): ${t}`, ...n);
    }
}

/**
 * Converts an additional log parameter to a string representation.
 */ function b(t) {
    if ("string" == typeof t) return t;
    try {
        return e = t, JSON.stringify(e);
    } catch (e) {
        // Converting to JSON failed, just log the object directly
        return t;
    }
    /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    /** Formats an object as a JSON string, suitable for logging. */
    var e;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Unconditionally fails, throwing an Error with the given message.
 * Messages are stripped in production builds.
 *
 * Returns `never` and can be used in expressions:
 * @example
 * let futureVar = fail('not implemented yet');
 */ function E(t = "Unexpected state") {
    // Log the failure in addition to throw an exception, just in case the
    // exception is swallowed.
    const e = `FIRESTORE (${m}) INTERNAL ASSERTION FAILED: ` + t;
    // NOTE: We don't use FirestoreError here because these are internal failures
    // that cannot be handled by the user. (Also it would create a circular
    // dependency between the error and assert modules which doesn't work.)
    throw _(e), new Error(e);
}

/**
 * Fails if the given assertion condition is false, throwing an Error with the
 * given message if it did.
 *
 * Messages are stripped in production builds.
 */ function I(t, e) {
    t || E();
}

/**
 * Casts `obj` to `T`. In non-production builds, verifies that `obj` is an
 * instance of `T` before casting.
 */ function A(t, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
e) {
    return t;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const T = "ok", R = "cancelled", P = "unknown", V = "invalid-argument", $ = "deadline-exceeded", N = "not-found", D = "already-exists", F = "permission-denied", x = "unauthenticated", S = "resource-exhausted", q = "failed-precondition", O = "aborted", k = "out-of-range", C = "unimplemented", L = "internal", M = "unavailable", U = "data-loss";

/** An error returned by a Firestore operation. */ class j extends c {
    /** @hideconstructor */
    constructor(
    /**
     * The backend error code associated with this error.
     */
    t, 
    /**
     * A custom error description.
     */
    e) {
        super(t, e), this.code = t, this.message = e, 
        // HACK: We write a toString property directly because Error is not a real
        // class and so inheritance does not work correctly. We could alternatively
        // do the same "back-door inheritance" trick that FirebaseError does.
        this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`;
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class B {
    constructor() {
        this.promise = new Promise(((t, e) => {
            this.resolve = t, this.reject = e;
        }));
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Q {
    constructor(t, e) {
        this.user = e, this.type = "OAuth", this.headers = new Map, this.headers.set("Authorization", `Bearer ${t}`);
    }
}

/**
 * A CredentialsProvider that always yields an empty token.
 * @internal
 */ class z {
    getToken() {
        return Promise.resolve(null);
    }
    invalidateToken() {}
    start(t, e) {
        // Fire with initial user.
        t.enqueueRetryable((() => e(w.UNAUTHENTICATED)));
    }
    shutdown() {}
}

/**
 * A CredentialsProvider that always returns a constant token. Used for
 * emulator token mocking.
 */ class W {
    constructor(t) {
        this.token = t, 
        /**
         * Stores the listener registered with setChangeListener()
         * This isn't actually necessary since the UID never changes, but we use this
         * to verify the listen contract is adhered to in tests.
         */
        this.changeListener = null;
    }
    getToken() {
        return Promise.resolve(this.token);
    }
    invalidateToken() {}
    start(t, e) {
        this.changeListener = e, 
        // Fire with initial user.
        t.enqueueRetryable((() => e(this.token.user)));
    }
    shutdown() {
        this.changeListener = null;
    }
}

/** Credential provider for the Lite SDK. */ class G {
    constructor(t) {
        this.auth = null, t.onInit((t => {
            this.auth = t;
        }));
    }
    getToken() {
        return this.auth ? this.auth.getToken().then((t => t ? (I("string" == typeof t.accessToken), 
        new Q(t.accessToken, new w(this.auth.getUid()))) : null)) : Promise.resolve(null);
    }
    invalidateToken() {}
    start(t, e) {}
    shutdown() {}
}

/*
 * FirstPartyToken provides a fresh token each time its value
 * is requested, because if the token is too old, requests will be rejected.
 * Technically this may no longer be necessary since the SDK should gracefully
 * recover from unauthenticated errors (see b/33147818 for context), but it's
 * safer to keep the implementation as-is.
 */ class K {
    constructor(t, e, n, r) {
        this.t = t, this.i = e, this.o = n, this.u = r, this.type = "FirstParty", this.user = w.FIRST_PARTY, 
        this.h = new Map;
    }
    /** Gets an authorization token, using a provided factory function, or falling back to First Party GAPI. */    l() {
        return this.u ? this.u() : (
        // Make sure this really is a Gapi client.
        I(!("object" != typeof this.t || null === this.t || !this.t.auth || !this.t.auth.getAuthHeaderValueForFirstParty)), 
        this.t.auth.getAuthHeaderValueForFirstParty([]));
    }
    get headers() {
        this.h.set("X-Goog-AuthUser", this.i);
        // Use array notation to prevent minification
        const t = this.l();
        return t && this.h.set("Authorization", t), this.o && this.h.set("X-Goog-Iam-Authorization-Token", this.o), 
        this.h;
    }
}

/*
 * Provides user credentials required for the Firestore JavaScript SDK
 * to authenticate the user, using technique that is only available
 * to applications hosted by Google.
 */ class Y {
    constructor(t, e, n, r) {
        this.t = t, this.i = e, this.o = n, this.u = r;
    }
    getToken() {
        return Promise.resolve(new K(this.t, this.i, this.o, this.u));
    }
    start(t, e) {
        // Fire with initial uid.
        t.enqueueRetryable((() => e(w.FIRST_PARTY)));
    }
    shutdown() {}
    invalidateToken() {}
}

class H {
    constructor(t) {
        this.value = t, this.type = "AppCheck", this.headers = new Map, t && t.length > 0 && this.headers.set("x-firebase-appcheck", this.value);
    }
}

/** AppCheck token provider for the Lite SDK. */ class J {
    constructor(t) {
        this.m = t, this.appCheck = null, t.onInit((t => {
            this.appCheck = t;
        }));
    }
    getToken() {
        return this.appCheck ? this.appCheck.getToken().then((t => t ? (I("string" == typeof t.token), 
        new H(t.token)) : null)) : Promise.resolve(null);
    }
    invalidateToken() {}
    start(t, e) {}
    shutdown() {}
}

/**
 * Builds a CredentialsProvider depending on the type of
 * the credentials passed in.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class X {
    /**
     * Constructs a DatabaseInfo using the provided host, databaseId and
     * persistenceKey.
     *
     * @param databaseId - The database to use.
     * @param appId - The Firebase App Id.
     * @param persistenceKey - A unique identifier for this Firestore's local
     * storage (used in conjunction with the databaseId).
     * @param host - The Firestore backend host to connect to.
     * @param ssl - Whether to use SSL when connecting.
     * @param forceLongPolling - Whether to use the forceLongPolling option
     * when using WebChannel as the network transport.
     * @param autoDetectLongPolling - Whether to use the detectBufferingProxy
     * option when using WebChannel as the network transport.
     * @param useFetchStreams Whether to use the Fetch API instead of
     * XMLHTTPRequest
     */
    constructor(t, e, n, r, s, i, o, u) {
        this.databaseId = t, this.appId = e, this.persistenceKey = n, this.host = r, this.ssl = s, 
        this.forceLongPolling = i, this.autoDetectLongPolling = o, this.useFetchStreams = u;
    }
}

/** The default database name for a project. */
/**
 * Represents the database ID a Firestore client is associated with.
 * @internal
 */
class Z {
    constructor(t, e) {
        this.projectId = t, this.database = e || "(default)";
    }
    static empty() {
        return new Z("", "");
    }
    get isDefaultDatabase() {
        return "(default)" === this.database;
    }
    isEqual(t) {
        return t instanceof Z && t.projectId === this.projectId && t.database === this.database;
    }
}

/**
 * Path represents an ordered sequence of string segments.
 */
class tt {
    constructor(t, e, n) {
        void 0 === e ? e = 0 : e > t.length && E(), void 0 === n ? n = t.length - e : n > t.length - e && E(), 
        this.segments = t, this.offset = e, this.len = n;
    }
    get length() {
        return this.len;
    }
    isEqual(t) {
        return 0 === tt.comparator(this, t);
    }
    child(t) {
        const e = this.segments.slice(this.offset, this.limit());
        return t instanceof tt ? t.forEach((t => {
            e.push(t);
        })) : e.push(t), this.construct(e);
    }
    /** The index of one past the last segment of the path. */    limit() {
        return this.offset + this.length;
    }
    popFirst(t) {
        return t = void 0 === t ? 1 : t, this.construct(this.segments, this.offset + t, this.length - t);
    }
    popLast() {
        return this.construct(this.segments, this.offset, this.length - 1);
    }
    firstSegment() {
        return this.segments[this.offset];
    }
    lastSegment() {
        return this.get(this.length - 1);
    }
    get(t) {
        return this.segments[this.offset + t];
    }
    isEmpty() {
        return 0 === this.length;
    }
    isPrefixOf(t) {
        if (t.length < this.length) return !1;
        for (let e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
        return !0;
    }
    isImmediateParentOf(t) {
        if (this.length + 1 !== t.length) return !1;
        for (let e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
        return !0;
    }
    forEach(t) {
        for (let e = this.offset, n = this.limit(); e < n; e++) t(this.segments[e]);
    }
    toArray() {
        return this.segments.slice(this.offset, this.limit());
    }
    static comparator(t, e) {
        const n = Math.min(t.length, e.length);
        for (let r = 0; r < n; r++) {
            const n = t.get(r), s = e.get(r);
            if (n < s) return -1;
            if (n > s) return 1;
        }
        return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
    }
}

/**
 * A slash-separated path for navigating resources (documents and collections)
 * within Firestore.
 *
 * @internal
 */ class et extends tt {
    construct(t, e, n) {
        return new et(t, e, n);
    }
    canonicalString() {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        return this.toArray().join("/");
    }
    toString() {
        return this.canonicalString();
    }
    /**
     * Creates a resource path from the given slash-delimited string. If multiple
     * arguments are provided, all components are combined. Leading and trailing
     * slashes from all components are ignored.
     */    static fromString(...t) {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        const e = [];
        for (const n of t) {
            if (n.indexOf("//") >= 0) throw new j(V, `Invalid segment (${n}). Paths must not contain // in them.`);
            // Strip leading and traling slashed.
                        e.push(...n.split("/").filter((t => t.length > 0)));
        }
        return new et(e);
    }
    static emptyPath() {
        return new et([]);
    }
}

const nt = /^[_a-zA-Z][_a-zA-Z0-9]*$/;

/**
 * A dot-separated path for navigating sub-objects within a document.
 * @internal
 */ class rt extends tt {
    construct(t, e, n) {
        return new rt(t, e, n);
    }
    /**
     * Returns true if the string could be used as a segment in a field path
     * without escaping.
     */    static isValidIdentifier(t) {
        return nt.test(t);
    }
    canonicalString() {
        return this.toArray().map((t => (t = t.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), 
        rt.isValidIdentifier(t) || (t = "`" + t + "`"), t))).join(".");
    }
    toString() {
        return this.canonicalString();
    }
    /**
     * Returns true if this field references the key of a document.
     */    isKeyField() {
        return 1 === this.length && "__name__" === this.get(0);
    }
    /**
     * The field designating the key of a document.
     */    static keyField() {
        return new rt([ "__name__" ]);
    }
    /**
     * Parses a field string from the given server-formatted string.
     *
     * - Splitting the empty string is not allowed (for now at least).
     * - Empty segments within the string (e.g. if there are two consecutive
     *   separators) are not allowed.
     *
     * TODO(b/37244157): we should make this more strict. Right now, it allows
     * non-identifier path components, even if they aren't escaped.
     */    static fromServerFormat(t) {
        const e = [];
        let n = "", r = 0;
        const s = () => {
            if (0 === n.length) throw new j(V, `Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);
            e.push(n), n = "";
        };
        let i = !1;
        for (;r < t.length; ) {
            const e = t[r];
            if ("\\" === e) {
                if (r + 1 === t.length) throw new j(V, "Path has trailing escape character: " + t);
                const e = t[r + 1];
                if ("\\" !== e && "." !== e && "`" !== e) throw new j(V, "Path has invalid escape sequence: " + t);
                n += e, r += 2;
            } else "`" === e ? (i = !i, r++) : "." !== e || i ? (n += e, r++) : (s(), r++);
        }
        if (s(), i) throw new j(V, "Unterminated ` in path: " + t);
        return new rt(e);
    }
    static emptyPath() {
        return new rt([]);
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */ class st {
    constructor(t) {
        this.path = t;
    }
    static fromPath(t) {
        return new st(et.fromString(t));
    }
    static fromName(t) {
        return new st(et.fromString(t).popFirst(5));
    }
    static empty() {
        return new st(et.emptyPath());
    }
    get collectionGroup() {
        return this.path.popLast().lastSegment();
    }
    /** Returns true if the document is in the specified collectionId. */    hasCollectionId(t) {
        return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
    }
    /** Returns the collection group (i.e. the name of the parent collection) for this key. */    getCollectionGroup() {
        return this.path.get(this.path.length - 2);
    }
    /** Returns the fully qualified path to the parent collection. */    getCollectionPath() {
        return this.path.popLast();
    }
    isEqual(t) {
        return null !== t && 0 === et.comparator(this.path, t.path);
    }
    toString() {
        return this.path.toString();
    }
    static comparator(t, e) {
        return et.comparator(t.path, e.path);
    }
    static isDocumentKey(t) {
        return t.length % 2 == 0;
    }
    /**
     * Creates and returns a new document key with the given segments.
     *
     * @param segments - The segments of the path to the document
     * @returns A new instance of DocumentKey
     */    static fromSegments(t) {
        return new st(new et(t.slice()));
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function it(t, e, n) {
    if (!n) throw new j(V, `Function ${t}() cannot be called with an empty ${e}.`);
}

/**
 * Validates that two boolean options are not set at the same time.
 * @internal
 */
/**
 * Validates that `path` refers to a document (indicated by the fact it contains
 * an even numbers of segments).
 */
function ot(t) {
    if (!st.isDocumentKey(t)) throw new j(V, `Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`);
}

/**
 * Validates that `path` refers to a collection (indicated by the fact it
 * contains an odd numbers of segments).
 */ function ut(t) {
    if (st.isDocumentKey(t)) throw new j(V, `Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`);
}

/**
 * Returns true if it's a non-null object without a custom prototype
 * (i.e. excludes Array, Date, etc.).
 */
/** Returns a string describing the type / value of the provided input. */
function ct(t) {
    if (void 0 === t) return "undefined";
    if (null === t) return "null";
    if ("string" == typeof t) return t.length > 20 && (t = `${t.substring(0, 20)}...`), 
    JSON.stringify(t);
    if ("number" == typeof t || "boolean" == typeof t) return "" + t;
    if ("object" == typeof t) {
        if (t instanceof Array) return "an array";
        {
            const e = 
            /** try to get the constructor name for an object. */
            function(t) {
                if (t.constructor) return t.constructor.name;
                return null;
            }
            /**
 * Casts `obj` to `T`, optionally unwrapping Compat types to expose the
 * underlying instance. Throws if  `obj` is not an instance of `T`.
 *
 * This cast is used in the Lite and Full SDK to verify instance types for
 * arguments passed to the public API.
 * @internal
 */ (t);
            return e ? `a custom ${e} object` : "an object";
        }
    }
    return "function" == typeof t ? "a function" : E();
}

function at(t, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
e) {
    if ("_delegate" in t && (
    // Unwrap Compat types
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    t = t._delegate), !(t instanceof e)) {
        if (e.name === t.constructor.name) throw new j(V, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
        {
            const n = ct(t);
            throw new j(V, `Expected type '${e.name}', but it was: ${n}`);
        }
    }
    return t;
}

function ht(t, e) {
    if (e <= 0) throw new j(V, `Function ${t}() requires a positive number, but it was: ${e}.`);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns whether a variable is either undefined or null.
 */ function lt(t) {
    return null == t;
}

/** Returns whether the value represents -0. */ function ft(t) {
    // Detect if the value is -0.0. Based on polyfill from
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
    return 0 === t && 1 / t == -1 / 0;
}

/**
 * Returns whether a value is an integer and in the safe integer range
 * @param value - The value to test for being an integer and in the safe range
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dt = {
    BatchGetDocuments: "batchGet",
    Commit: "commit",
    RunQuery: "runQuery",
    RunAggregationQuery: "runAggregationQuery"
};

/**
 * Maps RPC names to the corresponding REST endpoint name.
 *
 * We use array notation to avoid mangling.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Error Codes describing the different ways GRPC can fail. These are copied
 * directly from GRPC's sources here:
 *
 * https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
 *
 * Important! The names of these identifiers matter because the string forms
 * are used for reverse lookups from the webchannel stream. Do NOT change the
 * names of these identifiers or change this into a const enum.
 */
var wt, mt;

/**
 * Converts an HTTP Status Code to the equivalent error code.
 *
 * @param status - An HTTP Status Code, like 200, 404, 503, etc.
 * @returns The equivalent Code. Unknown status codes are mapped to
 *     Code.UNKNOWN.
 */
function pt(t) {
    if (void 0 === t) return _("RPC_ERROR", "HTTP error has no status"), P;
    // The canonical error codes for Google APIs [1] specify mapping onto HTTP
    // status codes but the mapping is not bijective. In each case of ambiguity
    // this function chooses a primary error.
    
    // [1]
    // https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto
        switch (t) {
      case 200:
        // OK
        return T;

      case 400:
        // Bad Request
        return q;

        // Other possibilities based on the forward mapping
        // return Code.INVALID_ARGUMENT;
        // return Code.OUT_OF_RANGE;
              case 401:
        // Unauthorized
        return x;

      case 403:
        // Forbidden
        return F;

      case 404:
        // Not Found
        return N;

      case 409:
        // Conflict
        return O;

        // Other possibilities:
        // return Code.ALREADY_EXISTS;
              case 416:
        // Range Not Satisfiable
        return k;

      case 429:
        // Too Many Requests
        return S;

      case 499:
        // Client Closed Request
        return R;

      case 500:
        // Internal Server Error
        return P;

        // Other possibilities:
        // return Code.INTERNAL;
        // return Code.DATA_LOSS;
              case 501:
        // Unimplemented
        return C;

      case 503:
        // Service Unavailable
        return M;

      case 504:
        // Gateway Timeout
        return $;

      default:
        return t >= 200 && t < 300 ? T : t >= 400 && t < 500 ? q : t >= 500 && t < 600 ? L : P;
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A Rest-based connection that relies on the native HTTP stack
 * (e.g. `fetch` or a polyfill).
 */ (mt = wt || (wt = {}))[mt.OK = 0] = "OK", mt[mt.CANCELLED = 1] = "CANCELLED", 
mt[mt.UNKNOWN = 2] = "UNKNOWN", mt[mt.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", 
mt[mt.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", mt[mt.NOT_FOUND = 5] = "NOT_FOUND", 
mt[mt.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", mt[mt.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", 
mt[mt.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", mt[mt.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", 
mt[mt.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", mt[mt.ABORTED = 10] = "ABORTED", 
mt[mt.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", mt[mt.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", 
mt[mt.INTERNAL = 13] = "INTERNAL", mt[mt.UNAVAILABLE = 14] = "UNAVAILABLE", mt[mt.DATA_LOSS = 15] = "DATA_LOSS";

class yt extends 
/**
 * Base class for all Rest-based connections to the backend (WebChannel and
 * HTTP).
 */
class {
    constructor(t) {
        this.databaseInfo = t, this.databaseId = t.databaseId;
        const e = t.ssl ? "https" : "http";
        this.p = e + "://" + t.host, this.g = "projects/" + this.databaseId.projectId + "/databases/" + this.databaseId.database + "/documents";
    }
    get v() {
        // Both `invokeRPC()` and `invokeStreamingRPC()` use their `path` arguments to determine
        // where to run the query, and expect the `request` to NOT specify the "path".
        return !1;
    }
    I(t, e, n, r, s) {
        const i = this.A(t, e);
        g("RestConnection", "Sending: ", i, n);
        const o = {};
        return this.T(o, r, s), this.R(t, i, o, n).then((t => (g("RestConnection", "Received: ", t), 
        t)), (e => {
            throw v("RestConnection", `${t} failed with error: `, e, "url: ", i, "request:", n), 
            e;
        }));
    }
    P(t, e, n, r, s, i) {
        // The REST API automatically aggregates all of the streamed results, so we
        // can just use the normal invoke() method.
        return this.I(t, e, n, r, s);
    }
    /**
     * Modifies the headers for a request, adding any authorization token if
     * present and any additional headers for the request.
     */    T(t, e, n) {
        t["X-Goog-Api-Client"] = "gl-js/ fire/" + m, 
        // Content-Type: text/plain will avoid preflight requests which might
        // mess with CORS and redirects by proxies. If we add custom headers
        // we will need to change this code to potentially use the $httpOverwrite
        // parameter supported by ESF to avoid triggering preflight requests.
        t["Content-Type"] = "text/plain", this.databaseInfo.appId && (t["X-Firebase-GMPID"] = this.databaseInfo.appId), 
        e && e.headers.forEach(((e, n) => t[n] = e)), n && n.headers.forEach(((e, n) => t[n] = e));
    }
    A(t, e) {
        const n = dt[t];
        return `${this.p}/v1/${e}:${n}`;
    }
} {
    /**
     * @param databaseInfo - The connection info.
     * @param fetchImpl - `fetch` or a Polyfill that implements the fetch API.
     */
    constructor(t, e) {
        super(t), this.V = e;
    }
    $(t, e) {
        throw new Error("Not supported by FetchConnection");
    }
    async R(t, e, n, r) {
        var s;
        const i = JSON.stringify(r);
        let o;
        try {
            o = await this.V(e, {
                method: "POST",
                headers: n,
                body: i
            });
        } catch (t) {
            const e = t;
            throw new j(pt(e.status), "Request failed with error: " + e.statusText);
        }
        if (!o.ok) {
            let t = await o.json();
            Array.isArray(t) && (t = t[0]);
            const e = null === (s = null == t ? void 0 : t.error) || void 0 === s ? void 0 : s.message;
            throw new j(pt(o.status), `Request failed with error: ${null != e ? e : o.statusText}`);
        }
        return o.json();
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Initializes the HTTP connection for the REST API. */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Generates `nBytes` of random bytes.
 *
 * If `nBytes < 0` , an error will be thrown.
 */
function gt(t) {
    // Polyfills for IE and WebWorker by using `self` and `msCrypto` when `crypto` is not available.
    const e = 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    "undefined" != typeof self && (self.crypto || self.msCrypto), n = new Uint8Array(t);
    if (e && "function" == typeof e.getRandomValues) e.getRandomValues(n); else 
    // Falls back to Math.random
    for (let e = 0; e < t; e++) n[e] = Math.floor(256 * Math.random());
    return n;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _t {
    static N() {
        // Alphanumeric characters
        const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t.length) * t.length;
        // The largest byte value that is a multiple of `char.length`.
                let n = "";
        for (;n.length < 20; ) {
            const r = gt(40);
            for (let s = 0; s < r.length; ++s) 
            // Only accept values that are [0, maxMultiple), this ensures they can
            // be evenly mapped to indices of `chars` via a modulo operation.
            n.length < 20 && r[s] < e && (n += t.charAt(r[s] % t.length));
        }
        return n;
    }
}

function vt(t, e) {
    return t < e ? -1 : t > e ? 1 : 0;
}

/** Helper to compare arrays using isEqual(). */ function bt(t, e, n) {
    return t.length === e.length && t.every(((t, r) => n(t, e[r])));
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Et(t) {
    let e = 0;
    for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
    return e;
}

function It(t, e) {
    for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
}

/** Converts a Base64 encoded string to a binary string. */
function At(t) {
    return String.fromCharCode.apply(null, 
    // We use `decodeStringToByteArray()` instead of `decodeString()` since
    // `decodeString()` returns Unicode strings, which doesn't match the values
    // returned by `atob()`'s Latin1 representation.
    a.decodeStringToByteArray(t, false));
}

/** Converts a binary string to a Base64 encoded string. */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Immutable class that represents a "proto" byte string.
 *
 * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
 * sent on the wire. This class abstracts away this differentiation by holding
 * the proto byte string in a common class that must be converted into a string
 * before being sent as a proto.
 * @internal
 */
class Tt {
    constructor(t) {
        this.binaryString = t;
    }
    static fromBase64String(t) {
        const e = At(t);
        return new Tt(e);
    }
    static fromUint8Array(t) {
        // TODO(indexing); Remove the copy of the byte string here as this method
        // is frequently called during indexing.
        const e = 
        /**
 * Helper function to convert an Uint8array to a binary string.
 */
        function(t) {
            let e = "";
            for (let n = 0; n < t.length; ++n) e += String.fromCharCode(t[n]);
            return e;
        }
        /**
 * Helper function to convert a binary string to an Uint8Array.
 */ (t);
        return new Tt(e);
    }
    [Symbol.iterator]() {
        let t = 0;
        return {
            next: () => t < this.binaryString.length ? {
                value: this.binaryString.charCodeAt(t++),
                done: !1
            } : {
                value: void 0,
                done: !0
            }
        };
    }
    toBase64() {
        return function(t) {
            const e = [];
            for (let n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
            return a.encodeByteArray(e, !1);
        }(this.binaryString);
    }
    toUint8Array() {
        return function(t) {
            const e = new Uint8Array(t.length);
            for (let n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
            return e;
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        // A RegExp matching ISO 8601 UTC timestamps with optional fraction.
        (this.binaryString);
    }
    approximateByteSize() {
        return 2 * this.binaryString.length;
    }
    compareTo(t) {
        return vt(this.binaryString, t.binaryString);
    }
    isEqual(t) {
        return this.binaryString === t.binaryString;
    }
}

Tt.EMPTY_BYTE_STRING = new Tt("");

const Rt = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

/**
 * Converts the possible Proto values for a timestamp value into a "seconds and
 * nanos" representation.
 */ function Pt(t) {
    // The json interface (for the browser) will return an iso timestamp string,
    // while the proto js library (for node) will return a
    // google.protobuf.Timestamp instance.
    if (I(!!t), "string" == typeof t) {
        // The date string can have higher precision (nanos) than the Date class
        // (millis), so we do some custom parsing here.
        // Parse the nanos right out of the string.
        let e = 0;
        const n = Rt.exec(t);
        if (I(!!n), n[1]) {
            // Pad the fraction out to 9 digits (nanos).
            let t = n[1];
            t = (t + "000000000").substr(0, 9), e = Number(t);
        }
        // Parse the date to get the seconds.
                const r = new Date(t);
        return {
            seconds: Math.floor(r.getTime() / 1e3),
            nanos: e
        };
    }
    return {
        seconds: Vt(t.seconds),
        nanos: Vt(t.nanos)
    };
}

/**
 * Converts the possible Proto types for numbers into a JavaScript number.
 * Returns 0 if the value is not numeric.
 */ function Vt(t) {
    // TODO(bjornick): Handle int64 greater than 53 bits.
    return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0;
}

/** Converts the possible Proto types for Blobs into a ByteString. */ function $t(t) {
    return "string" == typeof t ? Tt.fromBase64String(t) : Tt.fromUint8Array(t);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// The earliest date supported by Firestore timestamps (0001-01-01T00:00:00Z).
/**
 * A `Timestamp` represents a point in time independent of any time zone or
 * calendar, represented as seconds and fractions of seconds at nanosecond
 * resolution in UTC Epoch time.
 *
 * It is encoded using the Proleptic Gregorian Calendar which extends the
 * Gregorian calendar backwards to year one. It is encoded assuming all minutes
 * are 60 seconds long, i.e. leap seconds are "smeared" so that no leap second
 * table is needed for interpretation. Range is from 0001-01-01T00:00:00Z to
 * 9999-12-31T23:59:59.999999999Z.
 *
 * For examples and further specifications, refer to the
 * {@link https://github.com/google/protobuf/blob/master/src/google/protobuf/timestamp.proto | Timestamp definition}.
 */
class Nt {
    /**
     * Creates a new timestamp.
     *
     * @param seconds - The number of seconds of UTC time since Unix epoch
     *     1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
     *     9999-12-31T23:59:59Z inclusive.
     * @param nanoseconds - The non-negative fractions of a second at nanosecond
     *     resolution. Negative second values with fractions must still have
     *     non-negative nanoseconds values that count forward in time. Must be
     *     from 0 to 999,999,999 inclusive.
     */
    constructor(
    /**
     * The number of seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z.
     */
    t, 
    /**
     * The fractions of a second at nanosecond resolution.*
     */
    e) {
        if (this.seconds = t, this.nanoseconds = e, e < 0) throw new j(V, "Timestamp nanoseconds out of range: " + e);
        if (e >= 1e9) throw new j(V, "Timestamp nanoseconds out of range: " + e);
        if (t < -62135596800) throw new j(V, "Timestamp seconds out of range: " + t);
        // This will break in the year 10,000.
                if (t >= 253402300800) throw new j(V, "Timestamp seconds out of range: " + t);
    }
    /**
     * Creates a new timestamp with the current date, with millisecond precision.
     *
     * @returns a new timestamp representing the current date.
     */    static now() {
        return Nt.fromMillis(Date.now());
    }
    /**
     * Creates a new timestamp from the given date.
     *
     * @param date - The date to initialize the `Timestamp` from.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     date.
     */    static fromDate(t) {
        return Nt.fromMillis(t.getTime());
    }
    /**
     * Creates a new timestamp from the given number of milliseconds.
     *
     * @param milliseconds - Number of milliseconds since Unix epoch
     *     1970-01-01T00:00:00Z.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     number of milliseconds.
     */    static fromMillis(t) {
        const e = Math.floor(t / 1e3), n = Math.floor(1e6 * (t - 1e3 * e));
        return new Nt(e, n);
    }
    /**
     * Converts a `Timestamp` to a JavaScript `Date` object. This conversion
     * causes a loss of precision since `Date` objects only support millisecond
     * precision.
     *
     * @returns JavaScript `Date` object representing the same point in time as
     *     this `Timestamp`, with millisecond precision.
     */    toDate() {
        return new Date(this.toMillis());
    }
    /**
     * Converts a `Timestamp` to a numeric timestamp (in milliseconds since
     * epoch). This operation causes a loss of precision.
     *
     * @returns The point in time corresponding to this timestamp, represented as
     *     the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
     */    toMillis() {
        return 1e3 * this.seconds + this.nanoseconds / 1e6;
    }
    _compareTo(t) {
        return this.seconds === t.seconds ? vt(this.nanoseconds, t.nanoseconds) : vt(this.seconds, t.seconds);
    }
    /**
     * Returns true if this `Timestamp` is equal to the provided one.
     *
     * @param other - The `Timestamp` to compare against.
     * @returns true if this `Timestamp` is equal to the provided one.
     */    isEqual(t) {
        return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
    }
    /** Returns a textual representation of this `Timestamp`. */    toString() {
        return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
    }
    /** Returns a JSON-serializable representation of this `Timestamp`. */    toJSON() {
        return {
            seconds: this.seconds,
            nanoseconds: this.nanoseconds
        };
    }
    /**
     * Converts this object to a primitive string, which allows `Timestamp` objects
     * to be compared using the `>`, `<=`, `>=` and `>` operators.
     */    valueOf() {
        // This method returns a string of the form <seconds>.<nanoseconds> where
        // <seconds> is translated to have a non-negative value and both <seconds>
        // and <nanoseconds> are left-padded with zeroes to be a consistent length.
        // Strings with this format then have a lexiographical ordering that matches
        // the expected ordering. The <seconds> translation is done to avoid having
        // a leading negative sign (i.e. a leading '-' character) in its string
        // representation, which would affect its lexiographical ordering.
        const t = this.seconds - -62135596800;
        // Note: Up to 12 decimal digits are required to represent all valid
        // 'seconds' values.
                return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Represents a locally-applied ServerTimestamp.
 *
 * Server Timestamps are backed by MapValues that contain an internal field
 * `__type__` with a value of `server_timestamp`. The previous value and local
 * write time are stored in its `__previous_value__` and `__local_write_time__`
 * fields respectively.
 *
 * Notes:
 * - ServerTimestampValue instances are created as the result of applying a
 *   transform. They can only exist in the local view of a document. Therefore
 *   they do not need to be parsed or serialized.
 * - When evaluated locally (e.g. for snapshot.data()), they by default
 *   evaluate to `null`. This behavior can be configured by passing custom
 *   FieldValueOptions to value().
 * - With respect to other ServerTimestampValues, they sort by their
 *   localWriteTime.
 */ function Dt(t) {
    var e, n;
    return "server_timestamp" === (null === (n = ((null === (e = null == t ? void 0 : t.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue);
}

/**
 * Returns the value of the field before this ServerTimestamp was set.
 *
 * Preserving the previous values allows the user to display the last resoled
 * value until the backend responds with the timestamp.
 */ function Ft(t) {
    const e = t.mapValue.fields.__previous_value__;
    return Dt(e) ? Ft(e) : e;
}

/**
 * Returns the local time at which this timestamp was first set.
 */ function xt(t) {
    const e = Pt(t.mapValue.fields.__local_write_time__.timestampValue);
    return new Nt(e.seconds, e.nanos);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const St = {
    fields: {
        __type__: {
            stringValue: "__max__"
        }
    }
};

/** Extracts the backend's type order for the provided value. */
function qt(t) {
    return "nullValue" in t ? 0 /* TypeOrder.NullValue */ : "booleanValue" in t ? 1 /* TypeOrder.BooleanValue */ : "integerValue" in t || "doubleValue" in t ? 2 /* TypeOrder.NumberValue */ : "timestampValue" in t ? 3 /* TypeOrder.TimestampValue */ : "stringValue" in t ? 5 /* TypeOrder.StringValue */ : "bytesValue" in t ? 6 /* TypeOrder.BlobValue */ : "referenceValue" in t ? 7 /* TypeOrder.RefValue */ : "geoPointValue" in t ? 8 /* TypeOrder.GeoPointValue */ : "arrayValue" in t ? 9 /* TypeOrder.ArrayValue */ : "mapValue" in t ? Dt(t) ? 4 /* TypeOrder.ServerTimestampValue */ : 
    /** Returns true if the Value represents the canonical {@link #MAX_VALUE} . */
    function(t) {
        return "__max__" === (((t.mapValue || {}).fields || {}).__type__ || {}).stringValue;
    }
    /**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    /**
 * Represents a bound of a query.
 *
 * The bound is specified with the given components representing a position and
 * whether it's just before or just after the position (relative to whatever the
 * query order is).
 *
 * The position represents a logical index position for a query. It's a prefix
 * of values for the (potentially implicit) order by clauses of a query.
 *
 * Bound provides a function to determine whether a document comes before or
 * after a bound. This is influenced by whether the position is just before or
 * just after the provided values.
 */ (t) ? 9007199254740991 /* TypeOrder.MaxValue */ : 10 /* TypeOrder.ObjectValue */ : E();
}

/** Tests `left` and `right` for equality based on the backend semantics. */ function Ot(t, e) {
    if (t === e) return !0;
    const n = qt(t);
    if (n !== qt(e)) return !1;
    switch (n) {
      case 0 /* TypeOrder.NullValue */ :
      case 9007199254740991 /* TypeOrder.MaxValue */ :
        return !0;

      case 1 /* TypeOrder.BooleanValue */ :
        return t.booleanValue === e.booleanValue;

      case 4 /* TypeOrder.ServerTimestampValue */ :
        return xt(t).isEqual(xt(e));

      case 3 /* TypeOrder.TimestampValue */ :
        return function(t, e) {
            if ("string" == typeof t.timestampValue && "string" == typeof e.timestampValue && t.timestampValue.length === e.timestampValue.length) 
            // Use string equality for ISO 8601 timestamps
            return t.timestampValue === e.timestampValue;
            const n = Pt(t.timestampValue), r = Pt(e.timestampValue);
            return n.seconds === r.seconds && n.nanos === r.nanos;
        }(t, e);

      case 5 /* TypeOrder.StringValue */ :
        return t.stringValue === e.stringValue;

      case 6 /* TypeOrder.BlobValue */ :
        return function(t, e) {
            return $t(t.bytesValue).isEqual($t(e.bytesValue));
        }(t, e);

      case 7 /* TypeOrder.RefValue */ :
        return t.referenceValue === e.referenceValue;

      case 8 /* TypeOrder.GeoPointValue */ :
        return function(t, e) {
            return Vt(t.geoPointValue.latitude) === Vt(e.geoPointValue.latitude) && Vt(t.geoPointValue.longitude) === Vt(e.geoPointValue.longitude);
        }(t, e);

      case 2 /* TypeOrder.NumberValue */ :
        return function(t, e) {
            if ("integerValue" in t && "integerValue" in e) return Vt(t.integerValue) === Vt(e.integerValue);
            if ("doubleValue" in t && "doubleValue" in e) {
                const n = Vt(t.doubleValue), r = Vt(e.doubleValue);
                return n === r ? ft(n) === ft(r) : isNaN(n) && isNaN(r);
            }
            return !1;
        }(t, e);

      case 9 /* TypeOrder.ArrayValue */ :
        return bt(t.arrayValue.values || [], e.arrayValue.values || [], Ot);

      case 10 /* TypeOrder.ObjectValue */ :
        return function(t, e) {
            const n = t.mapValue.fields || {}, r = e.mapValue.fields || {};
            if (Et(n) !== Et(r)) return !1;
            for (const t in n) if (n.hasOwnProperty(t) && (void 0 === r[t] || !Ot(n[t], r[t]))) return !1;
            return !0;
        }
        /** Returns true if the ArrayValue contains the specified element. */ (t, e);

      default:
        return E();
    }
}

function kt(t, e) {
    return void 0 !== (t.values || []).find((t => Ot(t, e)));
}

function Ct(t, e) {
    if (t === e) return 0;
    const n = qt(t), r = qt(e);
    if (n !== r) return vt(n, r);
    switch (n) {
      case 0 /* TypeOrder.NullValue */ :
      case 9007199254740991 /* TypeOrder.MaxValue */ :
        return 0;

      case 1 /* TypeOrder.BooleanValue */ :
        return vt(t.booleanValue, e.booleanValue);

      case 2 /* TypeOrder.NumberValue */ :
        return function(t, e) {
            const n = Vt(t.integerValue || t.doubleValue), r = Vt(e.integerValue || e.doubleValue);
            return n < r ? -1 : n > r ? 1 : n === r ? 0 : 
            // one or both are NaN.
            isNaN(n) ? isNaN(r) ? 0 : -1 : 1;
        }(t, e);

      case 3 /* TypeOrder.TimestampValue */ :
        return Lt(t.timestampValue, e.timestampValue);

      case 4 /* TypeOrder.ServerTimestampValue */ :
        return Lt(xt(t), xt(e));

      case 5 /* TypeOrder.StringValue */ :
        return vt(t.stringValue, e.stringValue);

      case 6 /* TypeOrder.BlobValue */ :
        return function(t, e) {
            const n = $t(t), r = $t(e);
            return n.compareTo(r);
        }(t.bytesValue, e.bytesValue);

      case 7 /* TypeOrder.RefValue */ :
        return function(t, e) {
            const n = t.split("/"), r = e.split("/");
            for (let t = 0; t < n.length && t < r.length; t++) {
                const e = vt(n[t], r[t]);
                if (0 !== e) return e;
            }
            return vt(n.length, r.length);
        }(t.referenceValue, e.referenceValue);

      case 8 /* TypeOrder.GeoPointValue */ :
        return function(t, e) {
            const n = vt(Vt(t.latitude), Vt(e.latitude));
            if (0 !== n) return n;
            return vt(Vt(t.longitude), Vt(e.longitude));
        }(t.geoPointValue, e.geoPointValue);

      case 9 /* TypeOrder.ArrayValue */ :
        return function(t, e) {
            const n = t.values || [], r = e.values || [];
            for (let t = 0; t < n.length && t < r.length; ++t) {
                const e = Ct(n[t], r[t]);
                if (e) return e;
            }
            return vt(n.length, r.length);
        }(t.arrayValue, e.arrayValue);

      case 10 /* TypeOrder.ObjectValue */ :
        return function(t, e) {
            if (t === St && e === St) return 0;
            if (t === St) return 1;
            if (e === St) return -1;
            const n = t.fields || {}, r = Object.keys(n), s = e.fields || {}, i = Object.keys(s);
            // Even though MapValues are likely sorted correctly based on their insertion
            // order (e.g. when received from the backend), local modifications can bring
            // elements out of order. We need to re-sort the elements to ensure that
            // canonical IDs are independent of insertion order.
            r.sort(), i.sort();
            for (let t = 0; t < r.length && t < i.length; ++t) {
                const e = vt(r[t], i[t]);
                if (0 !== e) return e;
                const o = Ct(n[r[t]], s[i[t]]);
                if (0 !== o) return o;
            }
            return vt(r.length, i.length);
        }
        /** Returns a reference value for the provided database and key. */ (t.mapValue, e.mapValue);

      default:
        throw E();
    }
}

function Lt(t, e) {
    if ("string" == typeof t && "string" == typeof e && t.length === e.length) return vt(t, e);
    const n = Pt(t), r = Pt(e), s = vt(n.seconds, r.seconds);
    return 0 !== s ? s : vt(n.nanos, r.nanos);
}

function Mt(t, e) {
    return {
        referenceValue: `projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`
    };
}

/** Returns true if `value` is an ArrayValue. */ function Ut(t) {
    return !!t && "arrayValue" in t;
}

/** Returns true if `value` is a NullValue. */ function jt(t) {
    return !!t && "nullValue" in t;
}

/** Returns true if `value` is NaN. */ function Bt(t) {
    return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
}

/** Returns true if `value` is a MapValue. */ function Qt(t) {
    return !!t && "mapValue" in t;
}

/** Creates a deep copy of `source`. */ function zt(t) {
    if (t.geoPointValue) return {
        geoPointValue: Object.assign({}, t.geoPointValue)
    };
    if (t.timestampValue && "object" == typeof t.timestampValue) return {
        timestampValue: Object.assign({}, t.timestampValue)
    };
    if (t.mapValue) {
        const e = {
            mapValue: {
                fields: {}
            }
        };
        return It(t.mapValue.fields, ((t, n) => e.mapValue.fields[t] = zt(n))), e;
    }
    if (t.arrayValue) {
        const e = {
            arrayValue: {
                values: []
            }
        };
        for (let n = 0; n < (t.arrayValue.values || []).length; ++n) e.arrayValue.values[n] = zt(t.arrayValue.values[n]);
        return e;
    }
    return Object.assign({}, t);
}

class Wt {
    constructor(t, e) {
        this.position = t, this.inclusive = e;
    }
}

function Gt(t, e) {
    if (null === t) return null === e;
    if (null === e) return !1;
    if (t.inclusive !== e.inclusive || t.position.length !== e.position.length) return !1;
    for (let n = 0; n < t.position.length; n++) {
        if (!Ot(t.position[n], e.position[n])) return !1;
    }
    return !0;
}

/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Kt {}

class Yt extends Kt {
    constructor(t, e, n) {
        super(), this.field = t, this.op = e, this.value = n;
    }
    /**
     * Creates a filter based on the provided arguments.
     */    static create(t, e, n) {
        return t.isKeyField() ? "in" /* Operator.IN */ === e || "not-in" /* Operator.NOT_IN */ === e ? this.createKeyFieldInFilter(t, e, n) : new Xt(t, e, n) : "array-contains" /* Operator.ARRAY_CONTAINS */ === e ? new ne(t, n) : "in" /* Operator.IN */ === e ? new re(t, n) : "not-in" /* Operator.NOT_IN */ === e ? new se(t, n) : "array-contains-any" /* Operator.ARRAY_CONTAINS_ANY */ === e ? new ie(t, n) : new Yt(t, e, n);
    }
    static createKeyFieldInFilter(t, e, n) {
        return "in" /* Operator.IN */ === e ? new Zt(t, n) : new te(t, n);
    }
    matches(t) {
        const e = t.data.field(this.field);
        // Types do not have to match in NOT_EQUAL filters.
                return "!=" /* Operator.NOT_EQUAL */ === this.op ? null !== e && this.matchesComparison(Ct(e, this.value)) : null !== e && qt(this.value) === qt(e) && this.matchesComparison(Ct(e, this.value));
        // Only compare types with matching backend order (such as double and int).
        }
    matchesComparison(t) {
        switch (this.op) {
          case "<" /* Operator.LESS_THAN */ :
            return t < 0;

          case "<=" /* Operator.LESS_THAN_OR_EQUAL */ :
            return t <= 0;

          case "==" /* Operator.EQUAL */ :
            return 0 === t;

          case "!=" /* Operator.NOT_EQUAL */ :
            return 0 !== t;

          case ">" /* Operator.GREATER_THAN */ :
            return t > 0;

          case ">=" /* Operator.GREATER_THAN_OR_EQUAL */ :
            return t >= 0;

          default:
            return E();
        }
    }
    isInequality() {
        return [ "<" /* Operator.LESS_THAN */ , "<=" /* Operator.LESS_THAN_OR_EQUAL */ , ">" /* Operator.GREATER_THAN */ , ">=" /* Operator.GREATER_THAN_OR_EQUAL */ , "!=" /* Operator.NOT_EQUAL */ , "not-in" /* Operator.NOT_IN */ ].indexOf(this.op) >= 0;
    }
    getFlattenedFilters() {
        return [ this ];
    }
    getFilters() {
        return [ this ];
    }
    getFirstInequalityField() {
        return this.isInequality() ? this.field : null;
    }
}

class Ht extends Kt {
    constructor(t, e) {
        super(), this.filters = t, this.op = e, this.D = null;
    }
    /**
     * Creates a filter based on the provided arguments.
     */    static create(t, e) {
        return new Ht(t, e);
    }
    matches(t) {
        return "and" /* CompositeOperator.AND */ === this.op ? void 0 === this.filters.find((e => !e.matches(t))) : void 0 !== this.filters.find((e => e.matches(t)));
    }
    getFlattenedFilters() {
        return null !== this.D || (this.D = this.filters.reduce(((t, e) => t.concat(e.getFlattenedFilters())), [])), 
        this.D;
    }
    // Returns a mutable copy of `this.filters`
    getFilters() {
        return Object.assign([], this.filters);
    }
    getFirstInequalityField() {
        const t = this.F((t => t.isInequality()));
        return null !== t ? t.field : null;
    }
    // Performs a depth-first search to find and return the first FieldFilter in the composite filter
    // that satisfies the predicate. Returns `null` if none of the FieldFilters satisfy the
    // predicate.
    F(t) {
        for (const e of this.getFlattenedFilters()) if (t(e)) return e;
        return null;
    }
}

function Jt(t, e) {
    return t instanceof Yt ? function(t, e) {
        return e instanceof Yt && t.op === e.op && t.field.isEqual(e.field) && Ot(t.value, e.value);
    }(t, e) : t instanceof Ht ? function(t, e) {
        if (e instanceof Ht && t.op === e.op && t.filters.length === e.filters.length) {
            return t.filters.reduce(((t, n, r) => t && Jt(n, e.filters[r])), !0);
        }
        return !1;
    }
    /** Filter that matches on key fields (i.e. '__name__'). */ (t, e) : void E();
}

class Xt extends Yt {
    constructor(t, e, n) {
        super(t, e, n), this.key = st.fromName(n.referenceValue);
    }
    matches(t) {
        const e = st.comparator(t.key, this.key);
        return this.matchesComparison(e);
    }
}

/** Filter that matches on key fields within an array. */ class Zt extends Yt {
    constructor(t, e) {
        super(t, "in" /* Operator.IN */ , e), this.keys = ee("in" /* Operator.IN */ , e);
    }
    matches(t) {
        return this.keys.some((e => e.isEqual(t.key)));
    }
}

/** Filter that matches on key fields not present within an array. */ class te extends Yt {
    constructor(t, e) {
        super(t, "not-in" /* Operator.NOT_IN */ , e), this.keys = ee("not-in" /* Operator.NOT_IN */ , e);
    }
    matches(t) {
        return !this.keys.some((e => e.isEqual(t.key)));
    }
}

function ee(t, e) {
    var n;
    return ((null === (n = e.arrayValue) || void 0 === n ? void 0 : n.values) || []).map((t => st.fromName(t.referenceValue)));
}

/** A Filter that implements the array-contains operator. */ class ne extends Yt {
    constructor(t, e) {
        super(t, "array-contains" /* Operator.ARRAY_CONTAINS */ , e);
    }
    matches(t) {
        const e = t.data.field(this.field);
        return Ut(e) && kt(e.arrayValue, this.value);
    }
}

/** A Filter that implements the IN operator. */ class re extends Yt {
    constructor(t, e) {
        super(t, "in" /* Operator.IN */ , e);
    }
    matches(t) {
        const e = t.data.field(this.field);
        return null !== e && kt(this.value.arrayValue, e);
    }
}

/** A Filter that implements the not-in operator. */ class se extends Yt {
    constructor(t, e) {
        super(t, "not-in" /* Operator.NOT_IN */ , e);
    }
    matches(t) {
        if (kt(this.value.arrayValue, {
            nullValue: "NULL_VALUE"
        })) return !1;
        const e = t.data.field(this.field);
        return null !== e && !kt(this.value.arrayValue, e);
    }
}

/** A Filter that implements the array-contains-any operator. */ class ie extends Yt {
    constructor(t, e) {
        super(t, "array-contains-any" /* Operator.ARRAY_CONTAINS_ANY */ , e);
    }
    matches(t) {
        const e = t.data.field(this.field);
        return !(!Ut(e) || !e.arrayValue.values) && e.arrayValue.values.some((t => kt(this.value.arrayValue, t)));
    }
}

/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An ordering on a field, in some Direction. Direction defaults to ASCENDING.
 */ class oe {
    constructor(t, e = "asc" /* Direction.ASCENDING */) {
        this.field = t, this.dir = e;
    }
}

function ue(t, e) {
    return t.dir === e.dir && t.field.isEqual(e.field);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A version of a document in Firestore. This corresponds to the version
 * timestamp, such as update_time or read_time.
 */ class ce {
    constructor(t) {
        this.timestamp = t;
    }
    static fromTimestamp(t) {
        return new ce(t);
    }
    static min() {
        return new ce(new Nt(0, 0));
    }
    static max() {
        return new ce(new Nt(253402300799, 999999999));
    }
    compareTo(t) {
        return this.timestamp._compareTo(t.timestamp);
    }
    isEqual(t) {
        return this.timestamp.isEqual(t.timestamp);
    }
    /** Returns a number representation of the version for use in spec tests. */    toMicroseconds() {
        // Convert to microseconds.
        return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
    }
    toString() {
        return "SnapshotVersion(" + this.timestamp.toString() + ")";
    }
    toTimestamp() {
        return this.timestamp;
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// An immutable sorted map implementation, based on a Left-leaning Red-Black
// tree.
class ae {
    constructor(t, e) {
        this.comparator = t, this.root = e || le.EMPTY;
    }
    // Returns a copy of the map, with the specified key/value added or replaced.
    insert(t, e) {
        return new ae(this.comparator, this.root.insert(t, e, this.comparator).copy(null, null, le.BLACK, null, null));
    }
    // Returns a copy of the map, with the specified key removed.
    remove(t) {
        return new ae(this.comparator, this.root.remove(t, this.comparator).copy(null, null, le.BLACK, null, null));
    }
    // Returns the value of the node with the given key, or null.
    get(t) {
        let e = this.root;
        for (;!e.isEmpty(); ) {
            const n = this.comparator(t, e.key);
            if (0 === n) return e.value;
            n < 0 ? e = e.left : n > 0 && (e = e.right);
        }
        return null;
    }
    // Returns the index of the element in this sorted map, or -1 if it doesn't
    // exist.
    indexOf(t) {
        // Number of nodes that were pruned when descending right
        let e = 0, n = this.root;
        for (;!n.isEmpty(); ) {
            const r = this.comparator(t, n.key);
            if (0 === r) return e + n.left.size;
            r < 0 ? n = n.left : (
            // Count all nodes left of the node plus the node itself
            e += n.left.size + 1, n = n.right);
        }
        // Node not found
                return -1;
    }
    isEmpty() {
        return this.root.isEmpty();
    }
    // Returns the total number of nodes in the map.
    get size() {
        return this.root.size;
    }
    // Returns the minimum key in the map.
    minKey() {
        return this.root.minKey();
    }
    // Returns the maximum key in the map.
    maxKey() {
        return this.root.maxKey();
    }
    // Traverses the map in key order and calls the specified action function
    // for each key/value pair. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    inorderTraversal(t) {
        return this.root.inorderTraversal(t);
    }
    forEach(t) {
        this.inorderTraversal(((e, n) => (t(e, n), !1)));
    }
    toString() {
        const t = [];
        return this.inorderTraversal(((e, n) => (t.push(`${e}:${n}`), !1))), `{${t.join(", ")}}`;
    }
    // Traverses the map in reverse key order and calls the specified action
    // function for each key/value pair. If action returns true, traversal is
    // aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    reverseTraversal(t) {
        return this.root.reverseTraversal(t);
    }
    // Returns an iterator over the SortedMap.
    getIterator() {
        return new he(this.root, null, this.comparator, !1);
    }
    getIteratorFrom(t) {
        return new he(this.root, t, this.comparator, !1);
    }
    getReverseIterator() {
        return new he(this.root, null, this.comparator, !0);
    }
    getReverseIteratorFrom(t) {
        return new he(this.root, t, this.comparator, !0);
    }
}

 // end SortedMap
// An iterator over an LLRBNode.
class he {
    constructor(t, e, n, r) {
        this.isReverse = r, this.nodeStack = [];
        let s = 1;
        for (;!t.isEmpty(); ) if (s = e ? n(t.key, e) : 1, 
        // flip the comparison if we're going in reverse
        e && r && (s *= -1), s < 0) 
        // This node is less than our start key. ignore it
        t = this.isReverse ? t.left : t.right; else {
            if (0 === s) {
                // This node is exactly equal to our start key. Push it on the stack,
                // but stop iterating;
                this.nodeStack.push(t);
                break;
            }
            // This node is greater than our start key, add it to the stack and move
            // to the next one
            this.nodeStack.push(t), t = this.isReverse ? t.right : t.left;
        }
    }
    getNext() {
        let t = this.nodeStack.pop();
        const e = {
            key: t.key,
            value: t.value
        };
        if (this.isReverse) for (t = t.left; !t.isEmpty(); ) this.nodeStack.push(t), t = t.right; else for (t = t.right; !t.isEmpty(); ) this.nodeStack.push(t), 
        t = t.left;
        return e;
    }
    hasNext() {
        return this.nodeStack.length > 0;
    }
    peek() {
        if (0 === this.nodeStack.length) return null;
        const t = this.nodeStack[this.nodeStack.length - 1];
        return {
            key: t.key,
            value: t.value
        };
    }
}

 // end SortedMapIterator
// Represents a node in a Left-leaning Red-Black tree.
class le {
    constructor(t, e, n, r, s) {
        this.key = t, this.value = e, this.color = null != n ? n : le.RED, this.left = null != r ? r : le.EMPTY, 
        this.right = null != s ? s : le.EMPTY, this.size = this.left.size + 1 + this.right.size;
    }
    // Returns a copy of the current node, optionally replacing pieces of it.
    copy(t, e, n, r, s) {
        return new le(null != t ? t : this.key, null != e ? e : this.value, null != n ? n : this.color, null != r ? r : this.left, null != s ? s : this.right);
    }
    isEmpty() {
        return !1;
    }
    // Traverses the tree in key order and calls the specified action function
    // for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    inorderTraversal(t) {
        return this.left.inorderTraversal(t) || t(this.key, this.value) || this.right.inorderTraversal(t);
    }
    // Traverses the tree in reverse key order and calls the specified action
    // function for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    reverseTraversal(t) {
        return this.right.reverseTraversal(t) || t(this.key, this.value) || this.left.reverseTraversal(t);
    }
    // Returns the minimum node in the tree.
    min() {
        return this.left.isEmpty() ? this : this.left.min();
    }
    // Returns the maximum key in the tree.
    minKey() {
        return this.min().key;
    }
    // Returns the maximum key in the tree.
    maxKey() {
        return this.right.isEmpty() ? this.key : this.right.maxKey();
    }
    // Returns new tree, with the key/value added.
    insert(t, e, n) {
        let r = this;
        const s = n(t, r.key);
        return r = s < 0 ? r.copy(null, null, null, r.left.insert(t, e, n), null) : 0 === s ? r.copy(null, e, null, null, null) : r.copy(null, null, null, null, r.right.insert(t, e, n)), 
        r.fixUp();
    }
    removeMin() {
        if (this.left.isEmpty()) return le.EMPTY;
        let t = this;
        return t.left.isRed() || t.left.left.isRed() || (t = t.moveRedLeft()), t = t.copy(null, null, null, t.left.removeMin(), null), 
        t.fixUp();
    }
    // Returns new tree, with the specified item removed.
    remove(t, e) {
        let n, r = this;
        if (e(t, r.key) < 0) r.left.isEmpty() || r.left.isRed() || r.left.left.isRed() || (r = r.moveRedLeft()), 
        r = r.copy(null, null, null, r.left.remove(t, e), null); else {
            if (r.left.isRed() && (r = r.rotateRight()), r.right.isEmpty() || r.right.isRed() || r.right.left.isRed() || (r = r.moveRedRight()), 
            0 === e(t, r.key)) {
                if (r.right.isEmpty()) return le.EMPTY;
                n = r.right.min(), r = r.copy(n.key, n.value, null, null, r.right.removeMin());
            }
            r = r.copy(null, null, null, null, r.right.remove(t, e));
        }
        return r.fixUp();
    }
    isRed() {
        return this.color;
    }
    // Returns new tree after performing any needed rotations.
    fixUp() {
        let t = this;
        return t.right.isRed() && !t.left.isRed() && (t = t.rotateLeft()), t.left.isRed() && t.left.left.isRed() && (t = t.rotateRight()), 
        t.left.isRed() && t.right.isRed() && (t = t.colorFlip()), t;
    }
    moveRedLeft() {
        let t = this.colorFlip();
        return t.right.left.isRed() && (t = t.copy(null, null, null, null, t.right.rotateRight()), 
        t = t.rotateLeft(), t = t.colorFlip()), t;
    }
    moveRedRight() {
        let t = this.colorFlip();
        return t.left.left.isRed() && (t = t.rotateRight(), t = t.colorFlip()), t;
    }
    rotateLeft() {
        const t = this.copy(null, null, le.RED, null, this.right.left);
        return this.right.copy(null, null, this.color, t, null);
    }
    rotateRight() {
        const t = this.copy(null, null, le.RED, this.left.right, null);
        return this.left.copy(null, null, this.color, null, t);
    }
    colorFlip() {
        const t = this.left.copy(null, null, !this.left.color, null, null), e = this.right.copy(null, null, !this.right.color, null, null);
        return this.copy(null, null, !this.color, t, e);
    }
    // For testing.
    checkMaxDepth() {
        const t = this.check();
        return Math.pow(2, t) <= this.size + 1;
    }
    // In a balanced RB tree, the black-depth (number of black nodes) from root to
    // leaves is equal on both sides.  This function verifies that or asserts.
    check() {
        if (this.isRed() && this.left.isRed()) throw E();
        if (this.right.isRed()) throw E();
        const t = this.left.check();
        if (t !== this.right.check()) throw E();
        return t + (this.isRed() ? 0 : 1);
    }
}

 // end LLRBNode
// Empty node is shared between all LLRB trees.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
le.EMPTY = null, le.RED = !0, le.BLACK = !1;

// end LLRBEmptyNode
le.EMPTY = new 
// Represents an empty node (a leaf node in the Red-Black Tree).
class {
    constructor() {
        this.size = 0;
    }
    get key() {
        throw E();
    }
    get value() {
        throw E();
    }
    get color() {
        throw E();
    }
    get left() {
        throw E();
    }
    get right() {
        throw E();
    }
    // Returns a copy of the current node.
    copy(t, e, n, r, s) {
        return this;
    }
    // Returns a copy of the tree, with the specified key/value added.
    insert(t, e, n) {
        return new le(t, e);
    }
    // Returns a copy of the tree, with the specified key removed.
    remove(t, e) {
        return this;
    }
    isEmpty() {
        return !0;
    }
    inorderTraversal(t) {
        return !1;
    }
    reverseTraversal(t) {
        return !1;
    }
    minKey() {
        return null;
    }
    maxKey() {
        return null;
    }
    isRed() {
        return !1;
    }
    // For testing.
    checkMaxDepth() {
        return !0;
    }
    check() {
        return 0;
    }
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * SortedSet is an immutable (copy-on-write) collection that holds elements
 * in order specified by the provided comparator.
 *
 * NOTE: if provided comparator returns 0 for two elements, we consider them to
 * be equal!
 */
class fe {
    constructor(t) {
        this.comparator = t, this.data = new ae(this.comparator);
    }
    has(t) {
        return null !== this.data.get(t);
    }
    first() {
        return this.data.minKey();
    }
    last() {
        return this.data.maxKey();
    }
    get size() {
        return this.data.size;
    }
    indexOf(t) {
        return this.data.indexOf(t);
    }
    /** Iterates elements in order defined by "comparator" */    forEach(t) {
        this.data.inorderTraversal(((e, n) => (t(e), !1)));
    }
    /** Iterates over `elem`s such that: range[0] &lt;= elem &lt; range[1]. */    forEachInRange(t, e) {
        const n = this.data.getIteratorFrom(t[0]);
        for (;n.hasNext(); ) {
            const r = n.getNext();
            if (this.comparator(r.key, t[1]) >= 0) return;
            e(r.key);
        }
    }
    /**
     * Iterates over `elem`s such that: start &lt;= elem until false is returned.
     */    forEachWhile(t, e) {
        let n;
        for (n = void 0 !== e ? this.data.getIteratorFrom(e) : this.data.getIterator(); n.hasNext(); ) {
            if (!t(n.getNext().key)) return;
        }
    }
    /** Finds the least element greater than or equal to `elem`. */    firstAfterOrEqual(t) {
        const e = this.data.getIteratorFrom(t);
        return e.hasNext() ? e.getNext().key : null;
    }
    getIterator() {
        return new de(this.data.getIterator());
    }
    getIteratorFrom(t) {
        return new de(this.data.getIteratorFrom(t));
    }
    /** Inserts or updates an element */    add(t) {
        return this.copy(this.data.remove(t).insert(t, !0));
    }
    /** Deletes an element */    delete(t) {
        return this.has(t) ? this.copy(this.data.remove(t)) : this;
    }
    isEmpty() {
        return this.data.isEmpty();
    }
    unionWith(t) {
        let e = this;
        // Make sure `result` always refers to the larger one of the two sets.
                return e.size < t.size && (e = t, t = this), t.forEach((t => {
            e = e.add(t);
        })), e;
    }
    isEqual(t) {
        if (!(t instanceof fe)) return !1;
        if (this.size !== t.size) return !1;
        const e = this.data.getIterator(), n = t.data.getIterator();
        for (;e.hasNext(); ) {
            const t = e.getNext().key, r = n.getNext().key;
            if (0 !== this.comparator(t, r)) return !1;
        }
        return !0;
    }
    toArray() {
        const t = [];
        return this.forEach((e => {
            t.push(e);
        })), t;
    }
    toString() {
        const t = [];
        return this.forEach((e => t.push(e))), "SortedSet(" + t.toString() + ")";
    }
    copy(t) {
        const e = new fe(this.comparator);
        return e.data = t, e;
    }
}

class de {
    constructor(t) {
        this.iter = t;
    }
    getNext() {
        return this.iter.getNext().key;
    }
    hasNext() {
        return this.iter.hasNext();
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provides a set of fields that can be used to partially patch a document.
 * FieldMask is used in conjunction with ObjectValue.
 * Examples:
 *   foo - Overwrites foo entirely with the provided value. If foo is not
 *         present in the companion ObjectValue, the field is deleted.
 *   foo.bar - Overwrites only the field bar of the object foo.
 *             If foo is not an object, foo is replaced with an object
 *             containing foo
 */ class we {
    constructor(t) {
        this.fields = t, 
        // TODO(dimond): validation of FieldMask
        // Sort the field mask to support `FieldMask.isEqual()` and assert below.
        t.sort(rt.comparator);
    }
    static empty() {
        return new we([]);
    }
    /**
     * Returns a new FieldMask object that is the result of adding all the given
     * fields paths to this field mask.
     */    unionWith(t) {
        let e = new fe(rt.comparator);
        for (const t of this.fields) e = e.add(t);
        for (const n of t) e = e.add(n);
        return new we(e.toArray());
    }
    /**
     * Verifies that `fieldPath` is included by at least one field in this field
     * mask.
     *
     * This is an O(n) operation, where `n` is the size of the field mask.
     */    covers(t) {
        for (const e of this.fields) if (e.isPrefixOf(t)) return !0;
        return !1;
    }
    isEqual(t) {
        return bt(this.fields, t.fields, ((t, e) => t.isEqual(e)));
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An ObjectValue represents a MapValue in the Firestore Proto and offers the
 * ability to add and remove fields (via the ObjectValueBuilder).
 */ class me {
    constructor(t) {
        this.value = t;
    }
    static empty() {
        return new me({
            mapValue: {}
        });
    }
    /**
     * Returns the value at the given path or null.
     *
     * @param path - the path to search
     * @returns The value at the path or null if the path is not set.
     */    field(t) {
        if (t.isEmpty()) return this.value;
        {
            let e = this.value;
            for (let n = 0; n < t.length - 1; ++n) if (e = (e.mapValue.fields || {})[t.get(n)], 
            !Qt(e)) return null;
            return e = (e.mapValue.fields || {})[t.lastSegment()], e || null;
        }
    }
    /**
     * Sets the field to the provided value.
     *
     * @param path - The field path to set.
     * @param value - The value to set.
     */    set(t, e) {
        this.getFieldsMap(t.popLast())[t.lastSegment()] = zt(e);
    }
    /**
     * Sets the provided fields to the provided values.
     *
     * @param data - A map of fields to values (or null for deletes).
     */    setAll(t) {
        let e = rt.emptyPath(), n = {}, r = [];
        t.forEach(((t, s) => {
            if (!e.isImmediateParentOf(s)) {
                // Insert the accumulated changes at this parent location
                const t = this.getFieldsMap(e);
                this.applyChanges(t, n, r), n = {}, r = [], e = s.popLast();
            }
            t ? n[s.lastSegment()] = zt(t) : r.push(s.lastSegment());
        }));
        const s = this.getFieldsMap(e);
        this.applyChanges(s, n, r);
    }
    /**
     * Removes the field at the specified path. If there is no field at the
     * specified path, nothing is changed.
     *
     * @param path - The field path to remove.
     */    delete(t) {
        const e = this.field(t.popLast());
        Qt(e) && e.mapValue.fields && delete e.mapValue.fields[t.lastSegment()];
    }
    isEqual(t) {
        return Ot(this.value, t.value);
    }
    /**
     * Returns the map that contains the leaf element of `path`. If the parent
     * entry does not yet exist, or if it is not a map, a new map will be created.
     */    getFieldsMap(t) {
        let e = this.value;
        e.mapValue.fields || (e.mapValue = {
            fields: {}
        });
        for (let n = 0; n < t.length; ++n) {
            let r = e.mapValue.fields[t.get(n)];
            Qt(r) && r.mapValue.fields || (r = {
                mapValue: {
                    fields: {}
                }
            }, e.mapValue.fields[t.get(n)] = r), e = r;
        }
        return e.mapValue.fields;
    }
    /**
     * Modifies `fieldsMap` by adding, replacing or deleting the specified
     * entries.
     */    applyChanges(t, e, n) {
        It(e, ((e, n) => t[e] = n));
        for (const e of n) delete t[e];
    }
    clone() {
        return new me(zt(this.value));
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Represents a document in Firestore with a key, version, data and whether it
 * has local mutations applied to it.
 *
 * Documents can transition between states via `convertToFoundDocument()`,
 * `convertToNoDocument()` and `convertToUnknownDocument()`. If a document does
 * not transition to one of these states even after all mutations have been
 * applied, `isValidDocument()` returns false and the document should be removed
 * from all views.
 */ class pe {
    constructor(t, e, n, r, s, i, o) {
        this.key = t, this.documentType = e, this.version = n, this.readTime = r, this.createTime = s, 
        this.data = i, this.documentState = o;
    }
    /**
     * Creates a document with no known version or data, but which can serve as
     * base document for mutations.
     */    static newInvalidDocument(t) {
        return new pe(t, 0 /* DocumentType.INVALID */ , 
        /* version */ ce.min(), 
        /* readTime */ ce.min(), 
        /* createTime */ ce.min(), me.empty(), 0 /* DocumentState.SYNCED */);
    }
    /**
     * Creates a new document that is known to exist with the given data at the
     * given version.
     */    static newFoundDocument(t, e, n, r) {
        return new pe(t, 1 /* DocumentType.FOUND_DOCUMENT */ , 
        /* version */ e, 
        /* readTime */ ce.min(), 
        /* createTime */ n, r, 0 /* DocumentState.SYNCED */);
    }
    /** Creates a new document that is known to not exist at the given version. */    static newNoDocument(t, e) {
        return new pe(t, 2 /* DocumentType.NO_DOCUMENT */ , 
        /* version */ e, 
        /* readTime */ ce.min(), 
        /* createTime */ ce.min(), me.empty(), 0 /* DocumentState.SYNCED */);
    }
    /**
     * Creates a new document that is known to exist at the given version but
     * whose data is not known (e.g. a document that was updated without a known
     * base document).
     */    static newUnknownDocument(t, e) {
        return new pe(t, 3 /* DocumentType.UNKNOWN_DOCUMENT */ , 
        /* version */ e, 
        /* readTime */ ce.min(), 
        /* createTime */ ce.min(), me.empty(), 2 /* DocumentState.HAS_COMMITTED_MUTATIONS */);
    }
    /**
     * Changes the document type to indicate that it exists and that its version
     * and data are known.
     */    convertToFoundDocument(t, e) {
        // If a document is switching state from being an invalid or deleted
        // document to a valid (FOUND_DOCUMENT) document, either due to receiving an
        // update from Watch or due to applying a local set mutation on top
        // of a deleted document, our best guess about its createTime would be the
        // version at which the document transitioned to a FOUND_DOCUMENT.
        return !this.createTime.isEqual(ce.min()) || 2 /* DocumentType.NO_DOCUMENT */ !== this.documentType && 0 /* DocumentType.INVALID */ !== this.documentType || (this.createTime = t), 
        this.version = t, this.documentType = 1 /* DocumentType.FOUND_DOCUMENT */ , this.data = e, 
        this.documentState = 0 /* DocumentState.SYNCED */ , this;
    }
    /**
     * Changes the document type to indicate that it doesn't exist at the given
     * version.
     */    convertToNoDocument(t) {
        return this.version = t, this.documentType = 2 /* DocumentType.NO_DOCUMENT */ , 
        this.data = me.empty(), this.documentState = 0 /* DocumentState.SYNCED */ , this;
    }
    /**
     * Changes the document type to indicate that it exists at a given version but
     * that its data is not known (e.g. a document that was updated without a known
     * base document).
     */    convertToUnknownDocument(t) {
        return this.version = t, this.documentType = 3 /* DocumentType.UNKNOWN_DOCUMENT */ , 
        this.data = me.empty(), this.documentState = 2 /* DocumentState.HAS_COMMITTED_MUTATIONS */ , 
        this;
    }
    setHasCommittedMutations() {
        return this.documentState = 2 /* DocumentState.HAS_COMMITTED_MUTATIONS */ , this;
    }
    setHasLocalMutations() {
        return this.documentState = 1 /* DocumentState.HAS_LOCAL_MUTATIONS */ , this.version = ce.min(), 
        this;
    }
    setReadTime(t) {
        return this.readTime = t, this;
    }
    get hasLocalMutations() {
        return 1 /* DocumentState.HAS_LOCAL_MUTATIONS */ === this.documentState;
    }
    get hasCommittedMutations() {
        return 2 /* DocumentState.HAS_COMMITTED_MUTATIONS */ === this.documentState;
    }
    get hasPendingWrites() {
        return this.hasLocalMutations || this.hasCommittedMutations;
    }
    isValidDocument() {
        return 0 /* DocumentType.INVALID */ !== this.documentType;
    }
    isFoundDocument() {
        return 1 /* DocumentType.FOUND_DOCUMENT */ === this.documentType;
    }
    isNoDocument() {
        return 2 /* DocumentType.NO_DOCUMENT */ === this.documentType;
    }
    isUnknownDocument() {
        return 3 /* DocumentType.UNKNOWN_DOCUMENT */ === this.documentType;
    }
    isEqual(t) {
        return t instanceof pe && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.documentType === t.documentType && this.documentState === t.documentState && this.data.isEqual(t.data);
    }
    mutableCopy() {
        return new pe(this.key, this.documentType, this.version, this.readTime, this.createTime, this.data.clone(), this.documentState);
    }
    toString() {
        return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Visible for testing
class ye {
    constructor(t, e = null, n = [], r = [], s = null, i = null, o = null) {
        this.path = t, this.collectionGroup = e, this.orderBy = n, this.filters = r, this.limit = s, 
        this.startAt = i, this.endAt = o, this.S = null;
    }
}

/**
 * Initializes a Target with a path and optional additional query constraints.
 * Path must currently be empty if this is a collection group query.
 *
 * NOTE: you should always construct `Target` from `Query.toTarget` instead of
 * using this factory method, because `Query` provides an implicit `orderBy`
 * property.
 */ function ge(t, e = null, n = [], r = [], s = null, i = null, o = null) {
    return new ye(t, e, n, r, s, i, o);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Query encapsulates all the query attributes we support in the SDK. It can
 * be run against the LocalStore, as well as be converted to a `Target` to
 * query the RemoteStore results.
 *
 * Visible for testing.
 */
class _e {
    /**
     * Initializes a Query with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     */
    constructor(t, e = null, n = [], r = [], s = null, i = "F" /* LimitType.First */ , o = null, u = null) {
        this.path = t, this.collectionGroup = e, this.explicitOrderBy = n, this.filters = r, 
        this.limit = s, this.limitType = i, this.startAt = o, this.endAt = u, this.q = null, 
        // The corresponding `Target` of this `Query` instance.
        this.O = null, this.startAt, this.endAt;
    }
}

/** Creates a new Query for a query that matches all documents at `path` */ function ve(t) {
    return t.explicitOrderBy.length > 0 ? t.explicitOrderBy[0].field : null;
}

function be(t) {
    for (const e of t.filters) {
        const t = e.getFirstInequalityField();
        if (null !== t) return t;
    }
    return null;
}

/**
 * Creates a new Query for a collection group query that matches all documents
 * within the provided collection group.
 */
/**
 * Returns whether the query matches a collection group rather than a specific
 * collection.
 */
function Ee(t) {
    return null !== t.collectionGroup;
}

/**
 * Returns the implicit order by constraint that is used to execute the Query,
 * which can be different from the order by constraints the user provided (e.g.
 * the SDK and backend always orders by `__name__`).
 */ function Ie(t) {
    const e = A(t);
    if (null === e.q) {
        e.q = [];
        const t = be(e), n = ve(e);
        if (null !== t && null === n) 
        // In order to implicitly add key ordering, we must also add the
        // inequality filter field for it to be a valid query.
        // Note that the default inequality field and key ordering is ascending.
        t.isKeyField() || e.q.push(new oe(t)), e.q.push(new oe(rt.keyField(), "asc" /* Direction.ASCENDING */)); else {
            let t = !1;
            for (const n of e.explicitOrderBy) e.q.push(n), n.field.isKeyField() && (t = !0);
            if (!t) {
                // The order of the implicit key ordering always matches the last
                // explicit order by
                const t = e.explicitOrderBy.length > 0 ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir : "asc" /* Direction.ASCENDING */;
                e.q.push(new oe(rt.keyField(), t));
            }
        }
    }
    return e.q;
}

/**
 * Converts this `Query` instance to it's corresponding `Target` representation.
 */ function Ae(t) {
    const e = A(t);
    if (!e.O) if ("F" /* LimitType.First */ === e.limitType) e.O = ge(e.path, e.collectionGroup, Ie(e), e.filters, e.limit, e.startAt, e.endAt); else {
        // Flip the orderBy directions since we want the last results
        const t = [];
        for (const n of Ie(e)) {
            const e = "desc" /* Direction.DESCENDING */ === n.dir ? "asc" /* Direction.ASCENDING */ : "desc" /* Direction.DESCENDING */;
            t.push(new oe(n.field, e));
        }
        // We need to swap the cursors to match the now-flipped query ordering.
                const n = e.endAt ? new Wt(e.endAt.position, e.endAt.inclusive) : null, r = e.startAt ? new Wt(e.startAt.position, e.startAt.inclusive) : null;
        // Now return as a LimitType.First query.
        e.O = ge(e.path, e.collectionGroup, t, e.filters, e.limit, n, r);
    }
    return e.O;
}

function Te(t, e) {
    e.getFirstInequalityField(), be(t);
    const n = t.filters.concat([ e ]);
    return new _e(t.path, t.collectionGroup, t.explicitOrderBy.slice(), n, t.limit, t.limitType, t.startAt, t.endAt);
}

function Re(t, e) {
    return function(t, e) {
        if (t.limit !== e.limit) return !1;
        if (t.orderBy.length !== e.orderBy.length) return !1;
        for (let n = 0; n < t.orderBy.length; n++) if (!ue(t.orderBy[n], e.orderBy[n])) return !1;
        if (t.filters.length !== e.filters.length) return !1;
        for (let n = 0; n < t.filters.length; n++) if (!Jt(t.filters[n], e.filters[n])) return !1;
        return t.collectionGroup === e.collectionGroup && !!t.path.isEqual(e.path) && !!Gt(t.startAt, e.startAt) && Gt(t.endAt, e.endAt);
    }(Ae(t), Ae(e)) && t.limitType === e.limitType;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns an DoubleValue for `value` that is encoded based the serializer's
 * `useProto3Json` setting.
 */
/**
 * Returns a value for a number that's appropriate to put into a proto.
 * The return value is an IntegerValue if it can safely represent the value,
 * otherwise a DoubleValue is returned.
 */
function Pe(t, e) {
    return function(t) {
        return "number" == typeof t && Number.isInteger(t) && !ft(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER;
    }(e) ? 
    /**
 * Returns an IntegerValue for `value`.
 */
    function(t) {
        return {
            integerValue: "" + t
        };
    }(e) : function(t, e) {
        if (t.k) {
            if (isNaN(e)) return {
                doubleValue: "NaN"
            };
            if (e === 1 / 0) return {
                doubleValue: "Infinity"
            };
            if (e === -1 / 0) return {
                doubleValue: "-Infinity"
            };
        }
        return {
            doubleValue: ft(e) ? "-0" : e
        };
    }(t, e);
}

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Used to represent a field transform on a mutation. */ class Ve {
    constructor() {
        // Make sure that the structural type of `TransformOperation` is unique.
        // See https://github.com/microsoft/TypeScript/issues/5451
        this._ = void 0;
    }
}

/** Transforms a value into a server-generated timestamp. */ class $e extends Ve {}

/** Transforms an array value via a union operation. */ class Ne extends Ve {
    constructor(t) {
        super(), this.elements = t;
    }
}

/** Transforms an array value via a remove operation. */ class De extends Ve {
    constructor(t) {
        super(), this.elements = t;
    }
}

/**
 * Implements the backend semantics for locally computed NUMERIC_ADD (increment)
 * transforms. Converts all field values to integers or doubles, but unlike the
 * backend does not cap integer values at 2^63. Instead, JavaScript number
 * arithmetic is used and precision loss can occur for values greater than 2^53.
 */ class Fe extends Ve {
    constructor(t, e) {
        super(), this.C = t, this.L = e;
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** A field path and the TransformOperation to perform upon it. */ class xe {
    constructor(t, e) {
        this.field = t, this.transform = e;
    }
}

/**
 * Encodes a precondition for a mutation. This follows the model that the
 * backend accepts with the special case of an explicit "empty" precondition
 * (meaning no precondition).
 */ class Se {
    constructor(t, e) {
        this.updateTime = t, this.exists = e;
    }
    /** Creates a new empty Precondition. */    static none() {
        return new Se;
    }
    /** Creates a new Precondition with an exists flag. */    static exists(t) {
        return new Se(void 0, t);
    }
    /** Creates a new Precondition based on a version a document exists at. */    static updateTime(t) {
        return new Se(t);
    }
    /** Returns whether this Precondition is empty. */    get isNone() {
        return void 0 === this.updateTime && void 0 === this.exists;
    }
    isEqual(t) {
        return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime);
    }
}

/**
 * A mutation describes a self-contained change to a document. Mutations can
 * create, replace, delete, and update subsets of documents.
 *
 * Mutations not only act on the value of the document but also its version.
 *
 * For local mutations (mutations that haven't been committed yet), we preserve
 * the existing version for Set and Patch mutations. For Delete mutations, we
 * reset the version to 0.
 *
 * Here's the expected transition table.
 *
 * MUTATION           APPLIED TO            RESULTS IN
 *
 * SetMutation        Document(v3)          Document(v3)
 * SetMutation        NoDocument(v3)        Document(v0)
 * SetMutation        InvalidDocument(v0)   Document(v0)
 * PatchMutation      Document(v3)          Document(v3)
 * PatchMutation      NoDocument(v3)        NoDocument(v3)
 * PatchMutation      InvalidDocument(v0)   UnknownDocument(v3)
 * DeleteMutation     Document(v3)          NoDocument(v0)
 * DeleteMutation     NoDocument(v3)        NoDocument(v0)
 * DeleteMutation     InvalidDocument(v0)   NoDocument(v0)
 *
 * For acknowledged mutations, we use the updateTime of the WriteResponse as
 * the resulting version for Set and Patch mutations. As deletes have no
 * explicit update time, we use the commitTime of the WriteResponse for
 * Delete mutations.
 *
 * If a mutation is acknowledged by the backend but fails the precondition check
 * locally, we transition to an `UnknownDocument` and rely on Watch to send us
 * the updated version.
 *
 * Field transforms are used only with Patch and Set Mutations. We use the
 * `updateTransforms` message to store transforms, rather than the `transforms`s
 * messages.
 *
 * ## Subclassing Notes
 *
 * Every type of mutation needs to implement its own applyToRemoteDocument() and
 * applyToLocalView() to implement the actual behavior of applying the mutation
 * to some source document (see `setMutationApplyToRemoteDocument()` for an
 * example).
 */ class qe {}

/**
 * A mutation that creates or replaces the document at the given key with the
 * object value contents.
 */ class Oe extends qe {
    constructor(t, e, n, r = []) {
        super(), this.key = t, this.value = e, this.precondition = n, this.fieldTransforms = r, 
        this.type = 0 /* MutationType.Set */;
    }
    getFieldMask() {
        return null;
    }
}

/**
 * A mutation that modifies fields of the document at the given key with the
 * given values. The values are applied through a field mask:
 *
 *  * When a field is in both the mask and the values, the corresponding field
 *    is updated.
 *  * When a field is in neither the mask nor the values, the corresponding
 *    field is unmodified.
 *  * When a field is in the mask but not in the values, the corresponding field
 *    is deleted.
 *  * When a field is not in the mask but is in the values, the values map is
 *    ignored.
 */ class ke extends qe {
    constructor(t, e, n, r, s = []) {
        super(), this.key = t, this.data = e, this.fieldMask = n, this.precondition = r, 
        this.fieldTransforms = s, this.type = 1 /* MutationType.Patch */;
    }
    getFieldMask() {
        return this.fieldMask;
    }
}

/** A mutation that deletes the document at the given key. */ class Ce extends qe {
    constructor(t, e) {
        super(), this.key = t, this.precondition = e, this.type = 2 /* MutationType.Delete */ , 
        this.fieldTransforms = [];
    }
    getFieldMask() {
        return null;
    }
}

/**
 * A mutation that verifies the existence of the document at the given key with
 * the provided precondition.
 *
 * The `verify` operation is only used in Transactions, and this class serves
 * primarily to facilitate serialization into protos.
 */ class Le extends qe {
    constructor(t, e) {
        super(), this.key = t, this.precondition = e, this.type = 3 /* MutationType.Verify */ , 
        this.fieldTransforms = [];
    }
    getFieldMask() {
        return null;
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Me = (() => {
    const t = {
        asc: "ASCENDING",
        desc: "DESCENDING"
    };
    return t;
})(), Ue = (() => {
    const t = {
        "<": "LESS_THAN",
        "<=": "LESS_THAN_OR_EQUAL",
        ">": "GREATER_THAN",
        ">=": "GREATER_THAN_OR_EQUAL",
        "==": "EQUAL",
        "!=": "NOT_EQUAL",
        "array-contains": "ARRAY_CONTAINS",
        in: "IN",
        "not-in": "NOT_IN",
        "array-contains-any": "ARRAY_CONTAINS_ANY"
    };
    return t;
})(), je = (() => {
    const t = {
        and: "AND",
        or: "OR"
    };
    return t;
})();

/**
 * This class generates JsonObject values for the Datastore API suitable for
 * sending to either GRPC stub methods or via the JSON/HTTP REST API.
 *
 * The serializer supports both Protobuf.js and Proto3 JSON formats. By
 * setting `useProto3Json` to true, the serializer will use the Proto3 JSON
 * format.
 *
 * For a description of the Proto3 JSON format check
 * https://developers.google.com/protocol-buffers/docs/proto3#json
 *
 * TODO(klimt): We can remove the databaseId argument if we keep the full
 * resource name in documents.
 */
class Be {
    constructor(t, e) {
        this.databaseId = t, this.k = e;
    }
}

/**
 * Returns a value for a number (or null) that's appropriate to put into
 * a google.protobuf.Int32Value proto.
 * DO NOT USE THIS FOR ANYTHING ELSE.
 * This method cheats. It's typed as returning "number" because that's what
 * our generated proto interfaces say Int32Value must be. But GRPC actually
 * expects a { value: <number> } struct.
 */
/**
 * Returns a value for a Date that's appropriate to put into a proto.
 */
function Qe(t, e) {
    if (t.k) {
        return `${new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "")}.${("000000000" + e.nanoseconds).slice(-9)}Z`;
    }
    return {
        seconds: "" + e.seconds,
        nanos: e.nanoseconds
    };
}

/**
 * Returns a value for bytes that's appropriate to put in a proto.
 *
 * Visible for testing.
 */
function ze(t, e) {
    return t.k ? e.toBase64() : e.toUint8Array();
}

function We(t, e) {
    return Qe(t, e.toTimestamp());
}

function Ge(t) {
    return I(!!t), ce.fromTimestamp(function(t) {
        const e = Pt(t);
        return new Nt(e.seconds, e.nanos);
    }(t));
}

function Ke(t, e) {
    return function(t) {
        return new et([ "projects", t.projectId, "databases", t.database ]);
    }(t).child("documents").child(e).canonicalString();
}

function Ye(t, e) {
    return Ke(t.databaseId, e.path);
}

function He(t, e) {
    const n = function(t) {
        const e = et.fromString(t);
        return I(hn(e)), e;
    }(e);
    if (n.get(1) !== t.databaseId.projectId) throw new j(V, "Tried to deserialize key from different project: " + n.get(1) + " vs " + t.databaseId.projectId);
    if (n.get(3) !== t.databaseId.database) throw new j(V, "Tried to deserialize key from different database: " + n.get(3) + " vs " + t.databaseId.database);
    return new st((I((r = n).length > 4 && "documents" === r.get(4)), r.popFirst(5)));
    var r;
    /** Creates a Document proto from key and fields (but no create/update time) */}

function Je(t, e) {
    return Ke(t.databaseId, e);
}

function Xe(t) {
    return new et([ "projects", t.databaseId.projectId, "databases", t.databaseId.database ]).canonicalString();
}

function Ze(t, e, n) {
    return {
        name: Ye(t, e),
        fields: n.value.mapValue.fields
    };
}

function tn(t, e) {
    return "found" in e ? function(t, e) {
        I(!!e.found), e.found.name, e.found.updateTime;
        const n = He(t, e.found.name), r = Ge(e.found.updateTime), s = e.found.createTime ? Ge(e.found.createTime) : ce.min(), i = new me({
            mapValue: {
                fields: e.found.fields
            }
        });
        return pe.newFoundDocument(n, r, s, i);
    }(t, e) : "missing" in e ? function(t, e) {
        I(!!e.missing), I(!!e.readTime);
        const n = He(t, e.missing), r = Ge(e.readTime);
        return pe.newNoDocument(n, r);
    }(t, e) : E();
}

function en(t, e) {
    let n;
    if (e instanceof Oe) n = {
        update: Ze(t, e.key, e.value)
    }; else if (e instanceof Ce) n = {
        delete: Ye(t, e.key)
    }; else if (e instanceof ke) n = {
        update: Ze(t, e.key, e.data),
        updateMask: an(e.fieldMask)
    }; else {
        if (!(e instanceof Le)) return E();
        n = {
            verify: Ye(t, e.key)
        };
    }
    return e.fieldTransforms.length > 0 && (n.updateTransforms = e.fieldTransforms.map((t => function(t, e) {
        const n = e.transform;
        if (n instanceof $e) return {
            fieldPath: e.field.canonicalString(),
            setToServerValue: "REQUEST_TIME"
        };
        if (n instanceof Ne) return {
            fieldPath: e.field.canonicalString(),
            appendMissingElements: {
                values: n.elements
            }
        };
        if (n instanceof De) return {
            fieldPath: e.field.canonicalString(),
            removeAllFromArray: {
                values: n.elements
            }
        };
        if (n instanceof Fe) return {
            fieldPath: e.field.canonicalString(),
            increment: n.L
        };
        throw E();
    }(0, t)))), e.precondition.isNone || (n.currentDocument = function(t, e) {
        return void 0 !== e.updateTime ? {
            updateTime: We(t, e.updateTime)
        } : void 0 !== e.exists ? {
            exists: e.exists
        } : E();
    }(t, e.precondition)), n;
}

function nn(t, e) {
    // Dissect the path into parent, collectionId, and optional key filter.
    const n = {
        structuredQuery: {}
    }, r = e.path;
    null !== e.collectionGroup ? (n.parent = Je(t, r), n.structuredQuery.from = [ {
        collectionId: e.collectionGroup,
        allDescendants: !0
    } ]) : (n.parent = Je(t, r.popLast()), n.structuredQuery.from = [ {
        collectionId: r.lastSegment()
    } ]);
    const s = function(t) {
        if (0 === t.length) return;
        return cn(Ht.create(t, "and" /* CompositeOperator.AND */));
    }(e.filters);
    s && (n.structuredQuery.where = s);
    const i = function(t) {
        if (0 === t.length) return;
        return t.map((t => 
        // visible for testing
        function(t) {
            return {
                field: un(t.field),
                direction: rn(t.dir)
            };
        }
        // visible for testing
        (t)));
    }(e.orderBy);
    i && (n.structuredQuery.orderBy = i);
    const o = function(t, e) {
        return t.k || lt(e) ? e : {
            value: e
        };
    }(t, e.limit);
    var u;
    return null !== o && (n.structuredQuery.limit = o), e.startAt && (n.structuredQuery.startAt = {
        before: (u = e.startAt).inclusive,
        values: u.position
    }), e.endAt && (n.structuredQuery.endAt = function(t) {
        return {
            before: !t.inclusive,
            values: t.position
        };
    }
    // visible for testing
    (e.endAt)), n;
}

function rn(t) {
    return Me[t];
}

// visible for testing
function sn(t) {
    return Ue[t];
}

function on(t) {
    return je[t];
}

function un(t) {
    return {
        fieldPath: t.canonicalString()
    };
}

function cn(t) {
    return t instanceof Yt ? function(t) {
        if ("==" /* Operator.EQUAL */ === t.op) {
            if (Bt(t.value)) return {
                unaryFilter: {
                    field: un(t.field),
                    op: "IS_NAN"
                }
            };
            if (jt(t.value)) return {
                unaryFilter: {
                    field: un(t.field),
                    op: "IS_NULL"
                }
            };
        } else if ("!=" /* Operator.NOT_EQUAL */ === t.op) {
            if (Bt(t.value)) return {
                unaryFilter: {
                    field: un(t.field),
                    op: "IS_NOT_NAN"
                }
            };
            if (jt(t.value)) return {
                unaryFilter: {
                    field: un(t.field),
                    op: "IS_NOT_NULL"
                }
            };
        }
        return {
            fieldFilter: {
                field: un(t.field),
                op: sn(t.op),
                value: t.value
            }
        };
    }(t) : t instanceof Ht ? function(t) {
        const e = t.getFilters().map((t => cn(t)));
        if (1 === e.length) return e[0];
        return {
            compositeFilter: {
                op: on(t.op),
                filters: e
            }
        };
    }(t) : E();
}

function an(t) {
    const e = [];
    return t.fields.forEach((t => e.push(t.canonicalString()))), {
        fieldPaths: e
    };
}

function hn(t) {
    // Resource names have at least 4 components (project ID, database ID)
    return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ln(t) {
    return new Be(t, /* useProto3Json= */ !0);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A helper for running delayed tasks following an exponential backoff curve
 * between attempts.
 *
 * Each delay is made up of a "base" delay which follows the exponential
 * backoff curve, and a +/- 50% "jitter" that is calculated and added to the
 * base delay. This prevents clients from accidentally synchronizing their
 * delays causing spikes of load to the backend.
 */
class fn {
    constructor(
    /**
     * The AsyncQueue to run backoff operations on.
     */
    t, 
    /**
     * The ID to use when scheduling backoff operations on the AsyncQueue.
     */
    e, 
    /**
     * The initial delay (used as the base delay on the first retry attempt).
     * Note that jitter will still be applied, so the actual delay could be as
     * little as 0.5*initialDelayMs.
     */
    n = 1e3
    /**
     * The multiplier to use to determine the extended base delay after each
     * attempt.
     */ , r = 1.5
    /**
     * The maximum base delay after which no further backoff is performed.
     * Note that jitter will still be applied, so the actual delay could be as
     * much as 1.5*maxDelayMs.
     */ , s = 6e4) {
        this.M = t, this.timerId = e, this.U = n, this.j = r, this.B = s, this.W = 0, this.G = null, 
        /** The last backoff attempt, as epoch milliseconds. */
        this.K = Date.now(), this.reset();
    }
    /**
     * Resets the backoff delay.
     *
     * The very next backoffAndWait() will have no delay. If it is called again
     * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
     * subsequent ones will increase according to the backoffFactor.
     */    reset() {
        this.W = 0;
    }
    /**
     * Resets the backoff delay to the maximum delay (e.g. for use after a
     * RESOURCE_EXHAUSTED error).
     */    Y() {
        this.W = this.B;
    }
    /**
     * Returns a promise that resolves after currentDelayMs, and increases the
     * delay for any subsequent attempts. If there was a pending backoff operation
     * already, it will be canceled.
     */    H(t) {
        // Cancel any pending backoff operation.
        this.cancel();
        // First schedule using the current base (which may be 0 and should be
        // honored as such).
        const e = Math.floor(this.W + this.J()), n = Math.max(0, Date.now() - this.K), r = Math.max(0, e - n);
        // Guard against lastAttemptTime being in the future due to a clock change.
                r > 0 && g("ExponentialBackoff", `Backing off for ${r} ms (base delay: ${this.W} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`), 
        this.G = this.M.enqueueAfterDelay(this.timerId, r, (() => (this.K = Date.now(), 
        t()))), 
        // Apply backoff factor to determine next delay and ensure it is within
        // bounds.
        this.W *= this.j, this.W < this.U && (this.W = this.U), this.W > this.B && (this.W = this.B);
    }
    X() {
        null !== this.G && (this.G.skipDelay(), this.G = null);
    }
    cancel() {
        null !== this.G && (this.G.cancel(), this.G = null);
    }
    /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */    J() {
        return (Math.random() - .5) * this.W;
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Datastore and its related methods are a wrapper around the external Google
 * Cloud Datastore grpc API, which provides an interface that is more convenient
 * for the rest of the client SDK architecture to consume.
 */
/**
 * An implementation of Datastore that exposes additional state for internal
 * consumption.
 */
class dn extends class {} {
    constructor(t, e, n, r) {
        super(), this.authCredentials = t, this.appCheckCredentials = e, this.connection = n, 
        this.C = r, this.Z = !1;
    }
    tt() {
        if (this.Z) throw new j(q, "The client has already been terminated.");
    }
    /** Invokes the provided RPC with auth and AppCheck tokens. */    I(t, e, n) {
        return this.tt(), Promise.all([ this.authCredentials.getToken(), this.appCheckCredentials.getToken() ]).then((([r, s]) => this.connection.I(t, e, n, r, s))).catch((t => {
            throw "FirebaseError" === t.name ? (t.code === x && (this.authCredentials.invalidateToken(), 
            this.appCheckCredentials.invalidateToken()), t) : new j(P, t.toString());
        }));
    }
    /** Invokes the provided RPC with streamed results with auth and AppCheck tokens. */    P(t, e, n, r) {
        return this.tt(), Promise.all([ this.authCredentials.getToken(), this.appCheckCredentials.getToken() ]).then((([s, i]) => this.connection.P(t, e, n, s, i, r))).catch((t => {
            throw "FirebaseError" === t.name ? (t.code === x && (this.authCredentials.invalidateToken(), 
            this.appCheckCredentials.invalidateToken()), t) : new j(P, t.toString());
        }));
    }
    terminate() {
        this.Z = !0;
    }
}

// TODO(firestorexp): Make sure there is only one Datastore instance per
// firestore-exp client.
async function wn(t, e) {
    const n = A(t), r = Xe(n.C) + "/documents", s = {
        writes: e.map((t => en(n.C, t)))
    };
    await n.I("Commit", r, s);
}

async function mn(t, e) {
    const n = A(t), r = Xe(n.C) + "/documents", s = {
        documents: e.map((t => Ye(n.C, t)))
    }, i = await n.P("BatchGetDocuments", r, s, e.length), o = new Map;
    i.forEach((t => {
        const e = tn(n.C, t);
        o.set(e.key.toString(), e);
    }));
    const u = [];
    return e.forEach((t => {
        const e = o.get(t.toString());
        I(!!e), u.push(e);
    })), u;
}

async function pn(t, e) {
    const n = A(t), r = nn(n.C, Ae(e));
    return (await n.P("RunQuery", r.parent, {
        structuredQuery: r.structuredQuery
    })).filter((t => !!t.document)).map((t => function(t, e, n) {
        const r = He(t, e.name), s = Ge(e.updateTime), i = e.createTime ? Ge(e.createTime) : ce.min(), o = new me({
            mapValue: {
                fields: e.fields
            }
        }), u = pe.newFoundDocument(r, s, i, o);
        return n && u.setHasCommittedMutations(), n ? u.setHasCommittedMutations() : u;
    }(n.C, t.document, void 0)));
}

async function yn(t, e) {
    const n = A(t), r = function(t, e) {
        const n = nn(t, e);
        return {
            structuredAggregationQuery: {
                aggregations: [ {
                    count: {},
                    alias: "count_alias"
                } ],
                structuredQuery: n.structuredQuery
            },
            parent: n.parent
        };
    }(n.C, Ae(e)), s = r.parent;
    n.connection.v || delete r.parent;
    return (await n.P("RunAggregationQuery", s, r, /*expectedResponseCount=*/ 1)).filter((t => !!t.result)).map((t => t.result.aggregateFields));
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const gn = new Map;

/**
 * An instance map that ensures only one Datastore exists per Firestore
 * instance.
 */
/**
 * Returns an initialized and started Datastore for the given Firestore
 * instance. Callers must invoke removeComponents() when the Firestore
 * instance is terminated.
 */
function _n(t) {
    if (t._terminated) throw new j(q, "The client has already been terminated.");
    if (!gn.has(t)) {
        g("ComponentProvider", "Initializing Datastore");
        const i = function(t) {
            return new yt(t, fetch.bind(null));
        }((e = t._databaseId, n = t.app.options.appId || "", r = t._persistenceKey, s = t._freezeSettings(), 
        new X(e, n, r, s.host, s.ssl, s.experimentalForceLongPolling, s.experimentalAutoDetectLongPolling, s.useFetchStreams))), o = ln(t._databaseId), u = function(t, e, n, r) {
            return new dn(t, e, n, r);
        }(t._authCredentials, t._appCheckCredentials, i, o);
        gn.set(t, u);
    }
    var e, n, r, s;
    /**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */    return gn.get(t);
}

/**
 * Removes all components associated with the provided instance. Must be called
 * when the `Firestore` instance is terminated.
 */
/**
 * A concrete type describing all the values that can be applied via a
 * user-supplied `FirestoreSettings` object. This is a separate type so that
 * defaults can be supplied and the value can be checked for equality.
 */
class vn {
    constructor(t) {
        var e;
        if (void 0 === t.host) {
            if (void 0 !== t.ssl) throw new j(V, "Can't provide ssl option if host option is not set");
            this.host = "firestore.googleapis.com", this.ssl = true;
        } else this.host = t.host, this.ssl = null === (e = t.ssl) || void 0 === e || e;
        if (this.credentials = t.credentials, this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties, 
        void 0 === t.cacheSizeBytes) this.cacheSizeBytes = 41943040; else {
            if (-1 !== t.cacheSizeBytes && t.cacheSizeBytes < 1048576) throw new j(V, "cacheSizeBytes must be at least 1048576");
            this.cacheSizeBytes = t.cacheSizeBytes;
        }
        this.experimentalForceLongPolling = !!t.experimentalForceLongPolling, this.experimentalAutoDetectLongPolling = !!t.experimentalAutoDetectLongPolling, 
        this.useFetchStreams = !!t.useFetchStreams, function(t, e, n, r) {
            if (!0 === e && !0 === r) throw new j(V, `${t} and ${n} cannot be used together.`);
        }("experimentalForceLongPolling", t.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", t.experimentalAutoDetectLongPolling);
    }
    isEqual(t) {
        return this.host === t.host && this.ssl === t.ssl && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.experimentalForceLongPolling === t.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === t.experimentalAutoDetectLongPolling && this.ignoreUndefinedProperties === t.ignoreUndefinedProperties && this.useFetchStreams === t.useFetchStreams;
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The Cloud Firestore service interface.
 *
 * Do not call this constructor directly. Instead, use {@link (getFirestore:1)}.
 */ class bn {
    /** @hideconstructor */
    constructor(t, e, n, r) {
        this._authCredentials = t, this._appCheckCredentials = e, this._databaseId = n, 
        this._app = r, 
        /**
         * Whether it's a Firestore or Firestore Lite instance.
         */
        this.type = "firestore-lite", this._persistenceKey = "(lite)", this._settings = new vn({}), 
        this._settingsFrozen = !1;
    }
    /**
     * The {@link @firebase/app#FirebaseApp} associated with this `Firestore` service
     * instance.
     */    get app() {
        if (!this._app) throw new j(q, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
        return this._app;
    }
    get _initialized() {
        return this._settingsFrozen;
    }
    get _terminated() {
        return void 0 !== this._terminateTask;
    }
    _setSettings(t) {
        if (this._settingsFrozen) throw new j(q, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
        this._settings = new vn(t), void 0 !== t.credentials && (this._authCredentials = function(t) {
            if (!t) return new z;
            switch (t.type) {
              case "gapi":
                const e = t.client;
                return new Y(e, t.sessionIndex || "0", t.iamToken || null, t.authTokenFactory || null);

              case "provider":
                return t.client;

              default:
                throw new j(V, "makeAuthCredentialsProvider failed due to invalid credential type");
            }
        }(t.credentials));
    }
    _getSettings() {
        return this._settings;
    }
    _freezeSettings() {
        return this._settingsFrozen = !0, this._settings;
    }
    _delete() {
        return this._terminateTask || (this._terminateTask = this._terminate()), this._terminateTask;
    }
    /** Returns a JSON-serializable representation of this `Firestore` instance. */    toJSON() {
        return {
            app: this._app,
            databaseId: this._databaseId,
            settings: this._settings
        };
    }
    /**
     * Terminates all components used by this client. Subclasses can override
     * this method to clean up their own dependencies, but must also call this
     * method.
     *
     * Only ever called once.
     */    _terminate() {
        return function(t) {
            const e = gn.get(t);
            e && (g("ComponentProvider", "Removing Datastore"), gn.delete(t), e.terminate());
        }(this), Promise.resolve();
    }
}

function En(t, e, n) {
    n || (n = "(default)");
    const r = _getProvider(t, "firestore/lite");
    if (r.isInitialized(n)) throw new j(q, "Firestore can only be initialized once per app.");
    return r.initialize({
        options: e,
        instanceIdentifier: n
    });
}

function In(e, n) {
    const r = "object" == typeof e ? e : t(), s = "string" == typeof e ? e : n || "(default)", i = _getProvider(r, "firestore/lite").getImmediate({
        identifier: s
    });
    if (!i._initialized) {
        const t = h("firestore");
        t && An(i, ...t);
    }
    return i;
}

/**
 * Modify this instance to communicate with the Cloud Firestore emulator.
 *
 * Note: This must be called before this instance has been used to do any
 * operations.
 *
 * @param firestore - The `Firestore` instance to configure to connect to the
 * emulator.
 * @param host - the emulator host (ex: localhost).
 * @param port - the emulator port (ex: 9000).
 * @param options.mockUserToken - the mock auth token to use for unit testing
 * Security Rules.
 */ function An(t, e, n, r = {}) {
    var s;
    const i = (t = at(t, bn))._getSettings();
    if ("firestore.googleapis.com" !== i.host && i.host !== e && v("Host has been set in both settings() and useEmulator(), emulator host will be used"), 
    t._setSettings(Object.assign(Object.assign({}, i), {
        host: `${e}:${n}`,
        ssl: !1
    })), r.mockUserToken) {
        let e, n;
        if ("string" == typeof r.mockUserToken) e = r.mockUserToken, n = w.MOCK_USER; else {
            // Let createMockUserToken validate first (catches common mistakes like
            // invalid field "uid" and missing field "sub" / "user_id".)
            e = l(r.mockUserToken, null === (s = t._app) || void 0 === s ? void 0 : s.options.projectId);
            const i = r.mockUserToken.sub || r.mockUserToken.user_id;
            if (!i) throw new j(V, "mockUserToken must contain 'sub' or 'user_id' field!");
            n = new w(i);
        }
        t._authCredentials = new W(new Q(e, n));
    }
}

/**
 * Terminates the provided `Firestore` instance.
 *
 * After calling `terminate()` only the `clearIndexedDbPersistence()` functions
 * may be used. Any other function will throw a `FirestoreError`. Termination
 * does not cancel any pending writes, and any promises that are awaiting a
 * response from the server will not be resolved.
 *
 * To restart after termination, create a new instance of `Firestore` with
 * {@link (getFirestore:1)}.
 *
 * Note: Under normal circumstances, calling `terminate()` is not required. This
 * function is useful only when you want to force this instance to release all of
 * its resources or in combination with {@link clearIndexedDbPersistence} to
 * ensure that all local state is destroyed between test runs.
 *
 * @param firestore - The `Firestore` instance to terminate.
 * @returns A `Promise` that is resolved when the instance has been successfully
 * terminated.
 */ function Tn(t) {
    return t = at(t, bn), e(t.app, "firestore/lite"), t._delete();
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Represents an aggregation that can be performed by Firestore.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Rn {
    constructor() {
        /** A type string to uniquely identify instances of this class. */
        this.type = "AggregateField";
    }
}

/**
 * The results of executing an aggregation query.
 */ class Pn {
    /** @hideconstructor */
    constructor(t, e) {
        this._data = e, 
        /** A type string to uniquely identify instances of this class. */
        this.type = "AggregateQuerySnapshot", this.query = t;
    }
    /**
     * Returns the results of the aggregations performed over the underlying
     * query.
     *
     * The keys of the returned object will be the same as those of the
     * `AggregateSpec` object specified to the aggregation method, and the values
     * will be the corresponding aggregation result.
     *
     * @returns The results of the aggregations performed over the underlying
     * query.
     */    data() {
        return this._data;
    }
}

/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * CountQueryRunner encapsulates the logic needed to run the count aggregation
 * queries.
 */ class Vn {
    constructor(t, e, n) {
        this.query = t, this.datastore = e, this.userDataWriter = n;
    }
    run() {
        return yn(this.datastore, this.query._query).then((t => {
            I(void 0 !== t[0]);
            const e = Object.entries(t[0]).filter((([t, e]) => "count_alias" === t)).map((([t, e]) => this.userDataWriter.convertValue(e)))[0];
            return I("number" == typeof e), Promise.resolve(new Pn(this.query, {
                count: e
            }));
        }));
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A `DocumentReference` refers to a document location in a Firestore database
 * and can be used to write, read, or listen to the location. The document at
 * the referenced location may or may not exist.
 */ class $n {
    /** @hideconstructor */
    constructor(t, 
    /**
     * If provided, the `FirestoreDataConverter` associated with this instance.
     */
    e, n) {
        this.converter = e, this._key = n, 
        /** The type of this Firestore reference. */
        this.type = "document", this.firestore = t;
    }
    get _path() {
        return this._key.path;
    }
    /**
     * The document's identifier within its collection.
     */    get id() {
        return this._key.path.lastSegment();
    }
    /**
     * A string representing the path of the referenced document (relative
     * to the root of the database).
     */    get path() {
        return this._key.path.canonicalString();
    }
    /**
     * The collection this `DocumentReference` belongs to.
     */    get parent() {
        return new Dn(this.firestore, this.converter, this._key.path.popLast());
    }
    withConverter(t) {
        return new $n(this.firestore, t, this._key);
    }
}

/**
 * A `Query` refers to a query which you can read or listen to. You can also
 * construct refined `Query` objects by adding filters and ordering.
 */ class Nn {
    // This is the lite version of the Query class in the main SDK.
    /** @hideconstructor protected */
    constructor(t, 
    /**
     * If provided, the `FirestoreDataConverter` associated with this instance.
     */
    e, n) {
        this.converter = e, this._query = n, 
        /** The type of this Firestore reference. */
        this.type = "query", this.firestore = t;
    }
    withConverter(t) {
        return new Nn(this.firestore, t, this._query);
    }
}

/**
 * A `CollectionReference` object can be used for adding documents, getting
 * document references, and querying for documents (using {@link query}).
 */ class Dn extends Nn {
    /** @hideconstructor */
    constructor(t, e, n) {
        super(t, e, new _e(n)), this._path = n, 
        /** The type of this Firestore reference. */
        this.type = "collection";
    }
    /** The collection's identifier. */    get id() {
        return this._query.path.lastSegment();
    }
    /**
     * A string representing the path of the referenced collection (relative
     * to the root of the database).
     */    get path() {
        return this._query.path.canonicalString();
    }
    /**
     * A reference to the containing `DocumentReference` if this is a
     * subcollection. If this isn't a subcollection, the reference is null.
     */    get parent() {
        const t = this._path.popLast();
        return t.isEmpty() ? null : new $n(this.firestore, 
        /* converter= */ null, new st(t));
    }
    withConverter(t) {
        return new Dn(this.firestore, t, this._path);
    }
}

function Fn(t, e, ...n) {
    if (t = f(t), it("collection", "path", e), t instanceof bn) {
        const r = et.fromString(e, ...n);
        return ut(r), new Dn(t, /* converter= */ null, r);
    }
    {
        if (!(t instanceof $n || t instanceof Dn)) throw new j(V, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
        const r = t._path.child(et.fromString(e, ...n));
        return ut(r), new Dn(t.firestore, 
        /* converter= */ null, r);
    }
}

// TODO(firestorelite): Consider using ErrorFactory -
// https://github.com/firebase/firebase-js-sdk/blob/0131e1f/packages/util/src/errors.ts#L106
/**
 * Creates and returns a new `Query` instance that includes all documents in the
 * database that are contained in a collection or subcollection with the
 * given `collectionId`.
 *
 * @param firestore - A reference to the root `Firestore` instance.
 * @param collectionId - Identifies the collections to query over. Every
 * collection or subcollection with this ID as the last segment of its path
 * will be included. Cannot contain a slash.
 * @returns The created `Query`.
 */ function xn(t, e) {
    if (t = at(t, bn), it("collectionGroup", "collection id", e), e.indexOf("/") >= 0) throw new j(V, `Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);
    return new Nn(t, 
    /* converter= */ null, function(t) {
        return new _e(et.emptyPath(), t);
    }(e));
}

function Sn(t, e, ...n) {
    if (t = f(t), 
    // We allow omission of 'pathString' but explicitly prohibit passing in both
    // 'undefined' and 'null'.
    1 === arguments.length && (e = _t.N()), it("doc", "path", e), t instanceof bn) {
        const r = et.fromString(e, ...n);
        return ot(r), new $n(t, 
        /* converter= */ null, new st(r));
    }
    {
        if (!(t instanceof $n || t instanceof Dn)) throw new j(V, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
        const r = t._path.child(et.fromString(e, ...n));
        return ot(r), new $n(t.firestore, t instanceof Dn ? t.converter : null, new st(r));
    }
}

/**
 * Returns true if the provided references are equal.
 *
 * @param left - A reference to compare.
 * @param right - A reference to compare.
 * @returns true if the references point to the same location in the same
 * Firestore database.
 */ function qn(t, e) {
    return t = f(t), e = f(e), (t instanceof $n || t instanceof Dn) && (e instanceof $n || e instanceof Dn) && (t.firestore === e.firestore && t.path === e.path && t.converter === e.converter);
}

/**
 * Returns true if the provided queries point to the same collection and apply
 * the same constraints.
 *
 * @param left - A `Query` to compare.
 * @param right - A `Query` to compare.
 * @returns true if the references point to the same location in the same
 * Firestore database.
 */ function On(t, e) {
    return t = f(t), e = f(e), t instanceof Nn && e instanceof Nn && (t.firestore === e.firestore && Re(t._query, e._query) && t.converter === e.converter);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An immutable object representing an array of bytes.
 */ class kn {
    /** @hideconstructor */
    constructor(t) {
        this._byteString = t;
    }
    /**
     * Creates a new `Bytes` object from the given Base64 string, converting it to
     * bytes.
     *
     * @param base64 - The Base64 string used to create the `Bytes` object.
     */    static fromBase64String(t) {
        try {
            return new kn(Tt.fromBase64String(t));
        } catch (t) {
            throw new j(V, "Failed to construct data from Base64 string: " + t);
        }
    }
    /**
     * Creates a new `Bytes` object from the given Uint8Array.
     *
     * @param array - The Uint8Array used to create the `Bytes` object.
     */    static fromUint8Array(t) {
        return new kn(Tt.fromUint8Array(t));
    }
    /**
     * Returns the underlying bytes as a Base64-encoded string.
     *
     * @returns The Base64-encoded string created from the `Bytes` object.
     */    toBase64() {
        return this._byteString.toBase64();
    }
    /**
     * Returns the underlying bytes in a new `Uint8Array`.
     *
     * @returns The Uint8Array created from the `Bytes` object.
     */    toUint8Array() {
        return this._byteString.toUint8Array();
    }
    /**
     * Returns a string representation of the `Bytes` object.
     *
     * @returns A string representation of the `Bytes` object.
     */    toString() {
        return "Bytes(base64: " + this.toBase64() + ")";
    }
    /**
     * Returns true if this `Bytes` object is equal to the provided one.
     *
     * @param other - The `Bytes` object to compare against.
     * @returns true if this `Bytes` object is equal to the provided one.
     */    isEqual(t) {
        return this._byteString.isEqual(t._byteString);
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A `FieldPath` refers to a field in a document. The path may consist of a
 * single field name (referring to a top-level field in the document), or a
 * list of field names (referring to a nested field in the document).
 *
 * Create a `FieldPath` by providing field names. If more than one field
 * name is provided, the path will point to a nested field in a document.
 */ class Cn {
    /**
     * Creates a `FieldPath` from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames - A list of field names.
     */
    constructor(...t) {
        for (let e = 0; e < t.length; ++e) if (0 === t[e].length) throw new j(V, "Invalid field name at argument $(i + 1). Field names must not be empty.");
        this._internalPath = new rt(t);
    }
    /**
     * Returns true if this `FieldPath` is equal to the provided one.
     *
     * @param other - The `FieldPath` to compare against.
     * @returns true if this `FieldPath` is equal to the provided one.
     */    isEqual(t) {
        return this._internalPath.isEqual(t._internalPath);
    }
}

/**
 * Returns a special sentinel `FieldPath` to refer to the ID of a document.
 * It can be used in queries to sort or filter by the document ID.
 */ function Ln() {
    return new Cn("__name__");
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Sentinel values that can be used when writing document fields with `set()`
 * or `update()`.
 */ class Mn {
    /**
     * @param _methodName - The public API endpoint that returns this class.
     * @hideconstructor
     */
    constructor(t) {
        this._methodName = t;
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An immutable object representing a geographic location in Firestore. The
 * location is represented as latitude/longitude pair.
 *
 * Latitude values are in the range of [-90, 90].
 * Longitude values are in the range of [-180, 180].
 */ class Un {
    /**
     * Creates a new immutable `GeoPoint` object with the provided latitude and
     * longitude values.
     * @param latitude - The latitude as number between -90 and 90.
     * @param longitude - The longitude as number between -180 and 180.
     */
    constructor(t, e) {
        if (!isFinite(t) || t < -90 || t > 90) throw new j(V, "Latitude must be a number between -90 and 90, but was: " + t);
        if (!isFinite(e) || e < -180 || e > 180) throw new j(V, "Longitude must be a number between -180 and 180, but was: " + e);
        this._lat = t, this._long = e;
    }
    /**
     * The latitude of this `GeoPoint` instance.
     */    get latitude() {
        return this._lat;
    }
    /**
     * The longitude of this `GeoPoint` instance.
     */    get longitude() {
        return this._long;
    }
    /**
     * Returns true if this `GeoPoint` is equal to the provided one.
     *
     * @param other - The `GeoPoint` to compare against.
     * @returns true if this `GeoPoint` is equal to the provided one.
     */    isEqual(t) {
        return this._lat === t._lat && this._long === t._long;
    }
    /** Returns a JSON-serializable representation of this GeoPoint. */    toJSON() {
        return {
            latitude: this._lat,
            longitude: this._long
        };
    }
    /**
     * Actually private to JS consumers of our API, so this function is prefixed
     * with an underscore.
     */    _compareTo(t) {
        return vt(this._lat, t._lat) || vt(this._long, t._long);
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const jn = /^__.*__$/;

/** The result of parsing document data (e.g. for a setData call). */ class Bn {
    constructor(t, e, n) {
        this.data = t, this.fieldMask = e, this.fieldTransforms = n;
    }
    toMutation(t, e) {
        return null !== this.fieldMask ? new ke(t, this.data, this.fieldMask, e, this.fieldTransforms) : new Oe(t, this.data, e, this.fieldTransforms);
    }
}

/** The result of parsing "update" data (i.e. for an updateData call). */ class Qn {
    constructor(t, 
    // The fieldMask does not include document transforms.
    e, n) {
        this.data = t, this.fieldMask = e, this.fieldTransforms = n;
    }
    toMutation(t, e) {
        return new ke(t, this.data, this.fieldMask, e, this.fieldTransforms);
    }
}

function zn(t) {
    switch (t) {
      case 0 /* UserDataSource.Set */ :
 // fall through
              case 2 /* UserDataSource.MergeSet */ :
 // fall through
              case 1 /* UserDataSource.Update */ :
        return !0;

      case 3 /* UserDataSource.Argument */ :
      case 4 /* UserDataSource.ArrayArgument */ :
        return !1;

      default:
        throw E();
    }
}

/** A "context" object passed around while parsing user data. */ class Wn {
    /**
     * Initializes a ParseContext with the given source and path.
     *
     * @param settings - The settings for the parser.
     * @param databaseId - The database ID of the Firestore instance.
     * @param serializer - The serializer to use to generate the Value proto.
     * @param ignoreUndefinedProperties - Whether to ignore undefined properties
     * rather than throw.
     * @param fieldTransforms - A mutable list of field transforms encountered
     * while parsing the data.
     * @param fieldMask - A mutable list of field paths encountered while parsing
     * the data.
     *
     * TODO(b/34871131): We don't support array paths right now, so path can be
     * null to indicate the context represents any location within an array (in
     * which case certain features will not work and errors will be somewhat
     * compromised).
     */
    constructor(t, e, n, r, s, i) {
        this.settings = t, this.databaseId = e, this.C = n, this.ignoreUndefinedProperties = r, 
        // Minor hack: If fieldTransforms is undefined, we assume this is an
        // external call and we need to validate the entire path.
        void 0 === s && this.et(), this.fieldTransforms = s || [], this.fieldMask = i || [];
    }
    get path() {
        return this.settings.path;
    }
    get nt() {
        return this.settings.nt;
    }
    /** Returns a new context with the specified settings overwritten. */    rt(t) {
        return new Wn(Object.assign(Object.assign({}, this.settings), t), this.databaseId, this.C, this.ignoreUndefinedProperties, this.fieldTransforms, this.fieldMask);
    }
    st(t) {
        var e;
        const n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), r = this.rt({
            path: n,
            it: !1
        });
        return r.ot(t), r;
    }
    ut(t) {
        var e;
        const n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), r = this.rt({
            path: n,
            it: !1
        });
        return r.et(), r;
    }
    ct(t) {
        // TODO(b/34871131): We don't support array paths right now; so make path
        // undefined.
        return this.rt({
            path: void 0,
            it: !0
        });
    }
    at(t) {
        return fr(t, this.settings.methodName, this.settings.ht || !1, this.path, this.settings.lt);
    }
    /** Returns 'true' if 'fieldPath' was traversed when creating this context. */    contains(t) {
        return void 0 !== this.fieldMask.find((e => t.isPrefixOf(e))) || void 0 !== this.fieldTransforms.find((e => t.isPrefixOf(e.field)));
    }
    et() {
        // TODO(b/34871131): Remove null check once we have proper paths for fields
        // within arrays.
        if (this.path) for (let t = 0; t < this.path.length; t++) this.ot(this.path.get(t));
    }
    ot(t) {
        if (0 === t.length) throw this.at("Document fields must not be empty");
        if (zn(this.nt) && jn.test(t)) throw this.at('Document fields cannot begin and end with "__"');
    }
}

/**
 * Helper for parsing raw user input (provided via the API) into internal model
 * classes.
 */ class Gn {
    constructor(t, e, n) {
        this.databaseId = t, this.ignoreUndefinedProperties = e, this.C = n || ln(t);
    }
    /** Creates a new top-level parse context. */    ft(t, e, n, r = !1) {
        return new Wn({
            nt: t,
            methodName: e,
            lt: n,
            path: rt.emptyPath(),
            it: !1,
            ht: r
        }, this.databaseId, this.C, this.ignoreUndefinedProperties);
    }
}

function Kn(t) {
    const e = t._freezeSettings(), n = ln(t._databaseId);
    return new Gn(t._databaseId, !!e.ignoreUndefinedProperties, n);
}

/** Parse document data from a set() call. */ function Yn(t, e, n, r, s, i = {}) {
    const o = t.ft(i.merge || i.mergeFields ? 2 /* UserDataSource.MergeSet */ : 0 /* UserDataSource.Set */ , e, n, s);
    cr("Data must be an object, but it was:", o, r);
    const u = or(r, o);
    let c, a;
    if (i.merge) c = new we(o.fieldMask), a = o.fieldTransforms; else if (i.mergeFields) {
        const t = [];
        for (const r of i.mergeFields) {
            const s = ar(e, r, n);
            if (!o.contains(s)) throw new j(V, `Field '${s}' is specified in your field mask but missing from your input data.`);
            dr(t, s) || t.push(s);
        }
        c = new we(t), a = o.fieldTransforms.filter((t => c.covers(t.field)));
    } else c = null, a = o.fieldTransforms;
    return new Bn(new me(u), c, a);
}

class Hn extends Mn {
    _toFieldTransform(t) {
        if (2 /* UserDataSource.MergeSet */ !== t.nt) throw 1 /* UserDataSource.Update */ === t.nt ? t.at(`${this._methodName}() can only appear at the top level of your update data`) : t.at(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);
        // No transform to add for a delete, but we need to add it to our
        // fieldMask so it gets deleted.
        return t.fieldMask.push(t.path), null;
    }
    isEqual(t) {
        return t instanceof Hn;
    }
}

/**
 * Creates a child context for parsing SerializableFieldValues.
 *
 * This is different than calling `ParseContext.contextWith` because it keeps
 * the fieldTransforms and fieldMask separate.
 *
 * The created context has its `dataSource` set to `UserDataSource.Argument`.
 * Although these values are used with writes, any elements in these FieldValues
 * are not considered writes since they cannot contain any FieldValue sentinels,
 * etc.
 *
 * @param fieldValue - The sentinel FieldValue for which to create a child
 *     context.
 * @param context - The parent context.
 * @param arrayElement - Whether or not the FieldValue has an array.
 */ function Jn(t, e, n) {
    return new Wn({
        nt: 3 /* UserDataSource.Argument */ ,
        lt: e.settings.lt,
        methodName: t._methodName,
        it: n
    }, e.databaseId, e.C, e.ignoreUndefinedProperties);
}

class Xn extends Mn {
    _toFieldTransform(t) {
        return new xe(t.path, new $e);
    }
    isEqual(t) {
        return t instanceof Xn;
    }
}

class Zn extends Mn {
    constructor(t, e) {
        super(t), this.dt = e;
    }
    _toFieldTransform(t) {
        const e = Jn(this, t, 
        /*array=*/ !0), n = this.dt.map((t => ir(t, e))), r = new Ne(n);
        return new xe(t.path, r);
    }
    isEqual(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }
}

class tr extends Mn {
    constructor(t, e) {
        super(t), this.dt = e;
    }
    _toFieldTransform(t) {
        const e = Jn(this, t, 
        /*array=*/ !0), n = this.dt.map((t => ir(t, e))), r = new De(n);
        return new xe(t.path, r);
    }
    isEqual(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }
}

class er extends Mn {
    constructor(t, e) {
        super(t), this.wt = e;
    }
    _toFieldTransform(t) {
        const e = new Fe(t.C, Pe(t.C, this.wt));
        return new xe(t.path, e);
    }
    isEqual(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }
}

/** Parse update data from an update() call. */ function nr(t, e, n, r) {
    const s = t.ft(1 /* UserDataSource.Update */ , e, n);
    cr("Data must be an object, but it was:", s, r);
    const i = [], o = me.empty();
    It(r, ((t, r) => {
        const u = lr(e, t, n);
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
                r = f(r);
        const c = s.ut(u);
        if (r instanceof Hn) 
        // Add it to the field mask, but don't add anything to updateData.
        i.push(u); else {
            const t = ir(r, c);
            null != t && (i.push(u), o.set(u, t));
        }
    }));
    const u = new we(i);
    return new Qn(o, u, s.fieldTransforms);
}

/** Parse update data from a list of field/value arguments. */ function rr(t, e, n, r, s, i) {
    const o = t.ft(1 /* UserDataSource.Update */ , e, n), u = [ ar(e, r, n) ], c = [ s ];
    if (i.length % 2 != 0) throw new j(V, `Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);
    for (let t = 0; t < i.length; t += 2) u.push(ar(e, i[t])), c.push(i[t + 1]);
    const a = [], h = me.empty();
    // We iterate in reverse order to pick the last value for a field if the
    // user specified the field multiple times.
    for (let t = u.length - 1; t >= 0; --t) if (!dr(a, u[t])) {
        const e = u[t];
        let n = c[t];
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
                n = f(n);
        const r = o.ut(e);
        if (n instanceof Hn) 
        // Add it to the field mask, but don't add anything to updateData.
        a.push(e); else {
            const t = ir(n, r);
            null != t && (a.push(e), h.set(e, t));
        }
    }
    const l = new we(a);
    return new Qn(h, l, o.fieldTransforms);
}

/**
 * Parse a "query value" (e.g. value in a where filter or a value in a cursor
 * bound).
 *
 * @param allowArrays - Whether the query value is an array that may directly
 * contain additional arrays (e.g. the operand of an `in` query).
 */ function sr(t, e, n, r = !1) {
    return ir(n, t.ft(r ? 4 /* UserDataSource.ArrayArgument */ : 3 /* UserDataSource.Argument */ , e));
}

/**
 * Parses user data to Protobuf Values.
 *
 * @param input - Data to be parsed.
 * @param context - A context object representing the current path being parsed,
 * the source of the data being parsed, etc.
 * @returns The parsed value, or null if the value was a FieldValue sentinel
 * that should not be included in the resulting parsed data.
 */ function ir(t, e) {
    if (ur(
    // Unwrap the API type from the Compat SDK. This will return the API type
    // from firestore-exp.
    t = f(t))) return cr("Unsupported field value:", e, t), or(t, e);
    if (t instanceof Mn) 
    // FieldValues usually parse into transforms (except deleteField())
    // in which case we do not want to include this field in our parsed data
    // (as doing so will overwrite the field directly prior to the transform
    // trying to transform it). So we don't add this location to
    // context.fieldMask and we return null as our parsing result.
    /**
 * "Parses" the provided FieldValueImpl, adding any necessary transforms to
 * context.fieldTransforms.
 */
    return function(t, e) {
        // Sentinels are only supported with writes, and not within arrays.
        if (!zn(e.nt)) throw e.at(`${t._methodName}() can only be used with update() and set()`);
        if (!e.path) throw e.at(`${t._methodName}() is not currently supported inside arrays`);
        const n = t._toFieldTransform(e);
        n && e.fieldTransforms.push(n);
    }
    /**
 * Helper to parse a scalar value (i.e. not an Object, Array, or FieldValue)
 *
 * @returns The parsed value
 */ (t, e), null;
    if (void 0 === t && e.ignoreUndefinedProperties) 
    // If the input is undefined it can never participate in the fieldMask, so
    // don't handle this below. If `ignoreUndefinedProperties` is false,
    // `parseScalarValue` will reject an undefined value.
    return null;
    if (
    // If context.path is null we are inside an array and we don't support
    // field mask paths more granular than the top-level array.
    e.path && e.fieldMask.push(e.path), t instanceof Array) {
        // TODO(b/34871131): Include the path containing the array in the error
        // message.
        // In the case of IN queries, the parsed data is an array (representing
        // the set of values to be included for the IN query) that may directly
        // contain additional arrays (each representing an individual field
        // value), so we disable this validation.
        if (e.settings.it && 4 /* UserDataSource.ArrayArgument */ !== e.nt) throw e.at("Nested arrays are not supported");
        return function(t, e) {
            const n = [];
            let r = 0;
            for (const s of t) {
                let t = ir(s, e.ct(r));
                null == t && (
                // Just include nulls in the array for fields being replaced with a
                // sentinel.
                t = {
                    nullValue: "NULL_VALUE"
                }), n.push(t), r++;
            }
            return {
                arrayValue: {
                    values: n
                }
            };
        }(t, e);
    }
    return function(t, e) {
        if (null === (t = f(t))) return {
            nullValue: "NULL_VALUE"
        };
        if ("number" == typeof t) return Pe(e.C, t);
        if ("boolean" == typeof t) return {
            booleanValue: t
        };
        if ("string" == typeof t) return {
            stringValue: t
        };
        if (t instanceof Date) {
            const n = Nt.fromDate(t);
            return {
                timestampValue: Qe(e.C, n)
            };
        }
        if (t instanceof Nt) {
            // Firestore backend truncates precision down to microseconds. To ensure
            // offline mode works the same with regards to truncation, perform the
            // truncation immediately without waiting for the backend to do that.
            const n = new Nt(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3));
            return {
                timestampValue: Qe(e.C, n)
            };
        }
        if (t instanceof Un) return {
            geoPointValue: {
                latitude: t.latitude,
                longitude: t.longitude
            }
        };
        if (t instanceof kn) return {
            bytesValue: ze(e.C, t._byteString)
        };
        if (t instanceof $n) {
            const n = e.databaseId, r = t.firestore._databaseId;
            if (!r.isEqual(n)) throw e.at(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);
            return {
                referenceValue: Ke(t.firestore._databaseId || e.databaseId, t._key.path)
            };
        }
        throw e.at(`Unsupported field value: ${ct(t)}`);
    }
    /**
 * Checks whether an object looks like a JSON object that should be converted
 * into a struct. Normal class/prototype instances are considered to look like
 * JSON objects since they should be converted to a struct value. Arrays, Dates,
 * GeoPoints, etc. are not considered to look like JSON objects since they map
 * to specific FieldValue types other than ObjectValue.
 */ (t, e);
}

function or(t, e) {
    const n = {};
    return !function(t) {
        for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
        return !0;
    }
    /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    // WebSafe uses a different URL-encoding safe alphabet that doesn't match
    // the encoding used on the backend.
    (t) ? It(t, ((t, r) => {
        const s = ir(r, e.st(t));
        null != s && (n[t] = s);
    })) : 
    // If we encounter an empty object, we explicitly add it to the update
    // mask to ensure that the server creates a map entry.
    e.path && e.path.length > 0 && e.fieldMask.push(e.path), {
        mapValue: {
            fields: n
        }
    };
}

function ur(t) {
    return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof Nt || t instanceof Un || t instanceof kn || t instanceof $n || t instanceof Mn);
}

function cr(t, e, n) {
    if (!ur(n) || !function(t) {
        return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t));
    }(n)) {
        const r = ct(n);
        throw "an object" === r ? e.at(t + " a custom object") : e.at(t + " " + r);
    }
}

/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */ function ar(t, e, n) {
    if ((
    // If required, replace the FieldPath Compat class with with the firestore-exp
    // FieldPath.
    e = f(e)) instanceof Cn) return e._internalPath;
    if ("string" == typeof e) return lr(t, e);
    throw fr("Field path arguments must be of type string or ", t, 
    /* hasConverter= */ !1, 
    /* path= */ void 0, n);
}

/**
 * Matches any characters in a field path string that are reserved.
 */ const hr = new RegExp("[~\\*/\\[\\]]");

/**
 * Wraps fromDotSeparatedString with an error message about the method that
 * was thrown.
 * @param methodName - The publicly visible method name
 * @param path - The dot-separated string form of a field path which will be
 * split on dots.
 * @param targetDoc - The document against which the field path will be
 * evaluated.
 */ function lr(t, e, n) {
    if (e.search(hr) >= 0) throw fr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`, t, 
    /* hasConverter= */ !1, 
    /* path= */ void 0, n);
    try {
        return new Cn(...e.split("."))._internalPath;
    } catch (r) {
        throw fr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`, t, 
        /* hasConverter= */ !1, 
        /* path= */ void 0, n);
    }
}

function fr(t, e, n, r, s) {
    const i = r && !r.isEmpty(), o = void 0 !== s;
    let u = `Function ${e}() called with invalid data`;
    n && (u += " (via `toFirestore()`)"), u += ". ";
    let c = "";
    return (i || o) && (c += " (found", i && (c += ` in field ${r}`), o && (c += ` in document ${s}`), 
    c += ")"), new j(V, u + t + c);
}

/** Checks `haystack` if FieldPath `needle` is present. Runs in O(n). */ function dr(t, e) {
    return t.some((t => t.isEqual(e)));
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A `DocumentSnapshot` contains data read from a document in your Firestore
 * database. The data can be extracted with `.data()` or `.get(<field>)` to
 * get a specific field.
 *
 * For a `DocumentSnapshot` that points to a non-existing document, any data
 * access will return 'undefined'. You can use the `exists()` method to
 * explicitly verify a document's existence.
 */ class wr {
    // Note: This class is stripped down version of the DocumentSnapshot in
    // the legacy SDK. The changes are:
    // - No support for SnapshotMetadata.
    // - No support for SnapshotOptions.
    /** @hideconstructor protected */
    constructor(t, e, n, r, s) {
        this._firestore = t, this._userDataWriter = e, this._key = n, this._document = r, 
        this._converter = s;
    }
    /** Property of the `DocumentSnapshot` that provides the document's ID. */    get id() {
        return this._key.path.lastSegment();
    }
    /**
     * The `DocumentReference` for the document included in the `DocumentSnapshot`.
     */    get ref() {
        return new $n(this._firestore, this._converter, this._key);
    }
    /**
     * Signals whether or not the document at the snapshot's location exists.
     *
     * @returns true if the document exists.
     */    exists() {
        return null !== this._document;
    }
    /**
     * Retrieves all fields in the document as an `Object`. Returns `undefined` if
     * the document doesn't exist.
     *
     * @returns An `Object` containing all fields in the document or `undefined`
     * if the document doesn't exist.
     */    data() {
        if (this._document) {
            if (this._converter) {
                // We only want to use the converter and create a new DocumentSnapshot
                // if a converter has been provided.
                const t = new mr(this._firestore, this._userDataWriter, this._key, this._document, 
                /* converter= */ null);
                return this._converter.fromFirestore(t);
            }
            return this._userDataWriter.convertValue(this._document.data.value);
        }
    }
    /**
     * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
     * document or field doesn't exist.
     *
     * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
     * field.
     * @returns The data at the specified field location or undefined if no such
     * field exists in the document.
     */
    // We are using `any` here to avoid an explicit cast by our users.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    get(t) {
        if (this._document) {
            const e = this._document.data.field(gr("DocumentSnapshot.get", t));
            if (null !== e) return this._userDataWriter.convertValue(e);
        }
    }
}

/**
 * A `QueryDocumentSnapshot` contains data read from a document in your
 * Firestore database as part of a query. The document is guaranteed to exist
 * and its data can be extracted with `.data()` or `.get(<field>)` to get a
 * specific field.
 *
 * A `QueryDocumentSnapshot` offers the same API surface as a
 * `DocumentSnapshot`. Since query results contain only existing documents, the
 * `exists` property will always be true and `data()` will never return
 * 'undefined'.
 */ class mr extends wr {
    /**
     * Retrieves all fields in the document as an `Object`.
     *
     * @override
     * @returns An `Object` containing all fields in the document.
     */
    data() {
        return super.data();
    }
}

/**
 * A `QuerySnapshot` contains zero or more `DocumentSnapshot` objects
 * representing the results of a query. The documents can be accessed as an
 * array via the `docs` property or enumerated using the `forEach` method. The
 * number of documents can be determined via the `empty` and `size`
 * properties.
 */ class pr {
    /** @hideconstructor */
    constructor(t, e) {
        this._docs = e, this.query = t;
    }
    /** An array of all the documents in the `QuerySnapshot`. */    get docs() {
        return [ ...this._docs ];
    }
    /** The number of documents in the `QuerySnapshot`. */    get size() {
        return this.docs.length;
    }
    /** True if there are no documents in the `QuerySnapshot`. */    get empty() {
        return 0 === this.docs.length;
    }
    /**
     * Enumerates all of the documents in the `QuerySnapshot`.
     *
     * @param callback - A callback to be called with a `QueryDocumentSnapshot` for
     * each document in the snapshot.
     * @param thisArg - The `this` binding for the callback.
     */    forEach(t, e) {
        this._docs.forEach(t, e);
    }
}

/**
 * Returns true if the provided snapshots are equal.
 *
 * @param left - A snapshot to compare.
 * @param right - A snapshot to compare.
 * @returns true if the snapshots are equal.
 */ function yr(t, e) {
    return t = f(t), e = f(e), t instanceof wr && e instanceof wr ? t._firestore === e._firestore && t._key.isEqual(e._key) && (null === t._document ? null === e._document : t._document.isEqual(e._document)) && t._converter === e._converter : t instanceof pr && e instanceof pr && (On(t.query, e.query) && bt(t.docs, e.docs, yr));
}

/**
 * Helper that calls `fromDotSeparatedString()` but wraps any error thrown.
 */ function gr(t, e) {
    return "string" == typeof e ? lr(t, e) : e instanceof Cn ? e._internalPath : e._delegate._internalPath;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An `AppliableConstraint` is an abstraction of a constraint that can be applied
 * to a Firestore query.
 */
class _r {}

/**
 * A `QueryConstraint` is used to narrow the set of documents returned by a
 * Firestore query. `QueryConstraint`s are created by invoking {@link where},
 * {@link orderBy}, {@link startAt}, {@link startAfter}, {@link
 * endBefore}, {@link endAt}, {@link limit}, {@link limitToLast} and
 * can then be passed to {@link query} to create a new query instance that
 * also contains this `QueryConstraint`.
 */ class vr extends _r {}

function br(t, e, ...n) {
    let r = [];
    e instanceof _r && r.push(e), r = r.concat(n), function(t) {
        const e = t.filter((t => t instanceof Ar)).length, n = t.filter((t => t instanceof Er)).length;
        if (e > 1 || e > 0 && n > 0) throw new j(V, "InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.");
    }
    /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    /**
 * Converts Firestore's internal types to the JavaScript types that we expose
 * to the user.
 *
 * @internal
 */ (r);
    for (const e of r) t = e._apply(t);
    return t;
}

/**
 * A `QueryFieldFilterConstraint` is used to narrow the set of documents returned by
 * a Firestore query by filtering on one or more document fields.
 * `QueryFieldFilterConstraint`s are created by invoking {@link where} and can then
 * be passed to {@link query} to create a new query instance that also contains
 * this `QueryFieldFilterConstraint`.
 */ class Er extends vr {
    /**
     * @internal
     */
    constructor(t, e, n) {
        super(), this._field = t, this._op = e, this._value = n, 
        /** The type of this query constraint */
        this.type = "where";
    }
    static _create(t, e, n) {
        return new Er(t, e, n);
    }
    _apply(t) {
        const e = this._parse(t);
        return Ur(t._query, e), new Nn(t.firestore, t.converter, Te(t._query, e));
    }
    _parse(t) {
        const e = Kn(t.firestore), n = function(t, e, n, r, s, i, o) {
            let u;
            if (s.isKeyField()) {
                if ("array-contains" /* Operator.ARRAY_CONTAINS */ === i || "array-contains-any" /* Operator.ARRAY_CONTAINS_ANY */ === i) throw new j(V, `Invalid Query. You can't perform '${i}' queries on documentId().`);
                if ("in" /* Operator.IN */ === i || "not-in" /* Operator.NOT_IN */ === i) {
                    Mr(o, i);
                    const e = [];
                    for (const n of o) e.push(Lr(r, t, n));
                    u = {
                        arrayValue: {
                            values: e
                        }
                    };
                } else u = Lr(r, t, o);
            } else "in" /* Operator.IN */ !== i && "not-in" /* Operator.NOT_IN */ !== i && "array-contains-any" /* Operator.ARRAY_CONTAINS_ANY */ !== i || Mr(o, i), 
            u = sr(n, e, o, 
            /* allowArrays= */ "in" /* Operator.IN */ === i || "not-in" /* Operator.NOT_IN */ === i);
            return Yt.create(s, i, u);
        }(t._query, "where", e, t.firestore._databaseId, this._field, this._op, this._value);
        return n;
    }
}

/**
 * Creates a {@link QueryFieldFilterConstraint} that enforces that documents
 * must contain the specified field and that the value should satisfy the
 * relation constraint provided.
 *
 * @param fieldPath - The path to compare
 * @param opStr - The operation string (e.g "&lt;", "&lt;=", "==", "&lt;",
 *   "&lt;=", "!=").
 * @param value - The value for comparison
 * @returns The created {@link QueryFieldFilterConstraint}.
 */ function Ir(t, e, n) {
    const r = e, s = gr("where", t);
    return Er._create(s, r, n);
}

/**
 * A `QueryCompositeFilterConstraint` is used to narrow the set of documents
 * returned by a Firestore query by performing the logical OR or AND of multiple
 * {@link QueryFieldFilterConstraint}s or {@link QueryCompositeFilterConstraint}s.
 * `QueryCompositeFilterConstraint`s are created by invoking {@link or} or
 * {@link and} and can then be passed to {@link query} to create a new query
 * instance that also contains the `QueryCompositeFilterConstraint`.
 * @internal TODO remove this internal tag with OR Query support in the server
 */ class Ar extends _r {
    /**
     * @internal
     */
    constructor(
    /** The type of this query constraint */
    t, e) {
        super(), this.type = t, this._queryConstraints = e;
    }
    static _create(t, e) {
        return new Ar(t, e);
    }
    _parse(t) {
        const e = this._queryConstraints.map((e => e._parse(t))).filter((t => t.getFilters().length > 0));
        return 1 === e.length ? e[0] : Ht.create(e, this._getOperator());
    }
    _apply(t) {
        const e = this._parse(t);
        return 0 === e.getFilters().length ? t : (function(t, e) {
            let n = t;
            const r = e.getFlattenedFilters();
            for (const t of r) Ur(n, t), n = Te(n, t);
        }
        // Checks if any of the provided filter operators are included in the given list of filters and
        // returns the first one that is, or null if none are.
        (t._query, e), new Nn(t.firestore, t.converter, Te(t._query, e)));
    }
    _getQueryConstraints() {
        return this._queryConstraints;
    }
    _getOperator() {
        return "and" === this.type ? "and" /* CompositeOperator.AND */ : "or" /* CompositeOperator.OR */;
    }
}

/**
 * Creates a {@link QueryCompositeFilterConstraint} that performs a logical OR
 * of all the provided {@link QueryFilterConstraint}s.
 *
 * @param queryConstraints - Optional. The {@link QueryFilterConstraint}s
 * for OR operation. These must be created with calls to {@link where},
 * {@link or}, or {@link and}.
 * @returns The created {@link QueryCompositeFilterConstraint}.
 * @internal TODO remove this internal tag with OR Query support in the server
 */ function Tr(...t) {
    // Only support QueryFilterConstraints
    return t.forEach((t => Br("or", t))), Ar._create("or" /* CompositeOperator.OR */ , t);
}

/**
 * Creates a {@link QueryCompositeFilterConstraint} that performs a logical AND
 * of all the provided {@link QueryFilterConstraint}s.
 *
 * @param queryConstraints - Optional. The {@link QueryFilterConstraint}s
 * for AND operation. These must be created with calls to {@link where},
 * {@link or}, or {@link and}.
 * @returns The created {@link QueryCompositeFilterConstraint}.
 * @internal TODO remove this internal tag with OR Query support in the server
 */ function Rr(...t) {
    // Only support QueryFilterConstraints
    return t.forEach((t => Br("and", t))), Ar._create("and" /* CompositeOperator.AND */ , t);
}

/**
 * A `QueryOrderByConstraint` is used to sort the set of documents returned by a
 * Firestore query. `QueryOrderByConstraint`s are created by invoking
 * {@link orderBy} and can then be passed to {@link query} to create a new query
 * instance that also contains this `QueryOrderByConstraint`.
 *
 * Note: Documents that do not contain the orderBy field will not be present in
 * the query result.
 */ class Pr extends vr {
    /**
     * @internal
     */
    constructor(t, e) {
        super(), this._field = t, this._direction = e, 
        /** The type of this query constraint */
        this.type = "orderBy";
    }
    static _create(t, e) {
        return new Pr(t, e);
    }
    _apply(t) {
        const e = function(t, e, n) {
            if (null !== t.startAt) throw new j(V, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
            if (null !== t.endAt) throw new j(V, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
            const r = new oe(e, n);
            return function(t, e) {
                if (null === ve(t)) {
                    // This is the first order by. It must match any inequality.
                    const n = be(t);
                    null !== n && jr(t, n, e.field);
                }
            }(t, r), r;
        }
        /**
 * Create a `Bound` from a query and a document.
 *
 * Note that the `Bound` will always include the key of the document
 * and so only the provided document will compare equal to the returned
 * position.
 *
 * Will throw if the document does not contain all fields of the order by
 * of the query or if any of the fields in the order by are an uncommitted
 * server timestamp.
 */ (t._query, this._field, this._direction);
        return new Nn(t.firestore, t.converter, function(t, e) {
            // TODO(dimond): validate that orderBy does not list the same key twice.
            const n = t.explicitOrderBy.concat([ e ]);
            return new _e(t.path, t.collectionGroup, n, t.filters.slice(), t.limit, t.limitType, t.startAt, t.endAt);
        }(t._query, e));
    }
}

/**
 * Creates a {@link QueryOrderByConstraint} that sorts the query result by the
 * specified field, optionally in descending order instead of ascending.
 *
 * Note: Documents that do not contain the specified field will not be present
 * in the query result.
 *
 * @param fieldPath - The field to sort by.
 * @param directionStr - Optional direction to sort by ('asc' or 'desc'). If
 * not specified, order will be ascending.
 * @returns The created {@link QueryOrderByConstraint}.
 */ function Vr(t, e = "asc") {
    const n = e, r = gr("orderBy", t);
    return Pr._create(r, n);
}

/**
 * A `QueryLimitConstraint` is used to limit the number of documents returned by
 * a Firestore query.
 * `QueryLimitConstraint`s are created by invoking {@link limit} or
 * {@link limitToLast} and can then be passed to {@link query} to create a new
 * query instance that also contains this `QueryLimitConstraint`.
 */ class $r extends vr {
    /**
     * @internal
     */
    constructor(
    /** The type of this query constraint */
    t, e, n) {
        super(), this.type = t, this._limit = e, this._limitType = n;
    }
    static _create(t, e, n) {
        return new $r(t, e, n);
    }
    _apply(t) {
        return new Nn(t.firestore, t.converter, function(t, e, n) {
            return new _e(t.path, t.collectionGroup, t.explicitOrderBy.slice(), t.filters.slice(), e, n, t.startAt, t.endAt);
        }(t._query, this._limit, this._limitType));
    }
}

/**
 * Creates a {@link QueryLimitConstraint} that only returns the first matching
 * documents.
 *
 * @param limit - The maximum number of items to return.
 * @returns The created {@link QueryLimitConstraint}.
 */ function Nr(t) {
    return ht("limit", t), $r._create("limit", t, "F" /* LimitType.First */);
}

/**
 * Creates a {@link QueryLimitConstraint} that only returns the last matching
 * documents.
 *
 * You must specify at least one `orderBy` clause for `limitToLast` queries,
 * otherwise an exception will be thrown during execution.
 *
 * @param limit - The maximum number of items to return.
 * @returns The created {@link QueryLimitConstraint}.
 */ function Dr(t) {
    return ht("limitToLast", t), $r._create("limitToLast", t, "L" /* LimitType.Last */);
}

/**
 * A `QueryStartAtConstraint` is used to exclude documents from the start of a
 * result set returned by a Firestore query.
 * `QueryStartAtConstraint`s are created by invoking {@link (startAt:1)} or
 * {@link (startAfter:1)} and can then be passed to {@link query} to create a
 * new query instance that also contains this `QueryStartAtConstraint`.
 */ class Fr extends vr {
    /**
     * @internal
     */
    constructor(
    /** The type of this query constraint */
    t, e, n) {
        super(), this.type = t, this._docOrFields = e, this._inclusive = n;
    }
    static _create(t, e, n) {
        return new Fr(t, e, n);
    }
    _apply(t) {
        const e = Cr(t, this.type, this._docOrFields, this._inclusive);
        return new Nn(t.firestore, t.converter, function(t, e) {
            return new _e(t.path, t.collectionGroup, t.explicitOrderBy.slice(), t.filters.slice(), t.limit, t.limitType, e, t.endAt);
        }(t._query, e));
    }
}

function xr(...t) {
    return Fr._create("startAt", t, 
    /*inclusive=*/ !0);
}

function Sr(...t) {
    return Fr._create("startAfter", t, 
    /*inclusive=*/ !1);
}

/**
 * A `QueryEndAtConstraint` is used to exclude documents from the end of a
 * result set returned by a Firestore query.
 * `QueryEndAtConstraint`s are created by invoking {@link (endAt:1)} or
 * {@link (endBefore:1)} and can then be passed to {@link query} to create a new
 * query instance that also contains this `QueryEndAtConstraint`.
 */ class qr extends vr {
    /**
     * @internal
     */
    constructor(
    /** The type of this query constraint */
    t, e, n) {
        super(), this.type = t, this._docOrFields = e, this._inclusive = n;
    }
    static _create(t, e, n) {
        return new qr(t, e, n);
    }
    _apply(t) {
        const e = Cr(t, this.type, this._docOrFields, this._inclusive);
        return new Nn(t.firestore, t.converter, function(t, e) {
            return new _e(t.path, t.collectionGroup, t.explicitOrderBy.slice(), t.filters.slice(), t.limit, t.limitType, t.startAt, e);
        }(t._query, e));
    }
}

function Or(...t) {
    return qr._create("endBefore", t, 
    /*inclusive=*/ !1);
}

function kr(...t) {
    return qr._create("endAt", t, 
    /*inclusive=*/ !0);
}

/** Helper function to create a bound from a document or fields */ function Cr(t, e, n, r) {
    if (n[0] = f(n[0]), n[0] instanceof wr) return function(t, e, n, r, s) {
        if (!r) throw new j(N, `Can't use a DocumentSnapshot that doesn't exist for ${n}().`);
        const i = [];
        // Because people expect to continue/end a query at the exact document
        // provided, we need to use the implicit sort order rather than the explicit
        // sort order, because it's guaranteed to contain the document key. That way
        // the position becomes unambiguous and the query continues/ends exactly at
        // the provided document. Without the key (by using the explicit sort
        // orders), multiple documents could match the position, yielding duplicate
        // results.
                for (const n of Ie(t)) if (n.field.isKeyField()) i.push(Mt(e, r.key)); else {
            const t = r.data.field(n.field);
            if (Dt(t)) throw new j(V, 'Invalid query. You are trying to start or end a query using a document for which the field "' + n.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
            if (null === t) {
                const t = n.field.canonicalString();
                throw new j(V, `Invalid query. You are trying to start or end a query using a document for which the field '${t}' (used as the orderBy) does not exist.`);
            }
            i.push(t);
        }
        return new Wt(i, s);
    }
    /**
 * Converts a list of field values to a `Bound` for the given query.
 */ (t._query, t.firestore._databaseId, e, n[0]._document, r);
    {
        const s = Kn(t.firestore);
        return function(t, e, n, r, s, i) {
            // Use explicit order by's because it has to match the query the user made
            const o = t.explicitOrderBy;
            if (s.length > o.length) throw new j(V, `Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);
            const u = [];
            for (let i = 0; i < s.length; i++) {
                const c = s[i];
                if (o[i].field.isKeyField()) {
                    if ("string" != typeof c) throw new j(V, `Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof c}`);
                    if (!Ee(t) && -1 !== c.indexOf("/")) throw new j(V, `Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${c}' contains a slash.`);
                    const n = t.path.child(et.fromString(c));
                    if (!st.isDocumentKey(n)) throw new j(V, `Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);
                    const s = new st(n);
                    u.push(Mt(e, s));
                } else {
                    const t = sr(n, r, c);
                    u.push(t);
                }
            }
            return new Wt(u, i);
        }
        /**
 * Parses the given `documentIdValue` into a `ReferenceValue`, throwing
 * appropriate errors if the value is anything other than a `DocumentReference`
 * or `string`, or if the string is malformed.
 */ (t._query, t.firestore._databaseId, s, e, n, r);
    }
}

function Lr(t, e, n) {
    if ("string" == typeof (n = f(n))) {
        if ("" === n) throw new j(V, "Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");
        if (!Ee(e) && -1 !== n.indexOf("/")) throw new j(V, `Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);
        const r = e.path.child(et.fromString(n));
        if (!st.isDocumentKey(r)) throw new j(V, `Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);
        return Mt(t, new st(r));
    }
    if (n instanceof $n) return Mt(t, n._key);
    throw new j(V, `Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ct(n)}.`);
}

/**
 * Validates that the value passed into a disjunctive filter satisfies all
 * array requirements.
 */ function Mr(t, e) {
    if (!Array.isArray(t) || 0 === t.length) throw new j(V, `Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);
    if (t.length > 10) throw new j(V, `Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`);
}

/**
 * Given an operator, returns the set of operators that cannot be used with it.
 *
 * Operators in a query must adhere to the following set of rules:
 * 1. Only one array operator is allowed.
 * 2. Only one disjunctive operator is allowed.
 * 3. `NOT_EQUAL` cannot be used with another `NOT_EQUAL` operator.
 * 4. `NOT_IN` cannot be used with array, disjunctive, or `NOT_EQUAL` operators.
 *
 * Array operators: `ARRAY_CONTAINS`, `ARRAY_CONTAINS_ANY`
 * Disjunctive operators: `IN`, `ARRAY_CONTAINS_ANY`, `NOT_IN`
 */ function Ur(t, e) {
    if (e.isInequality()) {
        const n = be(t), r = e.field;
        if (null !== n && !n.isEqual(r)) throw new j(V, `Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);
        const s = ve(t);
        null !== s && jr(t, r, s);
    }
    const n = function(t, e) {
        for (const n of t) for (const t of n.getFlattenedFilters()) if (e.indexOf(t.op) >= 0) return t.op;
        return null;
    }(t.filters, function(t) {
        switch (t) {
          case "!=" /* Operator.NOT_EQUAL */ :
            return [ "!=" /* Operator.NOT_EQUAL */ , "not-in" /* Operator.NOT_IN */ ];

          case "array-contains" /* Operator.ARRAY_CONTAINS */ :
            return [ "array-contains" /* Operator.ARRAY_CONTAINS */ , "array-contains-any" /* Operator.ARRAY_CONTAINS_ANY */ , "not-in" /* Operator.NOT_IN */ ];

          case "in" /* Operator.IN */ :
            return [ "array-contains-any" /* Operator.ARRAY_CONTAINS_ANY */ , "in" /* Operator.IN */ , "not-in" /* Operator.NOT_IN */ ];

          case "array-contains-any" /* Operator.ARRAY_CONTAINS_ANY */ :
            return [ "array-contains" /* Operator.ARRAY_CONTAINS */ , "array-contains-any" /* Operator.ARRAY_CONTAINS_ANY */ , "in" /* Operator.IN */ , "not-in" /* Operator.NOT_IN */ ];

          case "not-in" /* Operator.NOT_IN */ :
            return [ "array-contains" /* Operator.ARRAY_CONTAINS */ , "array-contains-any" /* Operator.ARRAY_CONTAINS_ANY */ , "in" /* Operator.IN */ , "not-in" /* Operator.NOT_IN */ , "!=" /* Operator.NOT_EQUAL */ ];

          default:
            return [];
        }
    }(e.op));
    if (null !== n) 
    // Special case when it's a duplicate op to give a slightly clearer error message.
    throw n === e.op ? new j(V, `Invalid query. You cannot use more than one '${e.op.toString()}' filter.`) : new j(V, `Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`);
}

function jr(t, e, n) {
    if (!n.isEqual(e)) throw new j(V, `Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`);
}

function Br(t, e) {
    if (!(e instanceof Er || e instanceof Ar)) throw new j(V, `Function ${t}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Converts custom model object of type T into `DocumentData` by applying the
 * converter if it exists.
 *
 * This function is used when converting user objects to `DocumentData`
 * because we want to provide the user with a more specific error message if
 * their `set()` or fails due to invalid data originating from a `toFirestore()`
 * call.
 */
function Qr(t, e, n) {
    let r;
    // Cast to `any` in order to satisfy the union type constraint on
    // toFirestore().
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return r = t ? n && (n.merge || n.mergeFields) ? t.toFirestore(e, n) : t.toFirestore(e) : e, 
    r;
}

class zr extends class {
    convertValue(t, e = "none") {
        switch (qt(t)) {
          case 0 /* TypeOrder.NullValue */ :
            return null;

          case 1 /* TypeOrder.BooleanValue */ :
            return t.booleanValue;

          case 2 /* TypeOrder.NumberValue */ :
            return Vt(t.integerValue || t.doubleValue);

          case 3 /* TypeOrder.TimestampValue */ :
            return this.convertTimestamp(t.timestampValue);

          case 4 /* TypeOrder.ServerTimestampValue */ :
            return this.convertServerTimestamp(t, e);

          case 5 /* TypeOrder.StringValue */ :
            return t.stringValue;

          case 6 /* TypeOrder.BlobValue */ :
            return this.convertBytes($t(t.bytesValue));

          case 7 /* TypeOrder.RefValue */ :
            return this.convertReference(t.referenceValue);

          case 8 /* TypeOrder.GeoPointValue */ :
            return this.convertGeoPoint(t.geoPointValue);

          case 9 /* TypeOrder.ArrayValue */ :
            return this.convertArray(t.arrayValue, e);

          case 10 /* TypeOrder.ObjectValue */ :
            return this.convertObject(t.mapValue, e);

          default:
            throw E();
        }
    }
    convertObject(t, e) {
        const n = {};
        return It(t.fields, ((t, r) => {
            n[t] = this.convertValue(r, e);
        })), n;
    }
    convertGeoPoint(t) {
        return new Un(Vt(t.latitude), Vt(t.longitude));
    }
    convertArray(t, e) {
        return (t.values || []).map((t => this.convertValue(t, e)));
    }
    convertServerTimestamp(t, e) {
        switch (e) {
          case "previous":
            const n = Ft(t);
            return null == n ? null : this.convertValue(n, e);

          case "estimate":
            return this.convertTimestamp(xt(t));

          default:
            return null;
        }
    }
    convertTimestamp(t) {
        const e = Pt(t);
        return new Nt(e.seconds, e.nanos);
    }
    convertDocumentKey(t, e) {
        const n = et.fromString(t);
        I(hn(n));
        const r = new Z(n.get(1), n.get(3)), s = new st(n.popFirst(5));
        return r.isEqual(e) || 
        // TODO(b/64130202): Somehow support foreign references.
        _(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`), 
        s;
    }
} {
    constructor(t) {
        super(), this.firestore = t;
    }
    convertBytes(t) {
        return new kn(t);
    }
    convertReference(t) {
        const e = this.convertDocumentKey(t, this.firestore._databaseId);
        return new $n(this.firestore, /* converter= */ null, e);
    }
}

/**
 * Reads the document referred to by the specified document reference.
 *
 * All documents are directly fetched from the server, even if the document was
 * previously read or modified. Recent modifications are only reflected in the
 * retrieved `DocumentSnapshot` if they have already been applied by the
 * backend. If the client is offline, the read fails. If you like to use
 * caching or see local modifications, please use the full Firestore SDK.
 *
 * @param reference - The reference of the document to fetch.
 * @returns A Promise resolved with a `DocumentSnapshot` containing the current
 * document contents.
 */ function Wr(t) {
    const e = _n((t = at(t, $n)).firestore), n = new zr(t.firestore);
    return mn(e, [ t._key ]).then((e => {
        I(1 === e.length);
        const r = e[0];
        return new wr(t.firestore, n, t._key, r.isFoundDocument() ? r : null, t.converter);
    }));
}

/**
 * Executes the query and returns the results as a {@link QuerySnapshot}.
 *
 * All queries are executed directly by the server, even if the the query was
 * previously executed. Recent modifications are only reflected in the retrieved
 * results if they have already been applied by the backend. If the client is
 * offline, the operation fails. To see previously cached result and local
 * modifications, use the full Firestore SDK.
 *
 * @param query - The `Query` to execute.
 * @returns A Promise that will be resolved with the results of the query.
 */ function Gr(t) {
    !function(t) {
        if ("L" /* LimitType.Last */ === t.limitType && 0 === t.explicitOrderBy.length) throw new j(C, "limitToLast() queries require specifying at least one orderBy() clause");
    }((t = at(t, Nn))._query);
    const e = _n(t.firestore), n = new zr(t.firestore);
    return pn(e, t._query).then((e => {
        const r = e.map((e => new mr(t.firestore, n, e.key, e, t.converter)));
        return "L" /* LimitType.Last */ === t._query.limitType && 
        // Limit to last queries reverse the orderBy constraint that was
        // specified by the user. As such, we need to reverse the order of the
        // results to return the documents in the expected order.
        r.reverse(), new pr(t, r);
    }));
}

function Kr(t, e, n) {
    const r = Qr((t = at(t, $n)).converter, e, n), s = Yn(Kn(t.firestore), "setDoc", t._key, r, null !== t.converter, n);
    return wn(_n(t.firestore), [ s.toMutation(t._key, Se.none()) ]);
}

function Yr(t, e, n, ...r) {
    const s = Kn((t = at(t, $n)).firestore);
    // For Compat types, we have to "extract" the underlying types before
    // performing validation.
        let i;
    i = "string" == typeof (e = f(e)) || e instanceof Cn ? rr(s, "updateDoc", t._key, e, n, r) : nr(s, "updateDoc", t._key, e);
    return wn(_n(t.firestore), [ i.toMutation(t._key, Se.exists(!0)) ]);
}

/**
 * Deletes the document referred to by the specified `DocumentReference`.
 *
 * The deletion will only be reflected in document reads that occur after the
 * returned promise resolves. If the client is offline, the
 * delete fails. If you would like to see local modifications or buffer writes
 * until the client is online, use the full Firestore SDK.
 *
 * @param reference - A reference to the document to delete.
 * @returns A `Promise` resolved once the document has been successfully
 * deleted from the backend.
 */ function Hr(t) {
    return wn(_n((t = at(t, $n)).firestore), [ new Ce(t._key, Se.none()) ]);
}

/**
 * Add a new document to specified `CollectionReference` with the given data,
 * assigning it a document ID automatically.
 *
 * The result of this write will only be reflected in document reads that occur
 * after the returned promise resolves. If the client is offline, the
 * write fails. If you would like to see local modifications or buffer writes
 * until the client is online, use the full Firestore SDK.
 *
 * @param reference - A reference to the collection to add this document to.
 * @param data - An Object containing the data for the new document.
 * @throws Error - If the provided input is not a valid Firestore document.
 * @returns A `Promise` resolved with a `DocumentReference` pointing to the
 * newly created document after it has been written to the backend.
 */ function Jr(t, e) {
    const n = Sn(t = at(t, Dn)), r = Qr(t.converter, e), s = Yn(Kn(t.firestore), "addDoc", n._key, r, null !== n.converter, {});
    return wn(_n(t.firestore), [ s.toMutation(n._key, Se.exists(!1)) ]).then((() => n));
}

/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Calculates the number of documents in the result set of the given query,
 * without actually downloading the documents.
 *
 * Using this function to count the documents is efficient because only the
 * final count, not the documents' data, is downloaded. This function can even
 * count the documents if the result set would be prohibitively large to
 * download entirely (e.g. thousands of documents).
 *
 * @param query - The query whose result set size to calculate.
 * @returns A Promise that will be resolved with the count; the count can be
 * retrieved from `snapshot.data().count`, where `snapshot` is the
 * `AggregateQuerySnapshot` to which the returned Promise resolves.
 */ function Xr(t) {
    const e = at(t.firestore, bn), n = _n(e), r = new zr(e);
    return new Vn(t, n, r).run();
}

/**
 * Compares two `AggregateQuerySnapshot` instances for equality.
 *
 * Two `AggregateQuerySnapshot` instances are considered "equal" if they have
 * underlying queries that compare equal, and the same data.
 *
 * @param left - The first `AggregateQuerySnapshot` to compare.
 * @param right - The second `AggregateQuerySnapshot` to compare.
 *
 * @returns `true` if the objects are "equal", as defined above, or `false`
 * otherwise.
 */ function Zr(t, e) {
    return On(t.query, e.query) && d(t.data(), e.data());
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a sentinel for use with {@link @firebase/firestore/lite#(updateDoc:1)} or
 * {@link @firebase/firestore/lite#(setDoc:1)} with `{merge: true}` to mark a field for deletion.
 */ function ts() {
    return new Hn("deleteField");
}

/**
 * Returns a sentinel used with {@link @firebase/firestore/lite#(setDoc:1)} or {@link @firebase/firestore/lite#(updateDoc:1)} to
 * include a server-generated timestamp in the written data.
 */ function es() {
    return new Xn("serverTimestamp");
}

/**
 * Returns a special value that can be used with {@link @firebase/firestore/lite#(setDoc:1)} or {@link
 * @firebase/firestore/lite#(updateDoc:1)} that tells the server to union the given elements with any array
 * value that already exists on the server. Each specified element that doesn't
 * already exist in the array will be added to the end. If the field being
 * modified is not already an array it will be overwritten with an array
 * containing exactly the specified elements.
 *
 * @param elements - The elements to union into the array.
 * @returns The `FieldValue` sentinel for use in a call to `setDoc()` or
 * `updateDoc()`.
 */ function ns(...t) {
    // NOTE: We don't actually parse the data until it's used in set() or
    // update() since we'd need the Firestore instance to do this.
    return new Zn("arrayUnion", t);
}

/**
 * Returns a special value that can be used with {@link (setDoc:1)} or {@link
 * updateDoc:1} that tells the server to remove the given elements from any
 * array value that already exists on the server. All instances of each element
 * specified will be removed from the array. If the field being modified is not
 * already an array it will be overwritten with an empty array.
 *
 * @param elements - The elements to remove from the array.
 * @returns The `FieldValue` sentinel for use in a call to `setDoc()` or
 * `updateDoc()`
 */ function rs(...t) {
    // NOTE: We don't actually parse the data until it's used in set() or
    // update() since we'd need the Firestore instance to do this.
    return new tr("arrayRemove", t);
}

/**
 * Returns a special value that can be used with {@link @firebase/firestore/lite#(setDoc:1)} or {@link
 * @firebase/firestore/lite#(updateDoc:1)} that tells the server to increment the field's current value by
 * the given value.
 *
 * If either the operand or the current field value uses floating point
 * precision, all arithmetic follows IEEE 754 semantics. If both values are
 * integers, values outside of JavaScript's safe number range
 * (`Number.MIN_SAFE_INTEGER` to `Number.MAX_SAFE_INTEGER`) are also subject to
 * precision loss. Furthermore, once processed by the Firestore backend, all
 * integer operations are capped between -2^63 and 2^63-1.
 *
 * If the current field value is not of type `number`, or if the field does not
 * yet exist, the transformation sets the field to the given value.
 *
 * @param n - The value to increment by.
 * @returns The `FieldValue` sentinel for use in a call to `setDoc()` or
 * `updateDoc()`
 */ function ss(t) {
    return new er("increment", t);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A write batch, used to perform multiple writes as a single atomic unit.
 *
 * A `WriteBatch` object can be acquired by calling {@link writeBatch}. It
 * provides methods for adding writes to the write batch. None of the writes
 * will be committed (or visible locally) until {@link WriteBatch.commit} is
 * called.
 */ class is {
    /** @hideconstructor */
    constructor(t, e) {
        this._firestore = t, this._commitHandler = e, this._mutations = [], this._committed = !1, 
        this._dataReader = Kn(t);
    }
    set(t, e, n) {
        this._verifyNotCommitted();
        const r = os(t, this._firestore), s = Qr(r.converter, e, n), i = Yn(this._dataReader, "WriteBatch.set", r._key, s, null !== r.converter, n);
        return this._mutations.push(i.toMutation(r._key, Se.none())), this;
    }
    update(t, e, n, ...r) {
        this._verifyNotCommitted();
        const s = os(t, this._firestore);
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
                let i;
        return i = "string" == typeof (e = f(e)) || e instanceof Cn ? rr(this._dataReader, "WriteBatch.update", s._key, e, n, r) : nr(this._dataReader, "WriteBatch.update", s._key, e), 
        this._mutations.push(i.toMutation(s._key, Se.exists(!0))), this;
    }
    /**
     * Deletes the document referred to by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be deleted.
     * @returns This `WriteBatch` instance. Used for chaining method calls.
     */    delete(t) {
        this._verifyNotCommitted();
        const e = os(t, this._firestore);
        return this._mutations = this._mutations.concat(new Ce(e._key, Se.none())), this;
    }
    /**
     * Commits all of the writes in this write batch as a single atomic unit.
     *
     * The result of these writes will only be reflected in document reads that
     * occur after the returned promise resolves. If the client is offline, the
     * write fails. If you would like to see local modifications or buffer writes
     * until the client is online, use the full Firestore SDK.
     *
     * @returns A `Promise` resolved once all of the writes in the batch have been
     * successfully written to the backend as an atomic unit (note that it won't
     * resolve while you're offline).
     */    commit() {
        return this._verifyNotCommitted(), this._committed = !0, this._mutations.length > 0 ? this._commitHandler(this._mutations) : Promise.resolve();
    }
    _verifyNotCommitted() {
        if (this._committed) throw new j(q, "A write batch can no longer be used after commit() has been called.");
    }
}

function os(t, e) {
    if ((t = f(t)).firestore !== e) throw new j(V, "Provided document reference is from a different Firestore instance.");
    return t;
}

/**
 * Creates a write batch, used for performing multiple writes as a single
 * atomic operation. The maximum number of writes allowed in a single WriteBatch
 * is 500.
 *
 * The result of these writes will only be reflected in document reads that
 * occur after the returned promise resolves. If the client is offline, the
 * write fails. If you would like to see local modifications or buffer writes
 * until the client is online, use the full Firestore SDK.
 *
 * @returns A `WriteBatch` that can be used to atomically execute multiple
 * writes.
 */ function us(t) {
    const e = _n(t = at(t, bn));
    return new is(t, (t => wn(e, t)));
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Internal transaction object responsible for accumulating the mutations to
 * perform and the base versions for any documents read.
 */ class cs {
    constructor(t) {
        this.datastore = t, 
        // The version of each document that was read during this transaction.
        this.readVersions = new Map, this.mutations = [], this.committed = !1, 
        /**
         * A deferred usage error that occurred previously in this transaction that
         * will cause the transaction to fail once it actually commits.
         */
        this.lastWriteError = null, 
        /**
         * Set of documents that have been written in the transaction.
         *
         * When there's more than one write to the same key in a transaction, any
         * writes after the first are handled differently.
         */
        this.writtenDocs = new Set;
    }
    async lookup(t) {
        if (this.ensureCommitNotCalled(), this.mutations.length > 0) throw new j(V, "Firestore transactions require all reads to be executed before all writes.");
        const e = await mn(this.datastore, t);
        return e.forEach((t => this.recordVersion(t))), e;
    }
    set(t, e) {
        this.write(e.toMutation(t, this.precondition(t))), this.writtenDocs.add(t.toString());
    }
    update(t, e) {
        try {
            this.write(e.toMutation(t, this.preconditionForUpdate(t)));
        } catch (t) {
            this.lastWriteError = t;
        }
        this.writtenDocs.add(t.toString());
    }
    delete(t) {
        this.write(new Ce(t, this.precondition(t))), this.writtenDocs.add(t.toString());
    }
    async commit() {
        if (this.ensureCommitNotCalled(), this.lastWriteError) throw this.lastWriteError;
        const t = this.readVersions;
        // For each mutation, note that the doc was written.
                this.mutations.forEach((e => {
            t.delete(e.key.toString());
        })), 
        // For each document that was read but not written to, we want to perform
        // a `verify` operation.
        t.forEach(((t, e) => {
            const n = st.fromPath(e);
            this.mutations.push(new Le(n, this.precondition(n)));
        })), await wn(this.datastore, this.mutations), this.committed = !0;
    }
    recordVersion(t) {
        let e;
        if (t.isFoundDocument()) e = t.version; else {
            if (!t.isNoDocument()) throw E();
            // Represent a deleted doc using SnapshotVersion.min().
            e = ce.min();
        }
        const n = this.readVersions.get(t.key.toString());
        if (n) {
            if (!e.isEqual(n)) 
            // This transaction will fail no matter what.
            throw new j(O, "Document version changed between two reads.");
        } else this.readVersions.set(t.key.toString(), e);
    }
    /**
     * Returns the version of this document when it was read in this transaction,
     * as a precondition, or no precondition if it was not read.
     */    precondition(t) {
        const e = this.readVersions.get(t.toString());
        return !this.writtenDocs.has(t.toString()) && e ? e.isEqual(ce.min()) ? Se.exists(!1) : Se.updateTime(e) : Se.none();
    }
    /**
     * Returns the precondition for a document if the operation is an update.
     */    preconditionForUpdate(t) {
        const e = this.readVersions.get(t.toString());
        // The first time a document is written, we want to take into account the
        // read time and existence
                if (!this.writtenDocs.has(t.toString()) && e) {
            if (e.isEqual(ce.min())) 
            // The document doesn't exist, so fail the transaction.
            // This has to be validated locally because you can't send a
            // precondition that a document does not exist without changing the
            // semantics of the backend write to be an insert. This is the reverse
            // of what we want, since we want to assert that the document doesn't
            // exist but then send the update and have it fail. Since we can't
            // express that to the backend, we have to validate locally.
            // Note: this can change once we can send separate verify writes in the
            // transaction.
            throw new j(V, "Can't update a document that doesn't exist.");
            // Document exists, base precondition on document update time.
                        return Se.updateTime(e);
        }
        // Document was not read, so we just use the preconditions for a blind
        // update.
        return Se.exists(!0);
    }
    write(t) {
        this.ensureCommitNotCalled(), this.mutations.push(t);
    }
    ensureCommitNotCalled() {}
}

/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const as = {
    maxAttempts: 5
};

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * TransactionRunner encapsulates the logic needed to run and retry transactions
 * with backoff.
 */
class hs {
    constructor(t, e, n, r, s) {
        this.asyncQueue = t, this.datastore = e, this.options = n, this.updateFunction = r, 
        this.deferred = s, this.yt = n.maxAttempts, this.gt = new fn(this.asyncQueue, "transaction_retry" /* TimerId.TransactionRetry */);
    }
    /** Runs the transaction and sets the result on deferred. */    run() {
        this.yt -= 1, this._t();
    }
    _t() {
        this.gt.H((async () => {
            const t = new cs(this.datastore), e = this.vt(t);
            e && e.then((e => {
                this.asyncQueue.enqueueAndForget((() => t.commit().then((() => {
                    this.deferred.resolve(e);
                })).catch((t => {
                    this.bt(t);
                }))));
            })).catch((t => {
                this.bt(t);
            }));
        }));
    }
    vt(t) {
        try {
            const e = this.updateFunction(t);
            return !lt(e) && e.catch && e.then ? e : (this.deferred.reject(Error("Transaction callback must return a Promise")), 
            null);
        } catch (t) {
            // Do not retry errors thrown by user provided updateFunction.
            return this.deferred.reject(t), null;
        }
    }
    bt(t) {
        this.yt > 0 && this.Et(t) ? (this.yt -= 1, this.asyncQueue.enqueueAndForget((() => (this._t(), 
        Promise.resolve())))) : this.deferred.reject(t);
    }
    Et(t) {
        if ("FirebaseError" === t.name) {
            // In transactions, the backend will fail outdated reads with FAILED_PRECONDITION and
            // non-matching document versions with ABORTED. These errors should be retried.
            const e = t.code;
            return "aborted" === e || "failed-precondition" === e || "already-exists" === e || !
            /**
 * Determines whether an error code represents a permanent error when received
 * in response to a non-write operation.
 *
 * See isPermanentWriteError for classifying write errors.
 */
            function(t) {
                switch (t) {
                  default:
                    return E();

                  case R:
                  case P:
                  case $:
                  case S:
                  case L:
                  case M:
 // Unauthenticated means something went wrong with our token and we need
                    // to retry with new credentials which will happen automatically.
                                      case x:
                    return !1;

                  case V:
                  case N:
                  case D:
                  case F:
                  case q:
 // Aborted might be retried in some scenarios, but that is dependant on
                    // the context and should handled individually by the calling code.
                    // See https://cloud.google.com/apis/design/errors.
                                      case O:
                  case k:
                  case C:
                  case U:
                    return !0;
                }
            }(e);
        }
        return !1;
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** The Platform's 'document' implementation or null if not available. */ function ls() {
    // `document` is not always available, e.g. in ReactNative and WebWorkers.
    // eslint-disable-next-line no-restricted-globals
    return "undefined" != typeof document ? document : null;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Represents an operation scheduled to be run in the future on an AsyncQueue.
 *
 * It is created via DelayedOperation.createAndSchedule().
 *
 * Supports cancellation (via cancel()) and early execution (via skipDelay()).
 *
 * Note: We implement `PromiseLike` instead of `Promise`, as the `Promise` type
 * in newer versions of TypeScript defines `finally`, which is not available in
 * IE.
 */ class fs {
    constructor(t, e, n, r, s) {
        this.asyncQueue = t, this.timerId = e, this.targetTimeMs = n, this.op = r, this.removalCallback = s, 
        this.deferred = new B, this.then = this.deferred.promise.then.bind(this.deferred.promise), 
        // It's normal for the deferred promise to be canceled (due to cancellation)
        // and so we attach a dummy catch callback to avoid
        // 'UnhandledPromiseRejectionWarning' log spam.
        this.deferred.promise.catch((t => {}));
    }
    /**
     * Creates and returns a DelayedOperation that has been scheduled to be
     * executed on the provided asyncQueue after the provided delayMs.
     *
     * @param asyncQueue - The queue to schedule the operation on.
     * @param id - A Timer ID identifying the type of operation this is.
     * @param delayMs - The delay (ms) before the operation should be scheduled.
     * @param op - The operation to run.
     * @param removalCallback - A callback to be called synchronously once the
     *   operation is executed or canceled, notifying the AsyncQueue to remove it
     *   from its delayedOperations list.
     *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
     *   the DelayedOperation class public.
     */    static createAndSchedule(t, e, n, r, s) {
        const i = Date.now() + n, o = new fs(t, e, i, r, s);
        return o.start(n), o;
    }
    /**
     * Starts the timer. This is called immediately after construction by
     * createAndSchedule().
     */    start(t) {
        this.timerHandle = setTimeout((() => this.handleDelayElapsed()), t);
    }
    /**
     * Queues the operation to run immediately (if it hasn't already been run or
     * canceled).
     */    skipDelay() {
        return this.handleDelayElapsed();
    }
    /**
     * Cancels the operation if it hasn't already been executed or canceled. The
     * promise will be rejected.
     *
     * As long as the operation has not yet been run, calling cancel() provides a
     * guarantee that the operation will not be run.
     */    cancel(t) {
        null !== this.timerHandle && (this.clearTimeout(), this.deferred.reject(new j(R, "Operation cancelled" + (t ? ": " + t : ""))));
    }
    handleDelayElapsed() {
        this.asyncQueue.enqueueAndForget((() => null !== this.timerHandle ? (this.clearTimeout(), 
        this.op().then((t => this.deferred.resolve(t)))) : Promise.resolve()));
    }
    clearTimeout() {
        null !== this.timerHandle && (this.removalCallback(this), clearTimeout(this.timerHandle), 
        this.timerHandle = null);
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ds {
    constructor() {
        // The last promise in the queue.
        this.It = Promise.resolve(), 
        // A list of retryable operations. Retryable operations are run in order and
        // retried with backoff.
        this.At = [], 
        // Is this AsyncQueue being shut down? Once it is set to true, it will not
        // be changed again.
        this.Tt = !1, 
        // Operations scheduled to be queued in the future. Operations are
        // automatically removed after they are run or canceled.
        this.Rt = [], 
        // visible for testing
        this.Pt = null, 
        // Flag set while there's an outstanding AsyncQueue operation, used for
        // assertion sanity-checks.
        this.Vt = !1, 
        // Enabled during shutdown on Safari to prevent future access to IndexedDB.
        this.$t = !1, 
        // List of TimerIds to fast-forward delays for.
        this.Nt = [], 
        // Backoff timer used to schedule retries for retryable operations
        this.gt = new fn(this, "async_queue_retry" /* TimerId.AsyncQueueRetry */), 
        // Visibility handler that triggers an immediate retry of all retryable
        // operations. Meant to speed up recovery when we regain file system access
        // after page comes into foreground.
        this.Dt = () => {
            const t = ls();
            t && g("AsyncQueue", "Visibility state changed to " + t.visibilityState), this.gt.X();
        };
        const t = ls();
        t && "function" == typeof t.addEventListener && t.addEventListener("visibilitychange", this.Dt);
    }
    get isShuttingDown() {
        return this.Tt;
    }
    /**
     * Adds a new operation to the queue without waiting for it to complete (i.e.
     * we ignore the Promise result).
     */    enqueueAndForget(t) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.enqueue(t);
    }
    enqueueAndForgetEvenWhileRestricted(t) {
        this.Ft(), 
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.xt(t);
    }
    enterRestrictedMode(t) {
        if (!this.Tt) {
            this.Tt = !0, this.$t = t || !1;
            const e = ls();
            e && "function" == typeof e.removeEventListener && e.removeEventListener("visibilitychange", this.Dt);
        }
    }
    enqueue(t) {
        if (this.Ft(), this.Tt) 
        // Return a Promise which never resolves.
        return new Promise((() => {}));
        // Create a deferred Promise that we can return to the callee. This
        // allows us to return a "hanging Promise" only to the callee and still
        // advance the queue even when the operation is not run.
                const e = new B;
        return this.xt((() => this.Tt && this.$t ? Promise.resolve() : (t().then(e.resolve, e.reject), 
        e.promise))).then((() => e.promise));
    }
    enqueueRetryable(t) {
        this.enqueueAndForget((() => (this.At.push(t), this.St())));
    }
    /**
     * Runs the next operation from the retryable queue. If the operation fails,
     * reschedules with backoff.
     */    async St() {
        if (0 !== this.At.length) {
            try {
                await this.At[0](), this.At.shift(), this.gt.reset();
            } catch (t) {
                if (!
                /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
                /** Verifies whether `e` is an IndexedDbTransactionError. */
                function(t) {
                    // Use name equality, as instanceof checks on errors don't work with errors
                    // that wrap other errors.
                    return "IndexedDbTransactionError" === t.name;
                }
                /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ (t)) throw t;
 // Failure will be handled by AsyncQueue
                                g("AsyncQueue", "Operation failed with retryable error: " + t);
            }
            this.At.length > 0 && 
            // If there are additional operations, we re-schedule `retryNextOp()`.
            // This is necessary to run retryable operations that failed during
            // their initial attempt since we don't know whether they are already
            // enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
            // needs to  be re-run, we will run `op1`, `op1`, `op2` using the
            // already enqueued calls to `retryNextOp()`. `op3()` will then run in the
            // call scheduled here.
            // Since `backoffAndRun()` cancels an existing backoff and schedules a
            // new backoff on every call, there is only ever a single additional
            // operation in the queue.
            this.gt.H((() => this.St()));
        }
    }
    xt(t) {
        const e = this.It.then((() => (this.Vt = !0, t().catch((t => {
            this.Pt = t, this.Vt = !1;
            const e = 
            /**
 * Chrome includes Error.message in Error.stack. Other browsers do not.
 * This returns expected output of message + stack when available.
 * @param error - Error or FirestoreError
 */
            function(t) {
                let e = t.message || "";
                t.stack && (e = t.stack.includes(t.message) ? t.stack : t.message + "\n" + t.stack);
                return e;
            }
            /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
            // TODO(mrschmidt) Consider using `BaseTransaction` as the base class in the
            // legacy SDK.
            /**
 * A reference to a transaction.
 *
 * The `Transaction` object passed to a transaction's `updateFunction` provides
 * the methods to read and write data within the transaction context. See
 * {@link runTransaction}.
 */ (t);
            // Re-throw the error so that this.tail becomes a rejected Promise and
            // all further attempts to chain (via .then) will just short-circuit
            // and return the rejected Promise.
            throw _("INTERNAL UNHANDLED ERROR: ", e), t;
        })).then((t => (this.Vt = !1, t))))));
        return this.It = e, e;
    }
    enqueueAfterDelay(t, e, n) {
        this.Ft(), 
        // Fast-forward delays for timerIds that have been overriden.
        this.Nt.indexOf(t) > -1 && (e = 0);
        const r = fs.createAndSchedule(this, t, e, n, (t => this.qt(t)));
        return this.Rt.push(r), r;
    }
    Ft() {
        this.Pt && E();
    }
    verifyOperationInProgress() {}
    /**
     * Waits until all currently queued tasks are finished executing. Delayed
     * operations are not run.
     */    async Ot() {
        // Operations in the queue prior to draining may have enqueued additional
        // operations. Keep draining the queue until the tail is no longer advanced,
        // which indicates that no more new operations were enqueued and that all
        // operations were executed.
        let t;
        do {
            t = this.It, await t;
        } while (t !== this.It);
    }
    /**
     * For Tests: Determine if a delayed operation with a particular TimerId
     * exists.
     */    kt(t) {
        for (const e of this.Rt) if (e.timerId === t) return !0;
        return !1;
    }
    /**
     * For Tests: Runs some or all delayed operations early.
     *
     * @param lastTimerId - Delayed operations up to and including this TimerId
     * will be drained. Pass TimerId.All to run all delayed operations.
     * @returns a Promise that resolves once all operations have been run.
     */    Ct(t) {
        // Note that draining may generate more delayed ops, so we do that first.
        return this.Ot().then((() => {
            // Run ops in the same order they'd run if they ran naturally.
            this.Rt.sort(((t, e) => t.targetTimeMs - e.targetTimeMs));
            for (const e of this.Rt) if (e.skipDelay(), "all" /* TimerId.All */ !== t && e.timerId === t) break;
            return this.Ot();
        }));
    }
    /**
     * For Tests: Skip all subsequent delays for a timer id.
     */    Lt(t) {
        this.Nt.push(t);
    }
    /** Called once a DelayedOperation is run or canceled. */    qt(t) {
        // NOTE: indexOf / slice are O(n), but delayedOperations is expected to be small.
        const e = this.Rt.indexOf(t);
        this.Rt.splice(e, 1);
    }
}

class ws {
    /** @hideconstructor */
    constructor(t, e) {
        this._firestore = t, this._transaction = e, this._dataReader = Kn(t);
    }
    /**
     * Reads the document referenced by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be read.
     * @returns A `DocumentSnapshot` with the read data.
     */    get(t) {
        const e = os(t, this._firestore), n = new zr(this._firestore);
        return this._transaction.lookup([ e._key ]).then((t => {
            if (!t || 1 !== t.length) return E();
            const r = t[0];
            if (r.isFoundDocument()) return new wr(this._firestore, n, r.key, r, e.converter);
            if (r.isNoDocument()) return new wr(this._firestore, n, e._key, null, e.converter);
            throw E();
        }));
    }
    set(t, e, n) {
        const r = os(t, this._firestore), s = Qr(r.converter, e, n), i = Yn(this._dataReader, "Transaction.set", r._key, s, null !== r.converter, n);
        return this._transaction.set(r._key, i), this;
    }
    update(t, e, n, ...r) {
        const s = os(t, this._firestore);
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
                let i;
        return i = "string" == typeof (e = f(e)) || e instanceof Cn ? rr(this._dataReader, "Transaction.update", s._key, e, n, r) : nr(this._dataReader, "Transaction.update", s._key, e), 
        this._transaction.update(s._key, i), this;
    }
    /**
     * Deletes the document referred to by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be deleted.
     * @returns This `Transaction` instance. Used for chaining method calls.
     */    delete(t) {
        const e = os(t, this._firestore);
        return this._transaction.delete(e._key), this;
    }
}

/**
 * Executes the given `updateFunction` and then attempts to commit the changes
 * applied within the transaction. If any document read within the transaction
 * has changed, Cloud Firestore retries the `updateFunction`. If it fails to
 * commit after 5 attempts, the transaction fails.
 *
 * The maximum number of writes allowed in a single transaction is 500.
 *
 * @param firestore - A reference to the Firestore database to run this
 * transaction against.
 * @param updateFunction - The function to execute within the transaction
 * context.
 * @param options - An options object to configure maximum number of attempts to
 * commit.
 * @returns If the transaction completed successfully or was explicitly aborted
 * (the `updateFunction` returned a failed promise), the promise returned by the
 * `updateFunction `is returned here. Otherwise, if the transaction failed, a
 * rejected promise with the corresponding failure error is returned.
 */ function ms(t, e, n) {
    const r = _n(t = at(t, bn)), s = Object.assign(Object.assign({}, as), n);
    !function(t) {
        if (t.maxAttempts < 1) throw new j(V, "Max attempts must be at least 1");
    }(s);
    const i = new B;
    return new hs(new ds, r, s, (n => e(new ws(t, n))), i).run(), i.promise;
}

/**
 * Firestore Lite
 *
 * @remarks Firestore Lite is a small online-only SDK that allows read
 * and write access to your Firestore database. All operations connect
 * directly to the backend, and `onSnapshot()` APIs are not supported.
 * @packageDocumentation
 */ !function(t) {
    m = t;
}(`${s}_lite`), n(new i("firestore/lite", ((t, {instanceIdentifier: e, options: n}) => {
    const r = t.getProvider("app").getImmediate(), s = new bn(new G(t.getProvider("auth-internal")), new J(t.getProvider("app-check-internal")), function(t, e) {
        if (!Object.prototype.hasOwnProperty.apply(t.options, [ "projectId" ])) throw new j(V, '"projectId" not provided in firebase.initializeApp.');
        return new Z(t.options.projectId, e);
    }
    /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ (r, e), r);
    return n && s._setSettings(n), s;
}), "PUBLIC").setMultipleInstances(!0)), 
// RUNTIME_ENV and BUILD_TARGET are replaced by real values during the compilation
r("firestore-lite", "3.8.0", "rn"), r("firestore-lite", "3.8.0", "esm2017");

export { Rn as AggregateField, Pn as AggregateQuerySnapshot, kn as Bytes, Dn as CollectionReference, $n as DocumentReference, wr as DocumentSnapshot, Cn as FieldPath, Mn as FieldValue, bn as Firestore, j as FirestoreError, Un as GeoPoint, Nn as Query, Ar as QueryCompositeFilterConstraint, vr as QueryConstraint, mr as QueryDocumentSnapshot, qr as QueryEndAtConstraint, Er as QueryFieldFilterConstraint, $r as QueryLimitConstraint, Pr as QueryOrderByConstraint, pr as QuerySnapshot, Fr as QueryStartAtConstraint, Nt as Timestamp, ws as Transaction, is as WriteBatch, Jr as addDoc, Zr as aggregateQuerySnapshotEqual, Rr as and, rs as arrayRemove, ns as arrayUnion, Fn as collection, xn as collectionGroup, An as connectFirestoreEmulator, Hr as deleteDoc, ts as deleteField, Sn as doc, Ln as documentId, kr as endAt, Or as endBefore, Xr as getCount, Wr as getDoc, Gr as getDocs, In as getFirestore, ss as increment, En as initializeFirestore, Nr as limit, Dr as limitToLast, Tr as or, Vr as orderBy, br as query, On as queryEqual, qn as refEqual, ms as runTransaction, es as serverTimestamp, Kr as setDoc, y as setLogLevel, yr as snapshotEqual, Sr as startAfter, xr as startAt, Tn as terminate, Yr as updateDoc, Ir as where, us as writeBatch };
//# sourceMappingURL=index.rn.esm2017.js.map
