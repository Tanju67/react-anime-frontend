import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import DetailPageLayout from "../../shared/UIElements/detailPageLayout/DetailPageLayout";
import Spinner from "../../shared/UIElements/Spinner";
import CharacterDetail from "../character/CharacterDetail";
import styles from "./ActorDetail.module.css";

function ActorDetail() {
  const data = useLoaderData();

  return (
    <DetailPageLayout dataLoader={data} showDetail={false} showBg={false}>
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
