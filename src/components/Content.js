import React from 'react';
import './Content.css'
import Card from './Card.js';

function Content(props) {

  let cards;
  if (Object.keys(props.searchResult).length === 0) {
    cards = '';
  }
  else {
    cards = props.searchResult.results.map((album, move) => {
      return <Card key={move} img={album.artworkUrl100} content={album.collectionName}/>
    })
  }
  
  return (
    <div className="search-result-container">
      <div className="search-result-info">
        {props.searchResult.resultCount ? `${props.searchResult.resultCount} results for "${props.inputText}"` : "Search Albums by ArtistName:"}
      </div>
      <div className="search-result-albums card-container">
        {cards}
      </div>
    </div>
  )
}


export default Content;