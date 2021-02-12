import { connect } from 'react-redux';
import { setPage, setTotalUsersCount, getUsersTC, followTC, unfollowTC } from '../../redux/people_reducer';
import React from 'react';
import People from './People';
import Preloader from '../preloader/Preloader';
import { usersSelectors } from '../../redux/selectors';

let mapStateToProps = (state) => {
    
    return {
        people: usersSelectors.getUsers( state ),
        pageSize: usersSelectors.pageSize( state ),
        totalUsersCount: usersSelectors.totalUsersCount( state ),
        currentPage: usersSelectors.currentPage( state ),
        isFetching: usersSelectors.isFetching ( state ),
        followingInProgress: usersSelectors.followingInProgress ( state )
    }
};

class PeopleContainer extends React.Component {
    
    onChangePage = (pageNumber) => {                             
        this.props.setPage(pageNumber);
        let number = (pageNumber.selected + 1);                
        this.props.getUsersTC(number, this.props.pageSize)                  
    };    
    addFollow = (id) => {
        this.props.followTC(id);        
    };
    dellFollow = (id) => {
        this.props.unfollowTC(id);        
    };
    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize);       
    };
    
    render = () => {
        return (
            <div>
                {this.props.isFetching ? <Preloader /> : null}
                <People totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        onChangePage={this.onChangePage}
                        unfollow={this.props.unfollow}
                        follow={this.props.follow}
                        people={this.props.people}
                        addFollow={this.addFollow}
                        dellFollow={this.dellFollow}
                        followingInProgress={this.props.followingInProgress}                        
                />
            </div>
        );    
    }
};

export default connect(mapStateToProps, { setPage, setTotalUsersCount, getUsersTC, followTC, unfollowTC }) (PeopleContainer);