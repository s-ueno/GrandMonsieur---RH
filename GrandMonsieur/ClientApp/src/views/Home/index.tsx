import React, { Fragment, useState, useCallback, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import {
    CssBaseline,
    makeStyles,
    CircularProgress,
    Grid,
    GridList,
    GridListTile,
    ListSubheader,

    Dialog

} from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import { IRootState } from "../../store/rootModel";
import VideoTile from "../../components/Tile/index";
import Grow from '@material-ui/core/Grow';
import { IMovie, IMovieCollection } from "../../store/Movie/model";
import { UpdatePlayDrawer } from "../../store/PlayDrawer/action";


/** css in js(ts)  */
import clsx from "clsx";
import style from "./style";
const cssInCode = makeStyles(style);


type MemoProps = {
    x: IMovie,
    index: number,
    onClick: (x: IMovie) => void;
};

const PlayerShowFreeze = memo<MemoProps>(props => {
    return (
        <VideoTile
            movie={props.x}
            delay={props.index}
            key={`tile-${uuidv4()}`}
            onClick={props.onClick}
        />);
});

type PlayersMemoProps = {
    movies: IMovieCollection,
    onClick: (x: IMovie) => void;
};
const PlayersMemo = memo<PlayersMemoProps>(props => {
    return (
        <Fragment>
            {props.movies.items.map((x, index) => (
                <PlayerShowFreeze
                    key={`psf-${uuidv4()}`}
                    x={x}
                    index={index}
                    onClick={props.onClick}
                />
            ))}
        </Fragment>
    )
});

const Home: React.FC = () => {
    const classes = cssInCode();
    const overlay = useSelector((x: IRootState) => x.overlay);
    const movies = useSelector((x: IRootState) => x.movies);
    const playDrawer = useSelector((x: IRootState) => x.playDrawer);
    const dispatch = useDispatch();


    function onPlayerShow(movie: IMovie) {
        dispatch(UpdatePlayDrawer("showPlayer", movie));
    }
    const onPlayerShowCallback = useCallback((movie: IMovie) => {
        onPlayerShow(movie);
    }, []);


    return (
        <Grid container className={classes.root}>
            <PlayersMemo movies={movies} onClick={onPlayerShowCallback} />
        </Grid>
    );
};

export default Home;