import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getCompanyVacanciesVm } from "../api/viewModelels/companyVacancyVm";

export default function CompanyjobVacancy({ company }) {
  const [companyVacancy, setCompanyVacancy] = useState([]);
  useEffect(() => {
    getCompanyVacanciesVm(company).then((vm) => {
      setCompanyData(vm);
    });
  }, [company]);
  return companyVacancy.map((comp) => (
    <Typography>{comp.attributes.title}</Typography>
  )); //Company Card component might be added instead of <Typography>
}
