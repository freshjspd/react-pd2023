import './App.css';
import Greeting from './Components/Greeting';

const currentUser = {
  firstName: 'John',
  lastName: 'Adson',
  email: 'john7@mail.com'
};

let k = 10;

function App() {
  return (
    <>
      <Greeting user={currentUser} isOnline={true}/>
      <p>Hello, React!!!</p>
      <p>1+1</p>
      <p>{1+1}</p>
      <p>{k}</p>
      <p>{++k}</p>
      <p id={++k}>text</p>
      <p id={10-4}></p>
    </>
  );
}

export default App;
