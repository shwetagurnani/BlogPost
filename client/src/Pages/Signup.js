import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';


import Navigation from "../Shared/Navigation";
import Erroralert from './ErrorAlertSignup';


class Signup extends React.Component {
  state = {
    showPass: true,
    name: '',
    email: '',
    password: '',
    alert_message: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let { name, email, password } = this.state;
    axios.post('/auth/add', { name: name, email: email, password: password })
      .then(res => {
        if (res.data.success) {
          localStorage.setItem('token', res.data.accessToken)
          localStorage.setItem('userID', res.data.userID)
          localStorage.setItem('auth', "true")
          this.props.history.push('/displayPost');
        } else {
          this.setState({alert_message: 'error'})
          this.props.history.push('/signup');
        }
      })
  }

  logoutHandler = () => {
    localStorage.setItem('userID', '');
    localStorage.setItem('token', '');
    localStorage.setItem('userID', '');
    localStorage.setItem('auth', 'false');
  };

  render() {
    return (
      <>
      <Navigation onLogout={this.logoutHandler} />
      <section className="form">
        {this.state.alert_message==="error"?<Erroralert/>:null}
        <h2 className="title">Sign Up:</h2>
          <form id="log-in" onSubmit={this.handleSubmit}>
            <label>Name:</label>
            <input type="text" required name="name" onChange={(e) => this.setState({ name: e.target.value })} />
            <label>Email:</label>
            <input type="email" required email="email" onChange={(e) => this.setState({ email: e.target.value })} />
            <div id="show-pass">
              <div className="signpass">
              <label style={{ paddingBottom: "10px" }}>Password</label>
              <input type={this.state.showPass ? "password" : "text"} required
                onChange={(e) => this.setState({ password: e.target.value })}/>
              </div>  
              <div id="check-box">
                <input id="check" type="checkbox" onClick={() => this.setState({ showPass: !this.state.showPass })} />
                <label>Show Password</label>
              </div>
            </div>
            <input type="submit" className="btn" />
            <Link to="/login">Already have an account? Login</Link>
          </form>
      </section>
      </>
    );
  }
}

export default Signup;
