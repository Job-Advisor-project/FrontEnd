import { Box, Typography, Grid, List } from "@mui/material";
//import { createTheme } from "@mui/material/styles";
export default function TextSection() {
  // const theme = createTheme();

  // theme.typography.subtitle1 = {
  //   fontSize: "0.8rem",
  //   "@media (min-width:600px)": {
  //     fontSize: "1.2rem",
  //   },
  //   [theme.breakpoints.up("md")]: {
  //     fontSize: "1.8rem",
  //   },
  // };
  // theme.typography.h4 = {
  //   fontSize: "1.2rem",
  //   "@media (min-width:600px)": {
  //     fontSize: "1.5rem",
  //   },
  //   [theme.breakpoints.up("md")]: {
  //     fontSize: "2rem",
  //   },
  // };
  return (
    <Box
      sx={{
        // display: "flex",
        // alignItems: "stretch",
        // textAlign: "center",
        // justifyContent: "center",
        // height: "auto",
        // maxWidth: "100%",
        // my: 4,

        flexDirection: "column",
        display: "flex",
        textAlign: "center",
        mt: 5,
      }}
    >
      <Grid
        container
        md={5}
        lg={12}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <List>
          <Typography
            sx={{
              color: "#EC615B",
              lineHeight: "30px",
              typography: {
                md: "h5",
                sm: "h6",
                xs: "h6",
              },
            }}
          >
            Search by specific company
          </Typography>
          <Typography
            sx={{
              lineHeight: "42px",
              mt: 2,
            }}
          >
            Check out our selection of companies working towards following goals
          </Typography>
        </List>
      </Grid>
    </Box>
  );
}
