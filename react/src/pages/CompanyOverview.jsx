import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getCompanyDataVm } from "../api/viewModelels/companyDataVm";
// import Tabs from "../components/Tabs";

export default function CompanyOverview({ company }) {
  const [companyData, setCompanyData] = useState([]);
  useEffect(() => {
    getCompanyDataVm(company).then((vm) => {
      setCompanyData(vm);
    });
  }, [company]);
  return companyData.map((comp) => (
    <>
      <Typography>{comp.attributes.name}</Typography>
      {/* <Tabs /> */}
    </>
  )); //Company Card component might be added instead of <Typography>
}
