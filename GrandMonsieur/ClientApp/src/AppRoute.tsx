import React, { Fragment } from 'react';
import { Route }   from 'react-router';
import { useSelector } from 'react-redux';
import { IRootState } from './store/rootModel';
import Home from './views/Home/index';
import Favorite from './views/Favorite/index';
import IdLink from './views/IdLink/index';
import Settings from './views/Settings/index';

import {
    makeStyles,
    CircularProgress,
    Backdrop,
} from "@material-ui/core";
import Archive from './views/Archive';



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
            <Route exact path='/'>
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

            <Backdrop className={css.backdrop} open={overlay.openWaitingContent} >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
};

export default AppRoute;