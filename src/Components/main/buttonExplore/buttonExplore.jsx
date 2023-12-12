import styles from "./buttonExplore.module.css";

import Button from "./../../common/button/button";

const ButtonExplore = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerSection}>
        <Button size="large">Explore all Courses</Button>
      </div>
    </div>
  );
};

export default ButtonExplore;
