import { Suspense } from "react";
import { Await, useLoaderData, useParams } from "react-router-dom";
import styles from "./WatchTrailer.module.css";
import Spinner from "../../shared/UIElements/Spinner";
import Button from "../../shared/UIElements/Button";
import DetailPageLayout from "../../shared/UIElements/detailPageLayout/DetailPageLayout";
import HomeNav from "../../shared/UIElements/HomeNav";

function WatchTrailer() {
  const data = useLoaderData();
  const id = useParams().id;

  return (
    <DetailPageLayout dataLoader={data} showDetail={false}>
      <Suspense fallback={<Spinner />}>
        <Await resolve={data.data}>
          {(loadedData) => (
            <>
              <HomeNav />
              <div
                style={{
                  backgroundImage: `linear-gradient(
    to right,
    rgba(0,0,0, .95), rgba(11,11,11, .95)
    ),url(${loadedData.data?.images.jpg.large_image_url})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundAttachment: "fixed",
                }}
                className={styles.video}
              >
                <div className={styles.header}>
                  <Button
                    to={`/anime/${id}`}
                    className={styles.backBtn}
                    size={"sm"}
                  >
                    Go to Anime
                  </Button>
                  <h2>{loadedData.data.title_english}</h2>
                </div>

                <iframe src={loadedData.data.trailer.embed_url}></iframe>
              </div>
            </>
          )}
        </Await>
      </Suspense>
    </DetailPageLayout>
  );
}

export default WatchTrailer;
