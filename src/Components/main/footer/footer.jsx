import Logo from "../../header/logo/logo";

import phone from "./../../../img/icons/phone.png";
import mail from "./../../../img/icons/mail.png";
import location from "./../../../img/icons/location.png";

import styles from "./footer.module.css";
import UnimportantInfo from "./unimportantInfo/unimportantInfo";

const Footer = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.logoAndText}>
          <div className={styles.logo}>
            <Logo />
            <h1>Edujar</h1>
          </div>
          <div className={styles.textInfo}>
            <p>
              Veniam, quis nostrud exercitation ullamco laboris nisi ut
              <br />
              aliquip ex ea commodo consequat. Duis aute irure dolor
              <br />
              in reprehenderit in voluptate velit esse cillum dolore eu
              <br />
              fugiat nulla pariatur.
            </p>
          </div>
        </div>
        <div className={styles.quickLinks}>
          <h5>Quick Links</h5>
          <div className={styles.aboutAndBlog}>
            <p>About</p>
            <p>Blog</p>
          </div>
          <div className={styles.courseAndContact}>
            <p>Course</p>
            <p>Contact</p>
          </div>
        </div>
        <div className={styles.contactUs}>
          <h5>Contact Us</h5>
          <div className={styles.phone}>
            <img src={phone} alt="phone.img" />
            <p>(209) 555-0104</p>
          </div>
          <div className={styles.mail}>
            <img src={mail} alt="mail.img" />
            <p>michelle.rivera@example.com</p>
          </div>
        </div>
        <div className={styles.location}>
          <div className={styles.locationImg}>
            <img src={location} alt={location.img} />
          </div>
          <div className={styles.adress}>
            <p>
              2715 Ash Dr. San Jose, South
              <br />
              Dakota 83475
            </p>
          </div>
        </div>
      </div>
      <UnimportantInfo />
    </div>
  );
};

export default Footer;
