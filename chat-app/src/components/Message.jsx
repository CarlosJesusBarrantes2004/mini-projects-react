import { auth } from '../firebase';
import { formatDate } from './helpers/index';

const Message = ({ message }) => {
  let style = 'other-message';

  if (auth.currentUser) {
    const user = auth.currentUser.uid;
    const newUser = message.uid;
    style = user === newUser ? 'my-message' : 'other-message';
  }

  return (
    <div className={`message ${style}`}>
      <div className="user-photo user-photo-message">
        <img
          src={message.photo}
          alt="user photo"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex flex-col mx-2">
        <div className="text-message">
          <p>{message.text}</p>
        </div>
        <p className="date-message">{formatDate(message.timestamp)}</p>
      </div>
    </div>
  );
};

export default Message;
