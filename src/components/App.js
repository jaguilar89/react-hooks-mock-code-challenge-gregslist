import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then((res) => res.json())
    .then((listingData) => setListings(listingData))
  }, []);

  function removeListing(id) {
    const filteredList = listings.filter((listing) => listing.id !== id);

    fetch(`http://localhost:6001/listings/${id}`, {method: "DELETE"})
    .then(() => console.log('deleted item'))

    setListings(filteredList)
  };

  const listingsToDisplay = listings.filter((listing) => listing.description.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="app">
      <Header search={search} setSearch={setSearch}/>
      <ListingsContainer listings={listingsToDisplay} onDelete={removeListing}/>
    </div>
  );
}

export default App;
