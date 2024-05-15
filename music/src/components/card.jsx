import React from 'react';
import './card.css';

const Card = ({ imageUrl,name,movieOrAlbum,musicDirector }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={name} />
      <div className="song-details">
        <h2>{name}</h2>
        <p><strong>Movie/Album:</strong> {movieOrAlbum}</p>
        <p><strong>Music Director:</strong> {musicDirector}</p>
      </div>
    </div>
  );
};

export default Card;
