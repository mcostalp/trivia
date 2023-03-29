import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    const { name, gravatar, score } = this.props;
    return (
      <header className="flex items-center justify-between text-2xl mb-10 p-4 bg-orange-600 rounded-xl text-white">
        <div>
          <img
            src={gravatar}
            alt="user gravatar"
            data-testid="header-profile-picture"
          />
        </div>
        <div>
          <p data-testid="header-player-name">{name}</p>
          <p data-testid="header-score">{score}</p>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  gravatar: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

const mapStateToProps = ({ user, player }) => ({
  name: user.name,
  gravatar: user.gravatar,
  score: player.score,
});

export default connect(mapStateToProps)(Header);
