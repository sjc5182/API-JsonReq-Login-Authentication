import React, { Component } from 'react';
import Axios from 'axios';
import Cookie from 'js-cookie';
class Packages extends Component {
  state = {
    data: []
  }
  componentDidMount() {
    if (Cookie.get('token')) {
      Axios.get("http://disclosures-stage.herokuapp.com/api/v1/packages", {
        headers: {
          Authorization: `Bearer ${Cookie.get('token')}`
        }
      }).then(res=>{
        this.setState({
          data: res.data.packages
        })
      })
    }
    else {
      window.location= '/login'
    }
  }

  render() {
    return (
      <div>
        {this.state.data.map((test, index) => 
          <li key = {index}>{test.property_address} </li>)}
      </div>
    );
  }
}

export default Packages;
