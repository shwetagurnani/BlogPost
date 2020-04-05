import React, { Component } from "react";
import axios from 'axios';

import Navigation from '../Shared/Navigation';
import "../styles/gigslist.css";
import { Link } from "react-router-dom";
import logo from './Edgistify.jpg';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          title:"",
          content:"",
          userId:"",
          _id: 1
        }
      ]
    };
  }

  logoutHandler = () => {
    localStorage.setItem('userID', '');
    localStorage.setItem('token', '');
    localStorage.setItem('auth', 'false');
  };

  componentDidMount() {
    axios.get('/post/displayPosts')
      .then(res => {
        this.setState({ posts: res.data.posts });
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    return (
      <React.Fragment>
      <Navigation onLogout={this.logoutHandler} />
      <section id="gig-cards-list">
        {this.state.posts.map(function (e) {
          return (
            <div key={e._id} className="gig-card">
              <div className="postlist">
                <img src={logo} 
                alt="Italian Trulli" className="postimg" />
                </div>
              <div className="postlink">
                <div> 
                <h2>{e.title}</h2> 
                </div>
               <Link to={`ViewPost#${e._id}`}>View</Link>
              </div>
            </div>
          );
        })}
      </section>
      </React.Fragment>
    );
  }
}

export default Posts;
