import React from "react";
import slider from "../api/slider.json";
import Item from "./Item";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function CarouselSlide({ onSelect }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 700 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={false}
      responsive={responsive}
      infinite={true}
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={500}
      keyBoardControl={true}
      containerClass="carousel-container"
      customTransition="all .5"
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      //transitionDuration={1000}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      itemClass="item-container"
      sliderClass="slider-container"
      backgroundRepeat="no-repeat"
      aspectRatio="1.8"
      viewportFraction={0.4}
      clipBehavior="Clip.none"
    >
      {slider.map((item) => (
        <Item key={item.id} item={item} onSelect={onSelect} />
      ))}
    </Carousel>
  );
}
