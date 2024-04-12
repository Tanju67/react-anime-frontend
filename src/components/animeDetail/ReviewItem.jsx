/* eslint-disable react/prop-types */
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import styles from "./ReviewItem.module.css";
import Button from "../../shared/UIElements/Button";
import { formatDate } from "../../shared/utils/helper";

function ReviewItem({
  image,
  name,
  date,
  review,
  spoiler,
  score,
  like,
  dislike,
  onShowModal,
  onClsModal,
  handleSelectedReview,
  readmore,
}) {
  const clickHandler = () => {
    readmore ? onClsModal() : onShowModal();
    handleSelectedReview({
      image,
      name,
      date,
      review,
      spoiler,
      score,
      like,
      dislike,
    });
  };
  return (
    <div className={`${styles.item} ${readmore ? styles.readmore : ""}`}>
      <div>
        <div className={styles.header}>
          <div>
            <img src={image} alt={name} />
            <span> {name} </span>
            <span> ⭐{score}/10 </span>
          </div>

          <span> {formatDate(date)} </span>
        </div>
        <div className={styles.content}>
          {spoiler && <p>SPOILER</p>}
          <p className={`${styles.review} ${spoiler ? styles.spoiler : ""}`}>
            {readmore ? review : review.slice(0, 250) + " ..."}
          </p>
        </div>
      </div>

      <div className={styles.footer}>
        <Button onClick={clickHandler} size={"sm"}>
          {readmore ? "Close" : "Read More"}
        </Button>
        <div>
          <p>
            <SlLike />
            <span>{like}</span>
          </p>
          <p>
            <SlDislike />
            <span>{dislike}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReviewItem;
