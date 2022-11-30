// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import {
//   createTheme,
//   responsiveFontSizes,
//   ThemeProvider,
// } from "@mui/material/styles";
// import Typography from "@mui/material/Typography";
// import slider from "../api/slider.json";

// export default function TitleTag({ selected }) {
//   const Div = styled("div")(({ theme }) => ({
//     ...theme.typography.button,
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(1),
//   }));
//   let theme = createTheme();
//   theme = responsiveFontSizes(theme);
//   let title = slider.find((item) => item.collection === selected).title;
//   let imgUrl = slider.find((item) => item.collection === selected).image;
//   return title === undefined ? (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//       }}
//     >
//       <ThemeProvider theme={theme}>
//         <Typography variant="h4">Explore companies in Belgium</Typography>
//         <Typography variant="h5">
//           Job Advisor has many company overview. Find best one for you!
//         </Typography>
//       </ThemeProvider>
//     </Box>
//   ) : (
//     <Box sx={{ display: "flex", justifyContent: "center" }}>
//       <Div sx={{ alignSelf: "center" }} component="div">
//         {`Top companies for `}
//         <span style={{ fontWeight: "bold" }}>{title}</span>
//       </Div>
//       <img
//         src={imgUrl}
//         alt="img"
//         style={{ width: "25%", height: "35vh" }}
//       ></img>
//     </Box>
//   );
// }
//===========================fenny tryout==================================

import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import slider from "../api/slider.json";

export default function TitleTag({ selected }) {
  const navigate = useNavigate();

  let title = slider.find((item) => item.collection === selected).title;
  let imgUrl = slider.find((item) => item.collection === selected).image;
  return title === undefined ? (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4">Explore companies in Belgium</Typography>
      <Typography variant="h5">
        Job Advisor has many company overview. Find best one for you!
      </Typography>
    </Box>
  ) : (
    <Box
      sx={{
        fontSize: "0.875rem",
        fontWeight: "700",
      }}
    >
      <Grid item xs={4} md={4}>
        <Typography>
          <img
            src="../assets/ja-logo.png"
            alt="jobadvisorlogo"
            width={150}
            height={120}
            onClick={() => navigate("/")}
          />
        </Typography>
      </Grid>
      <Grid container sx={{ justifyContent: "center", alignItems: "center" }}>
        <Grid item md={5} lg={3.5} sx={{ my: 5, mx: 3 }}>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "sans-serif",
              typography: {
                md: "h5",
                sm: "h6",
                xs: "subtitle1",
              },
            }}
          >
            {`Top companies with focus on `}
            <span style={{ fontWeight: "bold" }}>{title}</span>
          </Typography>
        </Grid>
        <Grid item md={5} lg={4}>
          <Typography>
            <img
              src={imgUrl}
              alt="img"
              style={{
                width: "100%",
                height: "auto",
                textAlign: "center",
              }}
            />
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
