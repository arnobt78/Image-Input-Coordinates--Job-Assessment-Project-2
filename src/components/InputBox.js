import React, { useState } from "react";
import "../styles/InputBox.css";

const InputBox = ({ addCircle }) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleAddCircle = () => {
    addCircle(x, y);
    setX(0);
    setY(0);
  };

  return (
    <div className="input-box">
      <h2>Circle Position</h2>
      <div className="input-fields">
        <input
          type="number"
          value={x}
          onChange={(e) => setX(Number(e.target.value))}
          placeholder="X Distance"
        />
        <input
          type="number"
          value={y}
          onChange={(e) => setY(Number(e.target.value))}
          placeholder="Y Distance"
        />
        <button onClick={handleAddCircle}>Add Circle</button>
      </div>
    </div>
  );
};

export default InputBox;
