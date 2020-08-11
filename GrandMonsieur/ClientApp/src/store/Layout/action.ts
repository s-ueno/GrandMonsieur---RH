import React from "react";
import { ITitle } from "./model";
import { IActionBase } from "../rootModel";



export const UPDATE_TITLE = "UPDATE_TITLE";
interface ITitleType extends ITitle, IActionBase { }
export function UpdateTitle(title: string, icon?: string): ITitleType {
    return {
        type: UPDATE_TITLE,
        title: title,
        icon: icon,
    };
}
