import UserIcon from "./img/userIcon.png";
import styles from "./styles.module.scss";
import { Rating } from "@mui/material";
import classNames from "classnames";
export const Review = ({ name, review, rating }) => {
  return (
    <div className={styles.root}>
      <div className={styles.iconBlock}>
        <img src={UserIcon} alt="userIcon" className={styles.icon} />
      </div>
      <div className={styles.data}>
        <div className={styles.nameBlock}>
          <div className={classNames(styles.name, "font-face-rbt-med")}>
            {name}
          </div>
          <Rating
            value={rating}
            readOnly
            name="read-only"
            size="large"
            // className={styles.rating}
          />
        </div>

        <div className={styles.review}>{review}</div>
      </div>
    </div>
  );
};
