//import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getCompanyDataVm } from "../api/viewModelels/companyDataVm";
//import VacanciesButton from "../components/VacanciesButton";
//import CompanyjobVacancy from "./CompanyJobVacancy";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CompanyOverview({ company }) {
  const navigate = useNavigate();
  const [companyData, setCompanyData] = useState([]);
  useEffect(() => {
    getCompanyDataVm(company).then((vm) => {
      setCompanyData(vm);
    });
  }, [company]);
  return companyData.map((comp) => (
    //<Typography>{comp.attributes.name}</Typography>
    <Button
      style={{
        backgroundColor: "#5A85C2",
        fontWeight: "600",
        marginLeft: "5px",
      }}
      variant="contained"
      onClick={() => {
        company = { company };
        navigate("/companyVacancy");
      }}
    >
      Search
    </Button>
  )); //Company Card component might be added instead of <Typography>
}
