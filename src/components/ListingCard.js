import React, { useState } from "react";

function ListingCard({ listingInfo, onDelete }) {
  const [isFavorite, setIsFavorite] = useState(false)

  function favoriteClick() {
    setIsFavorite((isFavorite) => !isFavorite)
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listingInfo.image} alt={listingInfo.description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button className="emoji-button favorite active" onClick={favoriteClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={favoriteClick}>☆</button>
        )}
        <strong>{listingInfo.description}</strong>
        <span> · {listingInfo.location}</span>
        <button className="emoji-button delete" onClick={() => onDelete(listingInfo.id)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
