import React, { Dispatch, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    makeStyles,
    CircularProgress,
    AppBar,
    Toolbar,
    Badge,
    Hidden,
    IconButton,
    Typography,
    SvgIcon,
    BottomNavigation,
    BottomNavigationAction,
} from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';


import Backdrop from '@material-ui/core/Backdrop';
import { IRootState } from "../../store/rootModel";
import { MenuList, MenuProps } from "../../AppRouteDrawer";



/** css in js(ts)  */
import clsx from "clsx";
import style from "./style";

const cssInCode = makeStyles(style);


const BottomNav: React.FC = () => {
    const classes = cssInCode();
    const title = useSelector((state: IRootState) => state.title);

    const [value, setValue] = useState(0);



    function MakeBottomNavigation() {
        return MenuList.map((x: MenuProps) => {
            return (
                <BottomNavigationAction
                    label={x.text}
                    icon={<SvgIcon><path d={x.svgIcon} /></SvgIcon>}
                    selected={x.text === title.title}
                    key={`bnv-${uuidv4()}`}
                />
            );
        });
    }
    function OnBottomMenuClick(e, val) {
        setValue(val);
    }

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => OnBottomMenuClick(event, newValue)}
            showLabels
            className={classes.bottomNav}
        >
            {MakeBottomNavigation()}
        </BottomNavigation>
    );
};

export default BottomNav;