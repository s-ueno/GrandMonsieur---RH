import { Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/styles';
import { transition } from '../../assets/material-dashboard-react';
import { drawerWidth, drawerMinWidth } from '../../global';

//css
const style: Styles<Theme, {}> = (theme: Theme) => ({

    root: {
        maxWidth: `calc(100vw - ${drawerWidth}px)`,
    },
    rootDrawerClose: {
        maxWidth: `calc(100vw - ${drawerMinWidth}px)`,
    },

    playerGrid: {
        //maxHeight: "80%",

    },

    playerContainer: {
        position: "relative",
        paddingTop: "56.25%",
        //maxHeight: "calc(70vh - 50px)",
    },
    player: {
        position: "absolute",
        top: 0,
        left: 0,
        //maxHeight: "80%",
        //maxHeight: "calc(70vh - 50px)",
    },

    linerContainer: {
        height: "20px",
    },
    liner: {
        //height: "100%",
    },


    controls: {
        height: "40%",
        width: "100%",
    },
    flexGrow: {
        flexGrow: 1,
    },
    vertiacalCenter: {
        alignItems: "center"
    },

    viewCountContainer: {
        display: "grid",
        justifyContent: "flex-start",
    },

    viewCount: {
        paddingLeft: 5,
        fontSize: "0.8rem"
    },

    topControls: {
        height: "auto",
        display: "flex",
        justifyContent: "flex-end"
    },
    middleControl: {
        display: "flex",
        justifyContent: "space-around;"
    },
    bottomControls: {
        display: "flex",
        justifyContent: "space-around;"
    },
    adsense: {
        height: "60%",
        width: "100%",
        backgroundColor: theme.palette.background.default,
        padding: 10,
    },
    description: {
        height: "auto",
        width: "100%",
        backgroundColor: theme.palette.background.paper,
        padding: 10,
    },
    topIcon: {
        fontSize: "2rem",
    },

    play: {
        fontSize: "6rem",
    },
    skip: {
        fontSize: "4rem",
    },

    middleIcon: {
        fontSize: "3rem",
        [theme.breakpoints.down("md")]: {
            fontSize: "2rem",
        },
    },
    volume: {
        minWidth: "200px",
        display: "inline-block",
    },
    zoomContainer: {
        display: "flex",
        justifyContent: "flex-end",
        marginTop: "-43px",
    },

    bottomIcon: {
        minWidth: "auto",
        minHeight: "40px",
    },
    powerdBy: {
        position: "fixed",
        right: "10px",
    }
});

export default style;
