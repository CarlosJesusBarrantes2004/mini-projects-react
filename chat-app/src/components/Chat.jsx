import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';
import Message from './Message';
import SendMessage from './SendMessage';

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const newQuery = query(collection(db, 'messages'), orderBy('timestamp'));

    const unsubscribe = onSnapshot(newQuery, (querySnapshot) => {
      let currentMessages = [];
      querySnapshot.forEach((doc) => {
        currentMessages.push({ content: doc.data(), id: doc.id });
      });
      setMessages(currentMessages);
    });

    return unsubscribe;
  }, []);

  return (
    <div className="flex-1 rounded-xl bg-slate-100 border-2 border-slate-200 ml-5 p-6 flex flex-col justify-between">
      <div className="max-h-96 overflow-y-auto bg-white rounded-md p-6">
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message.content}></Message>
          ))}
      </div>
      <SendMessage></SendMessage>
    </div>
  );
};

export default Chat;
