import React, { Dispatch, useState } from "react";
import { Link } from 'react-router-dom';
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
import { UpdateTitle } from "../../store/Layout/action";



/** css in js(ts)  */
import clsx from "clsx";
import style from "./style";

const cssInCode = makeStyles(style);


const BottomNav: React.FC = () => {
    const classes = cssInCode();
    const dispatch = useDispatch();
    const title = useSelector((state: IRootState) => state.title);

    const [selectedValue, setSelectedValue] = useState(0);
    function MakeBottomNavigation() {
        return MenuList.map((x: MenuProps, index: number) => {
            return (
                <BottomNavigationAction
                    label={x.text}
                    icon={<SvgIcon><path d={x.svgIcon} /></SvgIcon>}
                    to={x.to}
                    component={Link}
                    key={`bnv-${uuidv4()}`}
                />
            );
        });
    }
    function OnBottomMenuClick(e, val) {
        setSelectedValue(val);

        const menuProps = MenuList[val];
        dispatch(UpdateTitle(menuProps.text, menuProps.svgIcon));
    }

    return (
        <BottomNavigation
            value={selectedValue}
            onChange={(event, newValue) => OnBottomMenuClick(event, newValue)}
            showLabels
            className={classes.bottomNav}
        >
            {MakeBottomNavigation()}
        </BottomNavigation>
    );
};

export default BottomNav;