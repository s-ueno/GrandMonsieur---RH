import React from "react";

export interface IOverlay {
    /** サイト全体にwaiting overlayをかける */
    openWaitingSite: boolean;
    /** タイトルバー、サイドバーをのぞいた
     * メインコンテンツにwaiting overlayをかける */
    openWaitingContent: boolean;
}


export const initialOverlay: IOverlay = {
    openWaitingSite: false,
    openWaitingContent: false
};
