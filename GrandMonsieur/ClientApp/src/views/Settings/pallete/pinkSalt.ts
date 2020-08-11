import React from "react";
import { Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/styles';
import { IPalette } from "../../../store/Theme/model";

export const pinkSalt: IPalette = {
    title: "Pink Salt",
    appBar: "#FAD0C9FF",
    background: {
        default: "#6E6E6DFF",
        paper: "#a6a6a6",
    },
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
}
