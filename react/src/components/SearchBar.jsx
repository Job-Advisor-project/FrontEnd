import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { getCompanyListVm } from "../api/viewModelels/companyListVm";

export default function SearchBar() {
  const [data, setData] = useState([]);
  return (
    <Autocomplete
      disablePortal
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
  );
}
