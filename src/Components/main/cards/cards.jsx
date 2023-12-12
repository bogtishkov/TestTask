import laptop1 from "./../../../img/cards image/laptop1.png";
import laptop2 from "./../../../img/cards image/laptop2.png";
import yellowScreen from "./../../../img/cards image/yellowScreen.png";
import laptop3 from "./../../../img/cards image/laptop3.png";
import nftBlock from "./../../../img/cards image/nftBlock.png";
import finance from "./../../../img/cards image/finance.png";

import player1 from "./../../../img/cards image/in cards/player1.png";

import DescriptionCardTxt from "../../common/descriptionCardTxt/descriptionCardTxt";
import DescriptionCardImg from "../../common/descriptionCardImg/descriptionCardImg";
import styles from "./cards.module.css";

const Cards = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerSection}>
        <div className={styles.cardsOne}>
          <div className={styles.sectionOne}>
            <DescriptionCardImg imgSrc={laptop1} />
            <div className={styles.textInfo}>
              <DescriptionCardTxt imgSrc={player1} />
            </div>
          </div>
          <div className={styles.sectionOne}>
            <DescriptionCardImg imgSrc={laptop2} />
            <div className={styles.textInfo}>
              <DescriptionCardTxt imgSrc={player1} />
            </div>
          </div>
          <div className={styles.sectionOne}>
            <DescriptionCardImg imgSrc={yellowScreen} />
            <div className={styles.textInfo}>
              <DescriptionCardTxt imgSrc={player1} />
            </div>
          </div>
        </div>
        <div className={styles.cardsTwo}>
          <div className={styles.sectionTwo}>
            <DescriptionCardImg imgSrc={laptop3} />
            <div className={styles.textInfo}>
              <DescriptionCardTxt imgSrc={player1} />
            </div>
          </div>
          <div className={styles.sectionTwo}>
            <DescriptionCardImg imgSrc={nftBlock} />
            <div className={styles.textInfo}>
              <DescriptionCardTxt imgSrc={player1} />
            </div>
          </div>
          <div className={styles.sectionTwo}>
            <DescriptionCardImg imgSrc={finance} />
            <div className={styles.textInfo}>
              <DescriptionCardTxt imgSrc={player1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;