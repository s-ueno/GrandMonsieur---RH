import React from 'react';
import { combineReducers, Reducer } from "redux";
import { connectRouter } from 'connected-react-router';
import history from '../history';

import { IRootState } from './rootModel';
import { overlayReducer } from './Overlay/reducer';
import { themeReducer, palleteReducer } from './Theme/reducer';
import { titleReducer } from './Layout/reducer';
import { drawerReducer } from './SideDrawer/reducer';
import { accontReducer } from './Account/reducer';
import { archiveReducer } from './Archive/reducer';
import { movieReducer } from './Movie/reducer';
import { playDrawerReducer } from './PlayDrawer/reducer';


/** 全てのReducer(※仮想DOMにバインドを登録する。メディエーターのようなもの) */
const rootReducers: Reducer<IRootState> = combineReducers({
    router: connectRouter(history),

    overlay: overlayReducer,
    customTheme: themeReducer,
    customPalette: palleteReducer,
    title: titleReducer,
    drawer: drawerReducer,
    account: accontReducer,
    archive: archiveReducer,
    movies: movieReducer,
    playDrawer: playDrawerReducer,
});

export default rootReducers;