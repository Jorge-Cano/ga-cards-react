import React, { Component } from 'react';
import AddCard from './AddCard';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="row">
          <div className="col-md-4">
            <h1>Cards Against Assembly</h1>
          </div>
          <AddCard />
        </div>

      </header>
    );
  }
}

export default Header;
