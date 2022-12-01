import Banner from "../components/Banner";
import CarouselSlide from "../components/CarouselCards";
import Footer from "../components/footer/Footer"
import TextSection from "../components/TextSection";

export default function Homepage({ onSelect, setCompany }) {
  return (
    <>
      <Banner setCompany={setCompany}></Banner>
      <TextSection></TextSection>
      <CarouselSlide onSelect={onSelect}></CarouselSlide>
      <Footer />
    </>
  );
}
