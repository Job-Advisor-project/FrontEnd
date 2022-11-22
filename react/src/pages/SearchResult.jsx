import Cards from "../components/CompanyCards";
import React, { useEffect, useState } from "react";
import { getCompaniesByTagVm } from "../api/viewModelels/companiesByTagVm";
import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { TagButtons } from "../components/TagButtons";

export default function SearchResult({ tag }) {
  const [selected, setSelected] = useState(tag);
  const [companyList, setCompanyList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getCompaniesByTagVm(selected).then((vm) => {
      setCompanyList(vm);
    });
  }, [selected]);
  const handleClick = (e) => {
    setSelected(e);
  };
  return (
    <div>
      <Container>
        <TagButtons onClick={handleClick}></TagButtons>
        <Cards companies={companyList}></Cards>
        <Button
          style={{ margin: "15px" }}
          onClick={() => navigate("/")}
          variant="contained"
        >
          Back
        </Button>
      </Container>
    </div>
  );
}
