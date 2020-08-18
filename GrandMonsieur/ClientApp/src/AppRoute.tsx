import React, { Fragment } from 'react';
import { Route } from 'react-router';
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { useSelector } from 'react-redux';
import { IRootState } from './store/rootModel';
import Home from './views/Home/index';
import Favorite from './views/Favorite/index';
import IdLink from './views/IdLink/index';
import Settings from './views/Settings/index';
import Archive from './views/Archive';
import NotFound from './views/NotFound';


import {
    makeStyles,
    CircularProgress,
    Backdrop,
} from "@material-ui/core";



/** css in js(ts)  */
const cssInCode = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));
const AppRoute: React.FC = () => {
    const css = cssInCode();
    const overlay = useSelector((x: IRootState) => x.overlay);

    return (
        <div>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path="/index">
                    <Home />
                </Route>
                <Route exact path='/favorite'>
                    <Favorite />
                </Route>
                <Route exact path='/archive'>
                    <Archive />
                </Route>
                <Route exact path='/idlink'>
                    <IdLink />
                </Route>
                <Route exact path='/settings'>
                    <Settings />
                </Route>
                { /* URL違う場合は基本的にhomeへ飛ばす */}
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>

            <Backdrop className={css.backdrop} open={overlay.openWaitingContent} >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
};

export default AppRoute;