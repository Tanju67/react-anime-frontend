/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./SearchResultContent.module.css";
import DetailPageSectionLayout from "../../shared/UIElements/detailPageLayout/DetailPageSectionLayout";
import SearchItem from "./SearchItem";
import Pagination from "../../shared/UIElements/Pagination";
import SearchFilter from "./SearchFilter";

function SearchResultContent({ data }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(+searchParams.get("page") || 1);
  const query = searchParams.get("query");

  const nextPageHandler = () => {
    setPage((page) => page + 1);
    setSearchParams((prev) => {
      prev.set("page", page + 1);
      return prev;
    });
  };
  const prevPageHandler = () => {
    if (page === 1) return;
    setPage((page) => page - 1);
    setSearchParams((prev) => {
      prev.set("page", page - 1);
      return prev;
    });
  };

  const filterHandler = (obj) => {
    setSearchParams((prev) => {
      prev.set("type", obj.type);
      prev.set("min_score", obj.minScore);
      prev.set("max_score", obj.maxScore);
      prev.set("status", obj.status);
      return prev;
    });
  };
  return (
    <>
      <SearchFilter filterHandler={filterHandler} />
      <DetailPageSectionLayout
        title={`Search results for "${query}"`}
        allData={true}
        home={true}
        pagination={false}
      >
        <div className={styles.container}>
          <Pagination
            page={page}
            nextPageHandler={nextPageHandler}
            prevPageHandler={prevPageHandler}
          />
          {data?.map((item, i) => (
            <SearchItem key={i} item={item} />
          ))}
          {data?.length === 0 && <p>No episode found.</p>}
          {data.length > 10 && (
            <Pagination
              page={page}
              nextPageHandler={nextPageHandler}
              prevPageHandler={prevPageHandler}
            />
          )}
        </div>
      </DetailPageSectionLayout>
    </>
  );
}

export default SearchResultContent;
