import React, { useState } from "react";
import styles from "./DetailPageSectionLayout.module.css";
import SectionLayout from "../SectionLayout";
import { Link, useNavigate, useParams } from "react-router-dom";
import Subnav from "../../../components/animeDetail/Subnav";

function DetailPageSectionLayout({
  children,
  allData,
  link,
  title,
  home,
  pagination = true,
}) {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const id = useParams().id;

  const prevHandler = () => {
    if (page === 1) return;
    setPage((page) => page - 1);
    navigate(`/${link}/${id}?page=${page - 1}`);
  };
  const nextHandler = () => {
    setPage((page) => page + 1);
    navigate(`/${link}/${id}?page=${page + 1}`);
  };

  return (
    <div className={styles.section}>
      <SectionLayout className={styles.layout} title={title}>
        {!allData && (
          <Link to={`/${link}/${id}?page=${page}`} className={styles.link}>
            See all {link} &rarr;
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
      </SectionLayout>
    </div>
  );
}

export default DetailPageSectionLayout;
