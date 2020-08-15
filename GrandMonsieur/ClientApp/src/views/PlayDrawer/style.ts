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
    },
    root4DrawerMinWidth: {
        left: drawerMinWidth,
    },

    mainContaint: {
        width: "100vw",
        height: "100vh",
        [theme.breakpoints.up("md")]: {
        },
        [theme.breakpoints.down("sm")]: {
            marginLeft: 0,
        },
        backgroundColor: "red",

    }


});

export default style;
