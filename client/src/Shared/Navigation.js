import './Navigation.css';
import Header from './Header';
import React, { Component } from 'react'
import {Link}  from 'react-router-dom'

export default class Navigation extends Component {
  state = {
    auth: false
  }
  componentDidMount() {
    let check
    if(localStorage.getItem('token')){
      check =true;
    }
    this.setState({auth: check});
    console.log(this.state.auth);
  }
  render() {
    return (
      <div className="navbar">
        <ul id="nav-mobile" className="right hide-on-med-and-down">
        <Header>
        <h1 >
          <Link to="/displayPost" className="title">BlogPost</Link>
        </h1>
        <nav className="main-navigation__header-nav">
             {this.state.auth === true ? <> <Link to="/createPost" className="logout-button" >AddPost</Link> <Link to='/logout' className="logout-button" onClick={() => this.setState({auth:false})} >Logout</Link> </> : <> <Link to="/signup" className="logout-button">SignUp</Link> <Link to="/login" className="logout-button">Login</Link> </>} 
        </nav>
        </Header>
        </ul>   
      </div>
    )
  }
}