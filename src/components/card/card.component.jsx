import React from "react";
import "./card.styles.css";

export const Card = props => (
  <div className="card-container">
    <img alt = 'robo' src = {`http://robohash.org/${props.robo.id}?size=180x180`} />
    <h1>{props.robo.name}</h1>
    <p>{props.robo.email}</p>
  </div>
);
