import Banner from "../components/Banner";
import CarouselSlide from "../components/CarouselCards";

export default function Homepage({ onSelect }) {
  return (
    <>
      <Banner></Banner>
      <CarouselSlide onSelect={onSelect}></CarouselSlide>
    </>
  );
}
