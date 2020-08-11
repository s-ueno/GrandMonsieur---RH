import React from "react";

import { ITheme, initialTheme, IPalette, initialPalette } from "./model";
import { IActionBase } from "../rootModel";
import { UPDATE_THEME, UPDATE_PALETTE } from "./action";

export function themeReducer(state: ITheme = initialTheme, action: IActionBase): ITheme {

    switch (action.type) {
        case UPDATE_THEME:
            return { ...state, mode: state.mode == "light" ? "dark" : "light" };
        default:
            return state;
    }
}

export function palleteReducer(state: IPalette = initialPalette, action: IActionBase): IPalette {

    switch (action.type) {
        case UPDATE_PALETTE:
            return {
                ...state,
                title: action.title,
                appBar: action.appBar,
                background: action.background,
                primary: action.primary,
                secondary: action.secondary
            };
        default:
            return state;
    }
}
