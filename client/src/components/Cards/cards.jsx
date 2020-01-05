import React from "react";
import "./cards.css"

const Card = props => (

    <div className="card img-container">
    <img alt={props.name}
    src={props.image} 
    id={props.id}
    onClick={() => props.onClick(props.id)} 
    className="shuffleScore"/> 
    </div>
  );

  export default Card;