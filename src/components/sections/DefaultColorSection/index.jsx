import style from "./style.module.scss";

export const DefaultColorSection = ( { children } ) => {
    return (

        <section className={style.variable__section}>
            <ul className={style.section__list}>
                {children}
            </ul>
        </section>

    );
}