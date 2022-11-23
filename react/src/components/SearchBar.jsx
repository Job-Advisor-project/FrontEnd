import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { getCompanyListVm } from "../api/viewModelels/companyListVm";

export const SearchBar = ({ setSearchQuery, setData }) => (
  <form>
    <TextField
      sx={{
        textAlign: "center",
        verticalAlign: "middle",
        fontSize: "2",
        width: "494px",
        backgroundColor: "#F9F8F3",
      }}
      id="search-bar"
      className="text"
      onInput={(e) => {
        setSearchQuery(e.target.value);
      }}
      onChange={() => getCompanyListVm().then((v) => setData(v))}
      label="Search by company name..."
      variant="outlined"
      placeholder="Search..."
      size="small"
    />
    <IconButton type="submit" aria-label="search">
      <Button
        style={{ backgroundColor: "#5A85C2", fontWeight: "600" }}
        variant="contained"
      >
        Search
      </Button>
    </IconButton>
  </form>
);
export const filterData = (query, data) => {
  if (!query) {
    return data;
  } else {
    return data.filter((d) => d.toLowerCase().includes(query));
  }
};
