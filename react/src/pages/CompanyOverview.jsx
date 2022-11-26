import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getCompanyDataVm } from "../api/viewModelels/companyDataVm";
//import VacanciesButton from "../components/VacanciesButton";
//import CompanyjobVacancy from "./CompanyJobVacancy";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
//import Header from "../components/Header";

export default function CompanyOverview({ company }) {
  const navigate = useNavigate();
  const [companyData, setCompanyData] = useState([]);
  useEffect(() => {
    getCompanyDataVm(company).then((vm) => {
      setCompanyData(vm);
    });
  }, [company]);
  return companyData.map((comp) => (
    <div>
      <Box
        sx={{
          flexDirection: "column",
          display: "flex",
          alignItems: "stretch",
          m: 5,
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#101010" : "#fff",
          color: (theme) =>
            theme.palette.mode === "dark" ? "grey.300" : "grey.800",
          border: "1px solid",
          borderColor: (theme) =>
            theme.palette.mode === "dark" ? "grey.800" : "grey.300",
          borderRadius: 2,
          fontSize: "0.875rem",
          fontWeight: "700",
        }}
      >
        <Typography>{comp.attributes.name}</Typography>
      </Box>
      <Button
        style={{
          alignItems: "flex-start",
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
        VACANCIES
      </Button>
    </div>
  )); //Company Card component might be added instead of <Typography>
}
