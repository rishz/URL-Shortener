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
import { MapValue as ProtoMapValue, Value as ProtoValue } from '../protos/firestore_proto_api';
import { FieldMask } from './field_mask';
import { FieldPath } from './path';
export interface JsonObject<T> {
    [name: string]: T;
}
/**
 * An ObjectValue represents a MapValue in the Firestore Proto and offers the
 * ability to add and remove fields (via the ObjectValueBuilder).
 */
export declare class ObjectValue {
    /**
     * The immutable Value proto for this object. Local mutations are stored in
     * `overlayMap` and only applied when `buildProto()` is invoked.
     */
    private partialValue;
    /**
     * A nested map that contains the accumulated changes that haven't yet been
     * applied to `partialValue`. Values can either be `Value` protos, Map<String,
     * Object> values (to represent additional nesting) or `null` (to represent
     * field deletes).
     */
    private overlayMap;
    constructor(proto: {
        mapValue: ProtoMapValue;
    });
    static empty(): ObjectValue;
    /**
     * Returns the value at the given path or null.
     *
     * @param path - the path to search
     * @returns The value at the path or null if the path is not set.
     */
    field(path: FieldPath): ProtoValue | null;
    /** Returns the full protobuf representation. */
    toProto(): {
        mapValue: ProtoMapValue;
    };
    /**
     * Sets the field to the provided value.
     *
     * @param path - The field path to set.
     * @param value - The value to set.
     */
    set(path: FieldPath, value: ProtoValue): void;
    /**
     * Sets the provided fields to the provided values.
     *
     * @param data - A map of fields to values (or null for deletes).
     */
    setAll(data: Map<FieldPath, ProtoValue | null>): void;
    /**
     * Removes the field at the specified path. If there is no field at the
     * specified path, nothing is changed.
     *
     * @param path - The field path to remove.
     */
    delete(path: FieldPath): void;
    isEqual(other: ObjectValue): boolean;
    /**
     * Adds `value` to the overlay map at `path`. Creates nested map entries if
     * needed.
     */
    private setOverlay;
    /**
     * Applies any overlays from `currentOverlays` that exist at `currentPath`
     * and returns the merged data at `currentPath` (or null if there were no
     * changes).
     *
     * @param currentPath - The path at the current nesting level. Can be set to
     * FieldValue.emptyPath() to represent the root.
     * @param currentOverlays - The overlays at the current nesting level in the
     * same format as `overlayMap`.
     * @returns The merged data at `currentPath` or null if no modifications
     * were applied.
     */
    private applyOverlay;
    /**
     * Builds the Protobuf that backs this ObjectValue.
     *
     * This method applies any outstanding modifications and memoizes the result.
     * Further invocations are based on this memoized result.
     */
    private buildProto;
    private static extractNestedValue;
    clone(): ObjectValue;
}
/**
 * Returns a FieldMask built from all fields in a MapValue.
 */
export declare function extractFieldMask(value: ProtoMapValue): FieldMask;
