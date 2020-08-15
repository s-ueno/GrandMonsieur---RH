import { Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/styles';
import { transition, whiteColor } from '../../assets/material-dashboard-react';
import { drawerWidth, drawerMinWidth } from '../../global';
import { initialPalette } from '../../store/Theme/model';

//css
const style: Styles<Theme, {}> = (theme: Theme) => ({

    root: {
        padding: 10,
    },

    ignoreBoxShadow: {
        boxShadow: "none !important",
    },

    logo: {
        marginTop: 10,
        width: "100%",
        height: "25vh",
        [theme.breakpoints.down("sm")]: {
            height: "30vh",
        }
    },
    bg: {
        backgroundImage: 'url(https://source.unsplash.com/daily?water)',
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
    },
    center: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
    },
    gridsmAdjust: {
        [theme.breakpoints.down("xs")]: {
            marginBottom: 35,
        }
    },
    gridPadding: {
        padding: 30,
        [theme.breakpoints.down("sm")]: {
            padding: "15px 20px 0 20px",
        },
        [theme.breakpoints.down("xs")]: {
            padding: 20,
        }
    },
    profileIcon: {
        background: whiteColor,
        height: "150px",
        width: "150px",
        opacity: 0.5,
        position: "relative",
        bottom: 0,
        [theme.breakpoints.down("sm")]: {
            height: "75px",
            width: "75px",
        }
    },
    displayName: {
        fontSize: "3rem",
        [theme.breakpoints.down("sm")]: {
            fontSize: "1rem",
        },
    },

    settingTitle: {
        fontSize: "2rem",
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.2rem",
        },
    },
    appBar: {
        backgroundColor: "transparent",
        boxShadow: "none",
    },
    tab: {
        textTransform: "none",
    },
    divider: {
        margin: "15px 0px"
    },

    theme: {
        Default: initialPalette,
        "Purple Teal": {
            primary: {
                light: "#6200EE",
                main: "Purple",
                dark: "#3700B3",
                contrastText: "#fff"
            },
            secondary: {
                light: "#ff4081",
                main: "#f50057",
                dark: "#c51162",
                contrastText: "#fff"
            },
        }
    },
    demoCard: {
        margin: 5,
    },
    demoMain: {
        height: "200px",
        width: "100%",
        border: "solid"
    },
    demoContent: {
        padding: 5
    },
    demoAppBar: {
        width: "100%",
        height: "60px",
        position: "inherit",
        zIndex: 1,
    },
});

export default style;
