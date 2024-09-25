import gitHubIcon from "../../assets/github.svg"
import linkedinIcon from "../../assets/linkedin.svg"
import style from "./style.module.scss"

export const Footer = () => {
  return (
    <div className={style.footer__container}>
      <div className={style.content__container}>
        <p>Check out my other projects <span>:)</span></p>
        <div className={style.icons__container}>
          <a href="https://github.com/ViniStef">
            <img src={gitHubIcon} alt="GitHub Icon" />
          </a>
          <a href="www.linkedin.com/in/vinicius-steflitsch-b19a47259">
            <img src={linkedinIcon} alt="LinkedIn Icon" />
          </a>
        </div>
      </div>
    </div>
  );
};
