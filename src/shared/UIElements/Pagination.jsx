import React from "react";
import styles from "./Pagination.module.css";

function Pagination({ page, nextPageHandler, prevPageHandler }) {
  return (
    <div className={styles.pagination}>
      <span onClick={prevPageHandler}>{"<"}</span>
      <p>Page:{page}</p>
      <span onClick={nextPageHandler}>{">"}</span>
    </div>
  );
}

export default Pagination;
