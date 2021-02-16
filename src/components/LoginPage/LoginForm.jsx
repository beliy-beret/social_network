import React from 'react';
import s from '../../validators/validators.module.css'
import { Form, Field } from 'react-final-form';
import { composeValidators, minLength, required } from '../../validators/validators';

const LoginForm = (props) => {            
    return(
        <Form onSubmit={ values => props.log_in(values.login, values.password, values.rememberMe) }            
            render={({ handleSubmit, submitError }) => (
                <form onSubmit={ handleSubmit } >
                    <div>
                        <Field name="login" validate={ required }> 
                            {(props) => {
                                return ( 
                                    <div>
                                        <input placeholder="Login" type="text" {...props.input} />
                                        { props.meta.error && props.meta.touched && <span className={s.validator}> {props.meta.error} </span>}
                                    </div>
                                )}
                            }
                        </Field>
                    </div>
                    <div>
                        <Field name="password" validate={ composeValidators( required, minLength(8))} > 
                            {(props) => {
                                return(
                                    <div>
                                        <input placeholder="Password" type="text" {...props.input} />
                                        { props.meta.error && props.meta.touched && <span className={s.validator}> {props.meta.error} </span>}
                                    </div>
                                )}
                            }
                        </Field>                        
                    </div>                    
                    <div>
                        <Field name="rememberMe" > 
                            {(props) => (<input type="checkbox" {...props.input} />)}
                        </Field>                        
                    </div>
                    { submitError && <div> { submitError } </div>} 
                    <button> Login </button>
                </form>
            )}            
        />        
    );
};

export default LoginForm;