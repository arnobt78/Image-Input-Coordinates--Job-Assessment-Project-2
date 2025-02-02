import React, { useState } from "react";
import ImageSection from "./ImageSection";
import InputBox from "./InputBox";
import MaterialSelection from "./MaterialSelection";
import "../styles/App.css";

const App = () => {
  const [circles, setCircles] = useState([]);
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  const addCircle = (x, y) => {
    setCircles([...circles, { id: Date.now(), x, y }]);
  };

  const updateCirclePosition = (id, x, y) => {
    setCircles(
      circles.map((circle) => (circle.id === id ? { ...circle, x, y } : circle))
    );
  };

  const handleMaterialSelect = (material) => {
    setSelectedMaterial(material);
  };

  const handleSubmit = () => {
    const outputData = {
      circles: circles.map((circle) => ({
        id: circle.id,
        x: circle.x,
        y: circle.y,
        xPercentage: (circle.x / window.innerWidth) * 100,
        yPercentage: (circle.y / window.innerHeight) * 100,
      })),
      selectedMaterial,
    };
    console.log("Submitted data:", outputData);
  };

  console.log("Rendering App with circles:", circles);

  return (
    <div className="app-container">
      <ImageSection
        circles={circles}
        updateCirclePosition={updateCirclePosition}
      />
      <InputBox addCircle={addCircle} />
      <MaterialSelection
        selectedMaterial={selectedMaterial}
        setSelectedMaterial={handleMaterialSelect}
      />
      <button onClick={handleSubmit} className="submit-button">
        Submit
      </button>
    </div>
  );
};

export default App;
