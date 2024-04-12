/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import styles from "./DetailPageSectionLayout.module.css";
import SectionLayout from "../SectionLayout";
import Subnav from "../../../components/animeDetail/Subnav";

function DetailPageSectionLayout({
  children,
  allData,
  link,
  title,
  home,
  pagination = true,
  isAnimeExist,
  showSubNav = true,
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(+searchParams.get("page") || 1);
  const id = useParams().id;

  const prevHandler = () => {
    if (page === 1) return;
    setPage((page) => page - 1);
    setSearchParams((prev) => {
      prev.set("page", page - 1);
      return prev;
    });
  };
  const nextHandler = () => {
    setPage((page) => page + 1);
    setSearchParams((prev) => {
      prev.set("page", page + 1);
      return prev;
    });
  };

  return (
    <div className={styles.section}>
      <SectionLayout className={styles.layout} title={title}>
        {!allData && isAnimeExist && (
          <Link to={`/${link}/${id}?page=${page}`} className={styles.link}>
            <span>
              <FaEye />
            </span>
            <span>See all {link} &rarr;</span>
          </Link>
        )}
        {allData && (
          <Subnav
            page={page}
            id={id}
            nextHandler={nextHandler}
            prevHandler={prevHandler}
            home={home}
            pagination={pagination}
          />
        )}
        {children}
        {allData && isAnimeExist && showSubNav && (
          <Subnav
            page={page}
            id={id}
            nextHandler={nextHandler}
            prevHandler={prevHandler}
            home={home}
            pagination={pagination}
          />
        )}
      </SectionLayout>
    </div>
  );
}

export default DetailPageSectionLayout;
