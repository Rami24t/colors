import React from "react";
import { useNavigate } from "react-router-dom";

const NoPage = () => {

  const navigate = useNavigate();

  navigate('/colors');

    return <h1>404</h1>;
  };
  
  export default NoPage;