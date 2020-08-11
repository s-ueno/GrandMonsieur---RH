import React from "react";
import { IActionBase } from "../rootModel";

export const WAITING_OVERLAY_SITE = "WAITING_OVERLAY_SITE";
export const WAITING_OVERLAY_CONTENT = "WAITING_OVERLAY_CONTENT";

export function WaitSite(open: boolean): IWaitSiteType {
    return { type: WAITING_OVERLAY_SITE, openWaitingSite: open };
}
interface IWaitSiteType extends IActionBase {
    openWaitingSite: boolean
};

export function WaitContent(open: boolean): IWaitContentType {
    return { type: WAITING_OVERLAY_CONTENT, openWaitingContent: open };
}
interface IWaitContentType extends IActionBase {
    openWaitingContent: boolean
};
