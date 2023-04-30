import './App.css';
import React, { Component } from 'react';

const options = {
  results: 10,
  page: 1,
  seed: 'pd2023'
}

function load({results, page, seed}){
  fetch(`https://randomuser.me/api/?results=${results}&seed=${seed}&page=${page}`)
  .then((response) => response.json())
  .then((data) => console.log(data.results))
  .catch((error) => console.log(error));
}

function App(){
  load(options);
  return(
    <>
      <h2>Load users</h2>
    </>
  );
}

export default App;


