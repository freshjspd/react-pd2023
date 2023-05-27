import './App.css';
import React, {useState} from 'react';
import Restaurant from './Pages/Restaurant';
import ProductCard from './Components/ProductCard';

const car={
  imgSrc: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRxvN2c1_UMwNaLopkDHPIoyLAsOi3Q_TvqgCkUvtUFmMD36TQFJQUXqgUX1HW6P7HTS8I3Wvl3Cz4rAfBj-NJfZhfbepTH&usqp=CAY',
  name: 'Traxxas TRX-6 Mercedes-Benz G 63 AMG 6x6 Black',
  price: 26946
}

function App(){
  return(
    <Restaurant />
  );
}

export default App;


