import React, { Suspense, useEffect } from "react";
import styles from "./Watchlist.module.css";
import DetailPageLayout from "../../shared/UIElements/detailPageLayout/DetailPageLayout";
import Spinner from "../../shared/UIElements/Spinner";
import { Await, useLoaderData } from "react-router-dom";
import WatchlistDetail from "./WatchlistDetail";

function Watchlist() {
  const data = useLoaderData();

  return (
    <DetailPageLayout showDetail={false}>
      <Suspense fallback={<Spinner />}>
        <Await resolve={data.watchlist}>
          {(loadedData) => (
            <WatchlistDetail data={loadedData.result} allData={true} />
          )}
        </Await>
      </Suspense>
    </DetailPageLayout>
  );
}

export default Watchlist;
