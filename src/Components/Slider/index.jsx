/* images (database)  => App*/

import React, {useState} from 'react';
import Slide from './Slide';
import Controller from './Controller';

export default function Slider(props) {
  const {images} = props;
  const size = images.length - 1;
  const [currentImageId, setCurrentImageId] = useState(0);
  const [width, setWidth] = useState('50%');
  const [heigth, setHeigth] = useState('50%');

  return (
    <div>
        <Slide images={images} currentImageId={currentImageId} width={width} heigth={heigth}/>
        <Controller imgsCount={size} currentImageId={currentImageId} setCurrentImageId={setCurrentImageId} setWidth={setWidth} setHeigth={setHeigth}/>
    </div>
    
  )
}
