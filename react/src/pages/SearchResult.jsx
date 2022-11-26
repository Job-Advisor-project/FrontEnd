import Cards from "../components/CompanyCards";
import React, { useEffect, useState } from "react";
import { getCompaniesByTagVm } from "../api/viewModelels/companiesByTagVm";
import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { TagButtons } from "../components/TagButtons";
import TitleTag from "../components/HeroSection";
import Footer from "../components/Footer";
import Header from "../components/Header";

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
    <>
      <Header></Header>
      <Container sx={{ mt: "10px" }}>
        <TitleTag selected={selected}></TitleTag>
        <TagButtons onClick={handleClick}></TagButtons>
        <Cards companies={companyList}></Cards>
      </Container>
      <Footer></Footer>
    </>
  );
}
