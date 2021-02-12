import React from 'react';
import { NavLink } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import s from './Navbar.module.css';

let Navbar = (props) => {         
    return <nav className={s.nav}>
        <div className={s.item}><NavLink to={'/profile/' + props.userID } activeClassName={s.activeLink}>Profile</NavLink></div>
        <div className={s.item}><NavLink to='/messages' activeClassName={s.activeLink}>Messages</NavLink></div>
        <div className={s.item}><NavLink to='/news' activeClassName={s.activeLink}>News</NavLink></div>
        <div className={s.item}><NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink></div>
        <div className={s.item}><NavLink to='/settings' activeClassName={s.activeLink}>Setting</NavLink></div>
        <div className={s.item}><NavLink to='/people' activeClassName={s.activeLink}>People</NavLink></div>
        <Sidebar />
    </nav>
};

export default Navbar;
