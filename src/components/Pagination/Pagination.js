import React from 'react';
import {NavLink} from 'react-router-dom';
import './Pagination.css';

function Pagination({pages, fetchData, currentPage}) {
    const pageLinks = [];

    for(let i = 1; i <= pages; i ++) {
        let activePage = currentPage === i ? "activePage" : ""

        if (i <= 5 || i === pages ||
            Math.abs(currentPage - i) <= 1
        )
        pageLinks.push(<li className={`pagination-page ${activePage}`} key={i} onClick={() => {fetchData(i)}}><NavLink to="#" className="page-link">{i}</NavLink></li>)
    };

    return (
        <div className="pagination">
            <div>
                <ul className="pagination-row">
                    {pageLinks}
                </ul>
            </div>
        </div>
    );
}

export default Pagination;