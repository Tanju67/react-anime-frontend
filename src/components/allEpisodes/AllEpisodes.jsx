import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import Spinner from "../../shared/UIElements/Spinner";
import Episodes from "../animeDetail/Episodes";
import DetailPageLayout from "../../shared/UIElements/detailPageLayout/DetailPageLayout";

function AllEpisodes() {
  const data = useLoaderData();

  return (
    <DetailPageLayout dataLoader={data}>
      <Suspense fallback={<Spinner />}>
        <Await resolve={data.allEpisodes}>
          {(loadedData) => <Episodes data={loadedData.data} allData={true} />}
        </Await>
      </Suspense>
    </DetailPageLayout>
  );
}

export default AllEpisodes;
