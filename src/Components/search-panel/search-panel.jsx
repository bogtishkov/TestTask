import Button from "../common/button/button";

import magnifier from "./../../img/icons/search.png";

import styles from "./search-panel.module.css";

const SearchPanel = () => {
  return (
    <div className={styles.container}>
      <div className={styles.searchPanel}>
        <div className={styles.magnifier}>
          <img src={magnifier} alt="search" />
          <div className={styles.textInPanel}>
            <input type="text" placeholder="Want to learn?" />
          </div>
        </div>
        <Button primary>Explore</Button>
      </div>
    </div>
  );
};

export default SearchPanel;


