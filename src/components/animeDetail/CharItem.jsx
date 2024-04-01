import React from "react";
import styles from "./CharItem.module.css";

function CharItem({ image, name, rounded }) {
  return (
    <div className={`${styles.item} ${rounded ? styles.rounded : ""}`}>
      <div className={styles.imgBox}>
        <img src={image} alt="" />
      </div>

      <div className={styles.infoBox}>
        <p>{name}</p>
      </div>
    </div>
  );
}

export default CharItem;

const obj = {
  character: {
    mal_id: 30,
    url: "https://myanimelist.net/character/30/Gon_Freecss",
    images: {
      jpg: {
        image_url:
          "https://cdn.myanimelist.net/images/characters/11/174517.jpg?s=c8133cf450dc6bf13ba52d6781759101",
      },
      webp: {
        image_url:
          "https://cdn.myanimelist.net/images/characters/11/174517.webp?s=c8133cf450dc6bf13ba52d6781759101",
        small_image_url:
          "https://cdn.myanimelist.net/images/characters/11/174517t.webp?s=c8133cf450dc6bf13ba52d6781759101",
      },
    },
    name: "Freecss, Gon",
  },
  role: "Main",
  favorites: 21591,
  voice_actors: [
    {
      person: {
        mal_id: 1589,
        url: "https://myanimelist.net/people/1589/Jackie_Berger",
        images: {
          jpg: {
            image_url:
              "https://cdn.myanimelist.net/images/voiceactors/1/26725.jpg?s=db20e2d2ee72d012e592050138de3838",
          },
        },
        name: "Berger, Jackie",
      },
      language: "French",
    },
    {
      person: {
        mal_id: 12961,
        url: "https://myanimelist.net/people/12961/Megumi_Han",
        images: {
          jpg: {
            image_url:
              "https://cdn.myanimelist.net/images/voiceactors/2/72566.jpg?s=60a301c84a239dd985e50df49731afa1",
          },
        },
        name: "Han, Megumi",
      },
      language: "Japanese",
    },
    {
      person: {
        mal_id: 15097,
        url: "https://myanimelist.net/people/15097/In_Seong_O",
        images: {
          jpg: {
            image_url:
              "https://cdn.myanimelist.net/images/voiceactors/3/15971.jpg?s=7171baf0c977b9172017ab21d7aa5267",
          },
        },
        name: "O, In Seong",
      },
      language: "Korean",
    },
    {
      person: {
        mal_id: 25805,
        url: "https://myanimelist.net/people/25805/Erica_Mendez",
        images: {
          jpg: {
            image_url:
              "https://cdn.myanimelist.net/images/voiceactors/2/35731.jpg?s=2795bfeabf8e041b60117be35ef0aa2c",
          },
        },
        name: "Mendez, Erica",
      },
      language: "English",
    },
    {
      person: {
        mal_id: 10710,
        url: "https://myanimelist.net/people/10710/Luisa_Wietzorek",
        images: {
          jpg: {
            image_url:
              "https://cdn.myanimelist.net/images/voiceactors/3/63428.jpg?s=fe96fef38a924f05f92babcf753c0df8",
          },
        },
        name: "Wietzorek, Luisa",
      },
      language: "German",
    },
    {
      person: {
        mal_id: 20268,
        url: "https://myanimelist.net/people/20268/Alessio_Puccio",
        images: {
          jpg: {
            image_url:
              "https://cdn.myanimelist.net/images/voiceactors/1/22433.jpg?s=854d351e8b519c09e3a94159f8b38962",
          },
        },
        name: "Puccio, Alessio",
      },
      language: "Italian",
    },
    {
      person: {
        mal_id: 26639,
        url: "https://myanimelist.net/people/26639/Grégory_Laisné",
        images: {
          jpg: {
            image_url:
              "https://cdn.myanimelist.net/images/voiceactors/1/71727.jpg?s=a6c47df6d2149d1d084deffbc88ae981",
          },
        },
        name: "Laisné, Grégory",
      },
      language: "French",
    },
    {
      person: {
        mal_id: 44721,
        url: "https://myanimelist.net/people/44721/Susana_Moreno",
        images: {
          jpg: {
            image_url:
              "https://cdn.myanimelist.net/images/voiceactors/2/68412.jpg?s=cde299cfc49448a3f526e439dbbc9b7d",
          },
        },
        name: "Moreno, Susana",
      },
      language: "Spanish",
    },
    {
      person: {
        mal_id: 47194,
        url: "https://myanimelist.net/people/47194/Pedro_Volpato",
        images: {
          jpg: {
            image_url:
              "https://cdn.myanimelist.net/images/voiceactors/1/62367.jpg?s=d7b4bfa0b49359af971b7fb3c652a30f",
          },
        },
        name: "Volpato, Pedro",
      },
      language: "Portuguese (BR)",
    },
  ],
};
