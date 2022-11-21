import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";

export const SearchBar = ({ setSearchQuery }) => (
  <form>
    <TextField
      sx={{
        textAlign: "center",
        verticalAlign: "middle",
        fontSize: "2",
        minWidth: "400px",
      }}
      id="search-bar"
      className="text"
      onInput={(e) => {
        setSearchQuery(e.target.value);
      }}
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
// export const filterData = (query, data) => {
//   if (!query) {
//     return data;
//   } else {
//     return data.filter((d) => d.toLowerCase().includes(query));
//   }
// };
