import React from 'react';
import { Link } from 'react-router-dom';
import './SWHeader.css';

function SWHeader () {
    return (
        <Link to='/'>
        <header>
            <h1> Star Wars API Searcher </h1>
        </header>
        </Link>
    )
}

export default SWHeader;