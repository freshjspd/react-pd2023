import './App.css';
import React, { Component } from 'react';
import ProductCard from './Components/ProductCard';

const vini = {
  imgSrc: 'https://static.wikia.nocookie.net/winniepooh/images/2/29/%D0%92%D0%B8%D0%BD%D0%BD%D0%B8-%D0%9F%D1%83%D1%85.png/revision/latest?cb=20210129021723&path-prefix=ru',
  name: 'Вини Пух',
  price: 500, 
};

export default class App extends Component {
  constructor(props){ 
    super(props); 
  }
  render() {
    return (
      <>
        <ProductCard product={vini}/>
      </>
    );
  }
}


