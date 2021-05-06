declare class Ha {
    constructor(t: any, e: any);
    _firestore: any;
    _delegate: any;
    get ref(): ja;
    get id(): any;
    get metadata(): any;
    get exists(): any;
    data(t: any): any;
    get(t: any, e: any): any;
    isEqual(t: any): any;
}
declare class Ja extends Ha {
}
/**
 * Compat class for Firestore. Exposes Firestore Legacy API, but delegates
 * to the functional API of firestore-exp.
 */ declare class La {
    constructor(t: any, e: any, n: any);
    _delegate: any;
    Yc: any;
    INTERNAL: {
        delete: () => any;
    };
    Xc: any;
    get _databaseId(): any;
    settings(t: any): void;
    useEmulator(t: any, e: any, n?: {}): void;
    enableNetwork(): any;
    disableNetwork(): any;
    enablePersistence(t: any): any;
    clearPersistence(): any;
    terminate(): any;
    waitForPendingWrites(): Promise<any>;
    onSnapshotsInSync(t: any): () => void;
    get app(): any;
    collection(t: any): th;
    doc(t: any): ja;
    collectionGroup(t: any): Ya;
    runTransaction(t: any): Promise<any>;
    batch(): Qa;
    loadBundle(t: any): void;
    namedQuery(t: any): void;
}
/**
 * The persistence provider included with the full Firestore SDK.
 */ declare class Ma {
    enableIndexedDbPersistence(t: any, e: any): any;
    enableMultiTabIndexedDbPersistence(t: any): any;
    clearIndexedDbPersistence(t: any): Promise<any>;
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
export class O {
    /**
     * Creates a new timestamp with the current date, with millisecond precision.
     *
     * @returns a new timestamp representing the current date.
     */ static now(): O;
    /**
     * Creates a new timestamp from the given date.
     *
     * @param date - The date to initialize the `Timestamp` from.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     date.
     */ static fromDate(t: any): O;
    /**
     * Creates a new timestamp from the given number of milliseconds.
     *
     * @param milliseconds - Number of milliseconds since Unix epoch
     *     1970-01-01T00:00:00Z.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     number of milliseconds.
     */ static fromMillis(t: any): O;
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
    constructor(t: any, e: any);
    seconds: any;
    nanoseconds: any;
    /**
     * Converts a `Timestamp` to a JavaScript `Date` object. This conversion
     * causes a loss of precision since `Date` objects only support millisecond
     * precision.
     *
     * @returns JavaScript `Date` object representing the same point in time as
     *     this `Timestamp`, with millisecond precision.
     */ toDate(): Date;
    /**
     * Converts a `Timestamp` to a numeric timestamp (in milliseconds since
     * epoch). This operation causes a loss of precision.
     *
     * @returns The point in time corresponding to this timestamp, represented as
     *     the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
     */ toMillis(): number;
    _compareTo(t: any): 1 | -1 | 0;
    /**
     * Returns true if this `Timestamp` is equal to the provided one.
     *
     * @param other - The `Timestamp` to compare against.
     * @returns true if this `Timestamp` is equal to the provided one.
     */ isEqual(t: any): boolean;
    /** Returns a textual representation of this Timestamp. */ toString(): string;
    /** Returns a JSON-serializable representation of this Timestamp. */ toJSON(): {
        seconds: any;
        nanoseconds: any;
    };
    /**
     * Converts this object to a primitive string, which allows Timestamp objects
     * to be compared using the `>`, `<=`, `>=` and `>` operators.
     */ valueOf(): string;
}
declare class Qa {
    constructor(t: any);
    _delegate: any;
    set(t: any, e: any, n: any): Qa;
    update(t: any, e: any, n: any, ...s: any[]): Qa;
    delete(t: any): Qa;
    commit(): any;
}
/**
 * A reference to a transaction.
 */ declare class Ua {
    constructor(t: any, e: any);
    _firestore: any;
    _delegate: any;
    _userDataWriter: Ba;
    get(t: any): any;
    set(t: any, e: any, n: any): Ua;
    update(t: any, e: any, n: any, ...s: any[]): Ua;
    delete(t: any): Ua;
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
 */ declare class Vu {
    /**
     * Creates a new immutable `GeoPoint` object with the provided latitude and
     * longitude values.
     * @param latitude - The latitude as number between -90 and 90.
     * @param longitude - The longitude as number between -180 and 180.
     */
    constructor(t: any, e: any);
    _lat: any;
    _long: any;
    /**
     * The latitude of this `GeoPoint` instance.
     */ get latitude(): any;
    /**
     * The longitude of this `GeoPoint` instance.
     */ get longitude(): any;
    /**
     * Returns true if this `GeoPoint` is equal to the provided one.
     *
     * @param other - The `GeoPoint` to compare against.
     * @returns true if this `GeoPoint` is equal to the provided one.
     */ isEqual(t: any): boolean;
    /** Returns a JSON-serializable representation of this GeoPoint. */ toJSON(): {
        latitude: any;
        longitude: any;
    };
    /**
     * Actually private to JS consumers of our API, so this function is prefixed
     * with an underscore.
     */ _compareTo(t: any): 1 | -1 | 0;
}
declare class Ya {
    constructor(t: any, e: any);
    firestore: any;
    _delegate: any;
    _userDataWriter: Ba;
    where(t: any, e: any, n: any): Ya;
    orderBy(t: any, e: any): Ya;
    limit(t: any): Ya;
    limitToLast(t: any): Ya;
    startAt(...t: any[]): Ya;
    startAfter(...t: any[]): Ya;
    endBefore(...t: any[]): Ya;
    endAt(...t: any[]): Ya;
    isEqual(t: any): boolean;
    get(t: any): Promise<Za>;
    onSnapshot(...t: any[]): () => void;
    withConverter(t: any): Ya;
}
declare class Za {
    constructor(t: any, e: any);
    _firestore: any;
    _delegate: any;
    get query(): Ya;
    get metadata(): any;
    get size(): any;
    get empty(): any;
    get docs(): any;
    docChanges(t: any): any;
    forEach(t: any, e: any): void;
    isEqual(t: any): any;
}
/**
 * The Cloud Firestore service interface.
 *
 * Do not call this constructor directly. Instead, use {@link getFirestore}.
 */
declare class gu extends ru {
    _queue: wu;
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
 */ declare function ih(t: any): mu;
/**
 * A reference to a particular document in a collection in the database.
 */
declare class ja {
    static nu(t: any, e: any, n: any): ja;
    static Zc(t: any, e: any, n: any): ja;
    constructor(t: any, e: any);
    firestore: any;
    _delegate: any;
    _userDataWriter: Ba;
    get id(): any;
    get parent(): th;
    get path(): any;
    collection(t: any): th;
    isEqual(t: any): boolean;
    set(t: any, e: any): Promise<any>;
    update(t: any, e: any, ...n: any[]): Promise<any>;
    delete(): Promise<any>;
    onSnapshot(...t: any[]): () => void;
    get(t: any): Promise<Ha>;
    withConverter(t: any): ja;
}
/** Immutable class holding a blob (binary data) */ declare class ka {
    static fromBase64String(t: any): ka;
    static fromUint8Array(t: any): ka;
    constructor(t: any);
    _delegate: any;
    toBase64(): any;
    toUint8Array(): any;
    isEqual(t: any): any;
    toString(): string;
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
 * A `FieldPath` refers to a field in a document. The path may consist of a
 * single field name (referring to a top-level field in the document), or a list
 * of field names (referring to a nested field in the document).
 */ declare class nh {
    static documentId(): nh;
    /**
     * Creates a FieldPath from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames - A list of field names.
     */
    constructor(...t: any[]);
    _delegate: bu;
    isEqual(t: any): boolean;
}
declare function qa(t: any): void;
declare function rh(t: any): any;
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
 */ declare class sh {
    static serverTimestamp(): sh;
    static delete(): sh;
    static arrayUnion(...t: any[]): sh;
    static arrayRemove(...t: any[]): sh;
    static increment(t: any): sh;
    constructor(t: any);
    _delegate: any;
    isEqual(t: any): any;
}
declare class th extends Ya {
    get id(): any;
    get path(): any;
    get parent(): ja | null;
    doc(t: any): ja;
    add(t: any): Promise<ja>;
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
/** DOMException error code constants. */ declare const yu: -1;
declare class Ba extends Ia {
    constructor(t: any);
    firestore: any;
    convertBytes(t: any): ka;
    convertReference(t: any): ja;
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
 * Do not call this constructor directly. Instead, use {@link getFirestore}.
 */ declare class ru {
    /** @hideconstructor */
    constructor(t: any, e: any);
    type: string;
    _persistenceKey: string;
    _settings: iu;
    _settingsFrozen: boolean;
    _databaseId: Uc;
    _credentials: jc | Gc;
    _app: any;
    /**
     * The {@link @firebase/app#FirebaseApp} associated with this `Firestore` service
     * instance.
     */ get app(): any;
    get _initialized(): boolean;
    get _terminated(): boolean;
    _setSettings(t: any): void;
    _getSettings(): iu;
    _freezeSettings(): iu;
    _delete(): Promise<void>;
    _terminateTask: Promise<void> | undefined;
    /** Returns a JSON-serializable representation of this Firestore instance. */ toJSON(): {
        app: any;
        databaseId: Uc;
        settings: iu;
    };
    /**
     * Terminates all components used by this client. Subclasses can override
     * this method to clean up their own dependencies, but must also call this
     * method.
     *
     * Only ever called once.
     */ _terminate(): Promise<void>;
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
 */ declare class wu {
    fc: Promise<void>;
    dc: any[];
    wc: boolean;
    _c: any[];
    mc: any;
    yc: boolean;
    gc: any[];
    Zi: Dr;
    Ec: () => void;
    get isShuttingDown(): boolean;
    /**
     * Adds a new operation to the queue without waiting for it to complete (i.e.
     * we ignore the Promise result).
     */ enqueueAndForget(t: any): void;
    enqueueAndForgetEvenWhileRestricted(t: any): void;
    enterRestrictedMode(): void;
    enqueue(t: any): Promise<any>;
    enqueueRetryable(t: any): void;
    /**
     * Runs the next operation from the retryable queue. If the operation fails,
     * reschedules with backoff.
     */ Ac(): Promise<void>;
    Ic(t: any): Promise<any>;
    enqueueAfterDelay(t: any, e: any, n: any): ho;
    Tc(): void;
    verifyOperationInProgress(): void;
    /**
     * Waits until all currently queued tasks are finished executing. Delayed
     * operations are not run.
     */ bc(): Promise<void>;
    /**
     * For Tests: Determine if a delayed operation with a particular TimerId
     * exists.
     */ vc(t: any): boolean;
    /**
     * For Tests: Runs some or all delayed operations early.
     *
     * @param lastTimerId - Delayed operations up to and including this TimerId
     * will be drained. Pass TimerId.All to run all delayed operations.
     * @returns a Promise that resolves once all operations have been run.
     */ Pc(t: any): Promise<void>;
    /**
     * For Tests: Skip all subsequent delays for a timer id.
     */ Vc(t: any): void;
    /** Called once a DelayedOperation is run or canceled. */ Rc(t: any): void;
}
declare class mu {
    _progressObserver: {};
    _taskCompletionResolver: Es;
    _lastProgress: {
        taskState: string;
        totalBytes: number;
        totalDocuments: number;
        bytesLoaded: number;
        documentsLoaded: number;
    };
    /**
     * Registers functions to listen to bundle loading progress events.
     * @param next - Called when there is a progress update from bundle loading. Typically `next` calls occur
     *   each time a Firestore document is loaded from the bundle.
     * @param error - Called when an error occurs during bundle loading. The task aborts after reporting the
     *   error, and there should be no more updates after this.
     * @param complete - Called when the loading task is complete.
     */ onProgress(t: any, e: any, n: any): void;
    /**
     * Implements the `Promise<LoadBundleTaskProgress>.catch` interface.
     *
     * @param onRejected - Called when an error occurs during bundle loading.
     */ catch(t: any): Promise<any>;
    /**
     * Implements the `Promise<LoadBundleTaskProgress>.then` interface.
     *
     * @param onFulfilled - Called on the completion of the loading task with a final `LoadBundleTaskProgress` update.
     *   The update will always have its `taskState` set to `"Success"`.
     * @param onRejected - Called when an error occurs during bundle loading.
     */ then(t: any, e: any): Promise<any>;
    /**
     * Notifies all observers that bundle loading has completed, with a provided
     * `LoadBundleTaskProgress` object.
     *
     * @private
     */ private _completeWith;
    /**
     * Notifies all observers that bundle loading has failed, with a provided
     * `Error` as the reason.
     *
     * @private
     */ private _failWith;
    /**
     * Notifies a progress update of loading a bundle.
     * @param progress - The new progress.
     *
     * @private
     */ private _updateProgress;
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
 */ declare class bu {
    /**
     * Creates a FieldPath from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames - A list of field names.
     */
    constructor(...t: any[]);
    _internalPath: K;
    /**
     * Returns true if this `FieldPath` is equal to the provided one.
     *
     * @param other - The `FieldPath` to compare against.
     * @returns true if this `FieldPath` is equal to the provided one.
     */ isEqual(t: any): boolean;
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
 */ declare class Ia {
    convertValue(t: any, e?: string): any;
    convertObject(t: any, e: any): {};
    convertGeoPoint(t: any): Vu;
    convertArray(t: any, e: any): any;
    convertServerTimestamp(t: any, e: any): any;
    convertTimestamp(t: any): O;
    convertDocumentKey(t: any, e: any): st;
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
 * A concrete type describing all the values that can be applied via a
 * user-supplied firestore.Settings object. This is a separate type so that
 * defaults can be supplied and the value can be checked for equality.
 */
declare class iu {
    constructor(t: any);
    host: any;
    ssl: any;
    credentials: any;
    ignoreUndefinedProperties: boolean;
    cacheSizeBytes: any;
    experimentalForceLongPolling: boolean;
    experimentalAutoDetectLongPolling: boolean;
    isEqual(t: any): boolean;
}
/** The default database name for a project. */
/** Represents the database ID a Firestore client is associated with. */
declare class Uc {
    constructor(t: any, e: any);
    projectId: any;
    database: any;
    get isDefaultDatabase(): boolean;
    isEqual(t: any): boolean;
}
/** A CredentialsProvider that always yields an empty token. */ declare class jc {
    /**
     * Stores the listener registered with setChangeListener()
     * This isn't actually necessary since the UID never changes, but we use this
     * to verify the listen contract is adhered to in tests.
     */
    changeListener: any;
    getToken(): Promise<null>;
    invalidateToken(): void;
    setChangeListener(t: any): void;
    removeChangeListener(): void;
}
declare class Gc {
    constructor(t: any);
    /**
     * The auth token listener registered with FirebaseApp, retained here so we
     * can unregister it.
     */
    oc: () => void;
    /** Tracks the current User. */
    currentUser: lr;
    receivedInitialUser: boolean;
    /**
     * Counter used to detect if the token changed while a getToken request was
     * outstanding.
     */
    cc: number;
    /** The listener registered with setChangeListener(). */
    changeListener: any;
    forceRefresh: boolean;
    auth: any;
    getToken(): any;
    invalidateToken(): void;
    setChangeListener(t: any): void;
    removeChangeListener(): void;
    uc(): lr;
}
/**
 * An instance of the Platform's 'TextEncoder' implementation.
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
declare class Dr {
    constructor(t: any, e: any, n?: number, s?: number, i?: number);
    Se: any;
    timerId: any;
    Mi: number;
    Li: number;
    Bi: number;
    qi: number;
    Ui: any;
    /** The last backoff attempt, as epoch milliseconds. */
    Qi: number;
    /**
     * Resets the backoff delay.
     *
     * The very next backoffAndWait() will have no delay. If it is called again
     * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
     * subsequent ones will increase according to the backoffFactor.
     */ reset(): void;
    /**
     * Resets the backoff delay to the maximum delay (e.g. for use after a
     * RESOURCE_EXHAUSTED error).
     */ Ki(): void;
    /**
     * Returns a promise that resolves after currentDelayMs, and increases the
     * delay for any subsequent attempts. If there was a pending backoff operation
     * already, it will be canceled.
     */ ji(t: any): void;
    Gi(): void;
    cancel(): void;
    /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */ Wi(): number;
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
 */
declare class ho {
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
     */ static createAndSchedule(t: any, e: any, n: any, s: any, i: any): ho;
    constructor(t: any, e: any, n: any, s: any, i: any);
    asyncQueue: any;
    timerId: any;
    targetTimeMs: any;
    op: any;
    removalCallback: any;
    deferred: Es;
    then: <TResult1 = any, TResult2 = never>(onfulfilled?: ((value: any) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined) => Promise<TResult1 | TResult2>;
    /**
     * Starts the timer. This is called immediately after construction by
     * createAndSchedule().
     */ start(t: any): void;
    timerHandle: NodeJS.Timeout | null | undefined;
    /**
     * Queues the operation to run immediately (if it hasn't already been run or
     * canceled).
     */ skipDelay(): void;
    /**
     * Cancels the operation if it hasn't already been executed or canceled. The
     * promise will be rejected.
     *
     * As long as the operation has not yet been run, calling cancel() provides a
     * guarantee that the operation will not be run.
     */ cancel(t: any): void;
    handleDelayElapsed(): void;
    clearTimeout(): void;
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
 */ declare class Es {
    promise: Promise<any>;
    resolve: (value: any) => void;
    reject: (reason?: any) => void;
}
/** A dot-separated path for navigating sub-objects within a document. */ declare class K extends q {
    /**
     * Returns true if the string could be used as a segment in a field path
     * without escaping.
     */ static isValidIdentifier(t: any): boolean;
    /**
     * The field designating the key of a document.
     */ static keyField(): K;
    /**
     * Parses a field string from the given server-formatted string.
     *
     * - Splitting the empty string is not allowed (for now at least).
     * - Empty segments within the string (e.g. if there are two consecutive
     *   separators) are not allowed.
     *
     * TODO(b/37244157): we should make this more strict. Right now, it allows
     * non-identifier path components, even if they aren't escaped.
     */ static fromServerFormat(t: any): K;
    static emptyPath(): K;
    construct(t: any, e: any, n: any): K;
    canonicalString(): any;
    toString(): any;
    /**
     * Returns true if this field references the key of a document.
     */ isKeyField(): boolean;
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
 */ declare class st {
    static fromPath(t: any): st;
    static fromName(t: any): st;
    static comparator(t: any, e: any): 1 | -1 | 0;
    static isDocumentKey(t: any): boolean;
    /**
     * Creates and returns a new document key with the given segments.
     *
     * @param segments - The segments of the path to the document
     * @returns A new instance of DocumentKey
     */ static fromSegments(t: any): st;
    constructor(t: any);
    path: any;
    /** Returns true if the document is in the specified collectionId. */ hasCollectionId(t: any): boolean;
    isEqual(t: any): boolean;
    toString(): any;
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
 * Simple wrapper around a nullable UID. Mostly exists to make code more
 * readable.
 */ declare class lr {
    constructor(t: any);
    uid: any;
    isAuthenticated(): boolean;
    /**
     * Returns a key representing this user, suitable for inclusion in a
     * dictionary.
     */ toKey(): string;
    isEqual(t: any): boolean;
}
declare namespace lr {
    const UNAUTHENTICATED: lr;
    const GOOGLE_CREDENTIALS: lr;
    const FIRST_PARTY: lr;
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
 * Path represents an ordered sequence of string segments.
 */
declare class q {
    static comparator(t: any, e: any): 1 | -1 | 0;
    constructor(t: any, e: any, n: any);
    segments: any;
    offset: any;
    len: any;
    get length(): any;
    isEqual(t: any): boolean;
    child(t: any): any;
    /** The index of one past the last segment of the path. */ limit(): any;
    popFirst(t: any): any;
    popLast(): any;
    firstSegment(): any;
    lastSegment(): any;
    get(t: any): any;
    isEmpty(): boolean;
    isPrefixOf(t: any): boolean;
    isImmediateParentOf(t: any): boolean;
    forEach(t: any): void;
    toArray(): any;
}
export { Ha as H, Ja as J, La as L, Ma as M, Qa as Q, Ua as U, Vu as V, Ya as Y, Za as Z, gu as g, ih as i, ja as j, ka as k, nh as n, qa as q, rh as r, sh as s, th as t, yu as y };
