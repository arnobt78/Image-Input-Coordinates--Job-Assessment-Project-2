import React, { useState, useEffect } from "react";
import "../styles/Circle.css";

const Circle = ({ x, y, onDrag, index, circles }) => {
  const [position, setPosition] = useState({ x, y });
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    setPosition({ x, y });
  }, [x, y]);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newX = e.clientX - 25; // Adjust for circle radius
      const newY = e.clientY - 25; // Adjust for circle radius

      // Check for collisions with other circles
      const isColliding = circles.some((circle, i) => {
        if (i !== index) {
          const distance = Math.sqrt(
            Math.pow(newX - circle.x, 2) + Math.pow(newY - circle.y, 2)
          );
          return distance < 50; // Circle radius * 2
        }
        return false;
      });

      if (!isColliding) {
        setPosition({ x: newX, y: newY });
        onDrag(newX, newY);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  console.log("Rendering Circle at position:", position);

  return (
    <div
      className="circle"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    />
  );
};

export default Circle;
