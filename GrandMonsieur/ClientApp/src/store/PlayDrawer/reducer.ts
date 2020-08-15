import React from "react";
import { IPlayDrawer, initialPlayDrawer } from "./model";
import { IActionBase } from "../rootModel";
import { UPDATE_PLAY_DRAWER } from "./action";

export function playDrawerReducer(
    state: IPlayDrawer = initialPlayDrawer,
    action: IActionBase): IPlayDrawer {
    if (!action.display) {
        return state;
    }
    switch (action.type) {
        case UPDATE_PLAY_DRAWER:
            return {
                ...state,
                display: action.display,
                uri: action.uri ?? state.uri
            };
        default:
            return state;
    }
}
