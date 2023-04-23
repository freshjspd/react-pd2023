/* images (database)  => App*/

import React, {useState} from 'react';
import Slide from './Slide';
import Controller from './Controller';

export default function Slider(props) {
  const {images} = props;
  const size = images.length - 1;
  const [currentImageId, setCurrentImageId] = useState(0);

  return (
    <div>
        <Slide images={images} currentImageId={currentImageId}/>
        <Controller imgsCount={size} currentImageId={currentImageId} setCurrentImageId={setCurrentImageId}/>
    </div>
    
  )
}
