/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./Dropdown.module.css";
import DropdownItem from "./DropdownItem";

function Dropdown({ data, query, setQuery, isLoading, setShowSearch }) {
  const filteredData = data.slice(0, 10);
  return (
    <div className={styles.dropdown}>
      {filteredData.length > 0 && (
        <Link
          onClick={() => {
            setQuery("");
            setShowSearch(false);
          }}
          to={`/search-result?query=${query}&page=1&type=&min_score=&max_score=&status=`}
        >
          See all result for "{query}"
        </Link>
      )}
      {filteredData.map((item, i) => (
        <DropdownItem
          key={i}
          item={item}
          setQuery={setQuery}
          setShowSearch={setShowSearch}
        />
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
