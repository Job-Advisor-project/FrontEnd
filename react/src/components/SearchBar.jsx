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
  const [value, setValue] = useState(undefined);
  const [inputValue, setInputValue] = useState();
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
              data.includes(newValue) && setValue(newValue);
              setCompany(newValue);
              navigate("/companyOverview");
            }}
            disablePortal
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
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
      </Grid>
    </Box>
  );
}
