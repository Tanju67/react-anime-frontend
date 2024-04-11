import React from "react";
import styles from "./Carousel.module.css";
import Slider from "react-slick";
import SliderItem from "./SliderItem";

function PrevArrow(props) {
  const { onClick, style, className } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        borderRadius: "50%",
        top: "40%",
      }}
      onClick={onClick}
    ></div>
  );
}

function NextArrow(props) {
  const { onClick, style, className } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        borderRadius: "50%",
        top: "40%",
      }}
      onClick={onClick}
    ></div>
  );
}

function Carousel({ animeList, similar, watchlist }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      {animeList?.length > 0 && (
        <Slider id={"box"} className={styles.box} {...settings}>
          {animeList?.map((item, i) => (
            <SliderItem
              similar={similar}
              item={item}
              key={i}
              watchlist={watchlist}
            />
          ))}
        </Slider>
      )}

      {animeList?.length === 0 && (
        <p style={{ color: "#bbb" }}>Your watchlist is empty.</p>
      )}
    </div>
  );
}

export default Carousel;
