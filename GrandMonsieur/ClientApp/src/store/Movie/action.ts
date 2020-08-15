import React from "react";
import { IMovieCollection,  IMovie } from "./model";
import { IActionBase } from "../rootModel";



export const UPDATE_MOVIE_COLLECTION = "UPDATE_MOVIE_COLLECTION";
interface IMovieProviderCollectionType extends IMovieCollection, IActionBase { }
export function UpdateArchiveProcessing(items: IMovie[]): IMovieProviderCollectionType {
    return {
        type: UPDATE_MOVIE_COLLECTION,
        items: items
    };
}
