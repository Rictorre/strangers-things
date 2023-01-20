import React, { useEffect, useState } from "react";
import { fetchPostings } from "../api";

const Search = ({ postings, setFilteredPosts }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchResults = postings.filter((posting) => {
      const lowerTitle = posting.title.toLowerCase();
      const lowerDescription = posting.description.toLowerCase();
      const lowerSearch = search.toLowerCase();
      if (lowerTitle.includes(lowerSearch)) {
        return true;
      } else if (lowerDescription.includes(lowerSearch)) {
        return true;
      } else {
        return false;
      }
    });
    setFilteredPosts(searchResults);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} method="get">
        <label htmlFor="header-search">
          <span className="visually-hidden"></span>
        </label>
        <input id="header-search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
          
          placeholder="Search Stranger's things..."
          name="search"
        />
        <button id="submit" type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;