import React from "react";
import { IAccount, initialAccount } from "./model";
import { IActionBase } from "../rootModel";
import { UPDATE_ACCOUNT } from "./action";

export function accontReducer(
    state: IAccount = initialAccount,
    action: IActionBase): IAccount {

    switch (action.type) {
        case UPDATE_ACCOUNT:
            return {
                ...state,
                auth: action.auth,
                photo: action.photo ?? initialAccount.photo,
                mailAddress: action.mailAddress ?? "",
                displayName: action.displayName ?? initialAccount.displayName,
            };
        default:
            return state;
    }
}
