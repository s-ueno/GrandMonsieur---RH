import React from "react";
import classNames from "classnames";
import { cardStyle } from "./Style";
import { makeStyles } from '@material-ui/core/styles';
const cssInCode = makeStyles(cardStyle);

export default function Card(props: any) {
    const classes = cssInCode();
    const { className, children, plain, profile, chart, ...rest } = props;
    const cardClasses = classNames({
        [classes.card]: true,
        [classes.cardPlain]: plain,
        [classes.cardProfile]: profile,
        [classes.cardChart]: chart,
        [className]: className !== undefined
    });
    return (
        <div className={cardClasses} {...rest}>
            {children}
        </div>
    );
}

