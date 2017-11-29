import React, { Component } from 'react';
import './AddCard.css';

import { database } from './utils/firebase';

class CardForm extends Component{
  _handleSubmit(e){
    e.preventDefault();
    let newCard = this.refs.newCardText.value;
    // run a new function (addJoke) by passing it to the string to add to our array of jokes in the container
    this.props.addCard(newCard);
    this.refs.newJokeText.value = '';
  }

  render(){
    return(
      <form onSubmit={ this._handleSubmit.bind(this) }>
        <input type="text" ref="newCardText"/>
        <input type="submit" value="Add New Card" />
      </form>
    )
  }
}

export default CardForm;
