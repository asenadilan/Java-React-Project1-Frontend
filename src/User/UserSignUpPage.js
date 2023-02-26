import React, { Component } from 'react'

export default class UserSignUpPage extends Component {
  render() {
    return (
      <form>
        <div>Sign Up</div>
        <div>
          <label>Username</label>
          <input />
        </div>
        <div>
          <label>Display name</label>
          <input />
        </div>
        <div>
          <label>Password</label>
          <input type="password" />
        </div>

        <div>
          <label>Password Repeat</label>
          <input type="password" />
        </div>
        <button> Sign up</button>
      </form>
    )
  }
}
