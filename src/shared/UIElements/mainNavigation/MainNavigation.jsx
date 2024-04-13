import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./MainNavigation.module.css";
import Logo from "../Logo";
import SearchForm from "./SearchForm";
import NavMenu from "./NavMenu";

function MainNavigation() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <nav className={styles.mainNav}>
      <Logo text={true} reel={true} />
      <div className={styles.icons}>
        <FaSearch
          onClick={() => setShowSearch(true)}
          className={styles.searchIcon}
        />
      </div>
      <div className={styles.normalScreen}>
        <SearchForm />
      </div>
      {showSearch && (
        <div className={styles.smallScreen}>
          <SearchForm setShowSearch={setShowSearch} />
          <div
            onClick={() => setShowSearch(false)}
            className={styles.backdrop}
          ></div>
        </div>
      )}
      <NavMenu />
    </nav>
  );
}

export default MainNavigation;
