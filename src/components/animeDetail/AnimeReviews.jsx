/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./AnimeReviews.module.css";
import ReviewItem from "./ReviewItem";
import Modal from "../../shared/UIElements/Modal";
import DetailPageSectionLayout from "../../shared/UIElements/detailPageLayout/DetailPageSectionLayout";

function AnimeReviews({ data, allData }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedReview, setSelectedReview] = useState({});
  const slicedData = allData ? data : data.slice(0, 3);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };

  const handleSelectedReview = (review) => {
    setSelectedReview(review);
  };

  return (
    <DetailPageSectionLayout
      link={"reviews"}
      title={"Anime Reviews"}
      allData={allData}
      isAnimeExist={slicedData?.length > 0}
    >
      <div className={styles.container}>
        {slicedData.map((item) => (
          <ReviewItem
            key={item.mal_id}
            image={item.user.images.jpg.image_url}
            name={item.user.username}
            date={item.date}
            spoiler={item.is_spoiler}
            review={item.review}
            score={item.score}
            like={item.reactions.love_it}
            dislike={item.reactions.confusing}
            onShowModal={showModalHandler}
            handleSelectedReview={handleSelectedReview}
          />
        ))}
        {slicedData.length === 0 && <p>No episode found.</p>}
      </div>
      {showModal && (
        <Modal onClick={hideModalHandler}>
          <ReviewItem
            image={selectedReview.image}
            name={selectedReview.name}
            date={selectedReview.date}
            spoiler={selectedReview.spoiler}
            review={selectedReview.review}
            score={selectedReview.score}
            like={selectedReview.like}
            dislike={selectedReview.dislike}
            onShowModal={showModalHandler}
            onClsModal={hideModalHandler}
            handleSelectedReview={handleSelectedReview}
            readmore={true}
          />
        </Modal>
      )}
    </DetailPageSectionLayout>
  );
}

export default AnimeReviews;
