import React from "react";
import Carousel from "react-material-ui-carousel";
import slider from "../api/slider.json";
import Item from "./Item";

export default function CarouselSlide({ onSelect }) {
  return (
    <Carousel fade={true} pause={false} interval={2000}>
      {slider.map((item) => (
        <Item key={item.id} item={item} onSelect={onSelect} />
      ))}
    </Carousel>
  );
}
