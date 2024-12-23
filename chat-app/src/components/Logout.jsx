import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const Logout = () => {
  const logOut = () => signOut(auth);

  return (
    <button onClick={logOut} className="btn btn-logout">
      <i className="fa-brands fa-google mr-2"></i>
      Logout
    </button>
  );
};

export default Logout;
