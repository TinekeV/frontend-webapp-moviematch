import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ setSearchTermHandler }) {
    const [query, setQuery] = useState('');

    const handleClick = () => {
        setSearchTermHandler(query);
    }

    function keyPressCheck(e) {
        if (e.keyCode === 13) {
            setSearchTermHandler(query);
        }
    }

    return (
        <div className="searchBar-container">
            <input
                type="text"
                placeholder="search"
                className="search-field"
                value={query}
                onKeyDown={keyPressCheck}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button
                type="button"
                className="search-button"
                onClick={handleClick}
            >search</button>
        </div>
    );
}

export default SearchBar