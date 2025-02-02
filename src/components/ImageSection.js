import React from "react";
import Circle from "./Circle";
import "../styles/ImageSection.css";

const ImageSection = ({ circles, updateCirclePosition }) => {
  console.log("Rendering ImageSection with circles:", circles);

  return (
    <div className="image-section">
      <img
        src={`${process.env.PUBLIC_URL}/images/image.jpg`}
        alt="Background"
        className="background-image"
      />
      <div className="circle-container">
        {circles.map((circle, index) => (
          <Circle
            key={index}
            x={circle.x}
            y={circle.y}
            onDrag={(newX, newY) => updateCirclePosition(circle.id, newX, newY)}
            index={index}
            circles={circles}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSection;
