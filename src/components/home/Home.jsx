import React, { Suspense } from "react";
import styles from "./Home.module.css";
import Carousel from "../../shared/UIElements/carousel/Carousel";
import SectionLayout from "../../shared/UIElements/SectionLayout";
import { Await, useLoaderData } from "react-router-dom";

function Home() {
  const { data, upcoming, topManga, topMovie } = useLoaderData();

  console.log(topMovie);
  return (
    <div className={styles.page}>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={data}>
          {(loadedData) => (
            <SectionLayout title={"Top 10 Anime Series"}>
              <Carousel animeList={loadedData.data} />
            </SectionLayout>
          )}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={topMovie}>
          {(loadedData) => (
            <SectionLayout title={"Top 10 Anime Movies"}>
              <Carousel animeList={loadedData?.data} />
            </SectionLayout>
          )}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={upcoming}>
          {(loadedData) => (
            <SectionLayout title={"Upcoming Season"}>
              <Carousel animeList={loadedData.data} />
            </SectionLayout>
          )}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={topManga}>
          {(loadedData) => (
            <SectionLayout title={"Top 10 Mangas"}>
              <Carousel animeList={loadedData.data} />
            </SectionLayout>
          )}
        </Await>
      </Suspense>
    </div>
  );
}

export default Home;
