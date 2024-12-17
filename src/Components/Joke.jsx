import React, { useState } from 'react';
import Button from './Button';
import './Joke.css';

const Joke = () => {
    const [joke, setJoke] = useState('');
    const apiUrl = "https://sv443.net/jokeapi/v2/joke/Programming?type=single";

    const fetchApi = () => {
        fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => setJoke(data.joke))
        .catch((error) => console.error('Error fetching joke:', error));
    };

    return (
        <div>
            <Button callApi={fetchApi} />
            <p>{joke}</p>
        </div>
    );
};

export default Joke;
