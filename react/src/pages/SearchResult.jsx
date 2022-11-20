import Cards from "../components/CompanyCards";
import React, { useEffect, useState } from "react";
import { getCompaniesByTagVm } from "../api/viewModelels/companiesByTagVm";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TitleTag from "../components/TitleTag";

export default function SearchResult({ tag }) {
  const [companyList, setCompanyList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getCompaniesByTagVm(tag).then((vm) => {
      setCompanyList(vm);
    });
  }, [tag]);

  return (
    <>
      <TitleTag tag={tag}></TitleTag>
      <Button
        style={{ margin: "15px" }}
        onClick={() => navigate("/")}
        variant="contained"
      >
        Back
      </Button>
      <Cards companies={companyList}></Cards>
    </>
  );
}
