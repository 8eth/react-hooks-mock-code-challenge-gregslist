import React, {useState} from "react";

function ListingCard({listing}) {
  const [favorite, setFavorite] = useState(false)
  
  function handleFavToggle() {
    setFavorite(!favorite)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={handleFavToggle} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavToggle} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
