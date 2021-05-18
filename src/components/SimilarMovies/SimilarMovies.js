import React, { useState, useEffect } from 'react';
import {NavLink, useParams} from 'react-router-dom';
import './SimilarMovies.css';
import axios from 'axios';
import createDataString from '../../helpers/createDataString';

const poster = `https://image.tmdb.org/t/p/original/`;

function SimilarMovies() {
    const [ similarMovies, setSimilarMovies] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        async function getSimilarMovies() {
            try {
                const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&`);
                setSimilarMovies(data.results.slice(0,6));
            } catch (e) {
                console.error(e);
            }
        }
        getSimilarMovies();
    }, [id])

    return (
        <div className="similar-movies-text">
            <h3>You might also be interested in the following..</h3>
            <div className="similar-movies-container">
            {similarMovies && similarMovies.map((similarMovie) => {
                return <section className="similar-movies" key={similarMovie.id}>
                    <img src={poster + similarMovie.poster_path} alt={similarMovie.title} key={similarMovie.poster_path} />
                    <NavLink to={`/movie/${similarMovie.id}`} className="title-link"><h4 key={similarMovie.title}>{similarMovie.title}</h4></NavLink>
                    <div className="movie-hover">
                        <p>Released: {createDataString(similarMovie.release_date)}</p>
                        <p>Description: {similarMovie.overview}</p>
                    </div>
                </section>
            })}
            </div>
        </div>
    );
}

export default SimilarMovies;