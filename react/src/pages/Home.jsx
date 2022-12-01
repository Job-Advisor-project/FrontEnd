import Banner from "../components/Banner";
import CarouselSlide from "../components/CarouselCards";
//import Header from "../components/Header";
import Footer from "../components/Footer";
import TextSection from "../components/TextSection";

export default function Homepage({ onSelect, setCompany }) {
  return (
    <>
      {/* <Header></Header> */}
      <Banner setCompany={setCompany}></Banner>
      <TextSection></TextSection>
      <CarouselSlide onSelect={onSelect}></CarouselSlide>
      <Footer />
    </>
  );
}
