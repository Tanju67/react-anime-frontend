import React from "react";
import styles from "./Logo.module.css";
import { GiAbstract020 } from "react-icons/gi";
import { Link } from "react-router-dom";

function Logo({ text, className, to, reel }) {
  return (
    <Link to={to} className={`${styles.logo} ${className}`}>
      {reel && (
        <span className={styles.svgBox}>
          <GiAbstract020 />
        </span>
      )}
      {!reel && <GiAbstract020 />}
      {text && <span>R-Anime</span>}
    </Link>
  );
}

export default Logo;
