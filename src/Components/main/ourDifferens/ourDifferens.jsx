import Icons from "../../common/icons/incons";
import person from "./../../../img/header images/Layer 5.png";
import cap from "./../../../img/icons/GraduationCap.png";
import users from "./../../../img/icons/Users.png";
import camera from "./../../../img/icons/VideoCamera.png";

import styles from "./ourDifferens.module.css";

const OurDifferens = () => {
  return (
    <div className={styles.container}>
      <div className={styles.person}>
        <img src={person} alt="person.img" />
      </div>
      <div className={styles.textInfo}>
        <h2>
          What is our <span>difference</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
          <br />
          incididunt ut labore et dolore magna aliqua. ex ea commodo consequat.
        </p>
        <p>ut labore et dolore magna aliqua. ex ea commodo consequat.</p>
        <div className={styles.footerInfo}>
          <Icons imgSrc={cap}>300 Instructor</Icons>
          <Icons imgSrc={users}>20,000+ Student</Icons>
          <Icons imgSrc={camera}>10,000+ Video</Icons>
        </div>
      </div>
    </div>
  );
};

export default OurDifferens;
