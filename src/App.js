import './App.css';
import React, {useState} from 'react';
import {LogoContext} from './contexts';
import Home from './Pages/Home';

const myLogo = {
  name: 'FreshCode',
  greeting: 'Hello! I am fullstask dev!!!',
  url: 'https://freshcode.training/',
  src: 'https://static.tildacdn.com/tild3338-3561-4361-a539-613663356437/logo.svg',
}

function App(){
  //const [logo, setLogo] = useState(myLogo);

  return(
  <LogoContext.Provider value={myLogo}>
    <Home/>
  </LogoContext.Provider>
  );
}

export default App;


