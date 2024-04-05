import React, { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import Spinner from "../../shared/UIElements/Spinner";
import AnimeReviews from "../animeDetail/AnimeReviews";
import DetailPageLayout from "../../shared/UIElements/detailPageLayout/DetailPageLayout";

function Reviews() {
  const data = useLoaderData();

  return (
    <DetailPageLayout dataLoader={data}>
      <Suspense fallback={<Spinner />}>
        <Await resolve={data.reviews}>
          {(loadedData) => (
            <AnimeReviews data={loadedData.data} allData={true} />
          )}
        </Await>
      </Suspense>
    </DetailPageLayout>
  );
}

export default Reviews;
