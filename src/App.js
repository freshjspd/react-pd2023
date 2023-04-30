import './App.css';
import React, { Component } from 'react';
import Slider from './Components/Slider';

const db = [
  'https://hips.hearstapps.com/hmg-prod/images/small-fuffy-dog-breeds-1623362663.jpg?crop=1.00xw:0.753xh;0,0.0719xh&resize=1200:*',
  'https://images.nature.com/original/magazine-assets/d41586-020-01430-5/d41586-020-01430-5_17977554.jpg',
  'https://hips.hearstapps.com/hmg-prod/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=1.00xw:0.756xh;0,0.0756xh&resize=1200:*'
]; 

export default class App extends Component {
   render() {
    return (
      <>
        <Slider images={db}/>
      </>
    );
  }
}


