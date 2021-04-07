import React, { useState, useEffect } from 'react';
import axios from '../../modules/axios';

import "./Row.scss";

const base_url_images = "https://image.tmdb.org/t/p/original/";

function Row( { title, getURL } ) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function getData() {
            const request = await axios.get(getURL);
            setMovies(request.data.results);
            return request;
        }
        getData();
    }, [getURL]);

    return (
        <div className="wrapper">
            <h2>{title}</h2>
                <div className="rowPosters">
                    {movies.map(movie => (
                        <img key={movie.id} className="rowPoster" src={`${base_url_images}${movie.poster_path}`} alt={movie.title} />
                    ))}
                </div>
        </div>
    )
}

export default Row
