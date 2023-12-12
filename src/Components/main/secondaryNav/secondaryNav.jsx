import SelectionPanel from "./selectionPanel/selectionPanel";

import styles from "./secondaryNav.module.css";

const secondaryNav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.secondaryNav}>
        <div className={styles.popularCourses}>
          <h1>
            Popular <span>Courses</span>
          </h1>
        </div>
        <SelectionPanel />
      </div>
    </div>
  );
};

export default secondaryNav;
