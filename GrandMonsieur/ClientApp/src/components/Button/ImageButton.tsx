import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    CssBaseline,
    makeStyles,
    CircularProgress,
    ButtonBase,
    Button,
    Avatar,
    ButtonProps
} from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';

import Backdrop from '@material-ui/core/Backdrop';
import { IRootState } from "../../store/rootModel";

/** css in js(ts)  */
import clsx from "clsx";
import style from "./style";
const cssInCode = makeStyles(style);

interface Props extends Omit<ButtonProps, "startIcon"> {
    imageSrc?: string;
    avatarClassName?: string;
    avatarVariant?: 'circle' | 'rounded' | 'square';

}

const ImageButton: React.FCX<Props> = (props) => {
    const { imageSrc, avatarClassName, avatarVariant, children, ...rest } = props;
    return (
        <Button
            {...rest}
            startIcon={
                <Avatar
                    className={avatarClassName}
                    variant={avatarVariant ?? "square"}
                    src={imageSrc}
                />
            }
        >
            {children}
        </Button>
    );
};

export default ImageButton;