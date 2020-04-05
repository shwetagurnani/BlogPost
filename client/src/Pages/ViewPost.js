import React from "react";
import axios from 'axios';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import './CommentBox.css';
import Navigation from "../Shared/Navigation";

class ViewPost extends React.Component {
  state = {
     post: {
      title: '',
      content:'',
      userId:'',
      _id: ''
    },
    comment: [
      {
        _id: '',
        author: '',
        postId: '',
        text: ''
      }
    ]
  }
  handleChange=()=>{
      let hash = this.props.location.hash;
      let postID = hash.split('#')[1];
      axios.post('/post/displayPost', { postID })
        .then(res => {
          this.setState({ post: res.data.post });
          this.setState({comment: res.data.comment});
        })
      
        .catch(err => {
          console.log(err)
        })  
  }
  componentDidMount() {
    let hash = this.props.location.hash;
    let postID = hash.split('#')[1];
    axios.post('/post/displayPost', { postID })
      .then(res => {
        this.setState({ post: res.data.post });
        this.setState({comment: res.data.comment});
      })
    
      .catch(err => {
        console.log(err)
      })  
  }


  logoutHandler = () => {
    localStorage.setItem('userID', '');
    localStorage.setItem('token', '');
    localStorage.setItem('auth', 'false');
  };


  render() {
    const { comment } = this.state;
    const { post } = this.state;
    return (
      <>
      <Navigation onLogout={this.logoutHandler} />
      <section id="view-gig">
        {
          <React.Fragment>
          <div className="container">
            <div key={post._id} className="container-po">
              <h2>Title: {post.title}</h2>
              <p> {post.content}</p>
            </div>
            <div className="viewPostComment">
                <div className="comments">
                  <h2>Comments:</h2>
                  <CommentList data={comment}/>
                </div>
                <div className="comment-form">
                  <CommentForm sat={this.props} onSelectLanguage={this.handleChange}/>
                </div>
            </div>
          </div>
          </React.Fragment>
        }
      </section>
      </>
    );
  }
}

export default ViewPost;
