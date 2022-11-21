import CarouselSlide from "../components/CarouselCards";
import Header from "../components/Header";
export default function Homepage({ onSelect }) {
  return (
    <>
      <Header></Header>
      <CarouselSlide onSelect={onSelect}></CarouselSlide>
    </>
  );
}

// import CarouselSlide from "../components/CarouselCards";
// export default function Homepage() {
//   return <CarouselSlide></CarouselSlide>;
// }
