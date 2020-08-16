import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    CssBaseline,
    makeStyles,
    CircularProgress,

    Box,
    LinearProgress,
    LinearProgressProps,
    Typography
} from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import { IRootState } from "../../store/rootModel";

/** css in js(ts)  */
import clsx from "clsx";
import style from "./style";
const cssInCode = makeStyles(style);

interface Props extends LinearProgressProps {
    text: string;
}
const LinearProgressWithLabel: React.FCX<Props> = (props) => {
    const classes = cssInCode();
    const { text, ...rest } = props;
    return (
        <Box display="flex" alignItems="center" style={{ height: "100%" }} >
            <Box pr={1} pl={1} className={clsx(classes.flexGrow)}>
                <LinearProgress
                    {...rest}
                />
            </Box>
            <Box pl={1} pr={1}>
                <Typography variant="body2" color="textSecondary">
                    {text}
                </Typography>
            </Box>
        </Box >
    );
};

export default LinearProgressWithLabel;