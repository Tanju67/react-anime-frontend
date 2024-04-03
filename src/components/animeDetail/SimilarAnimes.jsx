import React from "react";
import styles from "./SimilarAnimes.module.css";
import SectionLayout from "../../shared/UIElements/SectionLayout";
import Carousel from "../../shared/UIElements/carousel/Carousel";

function SimilarAnimes({ data }) {
  console.log(data);
  const filteredData = data.slice(0, 15);
  console.log(filteredData);
  return (
    <SectionLayout className={styles.layout} title={"Similar Animes"}>
      {filteredData.length > 0 && (
        <>
          <p>You can also like those animes</p>
          <Carousel
            className={styles.container}
            animeList={filteredData}
            similar={true}
          />
        </>
      )}
      {filteredData.length === 0 && <p>No found similar animes.</p>}
    </SectionLayout>
  );
}

export default SimilarAnimes;
