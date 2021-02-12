import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

let Authorization = () => {    
    return (           
        <div className={s.authorization}>            
            <NavLink to={'/login'} >Login</NavLink>
        </div>
    );
};

export default Authorization;