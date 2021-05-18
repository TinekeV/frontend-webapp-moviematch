import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MoviePage.css';
import axios from 'axios';
import Header from '../../components/Header/Header';
import posterUnavailable from '../../assets/image-not-available.jpg';
import MovieProvider from '../../components/MovieProvider/MovieProvider';
import SimilarMovies from '../../components/SimilarMovies/SimilarMovies';
import createDataString from '../../helpers/createDataString';

const poster = `https://image.tmdb.org/t/p/original/`;

function MoviePage() {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState("");
    const [genres, setGenres] = useState("");

    useEffect(() => {
        async function getMovieDetails() {
            try {
                const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&`);
                setMovieDetails(data);
                setGenres(data.genres);
            } catch (e) {
                console.error(e);
            }
        }
        getMovieDetails();
    }, [id])

    return (
        <>
            <Header/>
            <div className="movie-details">
                <img src={movieDetails.poster_path ? poster + movieDetails.poster_path : posterUnavailable} alt={movieDetails.title} />
                <div className="movie-details-text">
                    <div className="movie-details-text-title">
                        <h1>{movieDetails.title}</h1>
                        <span>{movieDetails.vote_average}</span>
                    </div>
                    <h5>released: {createDataString(movieDetails.release_date)} - language: ({movieDetails.original_language}) - runtime: {movieDetails.runtime} mins</h5>
                    {movieDetails.tagline === "" ? <div></div> : <h2>"{movieDetails.tagline}"</h2>}

                    <h3>Description</h3>
                    <p>{movieDetails.overview}</p>

                    <h3>Movie genres</h3>
                    <div className="genres">
                        {genres && genres.map((genre) => {
                            return <li key={genre.name} className="genre-list">{genre.name}</li>
                        })}
                    </div>
                    <MovieProvider/>
                </div>
            </div>
            <div>
                <SimilarMovies/>
            </div>
        </>
    );
}

export default MoviePage;