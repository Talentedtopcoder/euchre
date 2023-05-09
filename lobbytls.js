import React, { Component } from "react";
import UIBut from "./uibut.js";

class LobbyTools extends Component {
  constructor() {
    super();
    this.state = { lobbies: [] };
  }

  componentDidMount() {
    this.props.session.call("get_lobbies", []).then(res => this.setState({ lobbies: res }));
  }

  lobbyList() {
    return (
      <div className="lobbyList">
        {Object.entries(this.state.lobbies).map(([key, value]) => (
          <UIBut onClick={() => this.props.joinLobby(Number(key))} key={key}>{value}</UIBut>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div>
        <UIBut onClick={() => this.props.createLobby("cool lobby")}>
          Create lobby
        </UIBut>
        {this.lobbyList()}
      </div>
    );
  }
}

export default LobbyTools;
