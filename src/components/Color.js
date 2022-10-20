import React, {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const Color = () => {
    const navigate = useNavigate();
    const {colorName} = useParams();
    const [bgColor, setBgColor] = useState('');
    useEffect(() => {
       const color = ((JSON.parse(localStorage.getItem('colorsArray')))?.find(color=>color.name===colorName)) || {color:'#fff',name: 'white'};
       setBgColor(color.color);
    }, [])
    
//console.log(bgColor);
  return (
    <div className='color' style={{backgroundColor: bgColor}}>
        <p>This is color {colorName}</p>
        <p>Isn't it amazing!</p>
        <button onClick={()=>navigate(-1)}>Go Back</button>
    </div>
  )
}

export default Color;