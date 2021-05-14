import React, { useState, useEffect } from "react";
import "./MovieProvider.css"
import { useParams } from "react-router-dom"
import axios from "axios";

const logo = `https://image.tmdb.org/t/p/original/`

function MovieProvider() {
    const [movieProviders, setMovieProviders] = useState([]);
    const [region, setRegion] = useState("")
    const { id } = useParams();

    useEffect(() => {
        async function getMovieProviders() {
            try {
                const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${process.env.REACT_APP_API_KEY}`)
                console.log(data.results)
                setMovieProviders(data.results.NL.flatrate)
                setRegion(data.results)
            } catch (e) {
                console.log(e)
            }
        }
        getMovieProviders()

    }, [id])

    return (
        <>
            {region === "" ? <h3>No streaming services available</h3> : <h3>Stream now on</h3>}
            <div className="watch-provider-container">
            {movieProviders && movieProviders.map((movieProvider) => {
                return <div className="watch-provider" key={movieProvider.id}>
                    <img src={logo + movieProvider.logo_path} alt={movieProvider.provider_name} key={movieProvider.logo_path}/>
                    <p key={movieProvider.provider_name}>{movieProvider.provider_name}</p>
                    </div>
            })}
            </div>
        </>
    )
}

export default MovieProvider