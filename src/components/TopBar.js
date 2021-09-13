import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
        fontSize: '2rem'
    },
    bar: {
        background: 'orange',
        position: 'static'
    }
}));

export default function TopBar() {
    const classes = useStyles();

    return (
        <div>
            <AppBar position='static'>
                <Toolbar className={classes.bar}>
                    <Typography variant="h1" className={classes.title}>
                        Ran-Dog
          </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
