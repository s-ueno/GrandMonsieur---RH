import React, { Dispatch, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from '@material-ui/styles';
import useAsyncEffect from "use-async-effect";

import {
    CssBaseline,
    makeStyles,
    CircularProgress,
    Toolbar,
    Grid,
    Avatar,
    SvgIcon,
    AppBar,
    Tabs,
    Tab,
    Box,
    Typography,
    Divider,
    Card,
    CardHeader,
    CardContent,
    Drawer,
    createMuiTheme,
    IconButton,

    Paper,
    Button
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {
    mdiThemeLightDark,
    mdiLinkVariantPlus,
} from '@mdi/js';
import Backdrop from '@material-ui/core/Backdrop';
import { IRootState } from "../../store/rootModel";
import { Skeleton } from "@material-ui/lab";
import CheckBox from "../../components/CheckBox";
import { ToggleTheme, UpdatePalette } from "../../store/Theme/action";
import Checkbox from "../../components/CheckBox"
import { IPalette, initialPalette, ThemeMode } from "../../store/Theme/model";
import { v4 as uuidv4 } from 'uuid';
import { WaitContent, WaitSite } from "../../store/Overlay/action";
import { Delay } from "../../global";

/** カスタムテーマ */
import { livingCoral } from "./pallete/livingCoral";
import { ultraViolet } from "./pallete/ultraViolet";
import { turquoise } from "./pallete/turquoise";
import { blackWhite } from "./pallete/blackWhite";
import { blueOrange } from "./pallete/blueOrange";
import { sailorBlue } from "./pallete/sailorBlue";
import { cherryTomato } from "./pallete/cherryTomato";
import { grayLimePunch } from "./pallete/grayLimePunch";
import { forestGreen } from "./pallete/forestGreen";
import { royalBlue } from "./pallete/royalBlue";
import { electricBlue } from "./pallete/electricBlue";
import { creamGold } from "./pallete/creamGold";
import { blackBlazingYellow } from "./pallete/blackBlazingYellow";
import { paleGreen } from "./pallete/paleGreen";
import { skyBlue } from "./pallete/skyBlue";
import { copperCoin } from "./pallete/copperCoin";
import { duskyCitron } from "./pallete/duskyCitron";
import { blackOrange } from "./pallete/blackOrange";
import { brownSugar } from "./pallete/brownSugar";
import { turkishSea } from "./pallete/turkishSea";
import { royalPurple } from "./pallete/royalPurple";
import { islandGreen } from "./pallete/islandGreen";
import { pinkSalt } from "./pallete/pinkSalt";
import { blackCherryTomato } from "./pallete/blackCherryTomato";
import { mangoMojito } from "./pallete/mangoMojito";
import { spaceCherry } from "./pallete/spaceCherry";
import { hunterGreen } from "./pallete/hunterGreen";
import { purpleSapphire } from "./pallete/purpleSapphire";
import { pinkNavyBlue } from "./pallete/pinkNavyBlue";
import { brightRed } from "./pallete/brightRed";
import { sweetCorn } from "./pallete/sweetCorn";
import { darkGreen } from "./pallete/darkGreen";
import { orangeWhite } from "./pallete/orangeWhite";
import { aspenGold } from "./pallete/aspenGold";
import { soybean } from "./pallete/soybean";


/** css in js(ts)  */
import clsx from "clsx";
import style from "./style";
const cssInCode = makeStyles(style);

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}
function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && (
                <div>
                    {children}
                </div>
            )}
        </div>
    );
}
function a11yProps(index: any) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

// https://material.io/design/color/applying-color-to-ui.html#top-and-bottom-app-bars
interface PalleteProps {
    Title: string;
    Palette: IPalette;
    Mode?: ThemeMode,
}



