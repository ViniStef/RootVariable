import { Header } from "../Header";
import "../../styles/index.scss";
import { PrimarySection } from "../sections/PrimarySection";
import { SecondarySection } from "../sections/SecondarySection";
import { AccentSection } from "../sections/AccentSection";
import { FontSection } from "../sections/FontSection";

export const HomePage = () => {
  return (
    <div className="main__container">
      <Header />
      <main className="content__container">
        <PrimarySection />

        <SecondarySection />

        <AccentSection />

        <FontSection />
      </main>
    </div>
  );
};
