import GradientCircle from "../main/gradientCircle/gradientCircle";

import wrapper from "./../../img/frames/wrapper.png";
import hubspot from "./../../img/brands/hubspot.png";
import loom from "./../../img/brands/loom.png";
import gitlab from "./../../img/brands/gitlab.png";
import livechat from "./../../img/brands/livechat.png";
import monday from "./../../img/brands/monday.png";

import styles from "./partners.module.css";

const Partners = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapperContainer}>
        <div className={styles.gradientCircle}>
          <GradientCircle />
        </div>
        <div className={styles.vectorWrapper}>
          <img src={wrapper} alt="wrapper.png" />
          <div className={styles.partnersImg}>
            <img src={hubspot} alt="hubspot.png" />
            <img src={loom} alt="loom.png" />
            <img src={gitlab} alt="gitlab.png" />
            <img src={livechat} alt="livechat.png" />
            <img src={monday} alt="monday.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
