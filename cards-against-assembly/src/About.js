import React, {Component} from 'react';

class About extends Component {
  render(){
    return(
      <div>
      <h3>To start the game, each player draws ten White Cards.</h3>
      <h3>The person who most recently pooped begins as the Card Czar and plays a Black Card. The Card Czar reads the question or fill-in-the-blank phrase on the Black Card out loud.</h3>
      <h3>Everyone else answers the question or fills in the blank by passing one White Card, face down, to the Card Czar.</h3>
      <h3>The Card Czar shuffles all of the answers and shares each card combination with the group. For full effect, the Card Czar should usually re-read the Black Card before presenting each answer. The Card Czar then picks the funniest play, and whoever submitted it gets one Awesome Point.</h3>
      <h3>After the round, a new player becomes the Card Czar, and everyone draws back up to ten White Cards</h3>
      </div>
    )
  }
}

export default About;
