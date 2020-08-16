import React, { useState, createRef, memo, Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import useAsyncEffect from "use-async-effect";

import {
    Grid,
    makeStyles,
    CircularProgress,
    Card,
    CardHeader,
    CardActionArea,
    CardMedia,
    CardContent,
    Drawer,
    Snackbar,
    Slide,
    Button,
    List,
    ListItem,
    GridList,
    GridListTile,
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
import { IMovie, IMovieCollection } from "../../store/Movie/model";
import Player from "../Player";
import VideoTile from "../../components/Tile/index";
import { useWindowSize } from "../../core/windowExtension";

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

type GridListTileFreezeProps = {
    movie: IMovie;
    classes: any;
    index: any;
}

const GridListTileFreeze = memo<GridListTileFreezeProps>(props => {
    const classes = props.classes;
    return (
        <Grid item xs={12} sm={6} md={6} lg={3}
            style={{
                padding: 5,
                transitionDuration: "0.3s",
            }}>
            <VideoTile
                movie={props.movie}
                delay={props.index}
                key={`tile-${uuidv4()}`}
                //onClick={props.onClick}
                onClick={() => { }}
            />
        </Grid>
    );
});
type GridListTilesProps = {
    movieCollection: IMovieCollection,
    classes: any;
}
const GridListTiles = memo<GridListTilesProps>(props => {
    return (
        <Fragment>
            {props.movieCollection.items.map((x, index) => (
                <GridListTileFreeze
                    movie={x}
                    index={index}
                    classes={props.classes} />
            ))}
        </Fragment>
    );
});

const PlayDrawer: React.FCX = () => {
    const classes = cssInCode();
    const drawer = useSelector((x: IRootState) => x.drawer);
    const playDrawer = useSelector((x: IRootState) => x.playDrawer);
    const movies = useSelector((x: IRootState) => x.movies);
    const dispatch = useDispatch();
    const player = createRef();
    const cardRef = createRef<HTMLElement>();
    //const windowSize = useWindowSize();
    function onClose(e) {

        dispatch(UpdatePlayDrawer("hidden"));
    }

    const [cardRefHeight, setCardRefHeight] = useState(0);
    useEffect(() => {
        console.log("★");
        setCardRefHeight(cardRef.current?.clientHeight);
    }, [cardRef /*, windowSize.height, windowSize.width */ ]);

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
                className={clsx(classes.mainContaint, !drawer.open && classes.mainContaint4DrawerMinWidth)}
            >

                <Card
                    ref={cardRef}
                >
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

                <div
                    className={classes.gridList}
                    style={{
                        height: `calc(100% - ${cardRefHeight}px)`
                    }}
                >
                    <Grid container

                    >
                        <GridListTiles
                            movieCollection={movies}
                            classes={classes} />
                    </Grid>
                </div>

            </div>
        </Snackbar>

    );
};

export default PlayDrawer;