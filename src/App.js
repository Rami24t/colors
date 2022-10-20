import React from "react";
import  {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import Color from "./components/Color";
import Colors from "./components/Colors";
import New from "./components/New";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Colors />} />
      <Route index path="/colors" element={<Colors />} />
      <Route path="/colors/:color" element={ <Color />} />
      <Route path="/colors/new" element={<New />} />
      <Route path="*" />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
