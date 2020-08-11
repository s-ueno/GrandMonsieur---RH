import React from "react";

import swallow1 from '../../assets/swallow1.png';

export interface IAccount {
    auth: boolean;
    photo?: string;
    mailAddress?: string;
    displayName: string;
}

export const initialAccount: IAccount = {
    auth: false,
    photo: swallow1,
    mailAddress: null,
    displayName: "John Doe (Guest)",
}
