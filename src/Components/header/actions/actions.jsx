import styles from "./actions.module.css";

import Button from "../../common/button/button";

const Actions = () => {
  return (
    <div className={styles.actions}>
      <Button elevated variant="outline">
        Login
      </Button>
      <Button elevated>Get Started</Button>
    </div>
  );
};

export default Actions;
