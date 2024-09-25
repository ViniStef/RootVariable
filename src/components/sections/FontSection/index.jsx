import { useState, useEffect } from "react";
import style from "./style.module.scss";

export const FontSection = ({ copyVariables, setFontValues }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonText, setButtonText] = useState("Copy to Clipboard");
  const [sizePreference, setSizePreference] = useState("px");
  const [inputValue, setInputValue] = useState("");
  const [validInput, setValidInput] = useState(true);
  const [currentFonts, setCurrentFonts] = useState([]);
  const [isButtonFocused, setButtonFocused] = useState(false);

  const copyTimeout = () => {
    setButtonText(
      <div>
        <p>Copied</p>{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          fill="currentColor"
          className="bi bi-check-lg"
          viewBox="0 0 16 16"
        >
          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022" />
        </svg>
      </div>
    );
    setTimeout(() => {
      setButtonText("Copy to Clipboard");
    }, 1000 * 3);
  };

  const handleFonts = (event) => {
    if (event.target.value) {
      if (validateInput(event)) {
        setValidInput(true);
        let fonts = event.target.value.split(",");
        setCurrentFonts(fonts.map((font) => font.replace(/\s/g, "")));
      }
    }
  };

  useEffect(() => {
    setInputValue("");
  },[])

  useEffect(() => {
    let newSizes = []
    if (inputValue) {
      setFontValues((prevValues) => {
        let copyArray = [...prevValues];
          if (sizePreference === "rem") {
            for (let i in copyArray) {
              let formatValue = parseFloat(copyArray[i].size) / 16;
              copyArray[i].size = formatValue
              if (i == 0) {
                newSizes.push(formatValue);
              } else {
                newSizes.push(" " + formatValue);
              }
              
            }
          } else {
            for (let i in copyArray) {
              let formatValue = parseFloat(copyArray[i].size) * 16;
              copyArray[i].size = formatValue
              if (i == 0) {
                newSizes.push(formatValue);
              } else {
                newSizes.push(" " + formatValue);
              }
            }
          }
        
  
        
        return copyArray;
      });
      setInputValue(newSizes)
    }
    
  }, [sizePreference]);

  useEffect(() => {
    setFontValues((prevValue) => {
      let copyArray = [...prevValue];
      for (let i in currentFonts) {
        if (currentFonts[i] !== "") {
          if (currentFonts[i].endsWith(".")) {
            currentFonts[i] = currentFonts[i] + "0";
          }
          if (i >= copyArray.length) {
            copyArray = [
              ...copyArray,
              { name: [`--fs-${parseInt(i) + 1}`], size: currentFonts[i] },
            ];
          } else {
            copyArray[i].size = currentFonts[i];
          }
        } 
      }
      return copyArray;
    });
  }, [currentFonts]);

  const validateInput = (e) => {
    if (!e.target.value) {
      setValidInput(true);
      return true;
    } else {
      const regex = /^\s*(\d+(\.\d*)?|\.\d+)(,\s*(\d+(\.\d*)?|\.\d+))*\s*,?$/;
      if (regex.test(e.target.value)) {
        setValidInput(true);
        return true;
      } else {
        setValidInput(false);
        return false;
      }
    }
  };

  const handleInput = (e) => {
    const sanitizedValue = e.target.value.replace(/[^\d ,.]/g, "");
    setInputValue(sanitizedValue);
  };

  return (
    <section className={style.font__section}>
      <div className={style.header__container}>
        <h1>
          <span>Font</span> Sizes
        </h1>
        <div className={style.btnSize__container}>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-up-fill"
                viewBox="0 0 16 16"
              >
                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-down-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen ? (
        <div className={style.choice__container}>
          <button
            onClick={(e) => {setSizePreference("rem"), setButtonFocused(true)}}
            onFocus={() => setButtonFocused(true)}
            style={{ opacity: isButtonFocused ? '1' : '.5' }}
            className={style.btnSize__rem}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-repeat"
              viewBox="0 0 16 16"
            >
              <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
              <path
                fillRule="evenodd"
                d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"
              />
            </svg>
            <span style={{ fontStyle: "italic" }}>rem</span>
          </button>
          <button
            onClick={(e) => {setSizePreference("px"), setButtonFocused(false)}}
            onFocus={() => setButtonFocused(false)}
            style={{ opacity: isButtonFocused ? '.5' : '1' }}
            className={style.btnSize__px}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-repeat"
              viewBox="0 0 16 16"
            >
              <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
              <path
                fillRule="evenodd"
                d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"
              />
            </svg>
            <span style={{ fontStyle: "italic" }}>px</span>
          </button>
        </div>
      ) : null}
      <div className={style.font__container}>
        <input
          onKeyUp={(e) => validateInput(e)}
          onBlur={(e) => validateInput(e)}
          onFocus={(e) => validateInput(e)}
          onInput={(e) => handleInput(e)}
          onChange={(e) => handleFonts(e)}
          className={`${style.font__input} ${
            validInput ? null : style.invalid__value
          }`}
          value={inputValue}
          type="text"
          placeholder={
            sizePreference === "px"
              ? "Ex: 24, 36, 48, 62"
              : "Ex: 1.5, 2.25, 3, 3.875"
          }
        />
        <button
          onClick={(e) => {
            copyVariables(sizePreference), copyTimeout();
          }}
          className={style.font__button}
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};
