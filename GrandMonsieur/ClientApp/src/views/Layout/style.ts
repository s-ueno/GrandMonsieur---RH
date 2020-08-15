import { Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/styles';
import { transition } from '../../assets/material-dashboard-react';
import { drawerWidth, drawerMinWidth, appbarHeight } from '../../global';

//css
const style: Styles<Theme, {}> = (theme) => ({
    root: {
        position: "relative",
        top: "0",
        height: "100vh"
    },
    mainContainer: {
        height: "100%",
        paddingTop: "60px",
        paddingLeft: "5px",
        paddingRight: "5px",
        //overflow: "auto",
        [theme.breakpoints.down("sm")]: {
            paddingLeft: "0px",
        },
    },
    main: {
        [theme.breakpoints.up("md")]: {
            width: `calc(100% - ${drawerWidth}px)`
        },
        [theme.breakpoints.down("sm")]: {
            width: `100%`
        },
        overflow: "auto",
        position: "absolute",
        right: 0,
        float: "right",
        ...transition,
        width: "100%",
        minHeight: "100%",
        height: "100%",
        overflowScrolling: "touch",
        paddingBottom: appbarHeight
    },
    mainDrawerClose: {
        [theme.breakpoints.up("md")]: {
            width: `calc(100% - ${drawerMinWidth}px)`
        },
        [theme.breakpoints.down("sm")]: {
            width: `100%`
        },
    }
});

export default style;
