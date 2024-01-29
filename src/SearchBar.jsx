import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    const result = onSearch(searchTerm);
    setSearchResult(result);
  };

  const handleKeyPress = (e) => {
    // Trigger search when Enter key is pressed
    if (e.key === 'Enter') {
      const result = onSearch(searchTerm);
      setSearchResult(result);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSearch}>Search</button>

      {/* Display the search term with background color */}
      {searchResult && (
        <div style={{ backgroundColor: 'green', color: 'white', padding: '5px', marginTop: '5px' }}>
          Search Result: {searchResult}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
