import React from 'react';
import { useNavigate } from 'react-router-dom';

const Color = () => {
    const navigate = useNavigate();

  return (
    <div className='color'>
        <p>This is color</p>
        <p>Isn't it amazing!</p>
        <button onClick={()=>navigate(-1)}>Go Back</button>
    </div>
  )
}

export default Color;