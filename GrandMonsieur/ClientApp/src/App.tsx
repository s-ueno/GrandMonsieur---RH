import React, { Dispatch, useState } from 'react';
import { Route } from 'react-router';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ThemeProvider } from '@material-ui/styles';
import useAsyncEffect from "use-async-effect";
// オーバレイ
import Backdrop from '@material-ui/core/Backdrop';
import { useSelector, useDispatch } from "react-redux";
import Layout from './views/Layout';
import AppRoute from './AppRoute';
import { IRootState } from './store/rootModel';
import { SnackbarProvider } from 'notistack';
import { UpdateAccount } from './store/Account/action';
import { WaitSite } from './store/Overlay/action';


import {
    makeStyles,
    CircularProgress,
    createMuiTheme,
    CssBaseline
} from "@material-ui/core";
import { Delay } from './global';


/** css in js(ts)  */
const cssInCode = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));
const App: React.FC = () => {
    const css = cssInCode();
    const dispatch: Dispatch<any> = useDispatch();
    const overlay = useSelector((x: IRootState) => x.overlay);
    const customTheme = useSelector((x: IRootState) => x.customTheme);
    const customPallete = useSelector((x: IRootState) => x.customPalette);
    const account = useSelector((x: IRootState) => x.account);
    const overrideTheme = createMuiTheme({
        palette: {
            type: customTheme.mode,
            primary: customPallete.primary,
            secondary: customPallete.secondary,
            background: customPallete.background ?? (customTheme.mode === "dark" ?
                { default: "#303030", paper: "#424242" } : { default: "#fafafa", paper: "#fff" }
            )
        },

        overrides: {
            MuiAppBar: {
                root: {
                    backgroundColor: customPallete.appBar
                },
                colorDefault: {
                    backgroundColor: customPallete.appBar
                },
                colorPrimary: {
                    backgroundColor: customPallete.appBar
                }
            },
        }
    });

    // 副作用関数で初期化を実施    
    useAsyncEffect(
        async () => {
            dispatch(WaitSite(true));

            await Delay(3 * 1000);

            dispatch(UpdateAccount(false));

            dispatch(WaitSite(false));
        },
        () => {
        },
        []);

    return (
        <ThemeProvider theme={overrideTheme}>
            {/* material-ui の CSS適用宣言 */}
            <CssBaseline />
            <SnackbarProvider maxSnack={5}>
                <div id="wrapper">
                    <Layout>
                        <AppRoute />
                    </Layout>
                </div>
                <Backdrop className={css.backdrop} open={overlay.openWaitingSite} >
                    <CircularProgress color="inherit" />
                </Backdrop>
            </SnackbarProvider>
        </ThemeProvider>
    );
}
export default App;
