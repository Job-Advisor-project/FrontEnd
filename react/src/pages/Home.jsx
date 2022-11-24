import Banner from "../components/Banner";
import CarouselSlide from "../components/CarouselCards";
import Header from "../components/Header";
export default function Homepage({ onSelect, setCompany }) {
  return (
    <>
      <Header></Header>
      <Banner setCompany={setCompany}></Banner>
      <CarouselSlide onSelect={onSelect}></CarouselSlide>
    </>
  );
}
