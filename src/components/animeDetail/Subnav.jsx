import React from "react";
import styles from "./Subnav.module.css";
import { Link } from "react-router-dom";

function Subnav({ prevHandler, nextHandler, page, id }) {
  return (
    <div className={styles.header}>
      <Link to={`/anime/${id}`} className={styles.link}>
        &larr; Back
      </Link>
      <div className={styles.pagination}>
        <i className={styles.link} onClick={prevHandler}>
          {"<"}
        </i>
        <span> Page: {page} </span>
        <i className={styles.link} onClick={nextHandler}>
          {">"}
        </i>
      </div>
    </div>
  );
}

export default Subnav;
