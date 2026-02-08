import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', gap: '8px', alignItems: 'center', margin: '16px 0' }}
      aria-label="GitHub user search form"
    >
      <label htmlFor="search-query-input">Search GitHub users</label>
      <input
        id="search-query-input"
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Enter username"
        style={{ padding: '8px', minWidth: '240px' }}
      />
      <button type="submit" style={{ padding: '8px 12px', cursor: 'pointer' }}>
        Search
      </button>
    </form>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
