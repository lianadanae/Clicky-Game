import React, {
  Component
} from 'react';
import Thumbnail from './components/Thumbnail';
import Score from './components/Score';
class App extends Component {
  state = {
    tiles: [
      'https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014',
      'https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014',
      'https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014'
    ],
    score: 0,
    topScore: 0
  };

  clickedTiles = [

  ];

  //empty clickedTiles array
  //deploy
  handleTileClick = (evt) => {
    
    console.log(evt);
    const clickedTile = evt.target.src;

    if (this.clickedTiles.includes(clickedTile)) {
      this.setState({
        score: 0
      });
      return;
    }

    const newScore = this.state.score + 1;
    const topScore = newScore > this.state.topScore ?
      newScore :
      this.state.topScore;

    this.clickedTiles.push(clickedTile);

    const shuffled = this.state.tiles.sort(() => 0.5 - Math.random());
    this.setState({
      tiles: shuffled,
      score: newScore,
      topScore: topScore
    });
  }

  render() {
      return ( 
        <div className = "App">
        <Score score={this.state.score} topScore={this.state.topScore}/> 
        {this.state.tiles.map((tile, idx) => <Thumbnail 
        src={tile}
            key = {
              idx
            }
            onClick = {
              this.handleTileClick
            }
            />)
            } 
            </div>
          );
        }
      }

      export default App;