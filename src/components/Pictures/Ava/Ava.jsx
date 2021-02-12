import React from 'react';
import s from './Ava.module.css';
import userPhoto from '../../../images/avatars/user.jpg' 

const Ava = (props) => {
        
    return(
        <div className={s.ava}>
            <img alt='ava' src={props.photo !== (null || undefined) ? props.photo : userPhoto} />            
        </div>
    );
};

export default Ava;