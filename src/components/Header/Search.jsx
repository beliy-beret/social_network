import React from 'react';
import s from './Header.module.css';

let Search = () => {
    return (           
        <div className={s.search}><input defaultValue='search'></input></div>
    );
};

export default Search;