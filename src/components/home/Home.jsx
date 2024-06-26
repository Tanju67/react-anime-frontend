import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Await, useLoaderData } from "react-router-dom";
import styles from "./Home.module.css";

import Carousel from "../../shared/UIElements/carousel/Carousel";
import SectionLayout from "../../shared/UIElements/SectionLayout";
import Spinner from "../../shared/UIElements/Spinner";
import Header from "./Header";

function Home() {
  const { data, upcoming, topMovie } = useLoaderData();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userWatchlist = useSelector((state) => state.auth.userWatchlist);

  return (
    <div className={styles.page}>
      <Suspense fallback={<Spinner />}>
        <Await resolve={data}>
          {(loadedData) => <Header animeList={loadedData.data} />}
        </Await>
      </Suspense>

      <Suspense fallback={<Spinner />}>
        <Await resolve={data}>
          {(loadedData) => (
            <SectionLayout title={"Top 10 Anime Series"}>
              <Carousel animeList={loadedData.data} />
            </SectionLayout>
          )}
        </Await>
      </Suspense>
      {isLoggedIn && (
        <SectionLayout title={"Your Watchlist"}>
          <Carousel animeList={userWatchlist} watchlist={true} />
        </SectionLayout>
      )}
      <Suspense fallback={<Spinner />}>
        <Await resolve={topMovie}>
          {(loadedData) => (
            <SectionLayout title={"Top 10 Anime Movies"}>
              <Carousel animeList={loadedData?.data} />
            </SectionLayout>
          )}
        </Await>
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Await resolve={upcoming}>
          {(loadedData) => (
            <SectionLayout title={"Upcoming Season"}>
              <Carousel animeList={loadedData.data} />
            </SectionLayout>
          )}
        </Await>
      </Suspense>
    </div>
  );
}

export default Home;
