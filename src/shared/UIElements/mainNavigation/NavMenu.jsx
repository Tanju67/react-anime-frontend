import React from "react";
import styles from "./NavMenu.module.css";
import { NavLink } from "react-router-dom";

function NavMenu() {
  return (
    <ul className={styles.navMenu}>
      <li>
        <NavLink>Watchlist</NavLink>
      </li>
      <li>
        <NavLink>Login</NavLink>
      </li>
    </ul>
  );
}

export default NavMenu;
