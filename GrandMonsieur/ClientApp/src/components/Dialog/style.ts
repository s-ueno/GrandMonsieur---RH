import { Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/styles';

//css
const style: Styles<Theme, {}> = (theme) => ({

    title: {
        width: "100%",
    },
    text: {
        whiteSpace: "pre-line",
    },
    actionText: {
        color: theme.palette.text.primary,
    }
});

export default style;
