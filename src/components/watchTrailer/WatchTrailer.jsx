import React, { Suspense } from "react";
import styles from "./WatchTrailer.module.css";
import Spinner from "../../shared/UIElements/Spinner";
import { Await, useLoaderData } from "react-router-dom";
import Button from "../../shared/UIElements/Button";

function WatchTrailer() {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <div className={styles.video}>
      <Suspense fallback={<Spinner />}>
        <Await resolve={data}>
          {(loadedData) => (
            <>
              <div className={styles.header}>
                {" "}
                <Button to={".."} className={styles.backBtn} size={"sm"}>
                  Back
                </Button>
                <h2>{loadedData.data.title_english}</h2>
              </div>

              <iframe src={loadedData.data.trailer.embed_url}></iframe>
            </>
          )}
        </Await>
      </Suspense>
    </div>
  );
}

export default WatchTrailer;
