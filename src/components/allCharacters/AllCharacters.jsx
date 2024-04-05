import React, { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import Spinner from "../../shared/UIElements/Spinner";
import MainCharacters from "../animeDetail/MainCharacters";
import DetailPageLayout from "../../shared/UIElements/detailPageLayout/DetailPageLayout";

function AllCharacters() {
  const data = useLoaderData();

  return (
    <DetailPageLayout dataLoader={data}>
      <Suspense fallback={<Spinner />}>
        <Await resolve={data.allCharacters}>
          {(loadedData) => (
            <MainCharacters data={loadedData.data} allData={true} />
          )}
        </Await>
      </Suspense>
    </DetailPageLayout>
  );
}

export default AllCharacters;
