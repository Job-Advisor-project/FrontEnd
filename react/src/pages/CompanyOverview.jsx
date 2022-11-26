//import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getCompanyDataVm } from "../api/viewModelels/companyDataVm";
import { Container } from "@mui/material";
import CompanycardsBysearch from "../components/CompanycardsBysearch";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CompanyOverview({ company }) {
  const [companyData, setCompanyData] = useState([]);
  useEffect(() => {
    getCompanyDataVm(company).then((vm) => {
      setCompanyData(vm);
    });
  }, [company]);
  return (
    <>
      <Header></Header>
      <Container>
        <CompanycardsBysearch companies={companyData}></CompanycardsBysearch>
      </Container>
      <Footer></Footer>
    </>
  );
}
