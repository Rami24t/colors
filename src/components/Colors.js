import React from 'react';
import {Link} from 'react-router-dom'; 

const Colors = ({colors, refreshColors, loggedIn}) => {
 //   console.log(colors);
  return (
    <div className='colors'>
    <header>
        <p>Welcome to the color factory.</p>
        <Link to="/colors/new">{loggedIn?'A':'Log in to a'}dd a Color</Link>        
    </header>
    <main>
        <p>Please select a color.</p>
        <ul>
        {colors?.map(color=>
           (<Link key={color.id} to={`/colors/${color.name}`}>
                <li key={color.id} style={{backgroundColor: color.color}}><span style={{backgroundColor: '#efe', paddingLeft: '10px', paddingRight: '10px'}}>{color.name}</span></li>
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