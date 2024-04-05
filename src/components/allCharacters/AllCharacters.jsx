import React, { Suspense, useState } from "react";
import styles from "./AllCharacters.module.css";
import { Await, useLoaderData } from "react-router-dom";
import Spinner from "../../shared/UIElements/Spinner";
import Detail from "../animeDetail/Detail";
import MainCharacters from "../animeDetail/MainCharacters";

function AllCharacters() {
  const [bgImg, setBgImg] = useState("");
  const { data, allCharacters } = useLoaderData();
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
        <Await resolve={allCharacters}>
          {(loadedData) => (
            <MainCharacters data={loadedData.data} allChar={true} />
          )}
        </Await>
      </Suspense>
    </div>
  );
}

export default AllCharacters;
