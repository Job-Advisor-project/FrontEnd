import Banner from "../components/Banner";
import CarouselSlide from "../components/CarouselCards";
import Header from "../components/Header";
export default function Homepage({ onSelect }) {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <CarouselSlide onSelect={onSelect}></CarouselSlide>
    </>
  );
}
