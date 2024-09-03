import React, { useState } from 'react';
import './Search.css'; // Import your CSS file for styling
import search from "/Font/Search.svg"
const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleChange = (e) => setSearchTerm(e.target.value);

  return (
    <div className="search-box">
      {!isFocused && !searchTerm && <img className="search-icon" src={search}/>}
      <input
      className='search_inp'
        type="text"
        value={searchTerm}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
