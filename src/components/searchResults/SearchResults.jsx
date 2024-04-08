import React, { Suspense } from "react";
import styles from "./SearchResults.module.css";
import DetailPageLayout from "../../shared/UIElements/detailPageLayout/DetailPageLayout";
import Spinner from "../../shared/UIElements/Spinner";
import { Await, useLoaderData } from "react-router-dom";

import SearchResultContent from "./SearchResultContent";

function SearchResults() {
  const data = useLoaderData();

  return (
    <DetailPageLayout dataLoader={data} showDetail={false}>
      <Suspense fallback={<Spinner />}>
        <Await resolve={data.results}>
          {(loadedData) => <SearchResultContent data={loadedData.data} />}
        </Await>
      </Suspense>
    </DetailPageLayout>
  );
}

export default SearchResults;
