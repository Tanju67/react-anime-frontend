import styles from "./Register.module.css";
import AuthForm from "../../shared/UIElements/authForm/AuthForm";

function Register() {
  return (
    <div className={styles.page}>
      <AuthForm
        title="Register"
        msg="Do you allready have an account?"
        link="login"
        register={true}
      />
    </div>
  );
}

export default Register;
