import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfileTC, getUserStatusTC, replacePhotoTC, updateUserStatusTC } from '../../redux/profile_reducer';
import { withRouter } from 'react-router-dom';
import { toggleFetching } from '../../redux/people_reducer';
import Preloader from '../preloader/Preloader';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => ({    
    profile: state.profilePage.profile,
    isFetching: state.peoplePage.isFetching,
    status: state.profilePage.status,
});

class ProfileContainer extends React.Component {
    componentDidMount(){                
        let userId = this.props.match.params.userId;
        this.props.getUserProfileTC(userId);
        this.props.getUserStatusTC(userId)
    };
    componentDidUpdate( prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }        
    }
    render() {                    
        return (
            <div>
                {this.props.isFetching ? <Preloader /> : <Profile {...this.props} />}
            </div>
        )
    }
};

export default compose(
    connect(mapStateToProps, { toggleFetching, getUserProfileTC, getUserStatusTC, updateUserStatusTC, replacePhotoTC }),
    withRouter,
    withAuthRedirect)
    (ProfileContainer);