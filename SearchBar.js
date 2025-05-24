import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const { performSearch } = useContext(SearchContext);
  const history = useHistory();

  const handleSearch = async (e) => {
    e.preventDefault();
    const results = await performSearch(query);
    history.push({
      pathname: '/search',
      state: { results, query }
    });
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search convoys, users, hashtags..."
      />
      <button type="submit">
        <i className="search-icon">🔍</i>
      </button>
    </form>
  );
};

export default SearchBar;