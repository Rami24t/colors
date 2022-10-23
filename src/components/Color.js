import React from 'react';
import {Navigate, useNavigate, useParams } from 'react-router-dom';

const Color = () => {
    const navigate = useNavigate();
    const {colorName} = useParams();
    let bgColor = '#000';
    const colorArr = JSON.parse(localStorage.getItem('colorsArray'));
    const color = colorArr?.find(color=>color.name===colorName);
    if (colorArr && color)
      bgColor=(color.color);
    else
      return <Navigate to='./colors' replace/>

  return (
    <div className='color' style={{backgroundColor: bgColor}}>
        <p>This is color {colorName}</p>
        <p>Isn't it amazing!</p>
        <button onClick={()=>navigate(-1)}>Go Back</button>
    </div>
  )
}

export default Color;