import React from 'react';
import { fetchGameById } from '../../utils/api';


const GameDetails = (props) => {
  let {details} = props;
  return (
    <div>
      <img src={details.thumbnail} />
      <p>Playing Time {details.playingTime}</p>
      <p>Rating {details.bggRating}</p>
      <ul>
        <li>Mechanics</li>
        {details.mechanics.map((mechanic, index) => (<li key={index}>{mechanic}</li>))}
      </ul>
    </div>
  )
};

export default class GameInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { test: "123"};
    this.setGameInfo = this.setGameInfo.bind(this);
  }

  componentDidMount(){
    let { params : { gameId } } = this.props.match;
    this.setGameInfo(gameId);
  }

  setGameInfo(gameId) {
    // console.log('mounted');
    fetchGameById(gameId)
      .then((result) => {
        // console.log('hllo');
        // console.log(this.state);
        // console.log(result);
        this.setState(()=> ({ gameInfo : result }));
      })
    // console.log(this.state);
  }

  render() {
    console.log(this.state.gameInfo);
    // Don't actually need the below. Just practicing destructuring.
    // let { params : { gameId } } = this.props.match;
    return (
      <div>
        { !this.state.gameInfo ?
          "Loading..." :
          <GameDetails details={this.state.gameInfo} />
        }
      </div>
    )
  }
}
