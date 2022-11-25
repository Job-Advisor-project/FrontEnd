import * as React from "react";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <AppBar
        position="flex"
        sx={{
          display: "flex",
          justifyContent: "right",
          margin: "0px",
          backgroundImage: `url('${process.env.PUBLIC_URL}/assets/background.png')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100",
        }}
      >
        <Toolbar>
          <Typography>
            <img
              src="../assets/jobadvisorlogo.jpg"
              alt="jobadvisorlogo"
              width={140}
              height={80}
            />
          </Typography>
          <Tabs
            sx={{ marginLeft: "auto" }}
            textcolor="inherit"
            value={value}
            onChange={(e, value) => setValue(value)}
            indicatorvalue="primary"
          >
            <RateReviewIcon
              sx={{
                display: { xs: "none", md: "flex", color: "black" },
                mr: -2,
              }}
            />
            <Tab label="Reviews" />
            <BusinessIcon
              //color="action"
              sx={{
                display: { xs: "none", md: "flex", color: "black" },

                mr: -2,
              }}
            />
            <Tab label="Companies" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
