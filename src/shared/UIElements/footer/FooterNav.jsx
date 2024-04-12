import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from "./FooterNav.module.css";
import Logo from "../Logo";
import { authActions } from "../../store/auth-slice";

function FooterNav() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(authActions.onLogout());
  };
  return (
    <nav className={styles.footerNav}>
      <ul>
        <li>
          <Logo reel={true} />
        </li>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>|</li>
        <li>
          <Link to={isLoggedIn ? "/watchlist" : "/login"}>Wacthlist</Link>
        </li>
        <li>|</li>
        <li onClick={clickHandler}>
          <Link to={"/login"}>{isLoggedIn ? "Logout" : "Login"}</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;
