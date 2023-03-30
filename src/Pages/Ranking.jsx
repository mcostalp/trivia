import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { newGame } from "../redux/actions";

class Ranking extends Component {
  state = {
    ranking: [],
  };

  componentDidMount() {
    this.setState({
      ranking: JSON.parse(localStorage.getItem("ranking")),
    });
  }

  handleGoHomeClick = () => {
    const { history, dispatch } = this.props;
    dispatch(newGame());
    history.push("/trivia");
  };

  render() {
    const { ranking } = this.state;
    return (
      <div className="w-80 pb-4 px-4 bg-orange-300 rounded-xl shadow-md shadow-white">
        <h1 data-testid="ranking-title" className="text-4xl text-center mb-4">
          Ranking
        </h1>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th> </th>
              <th>Nome</th>
              <th>Pontos</th>
            </tr>
          </thead>
          <tbody>
            {ranking.length > 0 &&
              ranking
                .sort((a, b) => b.score - a.score)
                .map((player, index) => (
                  <tr data-testid="ranking-player" key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <img src={player.picture} alt="gravatar" />
                    </td>
                    <td data-testid={`player-name-${index}`}>{player.name}</td>
                    <td data-testid={`player-score-${index}`}>
                      {player.score}
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
        <button
          data-testid="btn-go-home"
          type="submit"
          onClick={this.handleGoHomeClick}
          className="w-full mt-5"
        >
          Go Home
        </button>
      </div>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Ranking);
