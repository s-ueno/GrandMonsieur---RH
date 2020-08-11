import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import { cardIconStyle } from "./Style";

const cssInCode = makeStyles(cardIconStyle);

export default function CardIcon(props) {
    const classes = cssInCode();
    const { className, children, color, ...rest } = props;
    const cardIconClasses = classNames({
        [classes.cardIcon]: true,
        [classes[color + "CardHeader"]]: color,
        [className]: className !== undefined
    });
    return (
        <div className={cardIconClasses} {...rest}>
            {children}
        </div>
    );
}
