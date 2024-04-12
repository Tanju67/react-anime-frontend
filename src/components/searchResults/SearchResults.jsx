import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import DetailPageLayout from "../../shared/UIElements/detailPageLayout/DetailPageLayout";
import Spinner from "../../shared/UIElements/Spinner";

import SearchResultContent from "./SearchResultContent";

function SearchResults() {
  const data = useLoaderData();

  return (
    <DetailPageLayout dataLoader={data} showDetail={false} showBg={false}>
      <Suspense fallback={<Spinner />}>
        <Await resolve={data.results}>
          {(loadedData) => <SearchResultContent data={loadedData.data} />}
        </Await>
      </Suspense>
    </DetailPageLayout>
  );
}

export default SearchResults;
