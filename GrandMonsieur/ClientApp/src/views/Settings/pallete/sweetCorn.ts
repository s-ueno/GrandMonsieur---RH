import React from "react";
import { Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/styles';
import { IPalette } from "../../../store/Theme/model";

export const sweetCorn: IPalette = {
    title: "Sweet Corn",
    appBar: "#F2EDD7FF",
    background: {
        default: "#755139FF",
        paper: "#ab7754",
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
