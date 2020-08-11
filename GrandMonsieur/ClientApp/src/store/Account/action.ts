import React from "react";
import { IAccount } from "./model";
import { IActionBase } from "../rootModel";



export const UPDATE_ACCOUNT = "UPDATE_ACCOUNT";
interface IAccountType extends IAccount, IActionBase { }
export function UpdateAccount(
    auth: boolean,
    displayName?: string,
    mailAddress?: string,
    photo?: string): IAccountType {
    return {
        type: UPDATE_ACCOUNT,
        auth: auth,
        displayName: displayName,
        mailAddress: mailAddress,
        photo: photo,
    };
}
