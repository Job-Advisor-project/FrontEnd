import { Box, Grid, Typography, List, ListItemText } from "@mui/material";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

export default function Banner({ setCompany }) {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        alignItems: "stretch",
        backgroundImage: `url('${process.env.PUBLIC_URL}/assets/background.png')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "auto",
        maxWidth: "100%",
        fontSize: "0.875rem",
        fontWeight: "700",
      }}
    >
      <Grid item md={6} lg={4}>
        <Typography sx={{ ml: 11 }}>
          <img
            src="../assets/ja-logo.png"
            alt="jobadvisorlogo"
            width={170}
            height={150}
            onClick={() => navigate("/")}
          />
        </Typography>
      </Grid>
      <Grid container>
        <Grid item md={6} lg={6} sx={{ my: 7, mx: 9 }}>
          <Typography variant="h3">
            Find Your Dream Workplace with Us Easily
          </Typography>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </Typography>
            </ListItemText>
            <SearchBar setCompany={setCompany}></SearchBar>
          </List>
        </Grid>
        <Grid item md={6} lg={4} sx={{ mb: 5 }}>
          <Typography>
            <img
              src="../../assets/design/edited-idea.png"
              alt="women"
              style={{ width: "100%", height: "auto" }}
            />
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

//======================================================
// import { Box, Typography } from "@mui/material";
// import SearchBar from "./SearchBar";
// // import { useState } from "react";

// export default function Banner({ setCompany }) {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "right",
//         alignItems: "center",
//         margin: "0px",
//         backgroundImage: `url('${process.env.PUBLIC_URL}/assets/background.png')`,
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//         backgroundSize: "cover",
//         height: "auto",
//         maxWidth: "100%",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           alignSelf: "center",
//           marginLeft: "3rem",
//         }}
//       >
//         <Typography
//           variant="h3"
//           style={{ textAlign: "center", fontWeight: "700px" }}
//           gutterBottom
//         >
//           Find Your Dream Workplace with Us Easily
//         </Typography>
//         <Typography
//           variant="paragraph"
//           style={{ textAlign: "center", marginBottom: "78px" }}
//           gutterBottom
//         >
//           lorem ipsum, Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//           sed do eiusmod tempor incididunt ut.
//         </Typography>
//         <SearchBar setCompany={setCompany}></SearchBar>
//       </div>
//       <img
//         src="../../assets/design/edited-idea.png"
//         alt="women"
//         style={{ width: "652px", height: "410px" }}
//       />
//     </Box>
//   );
// }
