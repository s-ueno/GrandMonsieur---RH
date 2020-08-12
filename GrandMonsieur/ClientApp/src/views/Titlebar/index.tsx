import React, { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    makeStyles,
    AppBar,
    Toolbar,
    Badge,
    Hidden,
    IconButton,
    Typography,
    SvgIcon,
} from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import MenuIcon from '@material-ui/icons/Menu';

import {
    mdiLoginVariant,
    mdiAccount,
    mdiCloudCheckOutline,
    mdiCloudDownloadOutline,
    mdiSync
} from '@mdi/js';

import { IRootState } from "../../store/rootModel";
import { IDrawer } from "../../store/SideDrawer/model";
import { updateDrawer } from "../../store/SideDrawer/action";
import { ITitle } from "../../store/Layout/model";

/** css in js(ts)  */
import clsx from "clsx";
import style from "./style";
const cssInCode = makeStyles(style);


const Titlebar: React.FC = () => {
    const classes = cssInCode();
    const dispatch: Dispatch<any> = useDispatch();
    const overlay = useSelector((x: IRootState) => x.overlay);
    const drawer = useSelector((state: IRootState) => state.drawer);
    const title = useSelector((state: IRootState) => state.title);
    const archive = useSelector((state: IRootState) => state.archive);

    function OnChangeDrawerState() {
        dispatch(updateDrawer(!drawer.open));
    }
    function MakeNavSvgIcon(path: string) {
        if (!path) return null;
        return (
            <SvgIcon className={classes.navIcon} ><path d={path} /></SvgIcon>
        );
    }
    function MakeArchiveSvgIcon() {
        if (!archive.processing) {
            return <SvgIcon><path d={mdiCloudCheckOutline} /></SvgIcon>
        }
        return (
            <SvgIcon className={clsx("rotation-spinner")}>
                <path d={mdiSync} />
            </SvgIcon>
        )
    }
    function ShowAccont() {

    }
    function ShowArchive() {

    }
    return (
        <div className={classes.root}>
            <AppBar
                elevation={0 /* タイトルバーのshadowスタイルを消す */}
                position="fixed"
                color="default"
                className={clsx(classes.appBar, drawer.open && classes.appBarShift)}
            >
                <Toolbar className={clsx(classes.toolbar)}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => OnChangeDrawerState()}
                        edge="start"
                        className={clsx(classes.menuButton, classes.smNavToolbar)}
                    >
                        <MenuIcon className={classes.svgIcon} />
                    </IconButton>

                    <div
                        className={classes.flexGrow}
                    >
                        {MakeNavSvgIcon(title.icon)}
                        {"  "}
                        <span className={classes.title}>{title.title}</span>
                    </div>

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => ShowArchive()}
                        edge="start"
                    >
                        <Badge
                            className={classes.badge}
                            badgeContent={archive.processing} color="secondary"
                        >
                            {MakeArchiveSvgIcon()}
                        </Badge>
                    </IconButton>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => ShowAccont()}
                        edge="start"
                    >
                        <SvgIcon><path d={mdiAccount} /></SvgIcon>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Titlebar;