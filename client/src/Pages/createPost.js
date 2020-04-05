import React from "react";
import axios from "axios";
import "../styles/gigslist.css";
import Navigation from "../Shared/Navigation";

class Post extends React.Component {
  state = {
    title: '',
    content: '',
    userId: '',
    err: ''
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value })
  }
  handleSubmit = (e) => {
    e.preventDefault();

    let userId = localStorage.getItem('userID');
    console.log(userId)

    const { title, content} = this.state;
    if (!title || !content ) {
      this.setState({ err: 'Please check your inputs' });
      return;
  }

    
    axios
      .post("/post/createPost", {
        title,
        content,
        userId
      })
      .then(res => {
        this.props.history.push('/displayPost')
      })
      .catch(err => console.error(err));
    }

  logoutHandler = () => {
    localStorage.setItem('userID', '');
    localStorage.setItem('token', '');
    localStorage.setItem('auth', 'false');
  };

  render() {
    return (
      <>
      <Navigation onLogout={this.logoutHandler} />
      <section id="post-gig-container">
        {this.state.err}
        <form id="post-gig">
          <h2>Want to Post Something...</h2>
          <label>Post Title:</label>
          <input type="text" name="title" onChange={this.handleChange} />
          <label>Content:</label>
          <textarea rows="10" cols="30" name="content" onChange={this.handleChange}></textarea>
          <input className="btn" type="Submit" onClick={this.handleSubmit} />
        </form>
      </section>
      </>
    );
  }
}

export default Post;
