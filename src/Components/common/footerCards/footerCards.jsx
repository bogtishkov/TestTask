import styles from "./footerCards.module.css";

import stars from "./../../../img/cards image/in cards/stars.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <img src={stars} alt="stars.png" />
      <p>Enroll Now</p>
    </div>
  );
};

export default Footer;
