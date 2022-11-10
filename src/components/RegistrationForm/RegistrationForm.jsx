import styles from "./RegistrationForm.module.css";
import React from "react";
import classnames from "classnames";
export const RegistrationForm = ({
  handleChange,
  handleFormSubmit,
  isValid,
}) => {
  return (
    <form action="#" method="get" name="reg">
      <div className={styles.areas}>
        <fieldset className={styles.fieldset}>
          <input
            className={styles.input}
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />
        </fieldset>
        <fieldset className={styles.fieldset}>
          <input
            className={classnames(styles.input)}
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </fieldset>
        <fieldset className={styles.fieldset}>
          <div className={styles.microtext} id="microtext"></div>
          <input
            className={classnames(styles.input, {
              [styles.shadowGreen]: isValid(),
              [styles.shadowRed]: !isValid(),
            })}
            id="repeatPassword"
            type="password"
            name="repeatPassword"
            placeholder="Repeat password"
            onChange={handleChange}
          />
        </fieldset>
        <fieldset className={styles.fieldset}>
          <input
            className={classnames(styles.input)}
            id="passwordRepeat"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
        </fieldset>
      </div>

      <input
        type="button"
        submit
        value="Войти"
        id="inputForm"
        className={styles.submit}
        onClick={handleFormSubmit}
      />
    </form>
  );
};
export const RegistrationFormWithMemo = React.memo(RegistrationForm);
