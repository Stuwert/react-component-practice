import React from 'react';
import PropTypes from 'prop-types';
import api from '../../utils/api';
import { Link } from 'react-router-dom';

require('./index.css');

// state
// lifecycle event
// UI
// ^^ these are your actual concerns
// JS/HTML/CSS is a technology concern

// let Languages = (props) => {
//   return (
//     <ul>
//       {languages.map(function (lang) {
//         return (
//           <li key={lang}
//               className={ props.getClassFromState(lang) }
//               onClick={ props.updateLanguage.bind(null, lang) }
//           >
//             {lang}
//           </li>
//         )
//       }, this)}
//     </ul>
//   )
// }

let GameGrid = (props) => (
  <ul className='popular-list'>
    {props.games.map((game, index) => (
        <div key={game.rank} className="game-item">
          <h3 className="popular-rank">#{index + 1}</h3>
          <div>
            <img
            className="cover"
            src={game.thumbnail}
            alt={"Cover for " + game.name }
            />
          </div>
          <Link to={`/game/${game.gameId}`}>{game.name}</Link>
          <p>{game.yearPublished}</p>
        </div>
      )
    )}
  </ul>
);

GameGrid.propTypes = {
  games: PropTypes.array.isRequired
}

export default class Popular extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    this.updateGames = this.updateGames.bind(this);
    // this.getClassFromState = this.getClassFromState.bind(this);
  }

  componentDidMount() {
    this.updateGames();
  }

  updateGames() {
    api.fetchPopularGames()
      .then((data) => {
        this.setState(() => ({games : data}));
      })
  }

  render() {
    return <div className="grid">
        { !this.state.games
          ? <p>LOADING</p>
          : <GameGrid games={ this.state.games } />
        }
      </div>
  }
}
