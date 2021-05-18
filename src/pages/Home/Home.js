import React, { useState, useEffect } from 'react'
import './Home.css';
import axios from 'axios';
import Header from '../../components/Header/Header';
import TrendingMovies from '../../components/TrendingMovies/TrendingMovies';
import TrendingTV from '../../components/TrendingTV/TrendingTV';
import loadingGif from '../../assets/loading-gif.gif'

const trendingMoviesUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`
const trendingTvUrl= `https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.REACT_APP_API_KEY}`

function Home() {
    const [movies, setMovies] = useState([]);
    const [tvshows, setTVShows] = useState([]);
    const [error, setError] = useState('');
    const [loading, toggleLoading] = useState(false);

    useEffect( () => {
        async function fetchTrendingMovies(){
            setError('');
            toggleLoading(true);

            try {
                const { data } = await axios.get(trendingMoviesUrl);
                setMovies(data.results.slice(0,10));
            } catch (e) {
                setError('Something went wrong while fetching the data, please refresh the page');
                console.error(e);
            }
            toggleLoading(false);
        }
        fetchTrendingMovies();
    }, [])

    useEffect(() => {
        async function fetchTrendingTV() {
            setError('');
            toggleLoading(true);

            try {
                const { data } = await axios.get(trendingTvUrl);
                setTVShows(data.results.slice(0,10));
            } catch (e) {
                setError('Something went wrong while fetching the data, please refresh the page');
                console.error(e);
            }
            toggleLoading(false);
        }
        fetchTrendingTV();
    }, [])


    return (
        <>
            <Header/>
                <section className="introduction-container">
                    {error && <p>{error}</p>}
                    <h3>Get inspired on what to watch next with the most popular Movies and TV Shows.</h3>
                </section>
                <section className="trending-container">
                    <h3>Popular movies this week</h3>
                    <div className="trending-movies">
                        {loading && <img src={loadingGif} alt="loading-gif"/>}
                        {movies && movies.map((movie) => {
                            return <TrendingMovies
                                key={movie.id}
                                {...movie}
                            />
                        })}
                    </div>
                    <h3>Popular TV shows this week</h3>
                    <div className="trending-tv">
                        {loading && <img src={loadingGif} alt="loading-gif"/>}
                        {tvshows && tvshows.map((tvshow) => {
                            return <TrendingTV
                                key={tvshow.id}
                                {...tvshow}
                            />
                        })}
                    </div>
                </section>
        </>
    );
}

export default Home;