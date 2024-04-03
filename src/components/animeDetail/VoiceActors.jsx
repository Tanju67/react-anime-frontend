import React from "react";
import styles from "./VoiceActors.module.css";
import SectionLayout from "../../shared/UIElements/SectionLayout";
import Carousel from "../../shared/UIElements/carousel/Carousel";
import SliderItem from "../../shared/UIElements/carousel/SliderItem";
import CharItem from "./CharItem";

function VoiceActors({ data }) {
  const mainChar = data.filter((item) => item.role === "Main");

  return (
    <SectionLayout className={styles.layout} title={"Voice Actors"}>
      <div className={styles.box}>
        {mainChar.map((item, i) => (
          <CharItem
            key={i}
            image={item.voice_actors[0].person.images.jpg.image_url}
            name={item.voice_actors[0].person.name}
          />
        ))}
      </div>
    </SectionLayout>
  );
}

export default VoiceActors;