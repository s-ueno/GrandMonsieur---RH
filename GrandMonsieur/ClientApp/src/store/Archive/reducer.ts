import React from "react";
import { IArchive, initialArchive } from "./model";
import { IActionBase } from "../rootModel";
import { UPDATE_ARCHIVE_PROCESSING } from "./action";

export function archiveReducer(
    state: IArchive = initialArchive,
    action: IActionBase): IArchive {

    switch (action.type) {
        case UPDATE_ARCHIVE_PROCESSING:
            return {
                ...state,
                processing: action.processing,
            };
        default:
            return state;
    }
}
