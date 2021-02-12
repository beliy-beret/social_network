import React from 'react';
import MessageForm from './MessageForm';

const SendMessage = (props) => {
        
    return(
        <MessageForm send={props.sendMessage} />
    );
};

export default SendMessage;