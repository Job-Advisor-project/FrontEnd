import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
// import { filterData, SearchBar } from "../components/SearchBar";

export default function Banner() {
  const [searchQuery, setSearchQuery] = useState("");
  // const dataFiltered = filterData(searchQuery, data);
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
        height: "400px",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "64px",
          marginLeft: "120px",
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
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div style={{ padding: 3 }}>
          {searchQuery}
          {/* {dataFiltered.map((d) => (
            <div
              className="text"
              style={{
                padding: 5,
                justifyContent: "normal",
                fontSize: 20,
                color: "blue",
                margin: 1,
                width: "250px",
                BorderColor: "green",
                borderWidth: "10px",
              }}
              key={d.id}
            >
              {d}
            </div>
          ))} */}
        </div>
      </div>
      <img
        src="../../assets/design/edited-idea.png"
        alt="women"
        style={{ width: "652px", height: "410px" }}
      />
    </Box>
  );
}
