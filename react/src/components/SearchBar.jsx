import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { getCompanyListVm } from "../api/viewModelels/companyListVm";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ setCompany }) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
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
            sx={{ width: "494px" }}
            {...params}
            label="Search by company name..."
            onClick={() => getCompanyListVm().then((v) => setData(v))}
          />
        )}
      />
      <Button
        style={{
          backgroundColor: "#5A85C2",
          fontWeight: "600",
          marginLeft: "5px",
        }}
        variant="contained"
        onClick={() => {
          setCompany(inputValue);
          navigate("/companyOverview");
        }}
      >
        Search
      </Button>
    </Box>
  );
}
