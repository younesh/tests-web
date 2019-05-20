import React from "react";

import "./Card.css";

const HIDDEN_SYMBOL = "❓";

const Card = ({ card, feedback, onClicks }) => (
  <div className={`card ${feedback}`} onClick={() => onClicks(card)}>
    <span className="symbol">
      {feedback === "hidden" ? HIDDEN_SYMBOL : card}
    </span>
  </div>
);
export default Card;
