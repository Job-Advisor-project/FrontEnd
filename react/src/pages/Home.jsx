import CarouselSlide from "../components/CarouselCards";
export default function Homepage({ onSelect }) {
  return (
    <>
      <CarouselSlide onSelect={onSelect}></CarouselSlide>
    </>
  );
}

// import CarouselSlide from "../components/CarouselCards";
// export default function Homepage() {
//   return <CarouselSlide></CarouselSlide>;
// }
