import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <button onClick={googleLogin} className="btn btn-login">
      <i className="fa-brands fa-google mr-2"></i>
      Sing in with google
    </button>
  );
};

export default Login;
