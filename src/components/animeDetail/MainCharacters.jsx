/* eslint-disable react/prop-types */
import CharItem from "./CharItem";
import DetailPageSectionLayout from "../../shared/UIElements/detailPageLayout/DetailPageSectionLayout";
import styles from "./MainCharacters.module.css";

function MainCharacters({ data, allData }) {
  // const mainChar = allData ? data : data.filter((item) => item.role === "Main");
  const mainChar = allData ? data : data.slice(0, 6);

  return (
    <DetailPageSectionLayout
      link={"characters"}
      title={"Main Characters"}
      allData={allData}
      pagination={false}
      isAnimeExist={mainChar.length > 0}
    >
      <div className={styles.box}>
        {mainChar.map((item, i) => (
          <CharItem
            key={i}
            image={item.character.images.jpg.image_url}
            name={item.character.name}
            charId={item.character.mal_id}
            rounded={true}
          />
        ))}
      </div>
    </DetailPageSectionLayout>
  );
}

export default MainCharacters;
