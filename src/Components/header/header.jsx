import Content from "./content/content";
import Actions from "./actions/actions";

import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerSection}>
        <Content />
        <Actions />
      </div>
    </header>
  );
}

export default Header;
