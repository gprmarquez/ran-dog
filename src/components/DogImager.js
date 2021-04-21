import React, { useState, useEffect } from 'react'
import '../components/DogImager.css'

export default function DogImager() {
    const [message, setMessage] = useState('')

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random').then(res => res.json()).then(data => {
            setMessage(data.message)
        });
    }, []);

    function newPhoto() {
        console.log('Here is a new photo!')
        fetch('https://dog.ceo/api/breeds/image/random').then(res => res.json()).then(data => {
            setMessage(data.message)
        });
    };

    return (
        <div>
            <p>Here is a random dog!</p>
            <img src={message} alt='random canine' />
            <button className="dog-button" onClick={newPhoto}>
                New Doggo!
            </button>
        </div>
    )
}