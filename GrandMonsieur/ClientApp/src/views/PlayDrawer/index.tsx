import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    CssBaseline,
    makeStyles,
    CircularProgress,
    Drawer,
    Snackbar,
    Slide,
    Button
} from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import { IRootState } from "../../store/rootModel";
import { UpdatePlayDrawer } from "../../store/PlayDrawer/action";

/** css in js(ts)  */
import clsx from "clsx";
import style from "./style";
const cssInCode = makeStyles(style);

const PlayDrawer: React.FCX = () => {
    const cssInCode = makeStyles(style);
    const classes = cssInCode();
    const drawer = useSelector((x: IRootState) => x.drawer);
    const playDrawer = useSelector((x: IRootState) => x.playDrawer);
    const dispatch = useDispatch();


    function onClick(e) {
        console.log("★");
        dispatch(UpdatePlayDrawer("hidden"));
    }

    return (
        <Snackbar            
            className={clsx(classes.root, !drawer.open && classes.root4DrawerMinWidth)}
            anchorOrigin={{ vertical: "top", horizontal: "left" }}
            open={(playDrawer.display === "showPlayer" || playDrawer.display === "miniPlayer")}
            TransitionComponent={(props) => (
                <Slide {...props} direction="left" unmountOnExit />
            )}
            style={{
            }}
        >
            <div
                className={classes.mainContaint}
            >
                <Button onClick={onClick}>閉じる</Button>
                <span></span>
            </div>
        </Snackbar>

    );
};

export default PlayDrawer;