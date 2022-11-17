import CarouselSlide from "../components/CarouselCards";
import Cards from "../components/CompanyCards";
import { useEffect, useState } from "react";
import { getCompaniesByTagVm } from "../api/viewModelels/companiesByTagVm";

export default function Homepage() {
  const [input, setInput] = useState("");
  const [companyList, setCompanyList] = useState([]);
  const handleInput = (section) => {
    console.log(section);
    setInput(section);
  };
  useEffect(() => {
    getCompaniesByTagVm(input).then((vm) => {
      setCompanyList(vm);
    });
  }, [input]);
  return (
    <>
      <CarouselSlide onInput={handleInput}></CarouselSlide>
      <Cards companies={companyList}></Cards>
    </>
  );
}

// import CarouselSlide from "../components/CarouselCards";
// export default function Homepage() {
//   return <CarouselSlide></CarouselSlide>;
// }
