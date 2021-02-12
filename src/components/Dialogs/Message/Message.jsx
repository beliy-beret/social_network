import React from 'react';
import s from './Message.module.css';
import Ava from '../../Pictures/Ava/Ava';

const Message = (props) => {
    return(
        <div className={s.text}>
            <div className={s.ava}>
                <Ava />
            </div>
            <div className={s.message}>          
                {props.message}
            </div>
        </div>
    );
};

export default Message;