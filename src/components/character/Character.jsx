import React, { Suspense } from "react";
import DetailPageLayout from "../../shared/UIElements/detailPageLayout/DetailPageLayout";
import Spinner from "../../shared/UIElements/Spinner";
import { Await, useLoaderData } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";

function Character() {
  const data = useLoaderData();
  console.log(data);

  return (
    <DetailPageLayout dataLoader={data} showDetail={false}>
      <Suspense fallback={<Spinner />}>
        <Await resolve={data.character}>
          {(loadedData) => <CharacterDetail data={loadedData.data} />}
        </Await>
      </Suspense>
    </DetailPageLayout>
  );
}

export default Character;
