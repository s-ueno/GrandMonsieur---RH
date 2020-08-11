﻿import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import { cardBodyStyle } from "./Style";

const cssInCode = makeStyles(cardBodyStyle);

export default function CardBody(props) {
    const classes = cssInCode();
    const { className, children, plain, profile, ...rest } = props;
    const cardBodyClasses = classNames({
        [classes.cardBody]: true,
        [classes.cardBodyPlain]: plain,
        [classes.cardBodyProfile]: profile,
        [className]: className !== undefined
    });
    return (
        <div className={cardBodyClasses} {...rest}>
            {children}
        </div>
    );
}