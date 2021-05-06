import firebase from '@firebase/app';
import '@firebase/util';
import '@firebase/logger';
import '@firebase/webchannel-wrapper';
import { L as La, V as Vu, O, k as ka, U as Ua, Q as Qa, j as ja, H as Ha, Y as Ya, J as Ja, Z as Za, t as th, n as nh, s as sh, q as qa, y as yu, g as gu, $ as $a } from './prebuilt-c3206f99.js';
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
    Firestore: La,
    GeoPoint: Vu,
    Timestamp: O,
    Blob: ka,
    Transaction: Ua,
    WriteBatch: Qa,
    DocumentReference: ja,
    DocumentSnapshot: Ha,
    Query: Ya,
    QueryDocumentSnapshot: Ja,
    QuerySnapshot: Za,
    CollectionReference: th,
    FieldPath: nh,
    FieldValue: sh,
    setLogLevel: qa,
    CACHE_SIZE_UNLIMITED: yu
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
 * Registers the memory-only Firestore build with the components framework.
 */
function registerFirestore(instance) {
    configureForFirebase(instance, (app, auth) => new La(app, new gu(app, auth), new $a()));
    instance.registerVersion(name, version);
}
registerFirestore(firebase);

export { registerFirestore };
//# sourceMappingURL=index.js.map
