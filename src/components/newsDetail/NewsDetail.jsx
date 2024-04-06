import React, { Suspense } from "react";
import styles from "./NewsDetail.module.css";
import DetailPageLayout from "../../shared/UIElements/detailPageLayout/DetailPageLayout";
import Spinner from "../../shared/UIElements/Spinner";
import { Await, useLoaderData } from "react-router-dom";
import NewsDetailItem from "./NewsDetailItem";

function NewsDetail() {
  const data = useLoaderData();

  return (
    <DetailPageLayout dataLoader={data} showDetail={false}>
      <Suspense fallback={<Spinner />}>
        <Await resolve={data.news}>
          {(loadedData) => <NewsDetailItem data={loadedData.data} />}
        </Await>
      </Suspense>
    </DetailPageLayout>
  );
}

export default NewsDetail;
