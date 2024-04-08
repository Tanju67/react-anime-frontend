import React from "react";
import styles from "./Login.module.css";
import AuthForm from "../../shared/UIElements/authForm/AuthForm";

function Login() {
  return (
    <div className={styles.page}>
      <AuthForm
        title="Login"
        msg="Don't you have any account yet?"
        link="register"
      />
    </div>
  );
}

export default Login;
