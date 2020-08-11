import React from "react";
import { Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/styles';
import { IPalette } from "../../../store/Theme/model";

export const electricBlue: IPalette = {
    title: "Electric Blue Lemonade",
    appBar: "#0063B2FF",
    background: {
        default: "#9CC3D5FF",
        paper: "#c9dee8",
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
