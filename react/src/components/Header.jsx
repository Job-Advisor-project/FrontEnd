import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar, Typography } from "@mui/material";
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
              src="../assets/ja-logo.png"
              alt="jobadvisorlogo"
              width={130}
              height={100}
              onClick={() => navigate("/")}
            />
          </Typography>
          <Tabs
            sx={{ marginLeft: "auto" }}
            textcolor="inherit"
            value={value}
            onChange={(e, value) => setValue(1)}
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
