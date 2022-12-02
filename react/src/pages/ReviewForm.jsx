import { Box, Checkbox, Grid, Rating, Select, Typography } from "@mui/material";
import slider from "../api/slider.json";
import TextField from "@mui/material/TextField";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import * as React from "react";
import { getCompanyListVm } from "../api/viewModelels/companyListVm";

export default function ReviewForm() {
  const [jobTitle, setJobTitle] = React.useState("");
  const [companyList, setCompanyList] = React.useState([]);
  const [selectedCompany, setSelectedCompany] = React.useState([]);
  const [employee, setEmployee] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [review, setReview] = React.useState("");
  const [tag, setTag] = React.useState("");
  console.log(selectedCompany, employee, value, jobTitle, review);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedCompany(value);
  };
  return (
    <Box
      sx={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/assets/cc-bg.png')`,
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
        maxWidth: "100%",
      }}
    >
      <Grid item xs={4} md={4}>
        <Typography sx={{ ml: 5 }}>
          <img
            src="../assets/ja-logo.png"
            alt="jobadvisorlogo"
            width={150}
            height={120}
            // onClick={() => navigate("/")}
          />
        </Typography>
      </Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minWidth: "50%",
          height: "600px",
          border: "bold",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel>Name</InputLabel>
          <Select
            sx={{ m: 2 }}
            multiple
            value={selectedCompany}
            onChange={handleChange}
            input={<OutlinedInput label="Name" />}
            onClick={() => getCompanyListVm().then((v) => setCompanyList(v))}
          >
            {companyList.map((company) => (
              <MenuItem key={company} value={company}>
                {company}
              </MenuItem>
            ))}
          </Select>

          <Checkbox
            sx={{ m: 2 }}
            defaultChecked
            onChange={() => setEmployee(!employee)}
          />

          <TextField
            id="outlined-name"
            label="Name"
            value={jobTitle}
            onChange={(event) => setJobTitle(event.target.value)}
          />
          <Typography component="legend">Rate</Typography>

          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </FormControl>
      </Box>
    </Box>
  );
}
