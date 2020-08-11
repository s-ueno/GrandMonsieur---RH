import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    CssBaseline,
    makeStyles,
    CircularProgress
} from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import { IRootState } from "../../store/rootModel";

/** css in js(ts)  */
import clsx from "clsx";
import style from "./style";
const cssInCode = makeStyles(style);


const Favorite: React.FC = () => {
    const css = cssInCode();
    const overlay = useSelector((x: IRootState) => x.overlay);

    return (
        <div className={css.root}>

        </div>
    );
};

export default Favorite;