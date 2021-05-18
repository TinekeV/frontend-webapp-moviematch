import React, { useState, useEffect } from 'react';
import './DiscoverPage.css';
import axios from 'axios';
import Header from '../../components/Header/Header';
import loadingGif from '../../assets/loading-gif.gif';
import TrendingMovies from '../../components/TrendingMovies/TrendingMovies';
import Pagination from '../../components/Pagination/Pagination';

function DiscoverPage() {
    const [discoverMovies, setDiscoverMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [error, setError] = useState('');
    const [loading, toggleLoading] = useState(false);

    useEffect( () => {
        async function fetchDiscoverMovies(){
            setError('');
            toggleLoading(true);

            try {
                const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=${currentPage}&include_adult=false`);
                setDiscoverMovies(data.results);
                setTotalResults(data.total_results);
                setCurrentPage(currentPage);
            } catch (e) {
                setError('Something went wrong while fetching the data, please refresh the page');
                console.error(e);
            }
            toggleLoading(false);
        }
        fetchDiscoverMovies();
    }, [currentPage])

    const numberPages = Math.floor(totalResults / 20);

    return (
        <>
            <Header/>
            <section className="introduction-container">
                {error && <p>{error}</p>}
                <h3>There is so much left to discover, take a look below and find something to your liking.</h3>
            </section>
            <section className="discover-container">
                <div className="discover">
                    {loading && <img src={loadingGif} alt="loading-gif"/>}
                    {discoverMovies && discoverMovies.map((discoverMovie) => {
                        return <TrendingMovies
                            key={discoverMovie.id}
                            {...discoverMovie}
                        />
                    })}
                </div>
            </section>
            {totalResults > 20 ? <Pagination
                pages={numberPages}
                fetchData={setCurrentPage}
                currentPage={currentPage}
            /> : ""}
        </>
    );
}

export default DiscoverPage;