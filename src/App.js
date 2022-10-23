import './App.css';
import React, { useEffect, useState } from "react";
import  {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'; 
import Color from "./components/Color";
import Colors from "./components/Colors";
import New from "./components/New";
import colorsFile from './colorsFile';
import LogIn from './components/LogIn';
// import NoPage from './NoPage';

function App() {
  const [loggedIn,setLoggedIn] = useState(false);

  const [colors,setColors]=useState([]);
function refreshColors(){
  if(!localStorage.getItem('colorsArray'))
        localStorage.setItem('colorsArray', JSON.stringify(colorsFile));
  setColors(JSON.parse(localStorage.getItem('colorsArray')))
} 
  useEffect(() => {
refreshColors()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
          <Route  path='/colors' element={<Colors colors={colors} refreshColors={refreshColors} loggedIn={loggedIn}/>} />
          {/* <Route   element={<Colors colors={colors}  />} /> */}
          <Route path="/colors/:colorName" element={ <Color />} />
          <Route path="/colors/new" element={<New setColors={setColors} loggedIn={loggedIn} />} />
          {/* <Route path="*" element={<NoPage />} /> */}
          <Route path="/login" element={ <LogIn setLoggedIn={setLoggedIn}/>} />
          <Route path="*" element={ <Navigate to="/colors" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
