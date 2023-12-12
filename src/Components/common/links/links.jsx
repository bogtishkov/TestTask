import arrowUp from "./../../../img/icons/ArrowUpRight.png";

import styles from "./links.module.css";

const Links = ({ children, imgSrc }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <img src={imgSrc} alt="icon.png" />
          <p>{children}</p>
        </div>
        <div className={styles.arrow}>
        <img src={arrowUp} alt="arrow.png" />
      </div>
      </div>
    </div>
  );
};

export default Links;
