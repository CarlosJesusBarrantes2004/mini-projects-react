import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { useEffect, useState } from 'react';
import Picker from 'emoji-picker-react';

const SendMessage = () => {
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState('close');
  const [selectedEmoji, setSelectedEmoji] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, 'messages'), {
      text: message,
      name: displayName,
      uid,
      photo: photoURL,
      timestamp: serverTimestamp(),
    });
    setMessage('');
    setSelectedEmoji('');
  };

  const emoji = () => setOpen('open');
  const closeEmoji = () => setOpen('close');

  const onEmojiClick = (emojiObject) => {
    setSelectedEmoji(emojiObject.emoji);
  };

  useEffect(() => {
    setMessage(`${message}${selectedEmoji}`);
  }, [selectedEmoji]);

  return (
    <form onSubmit={(e) => sendMessage(e)} className="flex bg-white px-2 py-3">
      <button type="button" onClick={emoji}>
        <i className="fa-solid fa-face-smile-beam"></i>
      </button>
      <div className={open}>
        <button type="button" onClick={closeEmoji}>
          <i className="fa-solid fa-x"></i>
        </button>
        <Picker onEmojiClick={onEmojiClick} />
      </div>
      <input
        type="text"
        placeholder="Enter your message here"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="rounded-md text-sm text-gray-600 font-normal p-2 outline-none w-full mx-2 border"
      />
      <button
        type="submit"
        className="bg-blue-700 text-xs font-semibold text-white rounded-md px-6 py-2 hover:bg-blue-600 transition duration-150 ease-in"
      >
        Send
      </button>
    </form>
  );
};

export default SendMessage;
