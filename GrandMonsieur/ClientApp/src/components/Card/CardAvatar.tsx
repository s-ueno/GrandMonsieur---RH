import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import { cardAvatarStyle } from "./Style";

const cssInCode = makeStyles(cardAvatarStyle);

export default function CardAvatar(props) {
    const classes = cssInCode();
    const { children, className, plain, profile, ...rest } = props;
    const cardAvatarClasses = classNames({
        [classes.cardAvatar]: true,
        [classes.cardAvatarProfile]: profile,
        [classes.cardAvatarPlain]: plain,
        [className]: className !== undefined
    });
    return (
        <div className={cardAvatarClasses} {...rest}>
            {children}
        </div>
    );
};
