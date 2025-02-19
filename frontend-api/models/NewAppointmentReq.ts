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
 * @interface NewAppointmentReq
 */
export interface NewAppointmentReq {
    /**
     * 
     * @type {number}
     * @memberof NewAppointmentReq
     */
    customerId?: number;
    /**
     * 
     * @type {number}
     * @memberof NewAppointmentReq
     */
    userId?: number;
    /**
     * 
     * @type {Date}
     * @memberof NewAppointmentReq
     */
    appointmentDate?: Date;
    /**
     * 
     * @type {number}
     * @memberof NewAppointmentReq
     */
    reminderDays?: number;
}

/**
 * Check if a given object implements the NewAppointmentReq interface.
 */
export function instanceOfNewAppointmentReq(value: object): value is NewAppointmentReq {
    return true;
}

export function NewAppointmentReqFromJSON(json: any): NewAppointmentReq {
    return NewAppointmentReqFromJSONTyped(json, false);
}

export function NewAppointmentReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewAppointmentReq {
    if (json == null) {
        return json;
    }
    return {
        
        'customerId': json['customerId'] == null ? undefined : json['customerId'],
        'userId': json['userId'] == null ? undefined : json['userId'],
        'appointmentDate': json['appointmentDate'] == null ? undefined : (new Date(json['appointmentDate'])),
        'reminderDays': json['reminderDays'] == null ? undefined : json['reminderDays'],
    };
}

export function NewAppointmentReqToJSON(json: any): NewAppointmentReq {
    return NewAppointmentReqToJSONTyped(json, false);
}

export function NewAppointmentReqToJSONTyped(value?: NewAppointmentReq | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'customerId': value['customerId'],
        'userId': value['userId'],
        'appointmentDate': value['appointmentDate'] == null ? undefined : ((value['appointmentDate']).toISOString().substring(0,10)),
        'reminderDays': value['reminderDays'],
    };
}

