import React from "react";
import { IPlayDrawer } from "./model";
import { IActionBase } from "../rootModel";
import { IMovie } from "../Movie/model";



export const UPDATE_PLAY_DRAWER = "UPDATE_PLAY_DRAWER";
interface IPlayDrawerType extends IPlayDrawer, IActionBase { }
export function UpdatePlayDrawer(
    display: "showPlayer" | "miniPlayer" | "hidden",
    movie?: IMovie): IPlayDrawerType {
    return {
        type: UPDATE_PLAY_DRAWER,
        display: display,
        movie: movie
    };
}
