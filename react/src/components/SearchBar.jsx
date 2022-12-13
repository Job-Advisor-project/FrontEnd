import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { getCompanyListVm } from "../api/viewModelels/companyListVm";
import { Box, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import * as React from "react";
export default function SearchBar({ setCompany }) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  const [inputValue, setInputValue] = useState("");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        mt: 7,
      }}
    >
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid item xs={6} md={6} lg={8} sx={{ mr: 1 }}>
          <Autocomplete
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            disablePortal
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
              setCompany(newInputValue);
              navigate("/companyOverview");
            }}
            id="combo-box-demo"
            options={data}
            sx={{ alignSelf: "center" }}
            renderInput={(params) => (
              <TextField
                sx={{ backgroundColor: "white", maxWidth: "100%" }}
                {...params}
                label="company name"
                onClick={() => getCompanyListVm().then((v) => setData(v))}
              />
            )}
          />
        </Grid>
        {/* <Button
          sx={{
            backgroundColor: "#5A85C2",
            fontWeight: "600",
            display: { xs: "none", sm: "block" },
          }}
          variant="contained"
          onClick={() => {
            setCompany(inputValue);
            navigate("/companyOverview");
          }}
        >
          Search
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#5A85C2",
            display: { xs: "block", sm: "none" },
          }}
          onClick={() => {
            setCompany(inputValue);
            navigate("/companyOverview");
          }}
        >
          <SearchIcon />
        </Button> */}
      </Grid>
    </Box>
  );
}
