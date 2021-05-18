import React from 'react';
import './TrendingMovies.css';
import { NavLink } from 'react-router-dom';

const moviePoster = `https://image.tmdb.org/t/p/original`;

function TrendingMovies({ title, vote_average, poster_path, id }) {
    return (
        <>
            <div className="movie-container">
                <NavLink to={`/movie/${id}`}><img src={moviePoster + poster_path} alt={title} /></NavLink>

                <div className="movie-info">
                    <NavLink to={`/movie/${id}`} className="title-link"><h4>{title}</h4></NavLink>
                    <span>{vote_average}</span>
                </div>
            </div>
        </>
    );
}

export default TrendingMovies;