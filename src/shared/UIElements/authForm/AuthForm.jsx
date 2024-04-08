import React from "react";
import styles from "./AuthForm.module.css";
import Button from "../Button";
import { Link } from "react-router-dom";

function AuthForm({ title, register, msg, link }) {
  return (
    <div className={styles.formBox}>
      <form className={styles.form}>
        <h2>{title}</h2>

        {register && (
          <div className={styles.formControl}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
        )}
        <div className={styles.formControl}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div className={styles.formAction}>
          <Button size={"sm"} type={"submit"}>
            {title}
          </Button>
          <p className={styles.msg}>
            {msg}
            <Link to={"/" + link}> {link}</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default AuthForm;
