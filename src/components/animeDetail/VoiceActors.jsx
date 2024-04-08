import React from "react";
import styles from "./VoiceActors.module.css";
import CharItem from "./CharItem";
import DetailPageSectionLayout from "../../shared/UIElements/detailPageLayout/DetailPageSectionLayout";

function VoiceActors({ data, allData }) {
  const mainChar = allData ? data : data.filter((item) => item.role === "Main");

  return (
    <DetailPageSectionLayout
      link={"actors"}
      title={"Voice Actors"}
      allData={allData}
      pagination={false}
    >
      <div className={styles.box}>
        {mainChar.map((item, i) => (
          <CharItem
            key={i}
            image={item.voice_actors[0]?.person.images.jpg.image_url}
            name={item.voice_actors[0]?.person.name}
            charId={item.voice_actors[0]?.person.mal_id}
            actor={true}
          />
        ))}
      </div>
    </DetailPageSectionLayout>
  );
}

export default VoiceActors;
