/* eslint-disable react/prop-types */
import styles from "./Episodes.module.css";
import EpisodeItem from "./EpisodeItem";
import DetailPageSectionLayout from "../../shared/UIElements/detailPageLayout/DetailPageSectionLayout";

function Episodes({ data, allData }) {
  const slicedData = allData ? data : data.slice(0, 5);

  return (
    <DetailPageSectionLayout
      link={"episodes"}
      title={"Episodes"}
      allData={allData}
      isAnimeExist={slicedData.length > 0}
    >
      <div className={styles.container}>
        {slicedData?.map((item, i) => (
          <EpisodeItem key={i} data={item} allEp={allData} />
        ))}
        {slicedData?.length === 0 && <p>No episode found.</p>}
      </div>
    </DetailPageSectionLayout>
  );
}

export default Episodes;
