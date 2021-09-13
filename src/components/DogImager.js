import React, { useState, useEffect } from 'react'

import { Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        width: '100vw',
        height: '80vh'
    },
    imgContainer: {
        maxWidth: '100%',
        height: '65vh',
        display: 'flex',
        justifyContent: 'center'
    },
    img: {
        maxWidth: '100%',
        maxHeight: '100%'
    },
    btnContainer: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center'
    },
    btn: {
        padding: '1rem',
        margin: '1rem',
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .2)',
        background: '#af8eb5'
    },
}));

export default function DogImager(props) {
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
        <>
            <Box className={classes.root}>
                <p>{props.title}</p>
                <div className={classes.imgContainer}>
                    <img className={classes.img} src={photo} alt='random canine' />
                </div>
            </Box>
            <div className={classes.btnContainer}>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.btn}
                    onClick={newPhoto} // calls newPhoto method to retrieve another photo
                >
                    New Doggo!
            </Button>
            </div>
        </>
    )
}