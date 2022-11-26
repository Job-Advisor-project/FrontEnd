import Banner from "../components/Banner";
import CarouselSlide from "../components/CarouselCards";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Homepage({ onSelect }) {
  return (
    <>
      <Header />
      <Banner></Banner>
      <CarouselSlide onSelect={onSelect}></CarouselSlide>
      <Footer />
    </>
  );
}
