import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    CssBaseline,
    makeStyles,
    CircularProgress,
    Grid,
    Card,
    CardHeader,    CardActionArea,
    CardMedia,
    CardActions,
    Avatar,
    Paper,
    Grow,
    IconButton
} from '@material-ui/core';


import ReactPlayer from 'react-player'

import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import CloudDownloadOutlinedIcon from '@material-ui/icons/CloudDownloadOutlined';

import { IRootState } from "../../store/rootModel";
import { IMovie } from "../../store/Movie/model";
import useAsyncEffect from "use-async-effect";
import { Delay } from "../../global";
import ImageButton from "../Button/ImageButton";

/** css in js(ts)  */
import clsx from "clsx";
import style from "./style";
import { UpdatePlayDrawer } from "../../store/PlayDrawer/action";
const cssInCode = makeStyles(style);


type Props = {
    movie: IMovie,
    delay: number,
    onClick: (e: IMovie) => void;
}




const VideoTile: React.FCX<Props> = (props) => {
    const classes = cssInCode();
    const dispatch = useDispatch();

    const overlay = useSelector((x: IRootState) => x.overlay);

    function createUser(movie: IMovie) {
        if (movie.createUserIcon) {
            return <img src={movie.createUserIcon} className={classes.avatar} />
        }
        if (movie.createUser) {
            return movie.createUser.charAt(0);
        }
        return null;
    }
    function createFotter(movie: IMovie) {
        let result = movie.createUser;
        if (result) {
            result = result + "\n";
        }
        if (movie.viewCount) {
            result = result + `${movie.viewCount} views`
        }
        return result;
    }

    function createAvator(movie: IMovie) {
        if (movie.createUserIcon) {
            return <Avatar className={classes.userAvator} src={props.movie.createUserIcon} />
        }
        if (movie.createUser) {
            return (
                <Avatar className={classes.userAvator} src={props.movie.createUserIcon}>
                    {movie.createUser.charAt(0)}
                </Avatar>
            );
        }
        return <Avatar />;
    }
    return (
        <Grid item xs={12} sm={6} md={6} lg={3} className={classes.root}>

            <Grow in={true}
                unmountOnExit
                style={{ transformOrigin: 'bottom right 2cm' }}
                {...(0 < props.delay ? { timeout: 300 * (props.delay * 0.5) } : {})}
                onExited={e => {
                    console.log("onExited");
                }}
                
                addEndListener={e => {
                    console.log("addEndListener");
                }}
            >

                <Paper>
                    <Card>
                        <CardHeader
                            className={classes.cardHeader}
                            avatar={
                                <a href={props.movie.uri} rel="noreferrer" target="_blank"
                                    className={classes.avatar}
                                >
                                    <ImageButton
                                        movie={props.movie}
                                        movieMode="provider"
                                        className={classes.avatar}
                                        avatarClassName={classes.avatarImage}
                                    >
                                    </ImageButton>
                                </a>
                            }
                            title={props.movie.title}
                            titleTypographyProps={
                                {
                                    style: {
                                        whiteSpace: "pre-wrap",
                                        overflow: "hidden",
                                        textOverflow: "ellepsis"
                                    }
                                }
                            }
                        />
                        <CardActionArea
                            className={classes.media}
                            onClick={e => props.onClick(props.movie)}
                        >
                            <CardMedia
                                component="img"
                                image={props.movie.thumbnailUri}
                            />
                            <span className={classes.duration}>{props.movie.duration}</span>
                            <span className={classes.publishedAt}>{props.movie.publishedAt}</span>
                            { /*
                     
                    <ReactPlayer
                        //width="100%"
                        //height={"calc(100% * 9/16) !important" as any}

                        url={props.movie.uri}
                        playing={false}
                        onStart={() => {

                        }}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                        }}
                    />

                     */ }
                        </CardActionArea>
                        <CardActions disableSpacing>
                            <IconButton>
                                <PlaylistAddIcon />
                            </IconButton>
                            <IconButton>
                                <CloudDownloadOutlinedIcon />
                            </IconButton>

                            <div className={classes.flexGrow} />

                            {createAvator(props.movie)}

                            <span className={classes.footer}>{`${createFotter(props.movie)}`}</span>
                        </CardActions>
                    </Card>

                </Paper>
            </Grow>
        </Grid>
    );
};

export default VideoTile;