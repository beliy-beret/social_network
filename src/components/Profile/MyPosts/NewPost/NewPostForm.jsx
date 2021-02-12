import React from 'react';
import s from '../../../../validators/validators.module.css'
import { Form, Field } from 'react-final-form';
import { maxLength } from '../../../../validators/validators';

const NewPostForm = (props) => {        
    return (
        <Form onSubmit={formObj => props.addPost(formObj.newPostText)} >            
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}  >
                    <div>
                        <Field name="newPostText" validate={ maxLength(5) } > 
                            {(props) => {                                
                                return (
                                    <div>
                                        <textarea placeholder="input your post text" type="text" {...props.input}></textarea>
                                        { props.meta.error && <span className={s.validator}> { props.meta.error} </span>}
                                    </div>
                                    )
                                }
                            }
                        </Field>    
                        <button type="submit"> Create post </button>
                    </div>        
                </form>
            )}            
        </Form>
    );
};

export default NewPostForm;