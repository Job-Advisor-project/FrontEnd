import Cards from "../components/CompanyCards";
import React, { useEffect, useState } from "react";
import { getCompaniesByTagVm } from "../api/viewModelels/companiesByTagVm";
import { Box } from "@mui/material";
import { TagButtons } from "../components/TagButtons";
import TitleTag from "../components/HeroSection";
import Footer from "../components/Footer";

export default function SearchResult({ tag }) {
  const [selected, setSelected] = useState(tag);
  const [companyList, setCompanyList] = useState([]);

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
      <Box
        sx={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/assets/cc-bg.png')`,
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          maxHeight: "auto",
          maxWidth: "100%",
        }}
      >
        <TitleTag selected={selected}></TitleTag>
        <TagButtons onClick={handleClick} selected={selected}></TagButtons>
        <Cards companies={companyList}></Cards>
      </Box>
      <Footer></Footer>
    </>
  );
}
