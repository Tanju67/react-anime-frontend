import React, { useEffect } from "react";
import styles from "./Home.module.css";
import Carousel from "../../shared/UIElements/carousel/Carousel";
import SectionLayout from "../../shared/UIElements/SectionLayout";
import { arr } from "../../data/data";

function Home() {
  return (
    <div className={styles.page}>
      <SectionLayout title={"Top Ten Animes"}>
        <Carousel animeList={arr} />
      </SectionLayout>
    </div>
  );
}

export default Home;

// const getAnime = async (endPoint) => {
//   try {
//     const res = await fetch(
//       `https://api.jikan.moe/v4/top/anime?page=1&limit=10`
//     );
//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };
// useEffect(() => {
//   getAnime();
// }, []);