const Settings: React.FC = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const classes = cssInCode();
    const overlay = useSelector((x: IRootState) => x.overlay);
    const account = useSelector((state: IRootState) => state.account);
    const theme = useSelector((state: IRootState) => state.customTheme);
    const palette = useSelector((state: IRootState) => state.customPalette);

    const [value, setValue] = useState(0);
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    function onChangeTheme(e) {
        dispatch(ToggleTheme());
    }

    function onChangePallete(e: PalleteProps) {
        dispatch(UpdatePalette(e.Title, e.Palette.appBar, e.Palette.primary, e.Palette.secondary, e.Palette.background));
        if (e.Mode) {
            if (theme.mode !== e.Mode) {
                dispatch(ToggleTheme());
            }
        }
    }

    function PerformanceIsuue(props) {
        const { children, ...rest } = props;
        if (overlay.openWaitingContent) {
            return (
                <Skeleton>
                    <Grid item xs={12} sm={6} md={4} key={`gd-${uuidv4()}`}>
                    </Grid>
                </Skeleton>
            );
        }
        return children;
    }

    function MakePalletGrid(props: PalleteProps[]) {
        return props.map(x => {
            const demoTheme = createMuiTheme({
                palette: {
                    type: theme.mode,
                    primary: x.Palette.primary,
                    secondary: x.Palette.secondary,
                    background: x.Palette.background ?? (theme.mode === "dark" ?
                        { default: "#303030", paper: "#424242" } : { default: "#fafafa", paper: "#fff" }
                    )
                },

                overrides: {
                    MuiAppBar: {
                        root: {
                            backgroundColor: x.Palette.appBar
                        },
                        colorDefault: {
                            backgroundColor: x.Palette.appBar
                        },
                        colorPrimary: {
                            backgroundColor: x.Palette.appBar
                        }
                    },
                }
            });

            return (
                <Grid item xs={12} sm={6} md={4} key={`gd-${uuidv4()}`}>
                    <Card className={classes.demoCard}>
                        <CardHeader
                            title={x.Title}
                            action={
                                <Checkbox
                                    checked={x.Title === palette.title}
                                    position="end"
                                    label="apply"
                                    onChange={e => onChangePallete(x)}
                                />
                            }
                        />
                        <CardContent>
                            { /* <PerformanceIsuue> */}
                            <ThemeProvider theme={demoTheme} key={`gd-${uuidv4()}`}>
                                <div className={classes.demoMain}
                                    style={{ backgroundColor: x.Palette.background?.default }}>
                                    <AppBar className={classes.demoAppBar}
                                        style={{ backgroundColor: x.Palette?.appBar }}
                                    >
                                        <Toolbar>
                                            <IconButton
                                                color="inherit"
                                                edge="start"
                                            >
                                                <MenuIcon />
                                            </IconButton>
                                        </Toolbar>

                                        <div className={classes.demoContent}>
                                            <CheckBox
                                                checked={true}
                                                color="primary"
                                                label="primary"
                                            />
                                            <CheckBox
                                                checked={true}
                                                color="secondary"
                                                label="secondary"
                                            />
                                        </div>
                                    </AppBar>
                                </div>
                            </ThemeProvider>
                            { /* </PerformanceIsuue> */}
                        </CardContent>
                    </Card>
                </Grid >
            );
        });
    }

    //// Skeltonを表示してパフォーマンス遅延をごまかそうとしたが、あんまり効果なかった
    //// dispatchコメント復帰すると、画面のグリッドレンダリング時にスケルトンと
    //// ローディング画面が表示されるけど、むしろストレスを感じた。
    //useAsyncEffect(
    //    async () => {
    //        //dispatch(WaitContent(true));

    //        // sleep
    //        const value = await new Promise((resolve, reject) => {
    //            setTimeout(() => {
    //                resolve(0);
    //            }, 3 * 1000);
    //        });
    //        //dispatch(WaitContent(false));
    //    },
    //    () => {
    //    },
    //    []);

    return (
        <div className={classes.root}>
            <div className={clsx(classes.logo, classes.bg)} />


            <div className={clsx(classes.gridPadding)} >
                <Grid container className={classes.gridsmAdjust}>
                    <Grid item className={clsx(classes.gridPadding)}>
                        {overlay.openWaitingSite ?
                            <Skeleton><Avatar className={classes.profileIcon} /></Skeleton> :
                            <Avatar src={account.photo} className={classes.profileIcon} />
                        }
                    </Grid>
                    <Grid item className={clsx(classes.gridPadding)}>
                        {overlay.openWaitingSite ?
                            <Skeleton><span className={classes.displayName} /></Skeleton> :
                            <span className={classes.displayName}>{account.displayName}</span>
                        }
                    </Grid>
                </Grid>
            </div>

            <div className={clsx(classes.gridPadding)}>
                <AppBar position="static" className={classes.appBar}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="on"
                        indicatorColor="primary"
                        textColor="primary"
                        aria-label="scrollable force tabs"
                    >
                        <Tab className={classes.tab} label="Color & Theme" icon={<SvgIcon><path d={mdiThemeLightDark} /></SvgIcon>} {...a11yProps(0)} />
                        <Tab className={classes.tab} label="Account Link" icon={<SvgIcon><path d={mdiLinkVariantPlus} /></SvgIcon>} {...a11yProps(1)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <div>
                        <Grid container>
                            <Grid item xs={12}>
                                <span className={classes.settingTitle}>
                                    Theme
                                </span>
                            </Grid>

                            <Grid item xs={12}>
                                <Typography>
                                    When you select dark mode, the background color changes to black. It is designed especially to prevent eye strain at night.
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <CheckBox
                                    label="Turn on dark mode"
                                    checked={theme.mode === "dark"}
                                    onChange={onChangeTheme}
                                />
                            </Grid>
                        </Grid>

                        <Divider className={classes.divider} />

                        <Grid container>
                            <Grid item xs={12}>
                                <span className={classes.settingTitle}>
                                    Colors
                                </span>
                            </Grid>
                            {MakePalletGrid([
                                { Title: "Default", Palette: initialPalette, Mode: "dark" },
                                { Title: "Dark Green", Palette: darkGreen, Mode: "dark" },
                                { Title: "Living Coral", Palette: livingCoral, Mode: "light" },
                                { Title: "Ultra Violet", Palette: ultraViolet, Mode: "light" },
                                { Title: "Turquoise", Palette: turquoise, Mode: "light" },
                                //{ Title: "Black White", Palette: blackWhite },
                                { Title: "Blue Orange", Palette: blueOrange, Mode: "light" },
                                //{ Title: "Sailor Blue and Mint", Palette: sailorBlue, Mode: "light" },
                                { Title: "Gray and Lime Punch", Palette: grayLimePunch, Mode: "dark" },
                                { Title: "Cherry Tomato", Palette: cherryTomato, Mode: "light" },
                                { Title: "Forest Green", Palette: forestGreen, Mode: "dark" },
                                { Title: "Royal Blue", Palette: royalBlue, Mode: "light" },
                                { Title: "Electric Blue Lemonade", Palette: electricBlue, Mode: "dark" },
                                { Title: "Cream Gold", Palette: creamGold, Mode: "light" },
                                //{ Title: "Black and Blazing Yellow", Palette: blackBlazingYellow },
                                { Title: "Pale Green", Palette: paleGreen, Mode: "dark" },
                                { Title: "Copper Coin", Palette: copperCoin, Mode: "dark" },
                                { Title: "Sky Blue", Palette: skyBlue, Mode: "light" },
                                { Title: "Dusky Citron", Palette: duskyCitron, Mode: "light" },
                                //{ Title: "Black and Orange", Palette: blackOrange },
                                { Title: "Brown Sugar", Palette: brownSugar, Mode: "light" },
                                { Title: "Turkish Sea", Palette: turkishSea, Mode: "dark" },
                                //{ Title: "Royal Purple", Palette: royalPurple },
                                { Title: "Island Green", Palette: islandGreen, Mode: "light" },
                                { Title: "Pink Salt", Palette: pinkSalt, Mode: "light" },
                                { Title: "Black and Cherry Tomato", Palette: blackCherryTomato, Mode: "dark" },
                                { Title: "Mango Mojito", Palette: mangoMojito, Mode: "dark" },
                                { Title: "Space Cherry", Palette: spaceCherry, Mode: "light" },
                                { Title: "Hunter Green", Palette: hunterGreen, Mode: "dark" },
                                { Title: "Purple Sapphire", Palette: purpleSapphire, Mode: "dark" },
                                { Title: "Pink and Navy Blue", Palette: pinkNavyBlue, Mode: "dark" },
                                { Title: "Bright Red", Palette: brightRed, Mode: "light" },
                                { Title: "Sweet Corn", Palette: sweetCorn, Mode: "light" },
                                { Title: "Orange and White", Palette: orangeWhite, Mode: "light" },
                                { Title: "Aspen Gold", Palette: aspenGold, Mode: "dark" },
                                { Title: "Soybean", Palette: soybean, Mode: "dark" },

                            ])}
                        </Grid>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    This feature has not been released yet
                </TabPanel>
            </div>
        </div>
    );
};

export default Settings;