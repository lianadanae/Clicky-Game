import React from "react";
import "./Score.css";

const Score = props => (
    <div className="gameScore">Score: {props.total} | Goal Score: {props.goal}</div>
  );

  export default Score;