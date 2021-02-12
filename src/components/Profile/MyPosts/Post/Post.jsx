import React from 'react';
import Ava from '../../../Pictures/Ava/Ava';
import s from './Post.module.css';


const Post = (props) => {        
    return(        
        <div className={s.item}>
            <div className={s.ava}>
                <Ava />
            </div>            
            <div className='message'>{props.message}</div>
            <button>Like {props.like}</button>                     
        </div>
    )
};

export default Post;