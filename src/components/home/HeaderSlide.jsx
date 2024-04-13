/* eslint-disable react/prop-types */
import Slider from "react-slick";
import SlideItem from "./SlideItem";
import styles from "./HeaderSlide.module.css";

function HeaderSlide({ animeList }) {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    appendDots: (dots) => (
      <div
        style={{
          bottom: "5rem",
        }}
      >
        <ul id="btnBox">{dots}</ul>
      </div>
    ),
  };
  return (
    <div className={styles["slider-container"]}>
      <Slider {...settings}>
        {animeList?.map((item) => (
          <SlideItem
            key={item.mal_id}
            title={item?.title_english}
            synopsis={item?.synopsis}
            year={item?.year}
            score={item?.score}
            image={item?.images.jpg.large_image_url}
            trailer={item.trailer.embed_url}
            id={item.mal_id}
          />
        ))}
      </Slider>
    </div>
  );
}

export default HeaderSlide;
