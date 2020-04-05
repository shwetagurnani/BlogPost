import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Erroralert from './ErrorAlertComment';

class CommentForm extends React.Component {
  state = {
    text: '',
    alert_message: ''
  }
  handleChange = (e) => {
    var el = document.getElementById('submitbtnid');
    if(localStorage.getItem('token')==='')
      this.setState({alert_message: 'error'})
    if(e.target.value===''? el.style.display= "none": el.style.display= "block")
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    
    e.preventDefault()
    this.setState({text: ''})
    let hash = this.props.sat.location.hash;
    let postId = hash.split('#')[1];

    let userId = localStorage.getItem('userID');

    const { text } = this.state;
    axios.post('/addComment', {
      userId,
      postId,
      text
    })
    .then(res => {
      console.log(res)
      this.props.onSelectLanguage('s');
    })
    .catch(err => console.error(err));
  }

  render() {
    return (
      <form className="submitForm">
        {this.state.alert_message==="error"?<Erroralert/>:null}
        <input
          type="text"
          name="text"
          value={this.state.text}
          value={this.state.text}
          placeholder="Want to Post Something"
          onChange={this.handleChange}
        />
        <button type="submit" id="submitbtnid" onClick={this.handleSubmit}>Submit</button>
        <h2>{this.state.err}</h2>
      </form>
    );
  }
}

export default CommentForm;



