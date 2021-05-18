import React, { useState, useEffect } from 'react';
import './DiscoverTV.css';
import axios from 'axios';
import Header from '../../components/Header/Header';
import loadingGif from '../../assets/loading-gif.gif';
import TrendingTV from '../../components/TrendingTV/TrendingTV';
import Pagination from '../../components/Pagination/Pagination';

function DiscoverTV() {
    const [discoverTV, setDiscoverTV] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [error, setError] = useState('');
    const [loading, toggleLoading] = useState(false);

    useEffect( () => {
        async function fetchDiscoverTV(){
            setError('');
            toggleLoading(true);

            try {
                const { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=${currentPage}&include_adult=false`);
                setDiscoverTV(data.results);
                setTotalResults(data.total_results);
                setCurrentPage(currentPage);
            } catch (e) {
                setError('Something went wrong while fetching the data, please refresh the page');
                console.error(e);
            }
            toggleLoading(false);
        }
        fetchDiscoverTV();
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
                    {discoverTV && discoverTV.map((discover) => {
                        return <TrendingTV
                            key={discover.id}
                            {...discover}
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

export default DiscoverTV;