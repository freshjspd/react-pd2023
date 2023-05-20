import './App.css';
import React, {useState} from 'react';
import {LogoContext} from './contexts';
import Home from './Pages/Home';
import Restaurant from './Pages/Restaurant';
import SignIn from './Pages/SignIn';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import {Switch} from 'react-router';

function App(){
  return(
    <>
    <Router>
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/contacts'}>Contacts</Link></li>
        <li><Link to={'/products'}>Products</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contancs" element={<SignIn />} />
        <Route path="/products" element={<Restaurant/>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
  </Router>
  </>
  );
}

export default App;


