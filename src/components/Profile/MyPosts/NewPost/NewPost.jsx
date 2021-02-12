import React from 'react';
import s from './NewPost.module.css';
import NewPostForm from './NewPostForm';

const NewPost = (props) => {
    return(
        <div className={s.newPost}>            
            <NewPostForm addPost={props.addPost} required={props.required} />
        </div>
    );
};

export default NewPost;