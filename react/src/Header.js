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
import Drawercomp from "./Drawercomp";

const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <AppBar sx={{ background: "#800000" }}>
        <Toolbar>
          <Drawercomp />
          <Typography>Logo</Typography>
          <Tabs
            sx={{ marginLeft: "auto" }}
            textcolor="inherit"
            value={value}
            onChange={(e, value) => setValue(value)}
            indicatorvalue="secondary"
          >
            <Tab label="Reviews" />
            <Tab label="Companies" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
