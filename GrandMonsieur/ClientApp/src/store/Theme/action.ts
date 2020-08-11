import React from "react";
import { IActionBase } from "../rootModel";
import { IPalette } from "./model";
import { PaletteColor, TypeBackground } from "@material-ui/core/styles/createPalette";


export const UPDATE_THEME = "UPDATE_THEME";
/** テーマをダークとライトで切り替えます */
export function ToggleTheme(): IToggleTheme {
    return { type: UPDATE_THEME };
}
interface IToggleTheme extends IActionBase { };


export const UPDATE_PALETTE = "UPDATE_PALETTE";
/** PrimaryカラーとSecondaryカラーを切り替えます */
export function UpdatePalette(
    title: string,
    appBar: string,
    primary: PaletteColor,
    secondary: PaletteColor,
    background?: TypeBackground, ): IPaletteType {
    return { type: UPDATE_PALETTE, title: title, appBar: appBar, background: background, primary: primary, secondary: secondary };
}
interface IPaletteType extends IPalette, IActionBase { };