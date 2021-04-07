import './App.css';
import React from 'react';
import Header from './components/Header.js';
import Content from './components/Content.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: localStorage.getItem("inputText") ? localStorage.getItem("inputText") : "",
      searchResult: {}
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.onButtonSubmit = this.onButtonSubmit.bind(this);
  }

  onResultChange(searchResult) {
    this.setState({searchResult: searchResult})
  }


  // Header props
  onInputChange = (event) => {
    console.log(event.target.value)
    this.setState({inputText: event.target.value});
  }

  onButtonSubmit = (event) => {
    const url = `https://itunes.apple.com/search?term=${this.state.inputText}&media=music&entity=album&attribute=artistTerm&limit=500`;
    console.log(`fetching ${this.state.inputText}`);
    fetch(url)
      .then((response) => response.json())
      .then(data => {
        console.log(data);
        this.onResultChange(data);
      })
    // store input text in local storage
    localStorage.setItem("inputText", this.state.inputText);
  }



  componentDidMount() {
    console.log("App mounted")
    if (this.state.inputText) {
      const inputText = this.state.inputText
      const url = `https://itunes.apple.com/search?term=${inputText}&media=music&entity=album&attribute=artistTerm&limit=500`;
      console.log(`fetching ${inputText}`);
      fetch(url)
        .then((response) => response.json())
        .then(data => {
          console.log(data);
          this.onResultChange(data);
        })
    }
  }

  render() {
    return (
      <div>
        <Header
          inputText={this.state.inputText}
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <Content 
          inputText={this.state.inputText}
          searchResult={this.state.searchResult}
        />
      </div>
    );
  } 
}

export default App;
