import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    makeStyles,
    CircularProgress,
    Typography,
    Grid,
    Hidden,
    LinearProgress,
    Slider,

    Button,
    SvgIcon
} from '@material-ui/core';
import { IRootState } from "../../store/rootModel";
import ReactPlayer from "react-player";
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';

/** 10/30秒戻る  */
import Replay10Icon from '@material-ui/icons/Replay10';
import Replay30Icon from '@material-ui/icons/Replay30';

/** 10/30秒進む  */
import Forward10Icon from '@material-ui/icons/Forward10';
import Forward30Icon from '@material-ui/icons/Forward30';
/** 前の動画 */
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
/** 次の動画 */
import SkipNextIcon from '@material-ui/icons/SkipNext';
/** 再生 */
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
/** 一時停止 */
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
/** 1動画リピート */
import RepeatOneIcon from '@material-ui/icons/RepeatOne';
/** リスト動画リピート */
import RepeatIcon from '@material-ui/icons/Repeat';

import {
    mdiSpeedometerSlow,
    mdiSpeedometer
} from '@mdi/js';

import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import CloudDownloadOutlinedIcon from '@material-ui/icons/CloudDownloadOutlined';

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
    const drawer = useSelector((x: IRootState) => x.drawer);

    const [volume, setVolume] = useState(50);
    function onVolumeChange(e, newValue?: number | number[]) {
        setVolume(newValue as number);
    }
    function onMuteToggle(mute: boolean) {



    }

    function viewsCountAndAt(movie: IMovie) {
        return `${movie?.publishedAt}  ${movie?.viewCount} views`;
    }
    const [playerGridRetio, setPlayerGridRetio] = useState({
        player: 8 as any,
        adsense: 4 as any,
    });

    //useEffect(() => {
    //    if (drawer.open) {
    //        setPlayerGridRetio({ player: 8, adsense: 4 })
    //    } else {
    //        //setPlayerGridRetio({ player: 7, adsense: 5 })
    //    }
    //}, [drawer.open]);
    return (
        <div className={clsx(classes.root, !drawer.open && classes.rootDrawerClose)}>
            <Grid container className={classes.playerGrid}>
                <Grid item xs={playerGridRetio.player}>
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


                <Grid item xs={playerGridRetio.adsense}>
                    <div className={classes.adsense}>
                        adsense
                    </div>
                    <Hidden lgUp implementation="css">
                        <div className={classes.topControls}>
                            <Button>
                                <PlaylistAddIcon
                                    className={classes.topIcon}
                                />
                            </Button>
                            <Button>
                                <CloudDownloadOutlinedIcon
                                    className={classes.topIcon}
                                />
                            </Button>
                        </div>
                        <div className={classes.middleControl}>
                            <Button>
                                <Replay30Icon
                                    className={classes.middleIcon}
                                />
                            </Button>

                            <Button>
                                <Replay10Icon
                                    className={classes.middleIcon}
                                />
                            </Button>

                            <Button>
                                <Forward10Icon
                                    className={classes.middleIcon}
                                />
                            </Button>
                            <Button>
                                <Forward30Icon
                                    className={classes.middleIcon}
                                />
                            </Button>
                        </div>
                        <div className={classes.bottomControls}>
                            <Button>
                                <SvgIcon className={classes.middleIcon}>
                                    <path d={mdiSpeedometerSlow} />
                                </SvgIcon>
                            </Button>
                            <Button>
                                <SvgIcon className={classes.middleIcon}>
                                    <path d={mdiSpeedometer} />
                                </SvgIcon>
                            </Button>
                        </div>
                    </Hidden>

                    <Hidden mdDown implementation="css">
                        <div className={classes.description}>
                            <div className={classes.topControls}>
                                <Button>
                                    <PlaylistAddIcon
                                        className={classes.topIcon}
                                    />
                                </Button>
                                <Button>
                                    <CloudDownloadOutlinedIcon
                                        className={classes.topIcon}
                                    />
                                </Button>
                            </div>
                        </div>
                    </Hidden>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={playerGridRetio.player} className={classes.linerContainer}>
                    <LinearProgressWithLabel
                        className={classes.liner}
                        variant="buffer"
                        value={20}
                        valueBuffer={35}
                        text="14:42:12 / 14:49:52"
                    />
                </Grid>
                <Grid item xs={playerGridRetio.adsense}>

                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={playerGridRetio.player} >
                    <div>
                        <Button className={classes.bottomIcon}>
                            <PlayArrowIcon

                            />
                        </Button>
                        <Button className={classes.bottomIcon}>
                            <SkipNextIcon

                            />
                        </Button>
                        <div className={classes.volume}>
                            <Volume
                                value={volume}
                                onChange={onVolumeChange}
                                onMuteClick={onMuteToggle}
                            />
                        </div>
                    </div>
                    <div className={classes.zoomContainer}>

                        <Hidden mdDown implementation="css">
                            <Button
                                className={classes.bottomIcon}
                            >
                                <Replay30Icon
                                />
                            </Button>

                            <Button
                                className={classes.bottomIcon}
                            >
                                <Replay10Icon
                                />
                            </Button>

                            <Button
                                className={classes.bottomIcon}
                            >
                                <Forward10Icon
                                />
                            </Button>
                            <Button
                                className={classes.bottomIcon}
                            >
                                <Forward30Icon
                                />
                            </Button>
                            <Button
                                className={classes.bottomIcon}
                            >
                                <SvgIcon >
                                    <path d={mdiSpeedometerSlow} />
                                </SvgIcon>
                            </Button>
                            <Button
                                className={classes.bottomIcon}
                            >
                                <SvgIcon >
                                    <path d={mdiSpeedometer} />
                                </SvgIcon>
                            </Button>
                        </Hidden>


                        <Button className={classes.bottomIcon}>
                            <RepeatOneIcon

                            />
                        </Button>
                        <Button className={classes.bottomIcon}>
                            <RepeatIcon

                            />
                        </Button>
                        <Button className={classes.bottomIcon}>
                            <ZoomOutMapIcon

                            />
                        </Button>

                    </div>
                </Grid>
                <Grid item xs={playerGridRetio.adsense} className={classes.viewCountContainer}>
                    { /*  */}
                    <Typography variant="body2" color="textSecondary" className={classes.viewCount}>
                        {`${playDrawer.movie?.viewCount ?? "-"} views`}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" className={classes.viewCount}>
                        {`published at. ${playDrawer.movie?.publishedAt ?? ""}`}
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default Player;