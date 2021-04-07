import React from 'react';
import './Card.css'


function Card(props) {
  return (
    <div className="card">
      <img className="card__img" src={props.img} alt=""/>
      <div className="card__content">{props.content}</div>
    </div>
  )
}


export default Card;