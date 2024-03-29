import React from "react";
import styles from "./MainNavigation.module.css";
import Logo from "../Logo";
import SerachForm from "./SearchForm";
import NavMenu from "./NavMenu";

function MainNavigation() {
  return (
    <nav className={styles.mainNav}>
      <Logo text={true} />
      <SerachForm />
      <NavMenu />
    </nav>
  );
}

export default MainNavigation;
