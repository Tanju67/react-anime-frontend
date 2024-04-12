import { Link } from "react-router-dom";
import styles from "./HomeNav.module.css";

function HomeNav() {
  return (
    <div className={styles.subNav}>
      <Link to={"/"}>&larr; Home</Link>
    </div>
  );
}

export default HomeNav;
