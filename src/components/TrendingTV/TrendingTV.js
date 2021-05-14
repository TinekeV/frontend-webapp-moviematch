import React from 'react';
import './TrendingTV.css'
import { NavLink } from 'react-router-dom'

const TvPoster = `https://image.tmdb.org/t/p/original`

function TrendingTV({ name, vote_average, poster_path, id }) {

    return (
        <>
            <div className="tv-container">
                <NavLink to={`/tv/${id}`} className="title-link"><img src={TvPoster + poster_path} alt={name} /></NavLink>
                <div className="tv-info">
                    <NavLink to={`/tv/${id}`} className="title-link"><h4>{name}</h4></NavLink>
                    <span>{vote_average}</span>
                </div>
            </div>
        </>
    );
}


export default TrendingTV