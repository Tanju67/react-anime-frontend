/* eslint-disable react/prop-types */
import styles from "./SectionLayout.module.css";

function SectionLayout({ children, title, className }) {
  return (
    <div className={`${styles.section} ${className}`}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}

export default SectionLayout;
