import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import SendMessage from './SendMessage/SendMessage';

const Dialogs = (props) => {
    
    let dialogsElements = props.messages.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />);
    let messagesElements = props.messages.messages.map(m => <Message key={m.id} message={m.message} />);
    
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <SendMessage sendMessage={props.sendMessage} />                                         
            </div>
        </div>
    );
};

export default Dialogs;