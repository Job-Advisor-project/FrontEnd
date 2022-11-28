//import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getCompanyDataVm } from "../api/viewModelels/companyDataVm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BasicTabs from "../components/Tabs";

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
      <BasicTabs company={companyData}></BasicTabs>
      <Footer></Footer>
    </>
  );
}
