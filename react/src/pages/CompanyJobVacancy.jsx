import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getCompanyVacanciesVm } from "../api/viewModelels/companyVacancyVm";

export default function CompanyjobVacancy({ company }) {
  const [companyVacancy, setCompanyVacancy] = useState([]);
  useEffect(() => {
    getCompanyVacanciesVm(company).then((vm) => {
      setCompanyVacancy(vm);
    });
  }, [company]);

  return companyVacancy.map((comp) => (
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
      <Typography>
        {comp.attributes.title}
        <br></br>
        {comp.attributes.description}
        <br></br>
        {comp.attributes.package}
        <br></br>
        {comp.attributes.contactEmail}
        <br></br>
        {comp.attributes.data}
      </Typography>
    </Box>
  )); //Company Card component might be added instead of <Typography>
}
