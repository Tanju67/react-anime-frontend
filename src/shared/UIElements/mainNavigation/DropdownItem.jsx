/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import styles from "./DropdownItem.module.css";

function DropdownItem({ item, setQuery, setShowSearch }) {
  const navigate = useNavigate();
  const clickHandler = () => {
    setQuery("");
    setShowSearch(false);
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
