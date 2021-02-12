import React, { useState, useEffect } from 'react';

const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false);    
    let [status, setStatus] = useState(props.status)
    let activateEditMode = () => (setEditMode(true));    
    let deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);        
    };
    let onStatusChange = (e) => {
        return setStatus(e.currentTarget.value)
    }
    useEffect(() => {
        setStatus(props.status)        
    }, [props.status])

    return (
        <span>
            { !editMode && <span onDoubleClick={ activateEditMode } >{ props.status || "Input your status" }</span> }
            { editMode && <input onChange={onStatusChange} autoFocus={true} onBlur={ deactivateEditMode } value={status}></input> }
        </span>
    );
};

export default ProfileStatus;