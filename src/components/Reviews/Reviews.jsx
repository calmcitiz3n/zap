import classNames from "classnames";
import { ReviewContainer } from "../../containers/ReviewContainer/ReviewContainer";
import styles from "./styles.module.css";
export const Reviews = ({ ids }) => {
  console.log(ids);
  return (
    <div className={styles.root}>
      <h2 className={classNames(styles.header, "font-face-soul-reg")}>
        All Reviews
      </h2>
      {ids.map((id) => (
        <ReviewContainer id={id} />
      ))}
    </div>
  );
};
