import React, { useState, Dispatch } from "react";

import { FormControlLabel } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';


// css in code(ts) -- inline style
import clsx from "clsx";
import style from "./style";
import { makeStyles } from '@material-ui/core/styles';
//import Button from "../../mui/components/Button";
const cssInCode = makeStyles(style);


type Props = {
    position?: 'end' | 'start' | 'top' | 'bottom';
    label?: string;
    color?: 'primary' | 'secondary' | 'default';
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
    name?: string;
}

const CheckBox: React.FCX<Props> = (props) => {
    return <FormControlLabel
        label={props?.label ?? ""}
        labelPlacement={props?.position ?? "end"}
        control={
            <Switch
                className={props?.className}
                color={props?.color ?? "primary"}
                checked={props.checked}
                onChange={props?.onChange}
                name={props?.name}
            />
        }
    />
};

export default CheckBox;