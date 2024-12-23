import Chat from './components/Chat';
import User from './components/User';

function App() {
  return (
    <>
      <div className="min-h-screen flex py-10 px-24">
        <User></User>
        <Chat></Chat>
      </div>
    </>
  );
}

export default App;
