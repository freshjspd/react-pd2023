import './App.css';
import Greeting from './Components/Greeting';

function App() {
  return (
    <>
      <Greeting firstName={"John"} lastName={"Smith"}/>
      <Greeting firstName={"Kate"} lastName={"Fox"}/>
    </>
  );
}

export default App;
