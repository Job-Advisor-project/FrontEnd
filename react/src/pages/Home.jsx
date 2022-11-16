import Carousel from "../components/Carousel";
import { useCompanies } from "../api/useCompanies";
import Cards from "../components/CompanyCards";

export default function Homepage() {
  const { companies } = useCompanies([]);
  return (
    <>
      <Carousel></Carousel>
      <Cards companies={companies}></Cards>
    </>
  );
}
