import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { log_in } from '../../redux/auth_reducer';
import LoginForm from './LoginForm';

let mapStateToProps = (state) => ({
    id: state.auth.id,
    isAuth: state.auth.isAuth,
    captchaURL: state.auth.captchaURL,
 });

class LoginPage extends Component {    
    render() {        
        return (            
            <div>
                {this.props.isAuth ? <Redirect to={"/profile/" + this.props.id} /> : <LoginForm log_in={this.props.log_in} captchaURL={this.props.captchaURL} />}
            </div>
        );
    }
}

export default connect ( mapStateToProps, { log_in } ) ( LoginPage );