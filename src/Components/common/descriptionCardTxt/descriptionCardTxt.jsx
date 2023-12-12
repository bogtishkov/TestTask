import Person from "../person/person";
import Footer from "../footerCards/footerCards";

import styles from "./descriptionCardTxt.module.css";

const DescriptionCardTxt = ({ imgSrc }) => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.titleInfo}>
          <div className={styles.quantityLessons}>
            <img src={imgSrc} alt="img.png" />
            <p>10x Lesson</p>
          </div>
          <div className={styles.desingButton}>
            <button>Design</button>
          </div>
        </div>
        <div className={styles.textInfo}>
          <h3>
            Python for Financial Analysis
            <br />
            Next and Algorithmic Trading
          </h3>
        </div>
      </div>
      <Person/>
      <Footer/>
    </div>
  );
};

export default DescriptionCardTxt;
