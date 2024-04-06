import React, { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import DetailPageLayout from "../../shared/UIElements/detailPageLayout/DetailPageLayout";
import Spinner from "../../shared/UIElements/Spinner";
import CharacterDetail from "../character/CharacterDetail";

function ActorDetail() {
  const data = useLoaderData();
  console.log(data);

  return (
    <DetailPageLayout dataLoader={data} showDetail={false}>
      <Suspense fallback={<Spinner />}>
        <Await resolve={data.person}>
          {(loadedData) => (
            <CharacterDetail actor={true} data={loadedData.data} />
          )}
        </Await>
      </Suspense>
    </DetailPageLayout>
  );
}

export default ActorDetail;
