import React, { Component } from 'react';
import {Route, withRouter } from 'react-router-dom';
import './App.css';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import PeopleContainer from './components/People/PeopleContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import LoginPage from './components/LoginPage/LoginPage';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initialApp } from './redux/app_reducer';
import Preloader from './components/preloader/Preloader';

let mapStateToProps = (state) => ({  
  initialization: state.app.initialization
})
class App extends Component {
  componentDidMount(){
    this.props.initialApp();
  }
  render() {
    if ( !this.props.initialization ) {
      return <Preloader />
    }
      return (
        <div className='app-wrapper'>
          <HeaderContainer />
          <NavbarContainer />
          <div className='app-wrapper-content'>
            <Route
              path='/messages'
              component={() => <DialogsContainer />}
            />
            <Route
              path='/profile/:userId?'
              component={() => <ProfileContainer />}
            />
            <Route
              path='/music' component={() => <Music />} />
            <Route path='/settings' component={() => <Settings />}/>
            <Route path='/news' component={() => <News />} />
            <Route path='/people' component={() => <PeopleContainer />} />
            <Route path='/login' component={() => <LoginPage /> } />                    
          </div>        
        </div>
      );
    }
}

export default compose(connect( mapStateToProps, { initialApp }), withRouter)(App);