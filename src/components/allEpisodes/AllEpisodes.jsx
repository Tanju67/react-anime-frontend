import React, { Suspense, useState } from "react";
import styles from "./AllEpisodes.module.css";
import { Await, useLoaderData } from "react-router-dom";
import Spinner from "../../shared/UIElements/Spinner";
import Detail from "../animeDetail/Detail";
import Episodes from "../animeDetail/Episodes";

function AllEpisodes() {
  const [bgImg, setBgImg] = useState("");
  const { data, allEpisodes } = useLoaderData();
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
        <Await resolve={allEpisodes}>
          {(loadedData) => <Episodes data={loadedData.data} allEp={true} />}
        </Await>
      </Suspense>
    </div>
  );
}

export default AllEpisodes;
