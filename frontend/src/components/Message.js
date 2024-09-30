// src/components/Message.js

import React from 'react';

const Message = ({ message, isOwn }) => {
  return (
    <div
      style={{
        ...styles.messageContainer,
        justifyContent: isOwn ? 'flex-end' : 'flex-start',
      }}
    >
      <div
        style={{
          ...styles.messageBubble,
          backgroundColor: isOwn ? '#DCF8C6' : '#FFFFFF',
        }}
      >
        <p style={styles.messageText}>{message.text}</p>
        <span style={styles.timestamp}>{message.time}</span>
      </div>
    </div>
  );
};

const styles = {
  messageContainer: {
    display: 'flex',
    marginBottom: '10px',
  },
  messageBubble: {
    maxWidth: '60%',
    padding: '10px',
    borderRadius: '10px',
    boxShadow: '0 1px 1px rgba(0,0,0,0.1)',
    position: 'relative',
  },
  messageText: {
    margin: 0,
    paddingRight: '20px',
  },
  timestamp: {
    fontSize: '0.8em',
    color: '#999',
    position: 'absolute',
    bottom: '5px',
    right: '10px',
  },
};

export default Message;

