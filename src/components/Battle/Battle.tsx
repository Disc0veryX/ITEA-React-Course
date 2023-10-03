import React from "react";
import { Link } from "react-router-dom";
import { PlayerInput } from './PlayerInput';
import { PlayerPreview } from './PlayerPreview';

interface IBattleState {
  playerOneName: string;
  playerTwoName: string;
  playerOneImage: null | string;
  playerTwoImage: null | string;
}

export default class Battle extends React.Component<{}, IBattleState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null
    }
  }

  handleSubmit = (id: string, username: string): void => {
    this.setState((prevState: IBattleState) => ({
      ...prevState,
      [id + 'Name']: username,
      [id + 'Image']: 'https://github.com/' + username + '.png?size=200'
    }))
  }

  handleReset = (id: string): void => {
    this.setState((prevState: IBattleState) => ({
      ...prevState,
      [id + 'Name']: '',
      [id + 'Image']: null
    }))
  }

  render() {
    // console.log(this.state, 'state');
    return (
      <div>
        <div className="row">
          {!this.state.playerOneImage ?
            <PlayerInput 
              id="playerOne"
              label="Player One"
              onSubmit={this.handleSubmit} /> :
            <PlayerPreview
              avatar={this.state.playerOneImage}
              username={this.state.playerOneName}>
              <button className="reset" onClick={this.handleReset.bind(this, 'playerOne')}>Reset</button>
            </PlayerPreview>
          }
          {!this.state.playerTwoImage ?
            <PlayerInput 
              id="playerTwo"
              label="Player Two"
              onSubmit={this.handleSubmit} /> :
            <PlayerPreview
              avatar={this.state.playerTwoImage}
              username={this.state.playerTwoName}>
              <button className="reset" onClick={this.handleReset.bind(this, 'playerTwo')}>Reset</button>
            </PlayerPreview>
          }
        </div>
        {this.state.playerOneImage && this.state.playerTwoImage &&
          <Link 
            className="button"
            to={{
              pathname: '/battle/results', 
              search: `?playerOneName=${this.state.playerOneName}&playerTwoName=${this.state.playerTwoName}`
            }}>
              Battle
          </Link>
        }
      </div>
    );
  }
}