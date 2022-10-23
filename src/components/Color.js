import React, {useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';




const Color = () => {
    const navigate = useNavigate();
    const {colorName} = useParams();
    let bgColor = '#000';

    const getColor = () => {
      const colorArr = JSON.parse(localStorage.getItem('colorsArray'));
      if(!colorArr)
        {
          navigate('/colors');
        }
        else {
      const color = colorArr.find(color=>color.name===colorName);
      if (color)
        bgColor=(color.color);
      else
        navigate('/colors');
      }
      console.log('Runs')
    }
    getColor();
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