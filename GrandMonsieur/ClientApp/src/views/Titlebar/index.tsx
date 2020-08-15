import React, { Dispatch, useState } from "react";
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
import MuiAutocomplete from "../../components/Autocomplete";

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
    const [value, setValue] = useState("");
    return (
        <div className={classes.root}>
            <AppBar
                elevation={0 /* タイトルバーのshadowスタイルを消す */}
                position="fixed"
                color="default"
                className={clsx(classes.appBar, drawer.open && classes.appBarShift)}
            >
                <Toolbar className={clsx(classes.toolbar)}>

                    { /*  
                     <Hidden smDown implementation="css"> を使うと、position がおかしくなるので、CSSでsmDown を適用
                     */ }
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => OnChangeDrawerState()}
                        edge="start"
                        className={clsx(classes.menuButton, classes.smNavToolbar, classes.smDownHidden)}
                    >
                        <MenuIcon className={classes.svgIcon} />
                    </IconButton>
                    <div
                        className={clsx(classes.flexGrow, classes.textAlignCenter, classes.smDownHidden)}
                    >
                        {MakeNavSvgIcon(title.icon)}
                        {"  "}
                        <span className={classes.title}>{title.title}</span>
                    </div>

                    <Hidden mdUp implementation="css">
                        <div className={classes.flexGrow} />
                    </Hidden>

                    <MuiAutocomplete
                        widthWhenFocused="400px"
                        clearOnEscape={true}

                        value={value}
                        onInputChange={(e, v) => {
                            setValue(v);
                        }}
                        onInputDone={(e, v) => {
                            console.log(v);
                        }}

                        className={classes.autocomplete}
                    />

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => ShowArchive()}
                        edge="start"
                        className={classes.marginLeftRight}
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
                        className={classes.marginLeftRight}
                    >
                        <SvgIcon><path d={mdiAccount} /></SvgIcon>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Titlebar;