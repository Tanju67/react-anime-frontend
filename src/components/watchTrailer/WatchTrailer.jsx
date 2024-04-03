import React, { Suspense } from "react";
import styles from "./WatchTrailer.module.css";
import Spinner from "../../shared/UIElements/Spinner";
import { Await, Link, useLoaderData, useParams } from "react-router-dom";
import Button from "../../shared/UIElements/Button";

function WatchTrailer() {
  const { data } = useLoaderData();
  const id = useParams().id;
  return (
    <Suspense fallback={<Spinner />}>
      <Await resolve={data}>
        {(loadedData) => (
          <div
            className={styles.video}
            style={{
              backgroundImage: `linear-gradient(
    to right,
    rgba(0,0,0, .95), rgba(11,11,11, .95)
    ),url(${loadedData.data?.images.jpg.large_image_url})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
            }}
          >
            <div className={styles.subNav}>
              <Link to={"/"}>&larr; Home</Link>
            </div>
            <div className={styles.header}>
              <Button
                to={`/anime/${id}`}
                className={styles.backBtn}
                size={"sm"}
              >
                Go to Anime
              </Button>
              <h2>{loadedData.data.title_english}</h2>
            </div>

            <iframe src={loadedData.data.trailer.embed_url}></iframe>
          </div>
        )}
      </Await>
    </Suspense>
  );
}

export default WatchTrailer;
