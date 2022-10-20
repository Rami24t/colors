import React from "react";
import { useNavigate } from "react-router-dom";

const New = () => {
const navigate = useNavigate();
    function onSubmit(e) {
        e.preventDefault();
        navigate('/colors')
    }

  return (
    <div className="new">
      <form onSubmit={onSubmit} action="">
        <label> Give a name to your color
          <input type="text" />
        </label>{" "}
        <label> Choose the color
          <input type={"color"} />
        </label>
        <button type="submit">Add Color</button>
      </form>
    </div>
  );
};

export default New;
