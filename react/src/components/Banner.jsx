import { Box, Typography } from "@mui/material";
import SearchBar from "./SearchBar";
// import { useState } from "react";

export default function Banner({ setCompany }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "right",
        alignItems: "end",
        margin: "0px",
        backgroundImage: "url(http://localhost:3000/background.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "672px",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignSelf: "center",
          marginLeft: "3rem",
        }}
      >
        <Typography
          variant="h3"
          style={{ textAlign: "center", fontWeight: "700px" }}
          gutterBottom
        >
          Find Your Dream Workplace with Us Easily
        </Typography>
        <Typography
          variant="paragraph"
          style={{ textAlign: "center", marginBottom: "78px" }}
          gutterBottom
        >
          lorem ipsum, Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut.
        </Typography>
        <SearchBar setCompany={setCompany}></SearchBar>
      </div>
      <img
        src="../../assets/figma download/pixeltrue-idea-1.png"
        alt="women"
        style={{ width: "652px", height: "550px" }}
      />
    </Box>
  );
}
