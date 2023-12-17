import { useState } from "react";
import style from "./style.module.scss";

export const ColorInput = ({
  colorPriority,
  colorWeight,
  isLast = false,
  addVariableItem = null,
  removeVariableItem,
  id,
  startColor = "#000"
}) => {
  const [selectedColor, setSelectedColor] = useState(startColor);

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return !isLast ? (
    <li key={crypto.randomUUID()} className={style.input__item}>
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
        placeholder={`--color-${colorPriority}${colorWeight}`}
      />
      <button onClick={(e) => {removeVariableItem(id)}} className={style.exclude__button}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>
      </button>

    </li>
    
  ) : isLast ? (
    <button
      className={style.add__button}
      onClick={() => {
        addVariableItem();
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        className="bi bi-plus"
        viewBox="0 0 16 16"
      >
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
      </svg>
    </button>
  ) : null;

};
