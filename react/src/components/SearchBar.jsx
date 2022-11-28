import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { getCompanyListVm } from "../api/viewModelels/companyListVm";
import { Box, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ setCompany }) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
        mt: 3,
      }}
    >
      <Grid container justifyContent="left">
        <Grid item xs={4} md={6} lg={8} sx={{ mr: 1 }}>
          <Autocomplete
            disablePortal
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            id="combo-box-demo"
            options={data}
            sx={{ alignSelf: "center" }}
            renderInput={(params) => (
              <TextField
                sx={{ maxWidth: "100%" }}
                {...params}
                label="Search by company name..."
                onClick={() => getCompanyListVm().then((v) => setData(v))}
              />
            )}
          />
        </Grid>
        <Button
          style={{
            backgroundColor: "#5A85C2",
            fontWeight: "600",
          }}
          variant="contained"
          onClick={() => {
            setCompany(inputValue);
            navigate("/companyOverview");
          }}
        >
          Search
        </Button>
      </Grid>
    </Box>
  );
}
