import { Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/styles';

import {
    blackColor,
    whiteColor,
    grayColor,
    warningCardHeader,
    successCardHeader,
    dangerCardHeader,
    infoCardHeader,
    primaryCardHeader,
    roseCardHeader,
    hexToRgb
} from "../../assets/material-dashboard-react";

export const cardStyle = (theme: Theme) => ({
    card: {
        border: "0",
        marginBottom: "30px",
        marginTop: "30px",
        borderRadius: "6px",
        background: theme.palette.background.paper,
        //color: "rgba(" + hexToRgb(blackColor) + ", 0.87)",
        color: theme.palette.text.secondary,
        width: "100%",
        boxShadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)",
        position: "relative" as any,
        display: "flex",
        flexDirection: "column" as any,
        minWidth: "0",
        wordWrap: "break-word" as any,
        fontSize: ".875rem"
    },
    cardPlain: {
        background: "transparent",
        boxShadow: "none"
    },
    cardProfile: {
        marginTop: "30px",
        textAlign: "center" as any
    },
    cardChart: {
        "& p": {
            marginTop: "0px",
            paddingTop: "0px"
        }
    }
});

export const cardAvatarStyle = (theme) => ({
    cardAvatar: {
        "&$cardAvatarProfile img": {
            width: "100%",
            height: "auto"
        }
    },
    cardAvatarProfile: {
        maxWidth: "130px",
        maxHeight: "130px",
        margin: "-50px auto 0",
        borderRadius: "50%",
        overflow: "hidden",
        padding: "0",
        boxShadow:
            "0 16px 38px -12px rgba(" +
            hexToRgb(blackColor) +
            ", 0.56), 0 4px 25px 0px rgba(" +
            hexToRgb(blackColor) +
            ", 0.12), 0 8px 10px -5px rgba(" +
            hexToRgb(blackColor) +
            ", 0.2)",
        "&$cardAvatarPlain": {
            marginTop: "0"
        }
    },
    cardAvatarPlain: {}
});

export const cardBodyStyle = (theme) => ({
    cardBody: {
        padding: "0.9375rem 20px",
        flex: "1 1 auto",
        WebkitBoxFlex: "1" as any,
        position: "relative" as any
    },
    cardBodyPlain: {
        paddingLeft: "5px",
        paddingRight: "5px"
    },
    cardBodyProfile: {
        marginTop: "15px"
    }
});

export const cardFooterStyle = (theme) => ({
    cardFooter: {
        padding: "0",
        paddingTop: "10px",
        margin: "0 15px 10px",
        borderRadius: "0",
        justifyContent: "space-between",
        alignItems: "center",
        display: "flex",
        backgroundColor: "transparent",
        border: "0",
        color: theme.palette.text.secondary
    },
    cardFooterProfile: {
        marginTop: "-15px"
    },
    cardFooterPlain: {
        paddingLeft: "5px",
        paddingRight: "5px",
        backgroundColor: "transparent"
    },
    cardFooterStats: {
        borderTop: "1px solid " + grayColor[10],
        marginTop: "20px",
        "& svg": {
            position: "relative",
            top: "4px",
            marginRight: "3px",
            marginLeft: "3px",
            width: "16px",
            height: "16px"
        },
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
            fontSize: "16px",
            position: "relative",
            top: "4px",
            marginRight: "3px",
            marginLeft: "3px"
        }
    },
    cardFooterChart: {
        borderTop: "1px solid " + grayColor[10]
    }
});

export const cardHeaderStyle = (theme) => ({
    cardHeader: {
        padding: "0.75rem 1.25rem",
        marginBottom: "0",
        borderBottom: "none",
        background: "transparent",
        zIndex: "3 !important" as any,

        "&$cardHeaderPlain,&$cardHeaderIcon,&$cardHeaderStats,&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
            margin: "0 15px",
            padding: "0",
            position: "relative",
            //color: theme.palette.text.primary
        },
        "&:first-child": {
            borderRadius: "calc(.25rem - 1px) calc(.25rem - 1px) 0 0"
        },
        "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
            "&:not($cardHeaderIcon)": {
                borderRadius: "3px",
                marginTop: "-20px",
                padding: "15px"
            }
        },
        "&$cardHeaderStats svg": {
            fontSize: "36px",
            lineHeight: "56px",
            textAlign: "center",
            width: "36px",
            height: "36px",
            margin: "10px 10px 4px"
        },
        "&$cardHeaderStats i,&$cardHeaderStats .material-icons": {
            fontSize: "36px",
            lineHeight: "56px",
            width: "56px",
            height: "56px",
            textAlign: "center",
            overflow: "unset",
            marginBottom: "1px"
        },
        "&$cardHeaderStats$cardHeaderIcon": {
            textAlign: "right"
        }
    },
    cardHeaderPlain: {
        marginLeft: "0px !important",
        marginRight: "0px !important"
    },
    cardHeaderStats: {
        "& $cardHeaderIcon": {
            textAlign: "right"
        },
        "& h1,& h2,& h3,& h4,& h5,& h6": {
            margin: "0 !important"
        }
    },
    cardHeaderIcon: {
        "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
            background: "transparent",
            boxShadow: "none"
        },
        "& i,& .material-icons": {
            width: "33px",
            height: "33px",
            textAlign: "center",
            lineHeight: "33px"
        },
        "& svg": {
            width: "24px",
            height: "24px",
            textAlign: "center",
            lineHeight: "33px",
            margin: "5px 4px 0px"
        }
    },
    warningCardHeader: {
        color: whiteColor,
        "&:not($cardHeaderIcon)": {
            ...warningCardHeader
        }
    },
    successCardHeader: {
        color: whiteColor,
        "&:not($cardHeaderIcon)": {
            ...successCardHeader
        }
    },
    dangerCardHeader: {
        color: whiteColor,
        "&:not($cardHeaderIcon)": {
            ...dangerCardHeader
        }
    },
    infoCardHeader: {
        color: whiteColor,
        "&:not($cardHeaderIcon)": {
            ...infoCardHeader
        }
    },
    primaryCardHeader: {
        color: whiteColor,
        "&:not($cardHeaderIcon)": {
            ...primaryCardHeader
        }
    },
    roseCardHeader: {
        color: whiteColor,
        "&:not($cardHeaderIcon)": {
            ...roseCardHeader
        }
    }
});


export const cardIconStyle = (theme) => ({
    cardIcon: {
        "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
            borderRadius: "3px",
            backgroundColor: "transparent",
            padding: "15px",
            marginTop: "-20px",
            marginRight: "15px",
            float: "left"
        }
    },
    warningCardHeader,
    successCardHeader,
    dangerCardHeader,
    infoCardHeader,
    primaryCardHeader,
    roseCardHeader
});