import './App.css';
import React from 'react';
import Header from './components/Header.js';
import Content from './components/Content.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      searchResult: {}
    }
  }

  onResultChange(searchResult) {
    this.setState({searchResult: searchResult})
  }

  render() {
    return (
      <div>
        <Header onResultChange={(searchResult) => {this.onResultChange(searchResult)}}/>
        <Content 
          searchResult={this.state.searchResult}
        />
      </div>
    );
  } 
}

export default App;
