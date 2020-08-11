import React from "react";
import { Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/styles';
import { IPalette } from "../../../store/Theme/model";

export const mangoMojito: IPalette = {
    title: "Mango Mojito",
    appBar: "#DAA03DFF",
    background: {
        default: "#616247FF",
        paper: "#93946b",
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
