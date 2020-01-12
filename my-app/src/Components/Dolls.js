import React, { Component } from 'react';
import images from './images';

export default function Dolls() {


  
  return (
    <div>
      { images.map(({id, src, title, description}) => 
      <img key={id} src={src} title={title} alt={description} />)}
    </div>
  )
}
