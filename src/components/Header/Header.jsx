import React from 'react';
import s from './Header.module.css';
import Logo from './Logo';
import Authorization from './Authorization';
import Search from './Search';
import Ava from '../Pictures/Ava/Ava';

let Header = (props) => {
              
    return (
    <header className={s.header}>
        <div className={s.headerItem}>
            <Logo />            
            {props.isAuth ?
            <div className={s.login}>
                <div className={s.ava}>
                    <Ava photo={props.photos.large} />
                </div>
                <div className={s.name}>
                    {props.login}
                </div>
                <button onClick={props.log_out} > Logout </button>
            </div> : <Authorization />
            }
            <Search />
        </div>
    </header>
    )
};

export default Header;