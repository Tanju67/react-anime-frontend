import React, { Suspense, useState } from "react";
import styles from "./AnimeDetail.module.css";
import Detail from "./Detail";
import Spinner from "../../shared/UIElements/Spinner";
import { Await, useLoaderData } from "react-router-dom";
import MainCharacters from "./MainCharacters";
import VoiceActors from "./VoiceActors";
import AnimeReviews from "./AnimeReviews";
import SimilarAnimes from "./SimilarAnimes";

function AnimeDetail() {
  const [bgImg, setBgImg] = useState("");
  const { data, characters, reviews, recommend } = useLoaderData();
  const bgHandler = (bg) => {
    setBgImg(bg);
  };
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(
to right,
rgba(10,10,10, .95), rgba(10,10,10, .95)
),url(${bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
      className={styles.page}
    >
      <Suspense fallback={<Spinner />}>
        <Await resolve={data}>
          {(loadedData) => <Detail onBg={bgHandler} anime={loadedData.data} />}
        </Await>
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Await resolve={characters}>
          {(loadedData) => (
            <>
              <MainCharacters data={loadedData.data} />
              <VoiceActors data={loadedData.data} />
            </>
          )}
        </Await>
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Await resolve={reviews}>
          {(loadedData) => <AnimeReviews data={loadedData.data} />}
        </Await>
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Await resolve={recommend}>
          {(loadedData) => <SimilarAnimes data={loadedData.data} />}
        </Await>
      </Suspense>
    </div>
  );
}

export default AnimeDetail;
