import './navLinks.module.css'

import styles from './navLinks.module.css';

const NavLinks = () => {
    return (
        <div className={styles.navButtons}>
        <div className={styles.headerButton}>
          <button>Home</button>
        </div>
        <div className={styles.headerButton}>
          <button>About</button>
        </div>
        <div className={styles.headerButton}>
          <button>Course</button>
        </div>
        <div className={styles.headerButton}>
          <button>Blog</button>
        </div>
        <div className={styles.headerButton}>
          <button>Contact</button>
        </div>
      </div>
    )
}

export default NavLinks;