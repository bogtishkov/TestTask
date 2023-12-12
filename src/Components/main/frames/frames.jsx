import frame from "./../../../img/frames/Frame.png";
import ellipse from './../../../img/frames/Ellipse 118.png';

import styles from "./frames.module.css";

const Frames = () => {
  return (
    <div className={styles.container}>
      <div className={styles.startFrame}>
        <img src={frame} alt="frame.png" />
      </div>
      <div className={styles.endFrame}>
        <img src={ellipse} alt="ellipse.png" />
      </div>
    </div>
  );
};

export default Frames;
