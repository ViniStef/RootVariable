import { Header } from "../Header";
import "../../styles/index.scss";
import { PrimarySection } from "../sections/PrimarySection";
import { SecondarySection } from "../sections/SecondarySection";
import { AccentSection } from "../sections/AccentSection";
import { FontSection } from "../sections/FontSection";
import { useEffect, useLayoutEffect, useState } from "react";
import { Footer } from "../Footer";

export const HomePage = () => {
  const [primaryValues, setPrimaryValues] = useState([]);
  const [secondaryValues, setSecondaryValues] = useState([]);
  const [accentValues, setAccentValues] = useState([]);
  const [fontValues, setFontValues] = useState([
    { name: "--fs-sm", size: "16" },
    { name: "--fs-md", size: "22" },
    { name: "--fs-lg", size: "28" },
    { name: "--fs-xl", size: "36" },
  ]);

  const copyVariables = (sizePreference) => {
    let allVariables = [...primaryValues, ...secondaryValues, ...accentValues]
      .map((variable) => `${variable.name}: ${variable.color};`)
      .join("\n");

    const fontVariables = fontValues
      .map((variable) => `${variable.name}: ${variable.size}${sizePreference};`)
      .join("\n");

    const clipboardTxt = `${allVariables}\n\n${fontVariables}`;

    navigator.clipboard.writeText(clipboardTxt);
  };

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("@RootVariable:Theme")
      ? JSON.parse(localStorage.getItem("@RootVariable:Theme"))
      : "dark";
  });

  useLayoutEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("@RootVariable:Theme", JSON.stringify(theme));
  }, [theme]);

  const toggleDarkMode = () => {
    const toggle = document.documentElement.classList.toggle("light");
    if (toggle) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className="main__container">
      <Header theme={theme} toggleDarkMode={toggleDarkMode} />
      <main className="content__container">
        <PrimarySection setPrimaryValues={setPrimaryValues} />

        <SecondarySection setSecondaryValues={setSecondaryValues} />

        <AccentSection theme={theme} setAccentValues={setAccentValues} />

        <FontSection
          copyVariables={copyVariables}
          setFontValues={setFontValues}
        />
      </main>
      <Footer />
    </div>
  );
};
