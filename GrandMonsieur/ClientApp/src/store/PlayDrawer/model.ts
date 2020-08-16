import React from "react";
import { IMovie } from "../Movie/model";


export interface IPlayDrawer {
    display: "showPlayer" | "miniPlayer" | "hidden" | undefined;
    movie?: IMovie;
}

export const initialPlayDrawer: IPlayDrawer = {
    display: undefined,
    movie: undefined,
}

