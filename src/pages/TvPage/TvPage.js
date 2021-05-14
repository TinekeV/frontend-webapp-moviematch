import React, { useEffect, useState } from 'react';
import './TvPage.css'
import axios from "axios";
import { useParams } from 'react-router-dom'
import Header from "../../components/Header/Header";
import posterUnavailable from "../../assets/image-not-available.jpg";
import TvProvider from "../../components/TvProvider/TvProvider";
import createDataString from "../../helpers/createDataString";

const poster = `https://image.tmdb.org/t/p/original/`

function TvPage() {
    const { id } = useParams();
    const [TvDetails, setTvDetails] = useState("")
    const [genres, setGenres] = useState("")
    const [seasons, setSeasons] = useState([])


    useEffect(() => {
        async function getTvDetails() {
            try {
                const { data } = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=4134a71adcd4373055f6202e9e7de077&language=en-US`)
                console.log(data)
                setTvDetails(data)
                setGenres(data.genres)
                setSeasons(data.seasons)

            } catch (e) {
                console.error(e)
            }
        }
        getTvDetails()
    }, [id])

    // function createDateString() {
    //     return new Date(TvDetails.first_air_date).toLocaleDateString(`nl-NL`)
    // }

    return (
        <>
            <Header
                userStatus="profile"
            />
            <div className="tv-details">
                <img src={TvDetails.poster_path ? poster + TvDetails.poster_path : posterUnavailable} alt={TvDetails.name} />
                <div className="tv-details-text">
                    <div className="tv-details-text-title">
                        <h1>{TvDetails.name}</h1>
                        <span>{TvDetails.vote_average}</span>
                    </div>
                    <h5>premiered: {createDataString(TvDetails.first_air_date)} - status: {TvDetails.status}</h5>
                    {TvDetails.tagline === "" ? "" : <h2>"{TvDetails.tagline}"</h2>}

                    <h3>Description</h3>
                    <p>{TvDetails.overview}</p>

                    <h3>TV genres</h3>
                    <div className="genres">
                        {genres && genres.map((genre) => {
                            return <li key={genre.name} className="genre-list">{genre.name}</li>
                        })}
                    </div>
                    <TvProvider/>
                </div>
            </div>
            <span className="seasons-title"><h2>Seasons</h2></span>
            <div className="seasons-container">
                {seasons && seasons.map((season) => {
                    return <section className="seasons">
                        <img src={season.poster_path ? poster + season.poster_path : posterUnavailable} alt={season.name} />
                        <h4>{season.name}</h4>
                        <div className="season-hover">
                            <h4>{season.episode_count} episodes</h4>
                            <h5>Premiered: {createDataString(season.air_date)}</h5>
                            <p>{season.overview}</p>
                        </div>
                    </section>
                })}
            </div>
        </>
    )
}

export default TvPage;