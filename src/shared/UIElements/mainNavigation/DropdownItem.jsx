import React from "react";
import styles from "./DropdownItem.module.css";
import { useNavigate } from "react-router-dom";

function DropdownItem({ item, setQuery }) {
  const navigate = useNavigate();
  const clickHandler = () => {
    setQuery("");
    navigate(`/anime/${item.mal_id}`);
  };
  return (
    <div onClick={clickHandler} className={styles.item}>
      <div className={styles.imgBox}>
        <img src={item.images.jpg.image_url} alt="" />
      </div>
      <div className={styles.infoBox}>
        <p>
          <span>{item.title}</span>
          <span>{item.aired.prop.from.year}</span>
        </p>
      </div>
    </div>
  );
}

export default DropdownItem;
