import { Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/styles';
import { transition, boxShadow } from '../../assets/material-dashboard-react';
import { drawerWidth, drawerMinWidth } from '../../global';
import { red } from '@material-ui/core/colors';

//css
const style: Styles<Theme, {}> = (theme: Theme) => ({
    root: {
        top: 0,
        left: drawerWidth,
        [theme.breakpoints.down("sm")]: {
            left: 0,
        },
    },
    root4DrawerMinWidth: {
        left: drawerMinWidth,
        [theme.breakpoints.down("sm")]: {
            left: 0,
        },
    },

    gridList: {
        display: "flex",
        padding: "10px",
        flexWrap: "inherit",
        overflow: "auto",
    },


    mainContaint: {
        height: "100vh",
        backgroundColor: theme.palette.background.default,
        [theme.breakpoints.up("md")]: {
        },
        [theme.breakpoints.down("sm")]: {
            marginLeft: 0,
        },
    },
    cardStyle: {
        height: "100%",
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
    },


    playerContainer: {
        width: "100%",
    },
    playerContainer4DrawerMinWidth: {
        width: "100%",
    },
    player: {
    },



});

export default style;
