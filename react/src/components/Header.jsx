import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import {
  Toolbar,
  Typography,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import RateReviewIcon from "@mui/icons-material/RateReview";

const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <AppBar position="flex" sx={{ background: "#FCD299" }}>
        <Toolbar>
          <Typography>
            <img src="../assets/jobadvisorlogo.jpg" width={200} height={70} />
          </Typography>
          <Tabs
            sx={{ marginLeft: "auto" }}
            textcolor="inherit"
            value={value}
            onChange={(e, value) => setValue(value)}
            indicatorvalue="primary"
          >
            <RateReviewIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: -2 }}
            />
            <Tab label="Reviews" />
            <BusinessIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: -2 }}
            />
            <Tab label="Companies" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
