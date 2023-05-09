import React, { Component } from "react";

import { suitToSymbol } from "./helper.js";
import UIBut from "./uibut.js";

function AloneControl(props) {
  return (
    <div className={props.className}>
      <span className="control-label">Go alone?</span>
      <UIBut onClick={() => props.onClick(true)}>Yes</UIBut>
      <UIBut onClick={() => props.onClick(false)}>No</UIBut>
    </div>
  );
}

export class Bid1Controls extends Component {
  constructor() {
    super();
    this.state = { stage: "CALL" };
  }

  render() {
    switch (this.state.stage) {
      case "CALL":
        return (
          <div className={this.props.className}>
            <UIBut onClick={() => this.setState({ stage: "ALONE" })}>
              Pick it up
            </UIBut>
            <UIBut onClick={() => this.props.pass()}>Pass</UIBut>
          </div>
        );
      case "ALONE":
        return (
          <AloneControl
            className={this.props.className}
            onClick={alone => this.props.call(alone)}
          />
        );
      default:
        return null;
    }
  }
}

export class Bid2Controls extends Component {
  constructor() {
    super();
    this.state = { stage: "CALL" };
  }

  render() {
    switch (this.state.stage) {
      case "CALL":
        return (
          <div className={this.props.className}>
            <UIBut onClick={() => this.setState({ stage: "TRUMP" })}>
              Name trump
            </UIBut>
            <UIBut onClick={() => this.props.pass()}>Pass</UIBut>
          </div>
        );
      case "TRUMP":
        return (
          <div className={this.props.className}>
            <span className="control-label">Trump:</span>
            {"CDHS".split("").map(c => (
              <UIBut onClick={() => this.setState({ stage: "ALONE", trump: c })}>
                {suitToSymbol(c)}
              </UIBut>
            ))}
          </div>
        );
      case "ALONE":
        return (
          <AloneControl
            className={this.props.className}
            onClick={alone => this.props.call(this.state.trump, alone)}
          />
        );
      default:
        return null;
    }
  }
}
