// import Cards from "../components/CompanyCards";
import { useState } from "react";
// import { getCompaniesByTagVm } from "../api/viewModelels/companiesByTagVm";
import { useNavigate } from "react-router-dom";
import CarouselSlide from "../components/CarouselCards";
export default function Homepage() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  // const [companyList, setCompanyList] = useState([]);
  const handleInput = (section) => {
    setInput(section);
    console.log(input);
    navigate("/searchResult");
  };
  // useEffect(() => {
  //   getCompaniesByTagVm(input).then((vm) => {
  //     setCompanyList(vm);
  //   });
  // }, [input]);
  return (
    <>
      <CarouselSlide onInput={handleInput}></CarouselSlide>
    </>
  );
}

// import CarouselSlide from "../components/CarouselCards";
// export default function Homepage() {
//   return <CarouselSlide></CarouselSlide>;
// }
