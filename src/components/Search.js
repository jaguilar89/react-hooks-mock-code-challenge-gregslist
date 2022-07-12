import React from "react";

function Search( {search, setSearch }) {
  function handleSubmit(event) {
    event.preventDefault();
    setSearch(search);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
