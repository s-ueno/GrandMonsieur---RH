import { Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/styles';
import { transition } from '../../assets/material-dashboard-react';
import { drawerWidth, drawerMinWidth } from '../../global';

//css
const style: Styles<Theme, {}> = (theme: Theme) => ({

    root: {
        height: "100%",
        width:"100%",
    },

    playerGrid: {
        //width: "85%",
    },
    playerGridDrawerClose: {
        //width: "80%",
    },

    playerContainer: {
        position: "relative",
        paddingTop: "56.25%",
    },
    player: {
        position: "absolute",
        top: 0,
        left: 0,
    },

    linerContainer: {
        height: "20px",
    },

    liner: {

    },

    flexGrow: {
        flexGrow: 1,
    },

    volume: {
        minWidth: "200px",
        display: "inline-block",
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
