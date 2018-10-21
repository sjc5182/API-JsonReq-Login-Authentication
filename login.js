import React, { Component } from 'react';
import Axios from 'axios';
import Cookie from 'js-cookie';
import './App.css';


class Login extends Component {
  state = {
    email: null,
    password: null,
    error: null
  }
  
  componentDidMount() {
    // already logged in
    if (Cookie.get('token')) {
      window.location= '/packages'
    }
  }

  handleOnSubmit = event =>{
    event.preventDefault();
    Axios.post("http://disclosures-stage.herokuapp.com/auth/local", {
      email: this.state.email,
      password: this.state.password,
    })
      .then((res) => {
        Cookie.set('token', res.data.token)
        window.location = '/packages';
      })
      .catch((error) =>{
        this.setState({
          error: "fail to log in"
        })
      })
  }
  
  handleChange = (e) =>{
    const {name, value} = e.target;
    this.state[name] = value
    this.setState(this.state)
  }
  
  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> Login Discousre IO test</h1>
        </header>
        
         <input type="text" name="email" onChange={this.handleChange}/>
          <input type="text" name="password" onChange={this.handleChange}/>
          <button>Login</button>
          <p>{this.state.error}</p>
        
      </div>
      </form>
    );
  }
}

export default Login;
