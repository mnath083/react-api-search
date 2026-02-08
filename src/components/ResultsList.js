import React from 'react';
import PropTypes from 'prop-types';
import UserCard from './UserCard';

function ResultsList({ users, isLoading, error }) {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <div
        role="alert"
        style={{
          padding: '12px',
          border: '1px solid #f5c2c7',
          borderRadius: '8px',
          backgroundColor: '#f8d7da',
          color: '#842029',
        }}
      >
        {error}
      </div>
    );
  }

  if (!users.length) {
    return <p>No results</p>;
  }

  return (
    <section
      aria-label="Search results"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        gap: '12px',
      }}
    >
      {users.map((user) => (
        <UserCard key={user.id ?? user.login} user={user} />
      ))}
    </section>
  );
}

ResultsList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

ResultsList.defaultProps = {
  error: null,
};

export default ResultsList;
