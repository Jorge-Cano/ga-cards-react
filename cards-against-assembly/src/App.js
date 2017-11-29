import React, { Component } from 'react';
import {Link, IndexLink} from 'react-router';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Cards Against Assembly</h2>
        </div>
          <ul className="header">
            <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
            <li><Link to="/AddNewCard" activeClassName="active">AddNewCard</Link></li>
            <li><Link to="/About" activeClassName="active">About</Link></li>
          </ul>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
