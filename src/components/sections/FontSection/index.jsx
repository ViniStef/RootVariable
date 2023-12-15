import style from "./style.module.scss";

export const FontSection = () => {
  return (
    <section className={style.font__section}>
      <div className={style.font__container}>
        <input className={style.font__input} type="text" placeholder="Ex: 24, 36, 48, 62" />
        <button className={style.font__button}>Copy to Clipboard</button>
      </div>
    </section>
  );
};
