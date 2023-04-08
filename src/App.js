import './App.css';
import Greeting from './Components/Greeting';

const currentUser = {
  firstName: 'John',
  lastName: 'Adson',
  email: 'john7@mail.com'
};

function App() {
  return (
    <>
      <Greeting user={currentUser} isOnline={true}/>
    </>
  );
}

export default App;
