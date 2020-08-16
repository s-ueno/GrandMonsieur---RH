﻿import { Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/styles';
import { transition, boxShadow } from '../../assets/material-dashboard-react';
import { drawerWidth, drawerMinWidth } from '../../global';
import { red } from '@material-ui/core/colors';

//css
const style: Styles<Theme, {}> = (theme: Theme) => ({
    root: {
        top: 0,
        left: drawerWidth,
        width: `calc(100vw - ${drawerWidth}px)`,
        //marginLeft: drawerWidth,
    },
    root4DrawerMinWidth: {
        left: drawerMinWidth,
        width: `calc(100vw - ${drawerMinWidth}px)`,
        //marginLeft: drawerWidth,
    },

    mainContaint: {
        width: `calc(100vw - ${drawerWidth}px)`,
        height: "100vh",
        backgroundColor: theme.palette.background.default,
        [theme.breakpoints.up("md")]: {
        },
        [theme.breakpoints.down("sm")]: {
            marginLeft: 0,
        },
    },
    mainContaint4DrawerMinWidth: {
        width: `calc(100vw - ${drawerMinWidth}px)`,
    },

    cardHeader: {
        height: 80,
        padding: 0,
        
    },

    headerActions: {
        height: 80,
        padding: 20,
    },
    textAlignCenter: {
        textAlign: "center",
    },
    avatar: {

    },
    icon: {
        fontSize: 24,
    }

});

export default style;
