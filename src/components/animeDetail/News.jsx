/* eslint-disable react/prop-types */
import DetailPageSectionLayout from "../../shared/UIElements/detailPageLayout/DetailPageSectionLayout";
import NewsItem from "./NewsItem";

function News({ allData, data }) {
  const newsData = allData ? data : data.slice(0, 3);

  return (
    <DetailPageSectionLayout
      link={"news"}
      title={"Anime News"}
      allData={allData}
      isAnimeExist={newsData.length > 0}
      showSubNav={false}
    >
      <div>
        {newsData.map((item, i) => (
          <NewsItem key={i} item={item} />
        ))}
        {newsData.length === 0 && <p>No news found.</p>}
      </div>
    </DetailPageSectionLayout>
  );
}

export default News;
