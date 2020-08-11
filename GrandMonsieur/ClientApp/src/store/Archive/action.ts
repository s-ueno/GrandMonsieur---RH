import React from "react";
import { IArchive } from "./model";
import { IActionBase } from "../rootModel";



export const UPDATE_ARCHIVE_PROCESSING = "UPDATE_ARCHIVE_PROCESSING";
interface IAccountType extends IArchive, IActionBase { }
export function UpdateArchiveProcessing(
    processing: number): IAccountType {
    return {
        type: UPDATE_ARCHIVE_PROCESSING,
        processing: processing,
    };
}
