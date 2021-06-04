import { Component } from "react";

import "./styles.css";

//as props ja estão implicitas na "classe"
export class Button extends Component {
  render() {
    const { text, onClick, disabled } = this.props;
    return (
      <button disabled={disabled} onClick={onClick} className="button">
        {text}
      </button>
    );
  }
}
