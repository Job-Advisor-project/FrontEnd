import { Box, Typography } from "@mui/material";
import SearchBar from "./SearchBar";
// import { useState } from "react";

export default function Banner({ setCompany }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "right",
        alignItems: "center",
        margin: "0px",
        backgroundImage: `url('${process.env.PUBLIC_URL}/assets/background.png')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "auto",
        maxWidth: "100%",
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
        src="../../assets/design/edited-idea.png"
        alt="women"
        style={{ width: "652px", height: "410px" }}
      />
    </Box>
  );
}
