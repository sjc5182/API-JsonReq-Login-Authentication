import React, { Component } from 'react';
import './App.css';
import Login from './login.js';
import Packages from './package.js';
import { BrowserRouter as Router, Route} from "react-router-dom";



class App extends Component {
 
  render() {
    return (
      <Router>
    <div>
      <Route path="/login" component={Login} />
      <Route path="/packages" component={Packages} />
    </div>
  </Router>
    );
  }
}

export default App;
