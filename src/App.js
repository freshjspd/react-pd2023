import './App.css';
import React, { Component } from 'react';
import ProductCard from './Components/ProductCard';

const db = [
  {
    imgSrc: "https://assetmanagerpim-res.cloudinary.com/images/w_600/q_90/ce8a6f3aa6294de988d7abce00c4e459_9366/FX8707_01_standard.WebP",
    name: "Adidas Breaknet Performance",
    price: 1899 
  },
  {
    imgSrc: "",
    name: "Adidas Breaknet Performance",
    price: 1899 
  },
  {
    imgSrc: "",
    price: 2000
  },
  {},  
]
export default class App extends Component {
   render() {
    return (
      <>
         {db.map((c,i) => <ProductCard key={i} product={c}/>)}  
         <ProductCard />
      </>
    );
  }
}


