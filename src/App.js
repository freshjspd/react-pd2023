import './App.css';
import React, { Component } from 'react';
import ProductCard from './Components/ProductCard';

const vini = {
  imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzTcniDpHBDW9lX7BvxRp_fpwlZI0JLpGSQw&usqp=CAU',
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


