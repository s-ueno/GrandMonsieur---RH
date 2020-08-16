import { Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/styles';
import { transition } from '../../assets/material-dashboard-react';
import { drawerWidth, drawerMinWidth } from '../../global';

//css
const style: Styles<Theme, {}> = (theme) => ({

    playerContainer: {
        position: "relative",
        paddingTop: "56.25%",
    },
    player: {
        position: "absolute",
        top: 0,
        left: 0
    },
    liner: {
        //height: "100%",
    },

    adsense: {
        height: "60%",
        width: "100%",
        backgroundColor: "red"
    },
    controls: {
        height: "40%",
        width: "100%",
        backgroundColor: "green"
    },
    flexGrow: {
        flexGrow: 1,
    },
    vertiacalCenter: {
        alignItems: "center"
    },
    viewCount: {
        paddingLeft: 5,
    }
});

export default style;
