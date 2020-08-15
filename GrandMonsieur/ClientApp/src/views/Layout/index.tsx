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
import BottomNav from "../BottomNav";

/** css in js(ts)  */
import clsx from "clsx";
import style from "./style";
import PlayDrawer from "../PlayDrawer";

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

            { /* smより小さくなった場合に非表示 ≒　PCサイズの場合のサイドメニュー構成 */}
            <Hidden smDown implementation="css">
                {/* サイドバー */}
                <SideDrawer />
            </Hidden>

            {/* メインのコンテンツ */}
            <div className={css.mainContainer}>
                <main id="content-wrapper" className={clsx(css.main, !drawer.open && css.mainDrawerClose)}>
                    {children}
                    <Backdrop className={css.backdrop} open={overlay.openWaitingContent} >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                </main>
            </div>

            <PlayDrawer
            />

            { /* mdより大きくなった場合に非表示 ≒　スマフォサイズの場合のサイドメニュー構成 */}
            <Hidden mdUp implementation="css">
                {/* ボトムバー */}
                <BottomNav />
            </Hidden>
        </div>
    );
};

export default Layout;