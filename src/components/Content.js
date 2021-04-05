import React from 'react';
import './Content.css'
import Card from './Card.js';

class Content extends React.Component {
  render() {
    let cards;
    if (Object.keys(this.props.searchResult).length === 0) {
      cards = '';
    }
    else {
      cards = this.props.searchResult.results.map((album, move) => {
        return <Card key={move} img={album.artworkUrl100} content={album.collectionName}/>
      })
    }
    
    return (
      <div className="search-result-container">
        <div className="search-result-info">
          {this.props.searchResult.resultCount ? `${this.props.searchResult.resultCount} results` : "Search Albums by ArtistName:"}
        </div>
        <div className="search-result-albums card-container">
          {cards}
        </div>
      </div>
    )   
  }
}


export default Content;