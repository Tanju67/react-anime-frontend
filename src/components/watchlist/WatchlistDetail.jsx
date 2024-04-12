/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import styles from "./WatchlistDetail.module.css";
import SliderItem from "../../shared/UIElements/carousel/SliderItem";
import DetailPageSectionLayout from "../../shared/UIElements/detailPageLayout/DetailPageSectionLayout";

function WatchlistDetail({ data }) {
  const userWatchlist = useSelector((state) => state.auth.userWatchlist);
  return (
    <div className={styles.page}>
      <DetailPageSectionLayout
        title={"Your Watchlist"}
        pagination={userWatchlist.length >= 10}
        allData={true}
        home={true}
      >
        <div className={styles.box}>
          {data.map((item) => (
            <SliderItem key={item._id} watchlist={true} item={item} />
          ))}
          {data.length === 0 && <p>No anime found!</p>}
        </div>
      </DetailPageSectionLayout>
    </div>
  );
}

export default WatchlistDetail;
