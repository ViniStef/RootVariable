import React, { useState } from 'react';
import { HomePage } from "./components/HomePage";


function App() {
  // const [selectedColor, setSelectedColor] = useState("#fff");

  // const handleColorChange = (event) => {
  //   setSelectedColor(event.target.value);
  // };

  // return (
  //   <li>
  //          <label
  //       htmlFor="test"
  //       className="color__label"
  //       style={{ backgroundColor: selectedColor }}
  //     ></label>
  //     <input
  //       onChange={handleColorChange}
  //       className="color__input"
  //       type="color"
  //       name=""
  //       id="test"
  //     />
  //   </li>
  return (
  <HomePage />
  );
}

export default App;
