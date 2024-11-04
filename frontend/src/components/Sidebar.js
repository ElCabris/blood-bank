// src/components/Sidebar.js

import React from 'react';

const Sidebar = ({ users, selectUser, selectedUser }) => {
  return (
    <div style={styles.sidebarContainer}>
      <h2>Contactos</h2>
      <ul style={styles.userList}>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => selectUser(user)}
            style={{
              ...styles.userItem,
              backgroundColor:
                selectedUser?.id === user.id ? '#e0e0e0' : 'transparent',
            }}
          >
            <img src={user.avatar} alt={user.name} style={styles.avatar} />
            <span>{user.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  sidebarContainer: {
    width: '25%',
    borderRight: '1px solid #ccc',
    padding: '10px',
    boxSizing: 'border-box',
  },
  userList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  userItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px',
    cursor: 'pointer',
    borderRadius: '5px',
    marginBottom: '5px',
  },
  avatar: {
    width: '35px',
    height: '35px',
    borderRadius: '50%',
    marginRight: '10px',
  },
};

export default Sidebar;
