import React, { useState, useEffect } from 'react'

import { Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    },
    btnContainer: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center'
    },
    button: {
        padding: '12px',
        margin: '12px',
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .2)',
        background: '#af8eb5'
    },
}));

export default function DogImager() {
    // declare new state variable, photo
    const [photo, setPhoto] = useState('');
    const classes = useStyles();

    useEffect(() => {
        // retrieve new photo once site renders
        newPhoto()
    }, []);

    function newPhoto() {
        // calls the Dog API to set photo value to a random dog photo URL 
        fetch('https://dog.ceo/api/breeds/image/random').then(res => res.json()).then(data => {
            setPhoto(data.message)
        });
    };

    return (
        <div>
            <Box className={classes.root}>
                <p>Here is a random dog!</p>
                <img className="img" src={photo} alt='random canine' />
            </Box>
            <div className={classes.btnContainer}>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={newPhoto} // calls newPhoto method to retrieve another photo
                >
                    New Doggo!
            </Button>
            </div>
        </div>
    )
}