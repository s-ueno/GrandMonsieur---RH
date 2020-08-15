import React from "react";
import { IMovieCollection,  IMovie, initialMovieCollection } from "./model";
import { IActionBase } from "../rootModel";
import { UPDATE_MOVIE_COLLECTION } from "./action";

export function movieReducer(
    state: IMovieCollection = initialMovieCollection,
    action: IActionBase): IMovieCollection {

    switch (action.type) {
        case UPDATE_MOVIE_COLLECTION:
            return {
                ...state,
                items: action.items,
            };
        default:
            return state;
    }
}
