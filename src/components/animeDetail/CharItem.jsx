/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import styles from "./CharItem.module.css";
import Logo from "../../shared/UIElements/Logo";

function CharItem({ image, name, rounded, charId, actor }) {
  const id = useParams().id;
  return (
    <div className={`${styles.item} ${rounded ? styles.rounded : ""}`}>
      <div className={styles.imgBox}>
        <img src={image} alt="" />
        <div className={styles.hoverElement}>
          <Logo
            to={actor ? `/${id}/actor/${charId}` : `/${id}/character/${charId}`}
            className={styles.hoverBtn}
          />
        </div>
      </div>

      <div className={styles.infoBox}>
        <p>{name}</p>
      </div>
    </div>
  );
}

export default CharItem;
