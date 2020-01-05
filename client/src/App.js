import React, {
  Component
} from 'react';
import cardData from './cards.json';
import Card from './components/Cards/cards';
import Wrapper from "./components/Wrapper/wrapper";
import Header from "./components/Header/header";
import Score from './components/Score/Score';


class App extends Component {
  state = {
    cardData,
    clickedCards: [],
    score: 0,
    goal: 12
  };

  shuffleCardClick = id => {
    const clickedCards = this.state.clickedCards;

    if (clickedCards.includes(id)) {
      this.setState({
        clickedCards: [],
        score: 0
      });
      return;
    }else{
      clickedCards.push(id)

      if(clickedCards.length === 12) {
        this.setState({score: 12, clickedCards: []});
        console.log('You Win!');
        return;
    }
    this.setState({ cardData, clickedCards, score: clickedCards.length});

    for (let i = cardData.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i +1));
      [cardData[i], cardData[j]] = [cardData[j], cardData[i]];
    }
    }
  }
  
  render() {
      return ( 
        <div className="App">
        <Header className="App-header">
          <div className="jumbotron">
            <h1 className="display-4">Clicky Game</h1>
            <p className="lead">Click on an image to earn points, but don't click on any image more than once!</p>
            <hr className="my-4" />
          </div>
        </Header>
        
        <Score total={this.state.score} goal={12}/> 
        <Wrapper>
        {this.state.cardData.map(card => ( 
        <Card
        onClick={this.shuffleCardClick}
            key={card.id}
            id={card.id}
            image={card.image}
            alt={card.name}
            />
            ))} 
            </Wrapper>
            </div>
          );
        }
      }

      export default App;