import { useState } from "react";
import styles from "./Login.module.css";
import AuthForm from "../../shared/UIElements/authForm/AuthForm";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../shared/store/auth-slice";

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = async (email, password) => {
    try {
      setIsLoading(false);
      const res = await fetch("http://localhost:5000/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.msg);
      }
      localStorage.setItem("token", data.user.token);
      dispatch(authActions.setUser({ user: data || {} }));
      dispatch(authActions.onLogin());
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };
  return (
    <div className={styles.page}>
      <AuthForm
        title="Login"
        msg="Don't you have any account yet?"
        link="register"
        login={true}
        loginHandler={loginHandler}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
}

export default Login;
