import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const New = ({setColors}) => {
const navigate = useNavigate();
    function onSubmit(e) {
        e.preventDefault();
        const oldArray = JSON.parse(localStorage.getItem('colorsArray'));
        oldArray.push(newColor);
        localStorage.setItem('colorsArray', JSON.stringify(oldArray));
        navigate('/colors');
        setColors(JSON.parse(localStorage.getItem('colorsArray')))
    }
const [newColor,setNewColor]=useState({id: Math.floor(Math.random()*100000), color: '', name: ''});

useEffect(() => {

}, [])


  return (
    <div className="new">
      <form onSubmit={onSubmit} action="">
        <label> Give a name to your color
          <input placeholder="newColor" value={newColor.name} onChange={(e)=>setNewColor({...newColor,name: e.target.value})} type="text" />
        </label>{" "}
        <label> Choose the color
          <input type="color" value={newColor.color} onChange={(e)=>setNewColor({...newColor,color: e.target.value})} />
        </label>
        <button type="submit">Add Color</button>
      </form>
    </div>
  );
};

export default New;
