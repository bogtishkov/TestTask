import styles from "./icons.module.css";

const Icons = ({imgSrc, children, childrenTwo}) => {
  return (
    <div className={styles.container}>
      <div className={styles.circle}>
        <img src={imgSrc} alt="icon.png" />
      </div>
      <div className={styles.textInfo}>
        <h5>{children}</h5>
        <p> {childrenTwo}</p>
      </div>
    </div>
  );
};

export default Icons;
