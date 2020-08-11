import React from "react";
import { PaletteColor, TypeBackground } from "@material-ui/core/styles/createPalette";


export type ThemeMode = "dark" | "light";
export interface ITheme {
    mode: ThemeMode;
}
export const initialTheme: ITheme = {
    mode: "dark",
};

export interface IPalette {
    title: string,
    primary: PaletteColor;
    secondary: PaletteColor;
    appBar: string;
    background?: TypeBackground;
}
export const initialPalette: IPalette = {
    title: "Default",
    appBar: "transparent" /* "#303030" */,
    background: null,
    primary: {
        light: "#7986cb",
        main: "#3f51b5",
        dark: "#303f9f",
        contrastText: "#fff"
    },
    secondary: {
        light: "#ff4081",
        main: "#f50057",
        dark: "#c51162",
        contrastText: "#fff"
    },
};