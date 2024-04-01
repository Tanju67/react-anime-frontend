import React from "react";
import styles from "./MainCharacters.module.css";
import CharItem from "./CharItem";

import Carousel from "../../shared/UIElements/carousel/Carousel";
import SectionLayout from "../../shared/UIElements/SectionLayout";
import SliderItem from "../../shared/UIElements/carousel/SliderItem";

function MainCharacters({ data }) {
  const mainChar = data.filter((item) => item.role === "Main");

  return (
    <div className={styles.section}>
      <SectionLayout className={styles.layout} title={"Main Characters"}>
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
