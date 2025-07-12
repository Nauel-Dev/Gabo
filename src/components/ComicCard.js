import './ComicCard.css';
import React from 'react';

export default function ComicCard({ comic }) {
  return (
    <div className="comic-card">
      <img src={comic.image_url} alt={comic.title} />
      <h3>{comic.title}</h3>
      <p>{comic.description}</p>
    </div>
  );
}