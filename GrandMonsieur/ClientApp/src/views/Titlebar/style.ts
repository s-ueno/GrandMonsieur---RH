import { Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/styles';
import { transition } from '../../assets/material-dashboard-react';
import { drawerWidth, drawerMinWidth } from '../../global';

//css
const style: Styles<Theme, {}> = (theme) => ({

    navIcon: {
        position: "absolute",
    },
    smNavToolbar: {
        [theme.breakpoints.down("sm")]: {
            visibility: "collapse",
            paddingRight: 0,
            width: 0,
        }
    },

    smDownHidden: {
        [theme.breakpoints.down("sm")]: {
            visibility: "collapse",
            width: 0,
        }
    },

    toolbar: {
        paddingRight: 24,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,

        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),

    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),


        [theme.breakpoints.down("sm")]: {
            marginLeft: 0,
            width: "100%",
        }
    },
    flexGrow: {
        flexGrow: 1,
    },
    textAlignCenter: {
        textAlign: "center",
    },
    menuButton: {
        marginRight: theme.spacing(8),
        [theme.breakpoints.down("sm")]: {
            visibility: "collapse",
            width: 0,
            marginRight: 0,
        }
    },
    svgIcon: {
        position: "absolute",
    },
    title: {
        marginLeft: 30,
        fontSize: "large"
    },
    hide: {
        display: 'none',
    },

    autocomplete: {
        width: "200px",
        margin: "0 3px 0 0",
        backgroundColor: theme.palette.background.default,
        [theme.breakpoints.down("sm")]: {
            width: "150px",
        }
    },

    marginLeftRight: {
        margin: "0 3px",
    }
});

export default style;
