import React from 'react';
import {Link} from 'react-router-dom'; 

const Colors = () => {
  return (
    <div className='colors'>
    <header>
        <p>Welcome to the color factory.</p>
        <Link to="/colors/new">Add a Color</Link>        
    </header>
    <main>
        <p>Please select a color.</p>
        <ul>
            <Link to="/colors/red">
                <li>red</li>
            </Link>
            <Link to="/colors/green">
                <li>green</li>
            </Link>
            <Link to="/colors/blue">
                <li>blue</li>
            </Link>
        </ul>
    </main>
    </div>
  )
}

export default Colors;