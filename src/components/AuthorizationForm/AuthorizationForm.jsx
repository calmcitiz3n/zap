import styles from "./styles.module.scss";
import React from "react";
export const AuthorizationForm = ({
  handleChange,
  handleFormSubmit,
  isValid,
}) => {
  return (
    <form action="#" method="get" name="auth" className={styles.form}>
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
            className={styles.input}
            id="password"
            type="password"
            name="password"
            placeholder="Password"
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
        onChange={handleFormSubmit}
      />
    </form>
  );
};
export const AuthorizationFormWithMemo = React.memo(AuthorizationForm);
