// src/components/Messages.js
import React, { useState, useEffect } from 'react';
import { collection, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db, auth } from '../utilities/firebase';

const Messages = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  // Fetch messages from Firestore in real-time
  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('createdAt'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messagesData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setMessages(messagesData);
    });

    return () => unsubscribe(); // Unsubscribe from real-time updates on component unmount
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();

    if (message.trim() === '') {
      return;
    }

    const user = auth.currentUser;

    if (user) {
      try {
        await addDoc(collection(db, 'messages'), {
          text: message,
          createdAt: new Date(),
          userId: user.uid,
          userName: user.email
        });
        setMessage(''); // Clear message input after sending
      } catch (error) {
        console.error('Error sending message: ', error);
      }
    }
  };

  return (
    <div>
      <div className="messages-container">
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.userId === auth.currentUser?.uid ? 'my-message' : ''}`}>
            <p><strong>{msg.userName}</strong>: {msg.text}</p>
          </div>
        ))}
      </div>

      <form onSubmit={sendMessage} className="send-message-form">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Messages;
