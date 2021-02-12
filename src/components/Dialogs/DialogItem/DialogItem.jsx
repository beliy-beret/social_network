import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css';
import Ava from '../../Pictures/Ava/Ava';

const DialogItem = (props) => {
    let path = '/messages/' + props.id;
    return(
        <div className={s.dialog}>                
            <NavLink to={path} activeClassName={s.activeLink}>
                <div className={s.ava}>
                    <Ava />
                </div>
                <div className={s.link}>
                    {props.name}
                </div>
            </NavLink>
        </div>        
    );
};

export default DialogItem;