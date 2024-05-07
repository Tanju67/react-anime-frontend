import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./MainNavigation.module.css";
import Logo from "../Logo";
import SearchForm from "./SearchForm";
import NavMenu from "./NavMenu";

function MainNavigation() {
  const [showSearch, setShowSearch] = useState(false);
  console.log(setShowSearch);
  return (
    <nav className={styles.mainNav}>
      <div className={styles.container}>
        <Logo text={true} reel={true} />
        <div className={styles.icons}>
          <FaSearch
            onClick={() => setShowSearch(true)}
            className={styles.searchIcon}
          />
        </div>
        <div className={styles.normalScreen}>
          <SearchForm setShowSearch={setShowSearch} />
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
      </div>
    </nav>
  );
}

export default MainNavigation;
