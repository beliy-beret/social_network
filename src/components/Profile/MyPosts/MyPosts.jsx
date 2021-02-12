import React from 'react';
import Post from './Post/Post';
import NewPost from './NewPost/NewPost';

const MyPosts = (props) => {                
    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} like={p.like} />)
    return(
        <div>
            <NewPost addPost={props.addPost} required={props.required} />
            {postsElements}
        </div>
    )
};

export default MyPosts;