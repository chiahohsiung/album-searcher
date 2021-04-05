import React from 'react';
import './Header.css';

class Header extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      searchResult: {}
    }
  }

  onInputChange = (event) => {
  	this.setState({inputText: event.target.value});
  }

  onButtonSubmit = (event) => {
    const url = `https://itunes.apple.com/search?term=${this.state.inputText}&media=music&entity=album&attribute=artistTerm&limit=500`;
    console.log(`fetching ${this.state.inputText}`);
    fetch(url)
      .then((response) => response.json())
      .then(data => {
      	console.log(data);
      	this.props.onResultChange(data);
    	})
  }
 

	render() {
		return (
			<div className="header">
				<div className="header__form">
					<input 
						onChange={this.onInputChange} // why func obj not func maybe bc arrow?
						type="text" className="header__input" placeholder="Search"
					/>
					<button 
						onClick={this.onButtonSubmit}
						className="header__button">
						<svg className="button-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M17.545 15.467l-3.779-3.779c0.57-0.935 0.898-2.035 0.898-3.21 0-3.417-2.961-6.377-6.378-6.377s-6.186 2.769-6.186 6.186c0 3.416 2.961 6.377 6.377 6.377 1.137 0 2.2-0.309 3.115-0.844l3.799 3.801c0.372 0.371 0.975 0.371 1.346 0l0.943-0.943c0.371-0.371 0.236-0.84-0.135-1.211zM4.004 8.287c0-2.366 1.917-4.283 4.282-4.283s4.474 2.107 4.474 4.474c0 2.365-1.918 4.283-4.283 4.283s-4.473-2.109-4.473-4.474z"></path></svg>
					</button>
				</div>
			</div>
		);
	}
}

export default Header;