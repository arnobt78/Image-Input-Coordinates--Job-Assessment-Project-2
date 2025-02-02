import React, { useState } from "react";
import "../styles/MaterialSelection.css";

const materials = [
  { id: 1, name: "Material 1" },
  { id: 2, name: "Material 2" },
  { id: 3, name: "Material 3" },
  { id: 4, name: "Material 4" },
  { id: 5, name: "Material 5" },
];

const MaterialSelection = ({ selectedMaterial, setSelectedMaterial }) => {
  const [hoveredMaterial, setHoveredMaterial] = useState(null);

  const handleMaterialClick = (material) => {
    console.log("Material clicked:", material);
    setSelectedMaterial(material);
  };

  return (
    <div className="material-selection">
      {materials.map((material) => (
        <div
          key={material.id}
          className={`material-option ${
            selectedMaterial?.id === material.id ? "selected" : ""
          }`}
          onClick={() => handleMaterialClick(material)}
          onMouseEnter={() => setHoveredMaterial(material.id)}
          onMouseLeave={() => setHoveredMaterial(null)}
        >
          {material.name}
        </div>
      ))}
    </div>
  );
};

export default MaterialSelection;
