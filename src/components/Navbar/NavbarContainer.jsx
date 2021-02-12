import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';

function mapStateToProps(state) {
    return {
        id: state.auth.id
    };
}

class NavbarContainer extends Component {
    render() {
        return (
            <div>
                <Navbar userID={this.props.id} />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(NavbarContainer);