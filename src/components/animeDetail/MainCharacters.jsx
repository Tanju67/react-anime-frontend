import React, { useState } from "react";
import styles from "./MainCharacters.module.css";
import CharItem from "./CharItem";

import Carousel from "../../shared/UIElements/carousel/Carousel";
import SectionLayout from "../../shared/UIElements/SectionLayout";
import SliderItem from "../../shared/UIElements/carousel/SliderItem";
import { Link, useNavigate, useParams } from "react-router-dom";
import Subnav from "./Subnav";

function MainCharacters({ data, allChar }) {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const mainChar = allChar ? data : data.filter((item) => item.role === "Main");

  console.log(mainChar);
  const id = useParams().id;

  const prevHandler = () => {
    if (page === 1) return;
    setPage((page) => page - 1);
    navigate(`/characters/${id}?page=${page - 1}`);
  };
  const nextHandler = () => {
    setPage((page) => page + 1);
    navigate(`/characters/${id}?page=${page + 1}`);
  };

  return (
    <div className={styles.section}>
      <SectionLayout className={styles.layout} title={"Main Characters"}>
        {!allChar && (
          <Link to={`/characters/${id}?page=${page}`} className={styles.link}>
            See all characters &rarr;
          </Link>
        )}
        {allChar && (
          <Subnav
            page={page}
            id={id}
            nextHandler={nextHandler}
            prevHandler={prevHandler}
          />
        )}
        <div className={styles.box}>
          {mainChar.map((item, i) => (
            <CharItem
              key={i}
              image={item.character.images.jpg.image_url}
              name={item.character.name}
              rounded={true}
            />
          ))}
        </div>
      </SectionLayout>
    </div>
  );
}

export default MainCharacters;
