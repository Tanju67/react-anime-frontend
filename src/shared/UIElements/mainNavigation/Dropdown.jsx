import React from "react";
import styles from "./Dropdown.module.css";
import DropdownItem from "./DropdownItem";
import { Link } from "react-router-dom";

function Dropdown({ data, query, setQuery, isLoading }) {
  const filteredData = data.slice(0, 10);
  console.log(filteredData);
  return (
    <div className={styles.dropdown}>
      {filteredData.length > 0 && <Link>See all result for "{query}"</Link>}
      {filteredData.map((item, i) => (
        <DropdownItem key={i} item={item} setQuery={setQuery} />
      ))}
      {isLoading && (
        <p style={{ textAlign: "center", color: "#000", marginTop: "5rem" }}>
          Loading...
        </p>
      )}

      {!isLoading && filteredData.length === 0 && (
        <p style={{ textAlign: "center", color: "#000", marginTop: "5rem" }}>
          No result found for "{query}".
        </p>
      )}
    </div>
  );
}

export default Dropdown;
