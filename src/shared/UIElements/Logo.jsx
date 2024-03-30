import React from "react";
import styles from "./Logo.module.css";
import { GiAbstract020 } from "react-icons/gi";

function Logo({ text, className }) {
  return (
    <div className={`${styles.logo} ${className}`}>
      <GiAbstract020 />
      {text && <span>R-Anime</span>}
    </div>
  );
}

export default Logo;
