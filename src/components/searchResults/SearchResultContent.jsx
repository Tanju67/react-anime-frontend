import React, { useState } from "react";
import styles from "./SearchResultContent.module.css";
import DetailPageSectionLayout from "../../shared/UIElements/detailPageLayout/DetailPageSectionLayout";
import { useNavigate, useSearchParams } from "react-router-dom";
import SearchItem from "./SearchItem";
import Pagination from "../../shared/UIElements/Pagination";
import SearchFilter from "./SearchFilter";

function SearchResultContent({ data }) {
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [filteredData, setFilteredData] = useState({
    type: "",
    maxScore: "",
    minScore: "",
    status: "",
  });
  const query = searchParams.get("query");
  const navigate = useNavigate();

  console.log(data);

  const nextPageHandler = () => {
    setPage((page) => page + 1);
    navigate(
      `/search-result?query=${query}&page=${page + 1}&type=${
        filteredData.type
      }&min_score=${filteredData.minScore}&max_score=${
        filteredData.maxScore
      }&status=${filteredData.status}`
    );
  };
  const prevPageHandler = () => {
    if (page === 1) return;
    setPage((page) => page - 1);
    navigate(
      `/search-result?query=${query}&page=${page - 1}&type=${
        filteredData.type
      }&min_score=${filteredData.minScore}&max_score=${
        filteredData.maxScore
      }&status=${filteredData.status}`
    );
  };

  const filterHandler = (obj) => {
    console.log(obj);
    setFilteredData(obj);
    navigate(
      `/search-result?query=${query}&page=${page}&type=${obj.type}&min_score=${obj.minScore}&max_score=${obj.maxScore}&status=${obj.status}`
    );
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
          <Pagination
            page={page}
            nextPageHandler={nextPageHandler}
            prevPageHandler={prevPageHandler}
          />
        </div>
      </DetailPageSectionLayout>
    </>
  );
}

export default SearchResultContent;
