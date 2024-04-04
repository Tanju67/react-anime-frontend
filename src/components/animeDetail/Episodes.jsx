import React, { useState } from "react";
import styles from "./Episodes.module.css";
import SectionLayout from "../../shared/UIElements/SectionLayout";
import { Link, useNavigate, useParams } from "react-router-dom";
import EpisodeItem from "./EpisodeItem";
import Subnav from "./Subnav";

function Episodes({ data, allEp }) {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const slicedData = allEp ? data : data.slice(0, 5);
  const id = useParams().id;

  const prevHandler = () => {
    if (page === 1) return;
    setPage((page) => page - 1);
    navigate(`/episodes/${id}?page=${page - 1}`);
  };
  const nextHandler = () => {
    setPage((page) => page + 1);
    navigate(`/episodes/${id}?page=${page + 1}`);
  };

  return (
    <SectionLayout className={styles.layout} title={"Episodes"}>
      {!allEp && (
        <Link to={`/episodes/${id}?page=${page}`} className={styles.link}>
          See all episodes &rarr;
        </Link>
      )}
      {allEp && (
        <Subnav
          page={page}
          id={id}
          nextHandler={nextHandler}
          prevHandler={prevHandler}
        />
      )}
      <div className={styles.container}>
        {slicedData.map((item, i) => (
          <EpisodeItem key={i} data={item} allEp={allEp} />
        ))}
        {slicedData.length === 0 && <p>No episode found at page:{page}</p>}
      </div>
    </SectionLayout>
  );
}

export default Episodes;
