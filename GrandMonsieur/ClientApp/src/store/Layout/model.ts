import React from "react";
//svcIcon
import { SvgIcon } from '@material-ui/core';
import {
    mdiHomeOutline,
} from '@mdi/js';

export interface ITitle {
    icon?: string;
    title?: string;
}

export const initialTitle: ITitle = {
    icon: mdiHomeOutline,
    title: "Home",
}

