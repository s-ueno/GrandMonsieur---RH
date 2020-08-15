import React from "react";
import { IPlayDrawer } from "./model";
import { IActionBase } from "../rootModel";



export const UPDATE_PLAY_DRAWER = "UPDATE_PLAY_DRAWER";
interface IPlayDrawerType extends IPlayDrawer, IActionBase { }
export function UpdatePlayDrawer(
    display: "showPlayer" | "miniPlayer" | "hidden",
    uri?: string): IPlayDrawerType {
    return {
        type: UPDATE_PLAY_DRAWER,
        display: display,
        uri: uri
    };
}
