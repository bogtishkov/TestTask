import styles from "./content.module.css";

import Logo from "./../logo/logo";
import NavLinks from './../navLinks/navLinks';

import frame0 from "../../../img/frames/frame0.png";

const Content = () => {
  return (
    <div className={styles.headerContent}>
      <div className={styles.mainLogo}>
        <div className={styles.headerLogo}>
          <Logo />
        </div>
        <div className={styles.headerLogoText}>
          <h1>Edujar</h1>
        </div>
      </div>
      <div className={styles.bookMark}>
        <img src={frame0} alt="frame0" />
      </div>
        <NavLinks />
    </div>
  );
};


export default Content;