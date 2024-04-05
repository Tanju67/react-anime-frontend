import React, { Suspense } from "react";
import Spinner from "../../shared/UIElements/Spinner";
import { Await, useLoaderData } from "react-router-dom";
import MainCharacters from "./MainCharacters";
import VoiceActors from "./VoiceActors";
import AnimeReviews from "./AnimeReviews";
import SimilarAnimes from "./SimilarAnimes";
import Episodes from "./Episodes";
import DetailPageLayout from "../../shared/UIElements/detailPageLayout/DetailPageLayout";

function AnimeDetail() {
  const data = useLoaderData();
  console.log(data);

  return (
    <DetailPageLayout dataLoader={data}>
      <Suspense fallback={<Spinner />}>
        <Await resolve={data.characters}>
          {(loadedData) => (
            <>
              <MainCharacters data={loadedData.data} />
              <VoiceActors data={loadedData.data} />
            </>
          )}
        </Await>
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Await resolve={data.reviews}>
          {(loadedData) => <AnimeReviews data={loadedData.data} />}
        </Await>
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Await resolve={data.episodes}>
          {(loadedData) => <Episodes data={loadedData.data} />}
        </Await>
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Await resolve={data.recommend}>
          {(loadedData) => <SimilarAnimes data={loadedData.data} />}
        </Await>
      </Suspense>
    </DetailPageLayout>
  );
}

export default AnimeDetail;
