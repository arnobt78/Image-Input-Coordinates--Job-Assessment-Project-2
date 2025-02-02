
<img width="678" alt="Screenshot 2025-02-02 at 20 16 42" src="https://github.com/user-attachments/assets/f600ea85-ea8a-4684-a06f-9906ba4da0dd" /><img width="1130" alt="Screenshot 2025-02-02 at 19 15 22" src="https://github.com/user-attachments/assets/25b82ba7-d35e-4c14-bb3b-645b77bf0bcd" /><img width="372" alt="Screenshot 2025-02-02 at 19 16 35" src="https://github.com/user-attachments/assets/4b9df126-23f1-47c9-839b-ed2c7d3943be" />

## Job Assessment React App (For Job Interview Purpose)

This project is a React application, created for Job Assessment purpose, that allows users to interact with draggable circles on an image, input coordinates, and select materials. The design is inspired by Apple product pages, featuring rounded corners, smooth animations, and a clean layout.

### Project Requirements

1. **Design**: The design should be inspired by Apple's product page, featuring rounded corners, appropriate button sizes, text sizes, and selection animations.
2. **Functionality**:
   - **Image Section**: Display an image with circles that can be added, positioned, and dragged around.
   - **Input Box**: Allow users to input x and y coordinates to add circles to the image.
   - **Material Selection**: Allow users to select a material from a list of 5 materials.
   - **Submit Button**: Log the output data, including the coordinates of the circles in pixels and percentage, and the selected material.

### Expected Final Result

- **Image Section**: An image with draggable circles that can be added via an input box.
- **Input Box**: An input box to enter x and y coordinates and add circles to the image.
- **Material Selection**: A list of materials that can be selected, with visual feedback for the selected material.
- **Submit Button**: A button that logs the current state of circles and the selected material to the console.

## Project Structure

```
my-react-app
├── public
│   ├── index.html
│   └── favicon.ico
│   ├── images
│       └── image.jpg
├── src
│   ├── components
│   │   ├── Circle.js
│   │   ├── ImageSection.js
│   │   ├── InputBox.js
│   │   ├── MaterialSelection.js
│   │   └── App.js
│   ├── styles
│   │   ├── Circle.css
│   │   ├── ImageSection.css
│   │   ├── InputBox.css
│   │   ├── MaterialSelection.css
│   │   └── App.css
│   ├── index.js
│   └── App.test.js
├── package.json
├── .gitignore
└── README.md
```

## Review Key Components

### 1. Image Section

- **Functionality**: Display an image with circles that can be added, positioned, and dragged around.
- **Implementation**: Ensure the `ImageSection` component is correctly implemented.

### ImageSection.js

```javascript
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
```

### ImageSection.css

```css
.image-section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f5f5f7; /* Light background inspired by Apple design */
  border-radius: 20px; /* Rounded corners */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}

.image-section img {
  max-width: 100%;
  border-radius: 20px; /* Rounded corners for the image */
}

.circle-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden; /* Prevent circles from overflowing */
}
```

### 2. Input Box

- **Functionality**: Allow users to input x and y coordinates to add circles to the image.
- **Implementation**: Ensure the `InputBox` component is correctly implemented.

### InputBox.js

```javascript
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
```

### InputBox.css

```css
.input-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}

.input-fields {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-fields input {
  margin: 5px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
}

.input-fields button {
  margin: 10px;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #007aff;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.input-fields button:hover {
  background-color: #005bb5;
}
```

### 3. Material Selection

- **Functionality**: Allow users to select a material from a list of 5 materials.
- **Implementation**: Ensure the `MaterialSelection` component is correctly implemented.

### MaterialSelection.js

```javascript
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
```

###

MaterialSelection.css

```css
.material-selection {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}

.material-option {
  width: 100px;
  height: 100px;
  border-radius: 15px;
  margin: 10px;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0; /* Light background color */
  border: 2px solid transparent; /* Default border */
}

.material-option.selected {
  transform: scale(1.1);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  border-color: #007aff; /* Highlight border color */
  background-color: #e0e0e0; /* Slightly darker background for selected state */
}
```

### 4. Submit Button

- **Functionality**: Log the output data, including the coordinates of the circles in pixels and percentage, and the selected material.
- **Implementation**: Ensure the `handleSubmit` function in `App.js` is correctly implemented.

### App.js

```javascript
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
```

### App.css

```css
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #ffffff; /* White background */
  border-radius: 20px; /* Rounded corners */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}

.submit-button {
  margin: 20px;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #007aff;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #005bb5;
}
```

### Console Output

```
Submitted data:

{circles: Array(2), selectedMaterial: {…}}
   circles: Array(2)
   0:
      id: 1738501397283
      x: 98
      xPercentage: 11.61137440758294
      y: 52
      yPercentage: 8.637873754152823
      [[Prototype]]: Object
   1:
      id: 1738501414317
      x: 250
      xPercentage: 29.620853080568722
      y: 261
      yPercentage: 43.355481727574755
      [[Prototype]]: Object
      length: 2
      [[Prototype]]: Array(0)

selectedMaterial:
   id: 2
   name: "Material 2"
   [[Prototype]]: Object[[Prototype]]: Object
```

## Features

- **Draggable Circles**: Users can drag circles on the image, and the coordinates will update in real-time.
- **Input Coordinates**: Input fields for x and y coordinates allow users to set the position of the circles.
- **Add Circles**: Users can add multiple circles, ensuring they do not collide while being dragged.
- **Material Selection**: Choose from five different materials with smooth animations for selection.
- **Submit Functionality**: Console logs the coordinates and selected material upon submission.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd my-react-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Running the Application

To start the development server, run:

```
npm start
```

Open your browser and navigate to `http://localhost:3000` to view the application.

### Running Tests

To run the tests, use:

```
npm test
```

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
