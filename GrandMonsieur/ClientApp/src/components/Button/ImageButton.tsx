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
// @ts-ignore:TS2307
import youtube from "../../assets/yt_icon_rgb.png";
// @ts-ignore:TS2307
import dailymotion from "../../assets/dailymotion.png";
// @ts-ignore:TS2307
import niconico from "../../assets/niconico.png";
// @ts-ignore:TS2307
import bilibili from "../../assets/bilibili.png";
import { IRootState } from "../../store/rootModel";

/** css in js(ts)  */
import clsx from "clsx";
import style from "./style";
import { IMovie } from "../../store/Movie/model";
const cssInCode = makeStyles(style);

interface Props extends Omit<ButtonProps, "startIcon"> {
    imageSrc?: string;
    movie?: IMovie,
    movieMode?: "provider" | "user";
    avatarClassName?: string;
    avatarVariant?: 'circle' | 'rounded' | 'square';

}

function parseImage(imageSrc: string, movie: IMovie) {
    if (imageSrc) {
        return imageSrc;
    }

    if (movie.provider === "Youtube") {
        return youtube;
    }
    if (movie.provider === "Dailymotion") {
        return dailymotion;
    }
    if (movie.provider === "Bilibili") {
        return bilibili;
    }
    return niconico;
}

function createAvator(movie: IMovie) {
    if (movie.createUserIcon) {
        return <Avatar src={movie.createUserIcon} />
    }
    if (movie.createUser) {
        return (
            <Avatar src={movie.createUserIcon}>
                {movie.createUser.charAt(0)}
            </Avatar>
        );
    }
    return <Avatar />;
}



const ImageButton: React.FCX<Props> = (props) => {
    const classes = cssInCode();
    const { imageSrc, movie, movieMode, avatarClassName, avatarVariant, children, ...rest } = props;

    return (
        <Button
            {...rest}
            startIcon={
                (movieMode && movieMode === "provider") ? (
                    <Avatar
                        className={avatarClassName}
                        variant={avatarVariant ?? "square"}
                        src={parseImage(imageSrc, movie)}
                    />
                ) : createAvator(movie)
            }
        >
            {children}
        </Button >
    );
};

export default ImageButton;