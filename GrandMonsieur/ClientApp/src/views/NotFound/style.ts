import { Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/styles';
import { transition } from '../../assets/material-dashboard-react';
import { drawerWidth, drawerMinWidth } from '../../global';

//css
const style: Styles<Theme, {}> = (theme) => ({
    root: {
        height: "calc(100vh - 60px)",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 50,
        [theme.breakpoints.down("md")]: {
            padding: 25,
            
        },
        [theme.breakpoints.down("sm")]: {
            padding: 10,
            marginTop: "-40px",
        }
    },
    title: {
        fontSize:"5rem",
    },
    subTitle: {
        fontSize: "2rem",
    },
    button: {
        marginTop: 50,
        [theme.breakpoints.down("sm")]: {
            marginTop: 5,
        }
    },
    bg: {
        backgroundImage: 'url(https://source.unsplash.com/daily?sad)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        opacity: 0.2,
        width: "100%",
        height: "100%",
    },
});

export default style;
