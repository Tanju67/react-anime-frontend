import React, { Suspense, useState } from "react";
import styles from "./DetailPageLayout.module.css";
import { Await } from "react-router-dom";
import Detail from "../../../components/animeDetail/Detail";
import Spinner from "../Spinner";

function DetailPageLayout({ children, dataLoader, showDetail = true }) {
  const [bgImg, setBgImg] = useState("");
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
      {showDetail && (
        <Suspense fallback={<Spinner />}>
          <Await resolve={dataLoader.data}>
            {(loadedData) => (
              <Detail onBg={bgHandler} anime={loadedData.data} />
            )}
          </Await>
        </Suspense>
      )}
      {children}
    </div>
  );
}

export default DetailPageLayout;
