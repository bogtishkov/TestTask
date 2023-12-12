import circleNull from "./../../../img/header images/circle_0.png";
import personImg from "./../../../img/header images/person_0.png";

import styles from "./personImg.module.css";

const PersonImg = () => {
  return (
    <div className={styles.containerImg}>
      <div className={styles.personImg}>
        <img src={personImg} alt="personImg" />
      </div>
      <div className={styles.circle}>
        <img src={circleNull} alt="circleNull" />
      </div>
    </div>
  );
};

export default PersonImg;
