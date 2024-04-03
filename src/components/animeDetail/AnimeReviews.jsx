import React, { useEffect, useState } from "react";
import styles from "./AnimeReviews.module.css";
import SectionLayout from "../../shared/UIElements/SectionLayout";
import ReviewItem from "./ReviewItem";
import { Link, useNavigate, useParams } from "react-router-dom";
import Modal from "../../shared/UIElements/Modal";
import Subnav from "./Subnav";

function AnimeReviews({ data, allReviews }) {
  const slicedData = allReviews ? data : data.slice(0, 3);
  const id = useParams().id;
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedReview, setSelectedReview] = useState({});

  const prevHandler = () => {
    if (page === 1) return;
    setPage((page) => page - 1);
    navigate(`/reviews/${id}?page=${page - 1}`);
  };
  const nextHandler = () => {
    setPage((page) => page + 1);
    navigate(`/reviews/${id}?page=${page + 1}`);
  };

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
    <SectionLayout
      className={styles.layout}
      title={allReviews ? "All Reviews" : "Anime Reviews"}
    >
      {data.length > 0 && (
        <>
          {!allReviews && (
            <Link to={`/reviews/${id}?page=${page}`} className={styles.link}>
              See all reviews &rarr;
            </Link>
          )}

          {allReviews && (
            <Subnav
              page={page}
              id={id}
              nextHandler={nextHandler}
              prevHandler={prevHandler}
            />
          )}
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
          </div>
        </>
      )}

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

      {data.length === 0 && (
        <>
          {allReviews && (
            <Subnav
              page={page}
              id={id}
              nextHandler={nextHandler}
              prevHandler={prevHandler}
            />
          )}
          <p>No review found.</p>
        </>
      )}
    </SectionLayout>
  );
}

export default AnimeReviews;
