import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    makeStyles,
    CircularProgress,
    Typography,
    Grid,
    Hidden,
    LinearProgress,
    Slider
} from '@material-ui/core';
import { IRootState } from "../../store/rootModel";
import ReactPlayer from "react-player";
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import LinearProgressWithLabel from "../../components/Progress";
import Volume from "../../components/Volume";
import { IMovie } from "../../store/Movie/model";


/** css in js(ts)  */
import clsx from "clsx";
import style from "./style";

const cssInCode = makeStyles(style);


const Player: React.FC = () => {
    const classes = cssInCode();
    const overlay = useSelector((x: IRootState) => x.overlay);
    const playDrawer = useSelector((x: IRootState) => x.playDrawer);

    const [volume, setVolume] = useState(50);
    function onVolumeChange(e, newValue?: number | number[]) {
        setVolume(newValue as number);
    }
    function onMuteToggle(mute : boolean) {



    }

    function viewsCountAndAt(movie: IMovie) {
        return `${movie?.publishedAt}  ${movie?.viewCount} views`;
    }

    return (
        <div>
            <Grid container>
                <Grid item xs={8}>
                    <div className={classes.playerContainer}>
                        <ReactPlayer
                            className={classes.player}
                            width="100%"
                            height="100%"
                            url={playDrawer.movie?.uri}
                            playing={true}
                        />
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className={classes.adsense}>
                        adsense
                    </div>
                    <div className={classes.controls}>
                        <div>
                        </div>
                        <div >
                        </div>
                    </div>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={8}>
                    <LinearProgressWithLabel
                        className={classes.liner}
                        variant="buffer"
                        value={20}
                        valueBuffer={35}
                        text="14:42:12 / 14:49:52"
                    />
                </Grid>
                <Grid item xs={4}>
                    <Grid container className={classes.vertiacalCenter}>
                        <Grid item xs={6} className={classes.viewCount}>
                            <Typography variant="body2" color="textSecondary">
                                {`${playDrawer.movie?.viewCount ?? "-"} views ${playDrawer.movie?.publishedAt ?? ""}`}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Volume
                                value={volume}
                                onChange={onVolumeChange}
                                onMuteClick={onMuteToggle}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Player;