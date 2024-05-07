import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import DetailPageLayout from "../../shared/UIElements/detailPageLayout/DetailPageLayout";
import Spinner from "../../shared/UIElements/Spinner";
import WatchlistDetail from "./WatchlistDetail";
import { useSelector } from "react-redux";

function Watchlist() {
  const data = useLoaderData();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (!isLoggedIn) {
    return (
      <DetailPageLayout showDetail={false} showBg={false}>
        <h1 style={{ textAlign: "center" }}>
          You are not allowed for this route!Please log in.
        </h1>
      </DetailPageLayout>
    );
  }

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
