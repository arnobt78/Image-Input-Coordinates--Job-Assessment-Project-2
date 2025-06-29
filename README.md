# Image Input Coordinates – Job Assessment Project 2

<img width="800" alt="Screenshot 2025-02-02 at 20 16 42" src="https://github.com/user-attachments/assets/f600ea85-ea8a-4684-a06f-9906ba4da0dd" /> <img width="800" alt="Screenshot 2025-02-02 at 19 15 22" src="https://github.com/user-attachments/assets/25b82ba7-d35e-4c14-bb3b-645b77bf0bcd" /> <img width="800" alt="Screenshot 2025-02-02 at 19 16 35" src="https://github.com/user-attachments/assets/4b9df126-23f1-47c9-839b-ed2c7d3943be" />

---

## Project Summary

This project is a feature-rich React application developed for a job assessment. It is designed to help users visually interact with an image by adding, dragging, and positioning circles based on coordinates, and selecting material types for each set of coordinates. The UI experience is heavily inspired by Apple's product page design, emphasizing clean layouts, rounded corners, subtle shadows, and smooth selection animations.

The application showcases advanced usage of React for state management, event handling, and component-based architecture. It is ideal for those seeking to learn about building interactive UIs, managing complex states, and handling user-driven events in React.

- **Live Demo:** [https://job-assessment-react-app-arnob.vercel.app/](https://job-assessment-react-app-arnob.vercel.app/)

---

## Table of Contents

1. [Project Requirements](#project-requirements)
2. [Project Structure](#project-structure)
3. [Key Components & Walkthrough](#key-components--walkthrough)
   - [Image Section](#1-image-section)
   - [Input Box](#2-input-box)
   - [Material Selection](#3-material-selection)
   - [Submit Button](#4-submit-button)
4. [Features](#features)
5. [How to Run the Project](#how-to-run-the-project)
6. [Learning & Teaching Guide](#learning--teaching-guide)
7. [Keywords & Technologies](#keywords--technologies)
8. [Contributing](#contributing)
9. [License](#license)

---

## Project Requirements

- **Design:** Inspired by Apple’s product page (rounded corners, smooth animations, clean UI).
- **Image Section:** Display an image with draggable circles.
- **Input Box:** Allow users to input x and y coordinates to add circles.
- **Material Selection:** Choose from 5 materials, with clear selection feedback.
- **Submit:** Log the coordinates (in pixels and percent) and selected material to the console.

---

## Project Structure

```
my-react-app
├── public
│   ├── index.html
│   ├── favicon.ico
│   └── images
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

---

## Key Components & Walkthrough

### 1. Image Section

- **Purpose:** Displays the main background image and overlays draggable circles.
- **How it Works:** Circles are rendered using coordinates; users can drag to reposition them.
- **Teaching Focus:** Learn about absolute positioning, React props, and event handling.

**Source Example:**
```javascript
const ImageSection = ({ circles, updateCirclePosition }) => (
  <div className="image-section">
    <img src={`${process.env.PUBLIC_URL}/images/image.jpg`} alt="Background" />
    <div className="circle-container">
      {circles.map((circle, index) => (
        <Circle
          key={index}
          x={circle.x}
          y={circle.y}
          onDrag={(newX, newY) => updateCirclePosition(circle.id, newX, newY)}
        />
      ))}
    </div>
  </div>
);
```

---

### 2. Input Box

- **Purpose:** Allows users to input X and Y values to add new circles.
- **How it Works:** On clicking "Add Circle", the entered coordinates are added as a new circle.
- **Teaching Focus:** Controlled components, state updates, and form handling.

**Source Example:**
```javascript
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
      <input type="number" value={x} onChange={e => setX(Number(e.target.value))} />
      <input type="number" value={y} onChange={e => setY(Number(e.target.value))} />
      <button onClick={handleAddCircle}>Add Circle</button>
    </div>
  );
};
```

---

### 3. Material Selection

- **Purpose:** Lets users select a material from five options, with visual feedback.
- **How it Works:** Clicking an option updates the selected material state.
- **Teaching Focus:** Array mapping, conditional styles, and UI feedback.

**Source Example:**
```javascript
const materials = [ ... ];
const MaterialSelection = ({ selectedMaterial, setSelectedMaterial }) => (
  <div className="material-selection">
    {materials.map(material => (
      <div
        key={material.id}
        className={`material-option ${selectedMaterial?.id === material.id ? "selected" : ""}`}
        onClick={() => setSelectedMaterial(material)}
      >
        {material.name}
      </div>
    ))}
  </div>
);
```

---

### 4. Submit Button

- **Purpose:** Compiles and logs all current data (circles, positions, material).
- **Teaching Focus:** Data shaping, window API for percent calculation, and debugging via `console.log`.

**App.js Example:**
```javascript
const handleSubmit = () => {
  const outputData = {
    circles: circles.map(circle => ({
      ...circle,
      xPercentage: (circle.x / window.innerWidth) * 100,
      yPercentage: (circle.y / window.innerHeight) * 100,
    })),
    selectedMaterial,
  };
  console.log("Submitted data:", outputData);
};
```

---

## Features

- **Draggable Circles:** Move circles on the image interactively.
- **Input Coordinates:** Add circles precisely using X/Y input.
- **Add Multiple Circles:** Manage many circles, each with unique positions.
- **Material Selection:** Choose from five materials, with animation.
- **Data Submission:** View structured data for all circles and the current material.
- **Apple-Inspired UI:** Modern, clean, and visually appealing interface.

---

## How to Run the Project

### Prerequisites

- Node.js (v14+)
- npm

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd my-react-app
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm start
   ```
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

4. **Run tests:**
   ```bash
   npm test
   ```

---

## Learning & Teaching Guide

This project is a great learning resource for:

- **React Fundamentals:** Components, props, and state.
- **Event Handling:** Drag-and-drop, input events, and submission logic.
- **Styling:** CSS modules for scoped, reusable styles.
- **UI/UX:** Clean layout, animations, and visual feedback.
- **Data Processing:** Coordinate conversions (pixels to percent), array mapping, and immutability.

**Teaching Example:**
- Add a circle at (100, 50), drag it, select "Material 3", and submit. Check the console for output structure (see code above for data example).

---

## Keywords & Technologies

- **React** (hooks, components)
- **JavaScript (ES6+)**
- **CSS** (custom styles, Apple-inspired)
- **Draggable UI**
- **State Management**
- **User Input Handling**
- **Responsive Design**
- **Educational Project**
- **Frontend Development**

---

## Contributing

Feel free to submit pull requests or issues for improvements and bug fixes.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
