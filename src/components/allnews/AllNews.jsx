import React, { Suspense } from "react";
import styles from "./AllNews.module.css";
import DetailPageLayout from "../../shared/UIElements/detailPageLayout/DetailPageLayout";
import Spinner from "../../shared/UIElements/Spinner";
import { Await, useLoaderData } from "react-router-dom";
import News from "../animeDetail/News";

function AllNews() {
  const data = useLoaderData();
  return (
    <DetailPageLayout dataLoader={data}>
      <Suspense fallback={<Spinner />}>
        <Await resolve={data.news}>
          {(loadedData) => <News data={loadedData.data} allData={true} />}
        </Await>
      </Suspense>
    </DetailPageLayout>
  );
}

export default AllNews;
