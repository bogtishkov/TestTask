import facebook from "./../../../../img/icons/Facebook/facebook.png";
import twitter from "./../../../../img/icons/Twitter/twitter.png";
import instagram from "./../../../../img/icons/Instagram/instagram.png";
import behance from "./../../../../img/icons/Behance/behance.png";
import dribbble from "./../../../../img/icons/Dribbble/dribbble.png";

import styles from "./unimportantInfo.module.css";

const UnimportantInfo = () => {
  return (
    <div className={styles.container}>
      <hr />
      <div className={styles.textAndIcons}>
        <p>Copyright 2023 | All Rights Reserved</p>
        <div className={styles.icons}>
          <img src={facebook} alt="facebook.png" />
          <img src={twitter} alt="twitter.png" />
          <img src={instagram} alt="instagram.png" />
          <img src={behance} alt="behance.png" />
          <img src={dribbble} alt="dribbble.png" />
        </div>
      </div>
    </div>
  );
};

export default UnimportantInfo;
