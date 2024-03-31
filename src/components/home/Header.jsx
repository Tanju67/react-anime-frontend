import React from "react";
import styles from "./Header.module.css";
import HeaderSlide from "./HeaderSlide";

function Header({ animeList }) {
  return (
    <div className={styles.header}>
      <HeaderSlide animeList={animeList} />
    </div>
  );
}

export default Header;
