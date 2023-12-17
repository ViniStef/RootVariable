import { useState } from "react";
import style from "./style.module.scss";

export const FontSection = () => {
  let [isOpen, setIsOpen] = useState(false);

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
          <button className={style.btnSize__rem}>rem</button>
          {/* <hr className={style.choice__line} /> */}
          <button className={style.btnSize__px}>px</button>
        </div>
      ) : null}
      <div className={style.font__container}>
        <input
          className={style.font__input}
          type="text"
          placeholder="Ex: 24, 36, 48, 62"
        />
        <button className={style.font__button}>Copy to Clipboard</button>
      </div>
    </section>
  );
};
