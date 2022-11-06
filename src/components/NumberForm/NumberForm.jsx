import Close from "./img/closeWhite.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import classNames from "classnames";
import CSSTransition from "react-transition-group/CSSTransition";
export const NumberForm = ({ activeForm, setActiveForm }) => {
  const [number, setNumber] = useState("");

  return (
    <CSSTransition
      in={activeForm}
      timeout={400}
      classNames={styles}
      unmountOnExit
    >
      <div className={styles.root}>
        <div className={styles.header}>
          <h5>Обратный звонок</h5>
          <img
            src={Close}
            alt=""
            className={styles.close}
            onClick={() => setActiveForm(false)}
          />
        </div>
        <div className={styles.content}>
          <span className={classNames(styles.smallText, styles.greys)}>
            Напишите нам или закажите обратный звонок. Обычно отвечаем в течение
            2 минут.
          </span>
          <span>Номер телефона</span>
          <div className={styles.inputs}>
            <input type="text" className={styles.textInput} />
            <input type="button" value=">" className={styles.button} />
          </div>

          <span className={classNames(styles.smallText, styles.greys)}>
            Отправляя заявку, я соглашаюсь с Политикой конфиденциальности
          </span>
        </div>
      </div>
    </CSSTransition>
  );
};
