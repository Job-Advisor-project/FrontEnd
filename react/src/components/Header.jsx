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
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
