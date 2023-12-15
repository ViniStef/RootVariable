import { useState } from "react";
import style from "./style.module.scss";

export const ColorInput = ({ colorPriority, colorWeight }) => {
  const [selectedColor, setSelectedColor] = useState("#000000"); 

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <li className={style.input__item}>
      <label
        htmlFor={`${colorPriority}-${colorWeight}`}
        className={style.color__label}
        style={{ backgroundColor: selectedColor }}
      ></label>
      <input
        value={selectedColor}
        onChange={handleColorChange}
        className={style.color__input}
        type="color"
        name=""
        id={`${colorPriority}-${colorWeight}`}
      />
      <input
        className={style.name__input}
        type="text"
        placeholder={`-color-${colorPriority}-${colorWeight}`}
      />
    </li>
  );
};
