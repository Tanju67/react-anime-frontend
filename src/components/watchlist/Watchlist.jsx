import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import DetailPageLayout from "../../shared/UIElements/detailPageLayout/DetailPageLayout";
import Spinner from "../../shared/UIElements/Spinner";
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
