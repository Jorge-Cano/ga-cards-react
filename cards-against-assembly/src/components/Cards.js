import React, { Component } from 'react';

import './App.css';

class Cards extends Component {
  render(){
    return(
      <div>
      { this.props.cards.map((jokeString, i ) => <Card key={i} text={CardString} /> ) }
      </div>
    )
  }
}
