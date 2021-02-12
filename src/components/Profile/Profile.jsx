import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostContainer from './MyPosts/MyPostsContainer';

let Profile = (props) => {            
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatusTC} replacePhoto={props.replacePhotoTC} />            
            <MyPostContainer store={props.store} />
        </div>
    )
};

export default Profile;