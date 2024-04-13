/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { GiAbstract020 } from "react-icons/gi";
import styles from "./Logo.module.css";

function Logo({ text, className, to, reel }) {
  return (
    <Link to={to} className={`${styles.logo} ${className}`}>
      {reel && (
        <span className={styles.svgBox}>
          <GiAbstract020 />
        </span>
      )}
      {!reel && <GiAbstract020 />}
      {text && <span className={styles.text}>R-Anime</span>}
    </Link>
  );
}

export default Logo;
