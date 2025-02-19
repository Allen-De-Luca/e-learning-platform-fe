/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Event
 */
export interface Event {
    /**
     * 
     * @type {string}
     * @memberof Event
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof Event
     */
    date?: string;
}

/**
 * Check if a given object implements the Event interface.
 */
export function instanceOfEvent(value: object): value is Event {
    return true;
}

export function EventFromJSON(json: any): Event {
    return EventFromJSONTyped(json, false);
}

export function EventFromJSONTyped(json: any, ignoreDiscriminator: boolean): Event {
    if (json == null) {
        return json;
    }
    return {
        
        'title': json['title'] == null ? undefined : json['title'],
        'date': json['date'] == null ? undefined : json['date'],
    };
}

export function EventToJSON(json: any): Event {
    return EventToJSONTyped(json, false);
}

export function EventToJSONTyped(value?: Event | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'title': value['title'],
        'date': value['date'],
    };
}

