import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    CssBaseline,
    makeStyles,
    CircularProgress,
    Hidden
} from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import { IRootState } from "../../store/rootModel";
import Titlebar from "../Titlebar";
import SideDrawer from "../SideDrawer";

/** css in js(ts)  */
import clsx from "clsx";
import style from "./style";

const cssInCode = makeStyles(style);


const Layout: React.FC = (props) => {
    const css = cssInCode();
    const overlay = useSelector((x: IRootState) => x.overlay);
    const drawer = useSelector((x: IRootState) => x.drawer);
    const { children, ...rest } = props;
    return (
        <div className={css.root}>
            {/* タイトルバー */}
            <Titlebar />
            {/* サイドバー */}
            <SideDrawer />
            {/* メインのコンテンツ */}
            <div className={css.mainContainer}>
                <Hidden smDown implementation="css">
                    <main id="content-wrapper" className={clsx(css.main, !drawer.open && css.mainDrawerClose)}>
                        {children}
                        <Backdrop className={css.backdrop} open={overlay.openWaitingContent} >
                            <CircularProgress color="inherit" />
                        </Backdrop>
                    </main>
                </Hidden>
                <Hidden mdUp implementation="css">
                    <main id="content-wrapper" className={clsx(css.main, drawer.open && css.mainDrawerClose)}>
                        {children}
                        <Backdrop className={css.backdrop} open={overlay.openWaitingContent} >
                            <CircularProgress color="inherit" />
                        </Backdrop>
                    </main>
                </Hidden>
            </div>
        </div>
    );
};

export default Layout;