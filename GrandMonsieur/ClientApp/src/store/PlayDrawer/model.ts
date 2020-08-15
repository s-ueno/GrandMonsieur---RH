import React from "react";


export interface IPlayDrawer {
    display: "showPlayer" | "miniPlayer" | "hidden" | undefined;
    uri?: string;
}

export const initialPlayDrawer: IPlayDrawer = {
    display: undefined,
    uri: "",
}

