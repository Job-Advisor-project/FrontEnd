import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import slider from "../api/slider.json";
import Item from "./Item";

export default function CarouselSlide() {
  return (
    <Carousel>
      {slider.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Carousel>
  );
}
