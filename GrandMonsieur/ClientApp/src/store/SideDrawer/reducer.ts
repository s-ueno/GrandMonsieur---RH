import React from "react";
import { IDrawer, initialDrawer } from "./model";
import { IActionBase } from "../rootModel";
import { UPDATE_DRAWER } from "./action";

export function drawerReducer(
    state: IDrawer = initialDrawer,
    action: IActionBase): IDrawer {

    switch (action.type) {
        case UPDATE_DRAWER:
            return { ...state, open: action.open };
        default:
            return state;
    }
}
