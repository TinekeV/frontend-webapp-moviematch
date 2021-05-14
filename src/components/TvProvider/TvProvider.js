import React, { useState, useEffect } from "react";
import "./TvProvider.css"
import { useParams } from "react-router-dom"
import axios from "axios";

const logo = `https://image.tmdb.org/t/p/original/`

function TvProvider() {
    const [tvProviders, setTvProviders] = useState([]);
    const [region, setRegion] = useState("")
    const {id} = useParams();

    useEffect(() => {
        async function getTvProviders() {
            try {
                const {data} = await axios.get(`https://api.themoviedb.org/3/tv/${id}/watch/providers?api_key=${process.env.REACT_APP_API_KEY}`)
                console.log(data.results.NL.flatrate)
                setTvProviders(data.results.NL.flatrate)
                setRegion(data.results)
            } catch (e) {
                console.log(e)
            }
        }

        getTvProviders()

    }, [id])


    return (
        <>
            {region === "" ? <h3>No streaming services available</h3> : <h3>Stream now on</h3>}
            <div className="watch-provider-container">
            {tvProviders && tvProviders.map((tvProvider) => {
                return <div className="watch-provider">
                        <img src={logo + tvProvider.logo_path} alt={tvProvider.provider_name} key={tvProvider.poster_path} id="logo"/>
                        <p>{tvProvider.provider_name}</p>
                    </div>
            })}
            </div>
        </>
    )
}

export default TvProvider