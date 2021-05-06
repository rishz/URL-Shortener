import firebase from '@firebase/app';
import '@firebase/util';
import '@firebase/logger';
import '@firebase/webchannel-wrapper';
import { B as Ba, D as Du, $, O as Oa, Q as Qa, K as Ka, W as Wa, J as Ja, X as Xa, Y as Ya, t as th, e as eh, s as sh, i as ih, U as Ua, p as pu, E as Eu, L as La } from './prebuilt.rn-965050f8.js';
import { Component } from '@firebase/component';

const name = "@firebase/firestore";
const version = "2.3.0";

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
const firestoreNamespace = {
    Firestore: Ba,
    GeoPoint: Du,
    Timestamp: $,
    Blob: Oa,
    Transaction: Qa,
    WriteBatch: Ka,
    DocumentReference: Wa,
    DocumentSnapshot: Ja,
    Query: Xa,
    QueryDocumentSnapshot: Ya,
    QuerySnapshot: th,
    CollectionReference: eh,
    FieldPath: sh,
    FieldValue: ih,
    setLogLevel: Ua,
    CACHE_SIZE_UNLIMITED: pu
};
/**
 * Configures Firestore as part of the Firebase SDK by calling registerService.
 *
 * @param firebase - The FirebaseNamespace to register Firestore with
 * @param firestoreFactory - A factory function that returns a new Firestore
 *    instance.
 */
function configureForFirebase(firebase, firestoreFactory) {
    firebase.INTERNAL.registerComponent(new Component('firestore', container => {
        const app = container.getProvider('app').getImmediate();
        return firestoreFactory(app, container.getProvider('auth-internal'));
    }, "PUBLIC" /* PUBLIC */).setServiceProps(Object.assign({}, firestoreNamespace)));
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
 * Registers the main Firestore build with the components framework.
 * Persistence can be enabled via `firebase.firestore().enablePersistence()`.
 */
function registerFirestore(instance) {
    configureForFirebase(instance, (app, auth) => new Ba(app, new Eu(app, auth), new La()));
    instance.registerVersion(name, version);
}
registerFirestore(firebase);

export { registerFirestore };
//# sourceMappingURL=index.js.map
