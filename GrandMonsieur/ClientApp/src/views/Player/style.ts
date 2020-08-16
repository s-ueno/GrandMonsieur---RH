import { Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/styles';
import { transition } from '../../assets/material-dashboard-react';
import { drawerWidth, drawerMinWidth } from '../../global';

//css
const style: Styles<Theme, {}> = (theme: Theme) => ({

    playerContainer: {
        position: "relative",
        paddingTop: "56.25%",
    },
    player: {
        position: "absolute",
        top: 0,
        left: 0
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
    viewCount: {
        paddingLeft: 5,
        fontSize: "0.8rem"
    },

    topControls: {
        height: "auto",
        display: "flex",
        justifyContent: "center"
    },
    middleControl1: {
        display: "flex",
        justifyContent: "space-around"
    },
    middleControl2: {
        display: "flex",
        justifyContent: "center"
    },
    adsense: {
        height: "40%",
        width: "100%",
        backgroundColor: "red"
    },
    bottomControls: {
        //marginTop: "-10px",
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

    play10: {
        fontSize: "3rem",
    },
    play30: {
        fontSize: "3rem",
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
    }
});

export default style;
