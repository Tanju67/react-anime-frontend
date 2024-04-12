import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import DetailPageLayout from "../../shared/UIElements/detailPageLayout/DetailPageLayout";
import Spinner from "../../shared/UIElements/Spinner";
import VoiceActors from "../animeDetail/VoiceActors";

function AllActors() {
  const data = useLoaderData();
  return (
    <DetailPageLayout dataLoader={data}>
      <Suspense fallback={<Spinner />}>
        <Await resolve={data.allCharacters}>
          {(loadedData) => (
            <VoiceActors data={loadedData.data} allData={true} />
          )}
        </Await>
      </Suspense>
    </DetailPageLayout>
  );
}

export default AllActors;
