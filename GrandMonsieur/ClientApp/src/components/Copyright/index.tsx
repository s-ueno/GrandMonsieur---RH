import React from "react";

/** material ui の フォントライブラリ　：　https://material-ui.com/components/typography/#typography  */
import Typography from '@material-ui/core/Typography';
/** material ui の a タグと同様の link ：　https://material-ui.com/components/links/#links  */
import Link from '@material-ui/core/Link';

const Copyright: React.FC = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/s-ueno" rel="noreferrer" target="_blank">
                uEN.2020 -
            </Link>
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default Copyright;