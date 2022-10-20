import './App.css';
import React, { useEffect, useState } from "react";
import  {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import Color from "./components/Color";
import Colors from "./components/Colors";
import New from "./components/New";
import colorsFile from './colorsFile';
import Layout from "./Layout";
import NoPage from './NoPage';

function App() {

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
        <Route path="/" element={<Layout />}> 
          <Route index path='colors' element={<Colors colors={colors} refreshColors={refreshColors} />} />
          <Route index  element={<Colors colors={colors}  />} />
          <Route path="colors/:colorName" element={ <Color />} />
          <Route path="colors/new" element={<New setColors={setColors} />} />
        </Route>
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
