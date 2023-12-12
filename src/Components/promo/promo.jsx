import SearchPanel from "../search-panel/search-panel";

import PersonImg from "./../main/personImg/personImg";

import vectorCircle from "./../../img/frames/Vector.png";
import pluses from "./../../img/header images/pluses.png";

import styles from "./promo.module.css";

const Promo = () => {
  return (
    <div className={styles.main}>
      <div className={styles.vectorCircleImg}>
        <img src={vectorCircle} alt="vectorCircle.png"/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.mainTextContainer}>
          <h1>
            <span>Best courses</span> are
            <br />
            waiting to enrich
            <br />
            your skill
          </h1>
          <div className={styles.pluses}>
            <img src={pluses} alt="pluses.img"/>
          </div>
        </div>
        <div className={styles.infoText}>
          <h3>
            Provides you with the latest online learning system and material
            <br />
            that help your knowledge growing.
          </h3>
        </div>
        <SearchPanel />
      </div>
      <PersonImg />
    </div>
  );
};

export default Promo;
