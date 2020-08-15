import { Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/styles';
import { transition } from '../../assets/material-dashboard-react';
import { drawerWidth, drawerMinWidth } from '../../global';

//css
const style: Styles<Theme, {}> = (theme) => ({
    root: {
        padding: 5,
        transitionDuration: '0.3s',

    },
    card: {

    },
    cardHeader: {
        height: 80,
        padding: 0,
    },
    avatar: {
        height: 80,
        width: 25,
    },
    avatarImage: {
        height: 25,
        width: 25,
    },
    media: {
        //width: "100%",
        //height: "calc(100% * 9/16) !important" as any,
    },
    flexGrow: {
        flexGrow: 1,
    },
    footer: {
        whiteSpace: "pre-wrap",
        overflow: "hidden",
        textOverflow: "ellepsis"
    },
    duration: {
        position: "absolute",
        top: 0,
        padding: 5,
        margin: 5,
        backgroundColor: "#00000090",
    },
    publishedAt: {
        position: "absolute",
        bottom: 0,
        right: 0,
        padding: 5,
        margin: 5,
        backgroundColor: "#00000090",
    },
    userAvator: {
        marginRight: 10,
    }
});

export default style;
