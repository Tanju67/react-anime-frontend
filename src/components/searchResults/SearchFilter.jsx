import React, { useState } from "react";
import styles from "./SearchFilter.module.css";
import Button from "../../shared/UIElements/Button";

function SearchFilter({ filterHandler }) {
  const [type, setType] = useState("");
  const [minScore, setMinScore] = useState("");
  const [maxScore, setMaxScore] = useState("");
  const [status, setStatus] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setType("");
    setStatus("");
    setMaxScore("");
    setMinScore("");
    const filteredObj = {
      type: type || "",
      minScore: minScore || "",
      maxScore: maxScore || "",
      status: status || "",
    };
    console.log(filteredObj);

    filterHandler(filteredObj);
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles.formControl}>
        <label htmlFor="name">Type</label>
        <select
          onChange={(e) => setType(e.target.value)}
          value={type}
          name="type"
          id="type"
        >
          <option value="">all</option>
          <option value="movie">movie</option>
          <option value="tv">tv</option>
          <option value="ova">ova</option>
          <option value="special">special</option>
          <option value="ona">ona</option>
          <option value="music">cm</option>
          <option value="cm">ona</option>
          <option value="pv">pv</option>
        </select>
      </div>
      <div className={styles.formControl}>
        <label htmlFor="minScore">Min Score</label>
        <select
          onChange={(e) => setMinScore(e.target.value)}
          value={minScore}
          name="minScore"
          id="minScore"
        >
          <option value="">no value</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div className={styles.formControl}>
        <label htmlFor="maxScore">Max Score</label>
        <select
          onChange={(e) => setMaxScore(e.target.value)}
          value={maxScore}
          name="maxScore"
          id="maxScore"
        >
          <option value="">no value</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div className={styles.formControl}>
        <label htmlFor="status">Status</label>
        <select
          onChange={(e) => setStatus(e.target.value)}
          value={status}
          name="status"
          id="status"
        >
          <option value="">no value</option>
          <option value="airing">airing</option>
          <option value="complete">complete</option>
          <option value="upcoming">upcoming</option>
        </select>
      </div>
      <Button type={"submit"} className={styles.filterBtn} size={"sm"}>
        Filter
      </Button>
    </form>
  );
}

export default SearchFilter;
