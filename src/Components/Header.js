import React from 'react';
import { AppBar, Typography } from "@material-ui/core";
import useStyles from '../Styles'

const Header = () => {

    const styles = useStyles()

    return (
        <AppBar className={styles.appBar}>
            <Typography variant='h2'>
                Acme Community College
            </Typography>
        </AppBar>
    )
}

export default Header