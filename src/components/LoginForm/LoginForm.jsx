import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import classnames from "classnames";
import styles from "./styles.module.scss";
import {
  RegistrationForm,
  RegistrationFormWithMemo,
} from "../RegistrationForm/RegistrationForm";
import {
  AuthorizationForm,
  AuthorizationFormWithMemo,
} from "../AuthorizationForm/AuthorizationForm";
export const LoginForm = () => {
  const [form, setForm] = useState(0);
  const [values, setValues] = useState({
    id: nanoid(),
    email: "",
    password: "",
    repeatPassword: "",
    name: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const isValid = () => {
    const password = document.getElementById("password");
    const repeatPassword = document.getElementById("repeatPassword");
    const input = document.getElementById("inputForm");
    console.log(password?.value);
    console.log(repeatPassword?.value);
    if (
      repeatPassword?.value === password?.value &&
      password?.value?.length &&
      repeatPassword?.value?.length
    ) {
      repeatPassword?.classList.add(styles.shadowGreen);
      repeatPassword?.classList.remove(styles.shadowRed);
      if (input) {
        input.disabled = "";
      }

      return true;
    }
    repeatPassword?.classList.add(styles.shadowRed);
    if (input) {
      input.disabled = "disabled";
    }
    repeatPassword?.classList.remove(styles.shadowGreen);
    return false;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (
      !values.email &&
      String(values.email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      alert("Введен невалидный email");
    } else if (values?.password.length < 5) {
      alert("Ваш пароль ненадежный");
    } else if (values?.password !== values?.repeatPassword) {
      alert("Пароли не совпадают");
    } else if (values?.name.length <= 3) {
      alert("Короткое имя!");
    }
    console.log("Отправка данных...");
  };
  useEffect(() => isValid, [form.password, form.repeatPassword]);
  return (
    <div className={styles.root}>
      <div className={styles.buttons}>
        <button onClick={() => setForm(1)} className={styles.button}>
          Регистрация
        </button>
        <button onClick={() => setForm(0)} className={styles.button}>
          Вход
        </button>
      </div>
      {form === 1 && (
        <RegistrationFormWithMemo
          handleFormSubmit={handleFormSubmit}
          isValid={isValid}
          handleChange={handleChange}
        />
      )}
      {form === 0 && (
        <AuthorizationFormWithMemo
          handleFormSubmit={handleFormSubmit}
          isValid={isValid}
          handleChange={handleChange}
        />
      )}
    </div>
  );
};
