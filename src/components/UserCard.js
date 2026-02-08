import React from 'react';
import PropTypes from 'prop-types';

function UserCard({ user }) {
  return (
    <article
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '12px',
        maxWidth: '420px',
        backgroundColor: '#fff',
      }}
    >
      <img
        src={user.avatar_url}
        alt={`${user.login} avatar`}
        width={56}
        height={56}
        style={{ borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <strong>{user.login}</strong>
        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
          View profile
        </a>
      </div>
    </article>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserCard;
