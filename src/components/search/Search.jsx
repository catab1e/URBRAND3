import "./search.scss"
import React from 'react';

const Search = () => {
    return (
        <div className='search-container'>
            <input className="search-bar" type="text" placeholder="Я ищу..." />
            <button className="search-btn">Поиск</button>
        </div>
    );
};

export default Search;