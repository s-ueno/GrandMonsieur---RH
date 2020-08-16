import React, { useState, createRef, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    CssBaseline,
    makeStyles,
    CircularProgress,
    Card,
    CardHeader,
    CardActionArea,
    Drawer,
    Snackbar,
    Slide,
    Button,
    IconButton
} from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import { IRootState } from "../../store/rootModel";
import { UpdatePlayDrawer } from "../../store/PlayDrawer/action";
import ImageButton from "../../components/Button/ImageButton";

import CloseIcon from '@material-ui/icons/Close';
import MinimizeIcon from '@material-ui/icons/Minimize';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import ReactPlayer from "react-player";
import { IMovie } from "../../store/Movie/model";
import Player from "../Player";

/** css in js(ts)  */
import clsx from "clsx";
import style from "./style";

const cssInCode = makeStyles(style);

type MultiPlayerProps = {
    movie: IMovie;
}
const MultiPlayer = memo<MultiPlayerProps>(props => {
    if (!props.movie?.provider) return null;

    if ((props.movie.provider === "Youtube") ||
        (props.movie.provider === "Dailymotion")) {
        return <Player />
    }

    // todo
    return <Player />
});

const PlayDrawer: React.FCX = () => {
    const classes = cssInCode();
    const drawer = useSelector((x: IRootState) => x.drawer);
    const playDrawer = useSelector((x: IRootState) => x.playDrawer);
    const dispatch = useDispatch();
    const player = createRef();

    function onClose(e) {
        console.log("★");
        dispatch(UpdatePlayDrawer("hidden"));
    }



    return (
        <Snackbar
            className={clsx(classes.root, !drawer.open && classes.root4DrawerMinWidth)}
            anchorOrigin={{ vertical: "top", horizontal: "left" }}
            open={(playDrawer.display === "showPlayer" || playDrawer.display === "miniPlayer")}
            TransitionComponent={(props) => (
                <Slide {...props} direction="left" unmountOnExit />
            )}
            style={{
            }}
        >
            <div
                className={clsx(classes.mainContaint, classes.mainContaint4DrawerMinWidth)}
            >
                <Card>
                    <CardHeader
                        className={classes.cardHeader}
                        avatar={
                            <div>
                                <IconButton onClick={onClose}>
                                    <ArrowBackIcon className={classes.icon} />
                                </IconButton>
                                <a href={playDrawer.movie?.uri} rel="noreferrer" target="_blank"
                                    className={classes.avatar}
                                >
                                    <ImageButton
                                        movie={playDrawer.movie}
                                        movieMode="provider"
                                        className={classes.avatar}
                                        avatarClassName={classes.avatarImage}
                                    >
                                    </ImageButton>
                                </a>
                            </div>
                        }
                        title={playDrawer.movie?.title}
                        titleTypographyProps={
                            {
                                style: {
                                    width: "40vw",
                                    overflow: "hidden",
                                    textOverflow: "ellepsis"
                                }
                            }
                        }
                        action={
                            <div className={classes.headerActions}>
                                <ImageButton
                                    movie={playDrawer.movie}
                                    movieMode="user"
                                >
                                    {playDrawer.movie?.createUser}
                                </ImageButton>
                            </div>
                        }

                    />
                    <MultiPlayer movie={playDrawer.movie} />
                </Card>


            </div>
        </Snackbar>

    );
};

export default PlayDrawer;