import { Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/styles';
import { transition } from '../../assets/material-dashboard-react';
import { drawerWidth, drawerMinWidth } from '../../global';

//css
const style: Styles<Theme, {}> = (theme: Theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        //justifyContent: 'space-around',
        backgroundColor: theme.palette.background.default,
        padding: 10,
    },
    gridList: {
        width: "100%",
        height: "100%",
    },
    providerTitle: {
        height: "auto",
        fontSize: "large",
        position: "absolute",
    },
    icon: {
        height: 24,
        width: 24,
    },

    cardMedia: {

    },
    playDrawer: {
        marginLeft: drawerWidth,
    }
});

export default style;
