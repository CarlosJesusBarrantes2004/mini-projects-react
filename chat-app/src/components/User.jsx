import Login from './Login';
import Logout from './Logout';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const User = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="flex flex-col items-center w-1/3">
      <h1 className="title">
        <i className="fa-solid fa-cat"></i> QuickChat
      </h1>
      <div className="flex flex-col items-center px-4 py-10 rounded-xl bg-slate-100 border-2 border-slate-200 w-3/4">
        <div className="user-photo user-photo-profile">
          <img
            src={user ? user.photoURL : '../src/assets/images/username.png'}
            alt="user photo"
            referrerPolicy="no-referrer"
          />
        </div>
        <p className="username">{user ? user.displayName : 'Username'}</p>
        {!user ? <Login></Login> : <Logout></Logout>}
      </div>
    </div>
  );
};

export default User;
