import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Header from "./Components/header";
import Logout from "./Components/Logout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Posts from "./Pages/Posts";
import createPost from "./Pages/createPost";
import ViewPost from "./Pages/ViewPost";
import Navigation from "../src/Shared/Navigation";
import { PropTypes } from 'react'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    }
  
  localStorage.setItem('userID', '');
  localStorage.setItem('token', '');
  localStorage.setItem('auth', '');
  }
  updateUser(userObject){
    this.setState(userObject);
  };

  logoutHandler = () => {
    localStorage.setItem('userID', '');
    localStorage.setItem('token', '');
    localStorage.setItem('auth', 'false');
  };

  
  
  render(){
  return (
    <div id="page-container">      
      <React.Fragment>      
      <HashRouter basename="/">
        <Route path="/" component={Posts} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/logout" component={Logout} exact />
        <Route path="/signup" component={Signup} exact />
        <Route path="/displayPost" component={Posts} exact />
        <Route path="/createPost" component={createPost} exact />
        <Route path="/viewPost" component={ViewPost} exact />
      </HashRouter>
      </React.Fragment>
    </div>
  );
  }
}

export default App;
