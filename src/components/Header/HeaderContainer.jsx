import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import s from './Header.module.css';
import { log_out } from '../../redux/auth_reducer';
import Preloader from '../preloader/Preloader';
import { headerSelectors } from '../../redux/selectors';

class HeaderContainer extends Component {    
    render() {
        return (
            <div className={s.container} >
                {this.props.isFetching ? <Preloader /> : <Header isAuth={this.props.isAuth} login={this.props.login} photos={this.props.photos} log_out={this.props.log_out} />}
                
            </div>
        );
    }
}
let mapStateToProps = (state) => ({    
    isAuth: headerSelectors.isAuth(state),
    login: headerSelectors.login(state),
    photos: headerSelectors.photos(state),
    isFetching: headerSelectors.isFetching (state),
});

export default connect (mapStateToProps, { log_out } ) (HeaderContainer);