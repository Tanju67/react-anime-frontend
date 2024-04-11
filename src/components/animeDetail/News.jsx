import React from "react";
import DetailPageSectionLayout from "../../shared/UIElements/detailPageLayout/DetailPageSectionLayout";
import NewsItem from "./NewsItem";
import styles from "./News.module.css";

function News({ allData, data }) {
  const mainChar = allData ? data : data.slice(0, 3);

  return (
    <DetailPageSectionLayout
      link={"news"}
      title={"Anime News"}
      allData={allData}
    >
      <div className={styles.box}>
        {mainChar.map((item, i) => (
          <NewsItem key={i} item={item} />
        ))}
      </div>
    </DetailPageSectionLayout>
  );
}

export default News;
