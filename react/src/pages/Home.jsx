import Carousel from "../components/Carousel";
import { useCompanies } from "../api/useCompanies";
import Cards from "../components/CompanyCards";
import { useState } from "react";

export default function Homepage() {
  const [input, setInput] = useState("");
  const handleInput = (section) => {
    console.log(section);
    setInput(section);
  };
  const { companies } = useCompanies(input);
  return (
    <>
      <Carousel onInput={handleInput}></Carousel>
      <Cards companies={companies}></Cards>
    </>
  );
}
