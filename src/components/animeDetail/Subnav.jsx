import React from "react";
import styles from "./Subnav.module.css";
import { Link } from "react-router-dom";

function Subnav({ prevHandler, nextHandler, page, id, home, pagination }) {
  return (
    <div className={styles.header}>
      {!home && (
        <Link to={`/anime/${id}`} className={styles.link}>
          &larr; Back
        </Link>
      )}
      {home && (
        <Link to={`/`} className={styles.link}>
          &larr; Home
        </Link>
      )}
      {pagination && (
        <div className={styles.pagination}>
          <i className={styles.link} onClick={prevHandler}>
            {"<"}
          </i>
          <span> Page: {page} </span>
          <i className={styles.link} onClick={nextHandler}>
            {">"}
          </i>
        </div>
      )}
    </div>
  );
}

export default Subnav;
