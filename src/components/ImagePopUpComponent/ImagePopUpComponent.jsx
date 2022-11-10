import close from "./icn/close.png";
import styles from "./styles.module.scss";
import CSSTransition from "react-transition-group/CSSTransition";
export const ImagePopUpComponent = ({ href, setImagePopUp, imagePopUp }) => {
  if (imagePopUp) {
    return (
      <CSSTransition
        in={imagePopUp}
        timeout={400}
        classNames={styles}
        unmountOnExit
      >
        <div className={styles.root} onClick={() => setImagePopUp(false)}>
          <img className={styles.imageSneakers} src={href} alt="sneakers" />
        </div>
      </CSSTransition>
    );
  }
};
// export default ImagePopUpComponent;
