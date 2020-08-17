import React, { memo, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    CssBaseline,
    makeStyles,
    CircularProgress,

    Box,
    LinearProgress,
    LinearProgressProps,
    Typography,

    Slider,
    SliderProps,
    Button
} from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import { IRootState } from "../../store/rootModel";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import VolumeMuteIcon from '@material-ui/icons/VolumeMute';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

/** css in js(ts)  */
import clsx from "clsx";
import style from "./style";
const cssInCode = makeStyles(style);

interface Props extends Omit<SliderProps, "value"> {
    value: number;
    onMuteClick?: (mute: boolean) => void;

    __toggle?: () => void;
    __toggleIcon?: boolean;
}


const MakeIconMemo = memo<Props>(props => {
    if (props.__toggleIcon) {
        return (
            <VolumeOffIcon style={{ width: "auto" }} />
        );
    }

    const value = props.value as number;
    if (!value) {
        return (
            <VolumeOffIcon style={{ width: "auto" }} />
        );
    }
    if (value < 50) {
        return <VolumeMuteIcon style={{ width: "auto" }} />
    }
    if (value < 75) {
        return <VolumeDownIcon style={{ width: "auto" }} />
    }
    return <VolumeUpIcon style={{ width: "auto" }} />
});

const VolumeButtonMemo = memo<Props>(props => {
    return (
        <Button onClick={e => props?.__toggle()}>
            <MakeIconMemo  {...props} />
        </Button>
    )
});

const Volume: React.FCX<Props> = (props) => {
    const classes = cssInCode();
    const { value, onMuteClick, ...rest } = props;

    const [toggle, setToggle] = useState(false);
    function toggleIcon() {
        if (onMuteClick) {
            onMuteClick(!toggle);
        }
        setToggle(!toggle);
    }

    return (
        <Box display="flex" alignItems="center">
            <Box pl={1} pr={1} className={clsx(classes.flexGrow)}>
                <VolumeButtonMemo
                    value={value}

                    __toggle={toggleIcon}
                    __toggleIcon={toggle}
                    {...props} />
            </Box>
            <Box pr={1} pl={1} className={clsx(classes.slider)}>
                <Slider
                    aria-labelledby="continuous-slider"
                    {...rest}
                    value={value}
                />
            </Box>
        </Box>
    );
};

export default Volume;