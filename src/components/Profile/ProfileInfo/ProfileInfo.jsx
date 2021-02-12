import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../preloader/Preloader';
import userPhoto from '../../../images/avatars/user.jpg';
import ProfileStatus from '../ProfileStatus';

const ProfileInfo = (props) => {
    if (props.profile.contacts === null) {
        return (<Preloader />);
    }    
    let contacts = Object.values(props.profile.contacts);
    const changePhoto = (e) => {
        if (e.target.files.length) {
            props.replacePhoto(e.target.files[0])
        }
    };
            
    return (     
        <div className={s.descriptionBlock}>
            <div className={s.avatar}>
                <div>
                    <img alt='portrait' src={ props.profile.photos.large === null ? userPhoto : props.profile.photos.large } />
                </div>
                <div>
                    <input type="file" onChange={changePhoto} />
                </div>
            </div>
            <div className={s.description}>
                <div> <b>Имя:</b> {props.profile.fullName} </div>
                <div> <b>Статус:</b> <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} /></div>
                <div> <b>Обо мне:</b> {props.profile.aboutMe} </div>                    
                <div> {props.profile.lookingForAJob ? <span><b>В поиске работы !</b></span> : null} </div>
                <div> {props.profile.lookingForAJob ? <span><b>Какую работу я ищу:</b> {props.profile.lookingForAJobDescription}.</span> : null} </div>
                <div>
                    <b>Мои контакты:</b> <ul> { contacts.map(c => <li> {c} </li>)} </ul> 
                </div>                    
            </div>                 
        </div>        
    );
};

export default ProfileInfo;