import React from "react";
import { IOverlay, initialOverlay } from "./model";
import { IActionBase } from "../rootModel";
import { WAITING_OVERLAY_SITE, WAITING_OVERLAY_CONTENT} from "./action";






/**
 * WaitingOverlayを状態監視するReducer
 * @param state
 * @param action
 */
export function overlayReducer(
    state: IOverlay = initialOverlay,
    action: IActionBase): IOverlay {

    switch (action.type) {
        case WAITING_OVERLAY_SITE:
            return {
                ...state,
                openWaitingSite: action.openWaitingSite,
                openWaitingContent: state.openWaitingContent
            };
        case WAITING_OVERLAY_CONTENT:
            return {
                ...state,
                openWaitingSite: state.openWaitingSite,
                openWaitingContent: action.openWaitingContent
            };
        default:
            return state;
    }
}

