import React from 'react';
import {Link} from 'react-router-dom'; 

const Colors = ({colors, refreshColors}) => {
    console.log(colors);
  return (
    <div className='colors'>
    <header>
        <p>Welcome to the color factory.</p>
        <Link to="/colors/new">Add a Color</Link>        
    </header>
    <main>
        <p>Please select a color.</p>
        <ul>
        {colors?.map(color=>
           (<Link key={color.id} to={`/colors/${color.name}`}>
                <li key={color.id}>{color.name}</li>
            </Link>))}
        </ul>
    </main>
    <footer>
        <button onClick={()=>{localStorage.removeItem('colorsArray'); refreshColors()}}>/!\ RESET DATABASE /!\</button>
    </footer>
    </div>
  )
}

export default Colors;