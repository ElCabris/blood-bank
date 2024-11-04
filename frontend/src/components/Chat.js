// src/components/Chat.js

import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './Sidebar';
import Message from './Message';

const Chat = () => {
  // Estado para almacenar todos los mensajes
  const [messages, setMessages] = useState([]);
  // Estado para el mensaje que el usuario está escribiendo
  const [input, setInput] = useState('');
  // Referencia para manejar la conexión WebSocket (futuro backend)
  const ws = useRef(null);
  // Referencia para mantener el scroll al final de los mensajes
  const messagesEndRef = useRef(null);
  // Estado para la lista de usuarios (ficticios por ahora)
  const [users] = useState([
    {
      id: 1,
      name: 'Alice',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    {
      id: 2,
      name: 'Bob',
      avatar: 'https://i.pravatar.cc/150?img=2',
    },
    {
      id: 3,
      name: 'Charlie',
      avatar: 'https://i.pravatar.cc/150?img=3',
    },
  ]);
  // Estado para el usuario seleccionado
  const [selectedUser, setSelectedUser] = useState(null);

  // useEffect para establecer la conexión WebSocket al montar el componente
  useEffect(() => {
    // Aquí iría la URL de tu WebSocket cuando integres con FastAPI
    // ws.current = new WebSocket('ws://localhost:8000/ws/chat');

    // Simularemos la recepción de mensajes para este ejemplo
    // Puedes eliminar esta simulación cuando integres el backend
    const simulateIncomingMessages = () => {
      const interval = setInterval(() => {
        const fakeMessage = {
          text: 'Mensaje de ejemplo',
          time: new Date().toLocaleTimeString(),
          sender: 'Alice',
        };
        setMessages((prevMessages) => [...prevMessages, fakeMessage]);
        scrollToBottom();
      }, 10000); // Simula un mensaje cada 10 segundos

      return () => clearInterval(interval);
    };

    const wsCurrent = ws.current; // Crea una copia del valor de la referencia

    simulateIncomingMessages();

    // Limpiar la conexión WebSocket al desmontar el componente
    return () => {
      if (wsCurrent) {
        wsCurrent.close();
      }
    };
  }, []);
  // Función para enviar un mensaje (futuro WebSocket)
  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim() === '') return; // Evita enviar mensajes vacíos

    const newMessage = {
      text: input,
      time: new Date().toLocaleTimeString(),
      sender: 'You',
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInput('');
    scrollToBottom();

    // Enviar el mensaje a través del WebSocket cuando esté integrado
    // if (ws.current && ws.current.readyState === WebSocket.OPEN) {
    //   ws.current.send(input);
    // } else {
    //   console.error('WebSocket no está conectado');
    // }
  };

  // Función para desplazar el scroll al final de los mensajes
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Función para seleccionar un usuario de la barra lateral
  const selectUser = (user) => {
    setSelectedUser(user);
    // Filtrar mensajes por usuario seleccionado si tienes lógica de backend
    // Por ahora, solo resetearemos los mensajes
    setMessages([]);
  };

  return (
    <div style={styles.chatContainer}>
      {/* Barra Lateral de Usuarios */}
      <Sidebar
        users={users}
        selectUser={selectUser}
        selectedUser={selectedUser}
      />

      {/* Área de Mensajes */}
      <div style={styles.messagesArea}>
        <h2 style={styles.chatHeader}>
          {selectedUser
            ? `Chat con ${selectedUser.name}`
            : 'Selecciona un contacto'}
        </h2>
        <div style={styles.messagesContainer}>
          {selectedUser ? (
            messages.map((msg, index) => (
              <Message key={index} message={msg} isOwn={msg.sender === 'You'} />
            ))
          ) : (
            <p style={styles.noUserSelected}>
              Por favor, selecciona un contacto para comenzar el chat.
            </p>
          )}
          <div ref={messagesEndRef} />
        </div>
        {selectedUser && (
          <form onSubmit={sendMessage} style={styles.form}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu mensaje..."
              style={styles.input}
            />
            <button type="submit" style={styles.button}>
              Enviar
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

// Estilos en línea para el componente
const styles = {
  chatContainer: {
    display: 'flex',
    height: '80vh',
    width: '90%',
    margin: '20px auto',
    border: '1px solid #ccc',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
  },
  messagesArea: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  chatHeader: {
    padding: '10px',
    borderBottom: '1px solid #ccc',
    margin: 0,
    backgroundColor: '#f5f5f5',
  },
  messagesContainer: {
    flex: 1,
    padding: '10px',
    overflowY: 'auto',
    backgroundColor: '#fafafa',
  },
  form: {
    display: 'flex',
    padding: '10px',
    borderTop: '1px solid #ccc',
    backgroundColor: '#f5f5f5',
  },
  input: {
    flex: 1,
    padding: '10px',
    borderRadius: '20px',
    border: '1px solid #ccc',
    marginRight: '10px',
    outline: 'none',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '20px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
  noUserSelected: {
    textAlign: 'center',
    color: '#777',
    marginTop: '20px',
  },
};

export default Chat;
