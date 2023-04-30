/*
image ????  props: 
1 способ currentImage
2 способ  images,  currentImageId

render:
img
button fullscreen
*/

import React from 'react'

export default function Slide(props) {
  const {images, currentImageId, width, height} = props;
  return (
    <div>
      <img src={images[currentImageId]} alt='photo' width={width} height={height}/>
    </div>
  )
}
