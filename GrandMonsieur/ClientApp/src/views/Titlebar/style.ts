import { Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/styles';
import { transition } from '../../assets/material-dashboard-react';
import { drawerWidth, drawerMinWidth } from '../../global';

//css
const style: Styles<Theme, {}> = (theme) => ({
    toolbar: {
        paddingRight: 24,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,

        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        /* タイトルバーとメインコンテンツの色を同じにする */
        //background: "transparent",
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    flexGrow: {
        flexGrow: 1,
        textAlign: "center",
    },
    menuButton: {
        marginRight: theme.spacing(8),
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

    animeStart: {
        animation: `$spinStart 3000ms ${theme.transitions.easing.easeInOut}`,
        //animationName: "$spinStart",
        //animationDuration: "4000ms",
        //animationIterationCount: "infinite",        
        //animationTimingFunction: theme.transitions.easing.easeInOut as any,
    },
    "@keyframes spinStart": {
        "0%": {
            transform: "transform:rotate(0deg)",
        },
        "100%": {
            transform: "transform:rotate(360deg)",
        }
    },
});

export default style;
