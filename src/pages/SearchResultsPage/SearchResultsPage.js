import React, { useState, useEffect } from "react";
import "./SearchResultsPage.css"
import axios from "axios";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchResult from "../../components/SearchResult/SearchResult";
import Pagination from "../../components/Pagination/Pagination";
import loadingGif from "../../assets/loading-gif.gif";

function SearchResultsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [error, setError] = useState('')
    const [loading, toggleLoading] = useState(false)

    useEffect(() => {
        async function fetchSearchResults() {
            setError('');
            toggleLoading(true);

            try {
                const { data } = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&page=${currentPage}&query=${searchTerm}`)
                console.log(data)
                setSearchResults(data.results)
                setTotalResults(data.total_results)
                setCurrentPage(currentPage)
            } catch (e) {
                setError('Something went wrong while fetching the data, please refresh the page')
                console.log(e)
            }
            toggleLoading(false)
        }
        if (searchTerm) {
            fetchSearchResults();
        }

    }, [searchTerm, currentPage])

    const numberPages = Math.floor(totalResults / 20);

    return (
        <>
            <div>
                <Header
                    userStatus="profile"
                />
                <section className="introduction-container">
                    {error && <p>{error}</p>}
                    <h3>Search here for any movie or TV show...</h3>
                    <SearchBar setSearchTermHandler={setSearchTerm} />
                </section>
                <div className="search-container">
                    {loading && <img src={loadingGif} alt="loading-gif"/>}
                    {searchTerm && searchResults.length === 0 ? <p className="no-results-message">No search results found. Please try again.</p> :
                        <section className="search-results">
                            {searchResults && searchResults.map((searchResult) => {
                                return <SearchResult
                                    key={searchResult.id}
                                    {...searchResult}
                                />
                            })}
                        </section>}
                </div>
                {totalResults > 20 ? <Pagination
                    pages={numberPages}
                    fetchData={setCurrentPage}
                    currentPage={currentPage}
                /> : ""}
            </div>
        </>
    )
}


export default SearchResultsPage