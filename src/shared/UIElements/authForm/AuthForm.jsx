/* eslint-disable react/prop-types */
import { useState } from "react";
import { Form, Link } from "react-router-dom";
import styles from "./AuthForm.module.css";
import Button from "../Button";
import Spinner from "../Spinner";

function AuthForm({
  title,
  register,
  msg,
  link,
  login,
  loginHandler,
  isLoading,
  error,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(login ? "test@mail.com" : "");
  const [password, setPassword] = useState(login ? "secret123" : "");

  const submitHandler = (e) => {
    e.preventDefault();
    loginHandler(email, password);
  };

  const content = (
    <>
      <h2>{title}</h2>

      {register && (
        <div className={styles.formControl}>
          <label htmlFor="name">Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            name="name"
            id="name"
            required
          />
        </div>
      )}
      <div className={styles.formControl}>
        <label htmlFor="email">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          name="email"
          id="email"
          required
        />
      </div>
      <div className={styles.formControl}>
        <label htmlFor="password">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          name="password"
          id="password"
          required
        />
      </div>
      <div className={styles.formAction}>
        <Button type={"submit"} size={"sm"}>
          {title}
        </Button>
        <p className={styles.msg}>
          {msg}
          <Link to={"/" + link}> {link}</Link>
        </p>
      </div>
    </>
  );
  return (
    <div className={styles.formBox}>
      {!login && (
        <Form
          onSubmit={login ? submitHandler : null}
          method="post"
          className={styles.form}
        >
          {content}
        </Form>
      )}
      {login && (
        <>
          {error && (
            <p
              style={{
                textAlign: "center",
                color: "red",
              }}
            >
              {error}
            </p>
          )}
          <form onSubmit={submitHandler} method="post" className={styles.form}>
            {isLoading ? <Spinner /> : content}
          </form>
        </>
      )}
    </div>
  );
}

export default AuthForm;
