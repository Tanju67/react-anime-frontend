import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RiLogoutCircleLine } from "react-icons/ri";
import { RiLoginCircleLine } from "react-icons/ri";
import { FaRegBookmark } from "react-icons/fa";
import styles from "./NavMenu.module.css";
import { authActions } from "../../store/auth-slice";

function NavMenu() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(authActions.onLogout());
  };
  return (
    <ul className={styles.navMenu}>
      <li>
        <FaRegBookmark />
        <NavLink to={isLoggedIn ? `/watchlist?page=1` : "login"}>
          Watchlist
        </NavLink>
      </li>
      <li onClick={clickHandler}>
        {!isLoggedIn ? <RiLoginCircleLine /> : <RiLogoutCircleLine />}
        <NavLink to={"/login"}>{isLoggedIn ? "Logout" : "Login"}</NavLink>
      </li>
    </ul>
  );
}

export default NavMenu;
