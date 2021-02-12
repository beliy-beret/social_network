import React from 'react';
import { Form, Field } from 'react-final-form';

const MessageForm = (props) => {    
    return (
        <Form onSubmit={formObj => props.send(formObj.newMessageText)} >
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit} >
                <div>
                    <Field name="newMessageText" > 
                        {({input}) => (<textarea placeholder="input your message" type="text" {...input} />)}
                    </Field>
                </div>                
                <button type="submit"> Send message </button>
            </form>
            )}            
        </Form>
    );
};

export default MessageForm;