import Carousel from "../components/Carousel";
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
      <Carousel onInput={handleInput}></Carousel>
      <Cards companies={companyList}></Cards>
    </>
  );
}
