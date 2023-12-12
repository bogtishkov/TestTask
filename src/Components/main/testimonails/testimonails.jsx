import styles from "./testimonails.module.css";

import person from "./../../../img/cards image/in cards/person.png";
import stars from "./../../../img/cards image/in cards/stars.png";
import arrowRight from "./../../../img/icons/arrow_right.png";
import arrowLeft from "./../../../img/icons/arrow_left.png";
import person0 from "./../../../img/icons/person0.png";
import person1 from "./../../../img/icons/person1.png";
import person2 from "./../../../img/icons/person2.png";
import person3 from "./../../../img/icons/person3.png";
import person4 from "./../../../img/icons/person4.png";
import person5 from "./../../../img/icons/person5.png";

const Testimonails = () => {
  return (
    <div className={styles.container}>
      <div className={styles.people}>
        <div className={styles.person0}>
          <img src={person0} alt="" />
        </div>
        <div className={styles.person1}>
          <img src={person1} alt="" />
        </div>
        <div className={styles.person2}>
          <img src={person2} alt="" />
        </div>
        <div className={styles.person3}>
          <img src={person3} alt="" />
        </div>
        <div className={styles.person4}>
          <img src={person4} alt="" />
        </div>
        <div className={styles.person5}>
          <img src={person5} alt="" />
        </div>
      </div>
      <div className={styles.title}>
        <h1>Testimonials</h1>
      </div>
      <div className={styles.infoBox}>
        <div className={styles.aboutDev}>
          <div className={styles.aboutAdam}>
            <img src={person} alt="person.img" />
            <div className={styles.textInfoAdam}>
              <h5>Adam Smith</h5>
              <p>Python Developer</p>
            </div>
          </div>
          <img src={stars} alt="stars.png" />
        </div>
        <hr />
        <div className={styles.textInfoBox}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
            <br />
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut
            <br />
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse
            <br />
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <div className={styles.arrowContainer}>
          <img src={arrowLeft} alt="arrow.png" />
          <img src={arrowRight} alt="arrow.png" />
        </div>
      </div>
    </div>
  );
};

export default Testimonails;
