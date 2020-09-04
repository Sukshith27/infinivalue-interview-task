import React from 'react'

const Item = ({ item }) => {
  const poster = item.images.Poster_Art.url
  return (
    <div className="movie">
      <div>
        <img
          width="200"
          alt={`The item titled: ${item.title}`}
          src={poster}
        />
      </div>
      <h2>{item.title}</h2>
    </div>
  );
};


export default Item;