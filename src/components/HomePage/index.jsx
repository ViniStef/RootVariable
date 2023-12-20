import { Header } from "../Header";
import "../../styles/index.scss";
import { PrimarySection } from "../sections/PrimarySection";
import { SecondarySection } from "../sections/SecondarySection";
import { AccentSection } from "../sections/AccentSection";
import { FontSection } from "../sections/FontSection";
import { useEffect, useLayoutEffect, useState } from "react";
import { Footer } from "../Footer";

export const HomePage = () => {
  const [primaryValues, setPrimaryValues] = useState([])
  const [secondaryValues, setSecondaryValues] = useState([])
  const [accentValues, setAccentValues] = useState([])
  const [fontValues, setFontValues] = useState([{name: "--fs-sm", size: "16"},{name: "--fs-md", size: "22"}, {name: "--fs-lg", size: "28"}, {name: "--fs-xl", size: "36"}])

  const copyVariables = (sizePreference) => {
    let allVariables = ""
    for (let i = 0; i < primaryValues.length; i++) {
      allVariables += (`${primaryValues[i].name}: ${primaryValues[i].color}; \n`)
    }
    for (let i = 0; i < secondaryValues.length; i++) {
      allVariables += (`${secondaryValues[i].name}: ${secondaryValues[i].color}; \n`)
    }
    for (let i = 0; i < accentValues.length; i++) {
      allVariables += (`${accentValues[i].name}: ${accentValues[i].color}; \n`)
    }
    allVariables += "\n"
    for (let i = 0; i < fontValues.length; i++) {
      console.log(fontValues[i])
      allVariables += (`${fontValues[i].name}: ${fontValues[i].size}${sizePreference}; \n`)
    }
    navigator.clipboard.writeText(allVariables)
  }

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("@RootVariable:Theme")
      ? JSON.parse(localStorage.getItem("@RootVariable:Theme"))
      : {};
  });

  useLayoutEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");

      console.log("Local storage is empty.");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("@RootVariable:Theme", JSON.stringify(theme));
  }, [theme]);

  const toggleDarkMode = () => {
    const toggle = document.documentElement.classList.toggle("dark");
    if (toggle) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="main__container">
      <Header theme={theme} toggleDarkMode={toggleDarkMode} />
      <main className="content__container">
        <PrimarySection setPrimaryValues={setPrimaryValues} />

        <SecondarySection setSecondaryValues={setSecondaryValues} />

        <AccentSection theme={theme} setAccentValues={setAccentValues} />

        <FontSection copyVariables={copyVariables} setFontValues={setFontValues} />
      </main>
      <Footer />
    </div>
  );
};
