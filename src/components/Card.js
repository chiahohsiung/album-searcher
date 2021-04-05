import React from 'react';
import './Card.css'


class Card extends React.Component {
	render() {
		return (
			<div className="card">
        <img className="card__img" src={this.props.img} alt=""/>
        <div className="card__content">{this.props.content}</div>
      </div>
		)
	}
}


export default Card;