import { Header } from "../Header";
import "../../styles/index.scss";
import { PrimarySection } from "../sections/PrimarySection";
import { SecondarySection } from "../sections/SecondarySection";
import { AccentSection } from "../sections/AccentSection";
import { FontSection } from "../sections/FontSection";
import { useEffect, useLayoutEffect, useState } from "react";
import { Footer } from "../Footer";

export const HomePage = () => {
  
  const [secondaryAmount, setSecondaryAmount] = useState(4);
  const [accentAmount, setAccentAmount] = useState(4);

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
        <PrimarySection />

        <SecondarySection secondaryAmount={secondaryAmount} />

        <AccentSection theme={theme} accentAmount={accentAmount} />

        <FontSection />
      </main>
      <Footer />
    </div>
  );
};
