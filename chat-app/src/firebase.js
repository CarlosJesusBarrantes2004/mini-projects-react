import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAPSD00nNjaNzEVHtSvCTfsLkkFfUjrqz0',
  authDomain: 'chat-react-a9e2b.firebaseapp.com',
  projectId: 'chat-react-a9e2b',
  storageBucket: 'chat-react-a9e2b.appspot.com',
  messagingSenderId: '544971008574',
  appId: '1:544971008574:web:45f3a40c1af8c2bb2abf6f',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
