import React from "react";


export interface IMovieCollection {
    items: IMovie[];
}
export interface IMovie {
    provider?: "Youtube" | "Dailymotion" | "Niconico" | "Bilibili";
    id?: string;
    title?: string;
    uri?: string;
    embededUri?: string;
    thumbnailUri?: string;
    duration?: string;
    createUser?: string;
    createUserIcon?: string;
    viewCount?: string;
    publishedAt?: string;
}


//export const initialMovieCollection: IMovieCollection = {
//    items: [];
//}



export const initialMovieCollection: IMovieCollection = {
    items: [
        {
            provider: "Youtube",
            id: "x3wgouw",
            title: "☆第2回☆ 平成&令和 アニメ名言(名シーン)ランキングTOP100 (Part02) 【リメイク版】12345678901234567890",
            uri: "https://www.dailymotion.com/video/x3wgouw",
            embededUri: "https://www.dailymotion.com/embed/video/x3wgouw",
            thumbnailUri: "https://s1.dmcdn.net/v/E3-tO1VC9a7lamMnq",
            duration: "06:29",
            createUser: "Buel Guido",
            viewCount: "319,130",
            publishedAt: "2020/07/08",
        },
        {
            provider: "Youtube",
            id: "x3wgouw",
            title: "野鳥2",
            uri: "https://www.dailymotion.com/video/x3wgouw",
            embededUri: "https://www.dailymotion.com/embed/video/x3wgouw",
            thumbnailUri: "https://s1.dmcdn.net/v/E3-tO1VC9a7lamMnq",
            duration: "06:29",
            createUser: "Buel Guido",
            viewCount: "0",
            publishedAt: null,
        },
        {
            provider: "Youtube",
            id: "x3wgouw",
            title: "野鳥3",
            uri: "https://www.dailymotion.com/video/x3wgouw",
            embededUri: "https://www.dailymotion.com/embed/video/x3wgouw",
            thumbnailUri: "https://s1.dmcdn.net/v/E3-tO1VC9a7lamMnq",
            duration: "06:29",
            createUser: "Buel Guido",
            viewCount: "0",
            publishedAt: null,
        },
        {
            provider: "Youtube",
            id: "x3wgouw",
            title: "野鳥4",
            uri: "https://www.dailymotion.com/video/x3wgouw",
            embededUri: "https://www.dailymotion.com/embed/video/x3wgouw",
            thumbnailUri: "https://s1.dmcdn.net/v/E3-tO1VC9a7lamMnq",
            duration: "06:29",
            createUser: "Buel Guido",
            viewCount: "0",
            publishedAt: null,
        },
        {
            provider: "Youtube",
            id: "x3wgouw",
            title: "野鳥5",
            uri: "https://www.dailymotion.com/video/x3wgouw",
            embededUri: "https://www.dailymotion.com/embed/video/x3wgouw",
            thumbnailUri: "https://s1.dmcdn.net/v/E3-tO1VC9a7lamMnq",
            duration: "06:29",
            createUser: "Buel Guido",
            viewCount: "0",
            publishedAt: null,
        },
        {
            provider: "Youtube",
            id: "x3wgouw",
            title: "野鳥6",
            uri: "https://www.dailymotion.com/video/x3wgouw",
            embededUri: "https://www.dailymotion.com/embed/video/x3wgouw",
            thumbnailUri: "https://s1.dmcdn.net/v/E3-tO1VC9a7lamMnq",
            duration: "06:29",
            createUser: "Buel Guido",
            viewCount: "0",
            publishedAt: null,
        },
        {
            provider: "Youtube",
            id: "x3wgouw",
            title: "野鳥7",
            uri: "https://www.dailymotion.com/video/x3wgouw",
            embededUri: "https://www.dailymotion.com/embed/video/x3wgouw",
            thumbnailUri: "https://s1.dmcdn.net/v/E3-tO1VC9a7lamMnq",
            duration: "06:29",
            createUser: "Buel Guido",
            viewCount: "0",
            publishedAt: null,
        },
        {
            provider: "Youtube",
            id: "x3wgouw",
            title: "野鳥8",
            uri: "https://www.dailymotion.com/video/x3wgouw",
            embededUri: "https://www.dailymotion.com/embed/video/x3wgouw",
            thumbnailUri: "https://s1.dmcdn.net/v/E3-tO1VC9a7lamMnq",
            duration: "06:29",
            createUser: "Buel Guido",
            viewCount: "0",
            publishedAt: null,
        },
        {
            provider: "Youtube",
            id: "x3wgouw",
            title: "野鳥9",
            uri: "https://www.dailymotion.com/video/x3wgouw",
            embededUri: "https://www.dailymotion.com/embed/video/x3wgouw",
            thumbnailUri: "https://s1.dmcdn.net/v/E3-tO1VC9a7lamMnq",
            duration: "06:29",
            createUser: "Buel Guido",
            viewCount: "0",
            publishedAt: null,
        },
        {
            provider: "Youtube",
            id: "x3wgouw",
            title: "野鳥10",
            uri: "https://www.dailymotion.com/video/x3wgouw",
            embededUri: "https://www.dailymotion.com/embed/video/x3wgouw",
            thumbnailUri: "https://s1.dmcdn.net/v/E3-tO1VC9a7lamMnq",
            duration: "06:29",
            createUser: "Buel Guido",
            viewCount: "0",
            publishedAt: null,
        },
        {
            provider: "Youtube",
            id: "x3wgouw",
            title: "野鳥11",
            uri: "https://www.dailymotion.com/video/x3wgouw",
            embededUri: "https://www.dailymotion.com/embed/video/x3wgouw",
            thumbnailUri: "https://s1.dmcdn.net/v/E3-tO1VC9a7lamMnq",
            duration: "06:29",
            createUser: "Buel Guido",
            viewCount: "0",
            publishedAt: null,
        },
        {
            provider: "Youtube",
            id: "x3wgouw",
            title: "野鳥12",
            uri: "https://www.dailymotion.com/video/x3wgouw",
            embededUri: "https://www.dailymotion.com/embed/video/x3wgouw",
            thumbnailUri: "https://s1.dmcdn.net/v/E3-tO1VC9a7lamMnq",
            duration: "06:29",
            createUser: "Buel Guido",
            viewCount: "0",
            publishedAt: null,
        },
        {
            provider: "Youtube",
            id: "x3wgouw",
            title: "野鳥13",
            uri: "https://www.dailymotion.com/video/x3wgouw",
            embededUri: "https://www.dailymotion.com/embed/video/x3wgouw",
            thumbnailUri: "https://s1.dmcdn.net/v/E3-tO1VC9a7lamMnq",
            duration: "06:29",
            createUser: "Buel Guido",
            viewCount: "0",
            publishedAt: null,
        },
        {
            provider: "Youtube",
            id: "x3wgouw",
            title: "野鳥14",
            uri: "https://www.dailymotion.com/video/x3wgouw",
            embededUri: "https://www.dailymotion.com/embed/video/x3wgouw",
            thumbnailUri: "https://s1.dmcdn.net/v/E3-tO1VC9a7lamMnq",
            duration: "06:29",
            createUser: "Buel Guido",
            viewCount: "0",
            publishedAt: null,
        },
    ]
}

