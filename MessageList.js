import React, { useEffect, useRef } from 'react';
import { db } from '../../config/firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

const MessageList = ({ chatId }) => {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const q = query(
      collection(db, 'chats', chatId, 'messages'),
      orderBy('timestamp')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => doc.data()));
      scrollToBottom();
    });

    return unsubscribe;
  }, [chatId]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="message-list">
      {messages.map((msg, index) => (
        <div key={index} className={`message ${msg.sender === auth.currentUser.uid ? 'sent' : 'received'}`}>
          <p>{msg.text}</p>
          <span>{new Date(msg.timestamp?.toDate()).toLocaleTimeString()}</span>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;