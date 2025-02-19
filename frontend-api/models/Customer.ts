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
 * @interface Customer
 */
export interface Customer {
    /**
     * 
     * @type {number}
     * @memberof Customer
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Customer
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof Customer
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof Customer
     */
    phoneNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof Customer
     */
    vatNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof Customer
     */
    company?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Customer
     */
    emails?: Array<string>;
}

/**
 * Check if a given object implements the Customer interface.
 */
export function instanceOfCustomer(value: object): value is Customer {
    return true;
}

export function CustomerFromJSON(json: any): Customer {
    return CustomerFromJSONTyped(json, false);
}

export function CustomerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Customer {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'firstName': json['firstName'] == null ? undefined : json['firstName'],
        'lastName': json['lastName'] == null ? undefined : json['lastName'],
        'phoneNumber': json['phoneNumber'] == null ? undefined : json['phoneNumber'],
        'vatNumber': json['vatNumber'] == null ? undefined : json['vatNumber'],
        'company': json['company'] == null ? undefined : json['company'],
        'emails': json['emails'] == null ? undefined : json['emails'],
    };
}

export function CustomerToJSON(json: any): Customer {
    return CustomerToJSONTyped(json, false);
}

export function CustomerToJSONTyped(value?: Customer | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'firstName': value['firstName'],
        'lastName': value['lastName'],
        'phoneNumber': value['phoneNumber'],
        'vatNumber': value['vatNumber'],
        'company': value['company'],
        'emails': value['emails'],
    };
}

