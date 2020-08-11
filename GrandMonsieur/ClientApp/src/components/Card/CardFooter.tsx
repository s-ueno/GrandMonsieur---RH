import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import { cardFooterStyle } from "./Style";

const cssInCode = makeStyles(cardFooterStyle);

export default function CardFooter(props) {
    const classes = cssInCode();
    const { className, children, plain, profile, stats, chart, ...rest } = props;
    const cardFooterClasses = classNames({
        [classes.cardFooter]: true,
        [classes.cardFooterPlain]: plain,
        [classes.cardFooterProfile]: profile,
        [classes.cardFooterStats]: stats,
        [classes.cardFooterChart]: chart,
        [className]: className !== undefined
    });
    return (
        <div className={cardFooterClasses} {...rest}>
            {children}
        </div>
    );
}



