import React from "react";
import styles from "./SectionLayout.module.css";

function SectionLayout({ children, title }) {
  return (
    <div className={styles.section}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}

export default SectionLayout;
