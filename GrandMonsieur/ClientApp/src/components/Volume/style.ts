import { Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/styles';
import { transition } from '../../assets/material-dashboard-react';
import { drawerWidth, drawerMinWidth } from '../../global';

//css
const style: Styles<Theme, {}> = (theme) => ({
    flexGrow: {
        flexGrow: 1,
    },
    slider: {
        width:"100%",
    }
});

export default style;
