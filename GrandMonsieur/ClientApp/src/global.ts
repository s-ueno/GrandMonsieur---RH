import * as React from 'react'
import { IRootState } from './store/rootModel';

/** サイドバーが開いた際のサイズ */
export const drawerWidth = 280;
/** サイドバーが閉じた際のサイズ */
export const drawerMinWidth = 56;
/** タイトルバーの高さ */
export const appbarHeight = 60;


export const materialUiLogo = "M375 476.3l225-129.9V173.2l-75 43.3v86.6l-150 86.6zm150-346.4V43.3L600 0v86.6z";

declare module 'react' {
    type FCX<P = {}> = FunctionComponent<P & { className?: string }>
}
declare module 'react-redux' {
    interface DefaultRootState extends IRootState { }
}

export function Delay(msec: number, lazyAction?: Function) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (lazyAction) {
                try {
                    lazyAction()
                } catch (e) {
                    reject(e);
                }
            }
            setTimeout(() => resolve(), msec);
        }, 1);
    });
}

var setTimeoutHandle: { [key: string]: any } = {};
export function Lazy(action: Function, msec: number) {
    const key = action.toString();
    clearTimeout(setTimeoutHandle[key]);
    return new Promise((resolve, reject) => {
        setTimeoutHandle[key] = setTimeout(() => {
            resolve(action());
        }, msec);
    });
}
