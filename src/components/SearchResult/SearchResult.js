import React from 'react';
import { NavLink } from 'react-router-dom';
import './SearchResult.css';
import posterUnavailable from './../../assets/image-not-available.jpg';

const poster = `https://image.tmdb.org/t/p/w185/`;

function SearchResult({ title, name, overview, poster_path, id, media_type }) {
    return (
        <>
            <div className="result-details">
                {media_type === "movie" ? <NavLink to={`/movie/${id}`} className="poster-link"><img src={poster_path ? poster + poster_path : posterUnavailable} alt={title} /></NavLink>
                    : <NavLink to={`/tv/${id}`} className="poster-link"><img src={poster_path ? poster + poster_path : posterUnavailable} alt={name} /></NavLink>}

                <div className="result-details-text">
                    {media_type === "movie" ? <NavLink to={`/movie/${id}`} className="search-link"><h3>{title}{name}</h3></NavLink> : <NavLink to={`/tv/${id}`} className="search-link"><h3>{name}</h3></NavLink>}
                    <p>{overview}</p>
                </div>
            </div>
        </>
    );
}

export default SearchResult;