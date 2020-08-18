import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    CssBaseline,
    makeStyles,
    CircularProgress,    Grid,
    Typography,
    Button
} from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import { IRootState } from "../../store/rootModel";

/** css in js(ts)  */
import clsx from "clsx";
import style from "./style";
const cssInCode = makeStyles(style);


const NotFound: React.FC = () => {
    const css = cssInCode();
    const overlay = useSelector((x: IRootState) => x.overlay);

    function GoBackHome(e) {

    }

    return (
        <Grid container className={css.root}>
            <Grid item xs={12}>
                <div className={css.bg} />
                <span
                    className={css.title}
                >
                    Whoops!
                </span>
                <div>
                    <span
                        className={css.subTitle}
                    >
                        404 Page not found
                    </span>
                </div>
                <div>
                    <Button
                        className={css.button}
                        variant="outlined"
                        onClick={GoBackHome}>
                        Go back home
                    </Button>
                </div>
            </Grid>
        </Grid>
    );
};

export default NotFound;