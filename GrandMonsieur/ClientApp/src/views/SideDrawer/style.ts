import { Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/styles';
import { transition, boxShadow, grayColor, whiteColor } from '../../assets/material-dashboard-react';
import { drawerWidth, drawerMinWidth } from '../../global';

//css
const style: Styles<Theme, {}> = (theme: Theme) => ({
    drawerPaper: {
        border: "none",
        position: "fixed",
        top: "0",
        bottom: "0",
        left: "0",
        zIndex: 1,
        ...boxShadow,
        width: drawerWidth,
        [theme.breakpoints.up("md")]: {
            width: drawerWidth,
            position: "fixed",
            height: "100%"
        },
        [theme.breakpoints.down("sm")]: {

        }
    },
    bg: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        opacity: 0.2,
        width: "100%",
        height: "100%",
    },

    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        height: "100vh",
        width: theme.spacing(7),
        [theme.breakpoints.down('sm')]: {
            width: 0,
        },
    },
    toolbarIcon: {
        position: "fixed",
        //alignItems: 'center',
        width: "auto",
        bottom: 0,
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    list: {
        height: "auto"
    },
    divider: {
        margin: "0 15px"
    },
    reactIconHeight: {
        height: "30px",
        marginLeft: "2px",
        marginRight: "4px",
    },
    reduxIconHeight: {
        height: "22px",
        marginLeft: "8px",
        marginRight: "8px",
    },
    muiIcon: {
        height: "14px",
        marginLeft: "8px",
        marginRight: "8px",
    },
    tsIcon: {
        height: "16px",
        marginLeft: "8px",
        marginRight: "8px",
    },
    center: {
        width: "100%",
        textAlign: "center",
    },
    profile: {
        height: "190px",
        marginBottom: "10px",
    },
    profileTitle: {
        color: theme.palette.text.primary,
    },
    profileIcon: {
        background: whiteColor,
        height: "70px",
        width: "70px",
        boxShadow: theme.shadows[5]
    },
    hiddenHeader: {
        visibility: "hidden",
    },
});

export default style;
