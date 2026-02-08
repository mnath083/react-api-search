import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ResultsList from './components/ResultsList';
import { searchGithubUsers } from './api';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    setIsLoading(true);
    setError(null);

    try {
      const foundUsers = await searchGithubUsers(query);
      setUsers(foundUsers);
    } catch (err) {
      setUsers([]);
      setError(err.message || 'Something went wrong while searching GitHub users.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="App"
      style={{
        maxWidth: '960px',
        margin: '0 auto',
        padding: '24px 16px',
        textAlign: 'left',
      }}
    >
      <header style={{ marginBottom: '16px' }}>
        <h1 style={{ marginBottom: '8px' }}>GitHub User Search</h1>
        <p style={{ margin: 0, color: '#555' }}>
          Enter a GitHub username or keyword to search matching profiles.
        </p>
      </header>

      <SearchBar onSearch={handleSearch} />
      <ResultsList users={users} isLoading={isLoading} error={error} />
    </div>
  );
}

export default App;
