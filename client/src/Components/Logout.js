import React from 'react'


export default class Logout extends React.Component {
  componentDidMount() {
    localStorage.setItem('token', '');
    localStorage.setItem('user', '');
    localStorage.setItem('userID', '');
    localStorage.setItem('auth', '');
    this.props.history.push('/displayPost');
  }
  render() {
    return (
      <div>

      </div>
    )
  }
}
