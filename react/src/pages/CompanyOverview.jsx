//import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getCompanyDataVm } from "../api/viewModelels/companyDataVm";
import { Button, Container } from "@mui/material";
import CompanycardsBysearch from "../components/CompanycardsBysearch";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Tabs from "../components/Tabs";

export default function CompanyOverview({ company }) {
  const navigate = useNavigate();
  const [companyData, setCompanyData] = useState([]);
  useEffect(() => {
    getCompanyDataVm(company).then((vm) => {
      setCompanyData(vm);
    });
  }, [company]);
  return (
    <Container>
      <Header></Header>
      <CompanycardsBysearch companies={companyData}></CompanycardsBysearch>
      <Button
        style={{ margin: "15px" }}
        onClick={() => navigate("/")}
        variant="contained"
      >
        Back
      </Button>
    </Container>
  ); //Company Card component might be added instead of <Typography>
}
