import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDelete }) {
  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => <ListingCard listingInfo={listing} onDelete={onDelete}/>)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
