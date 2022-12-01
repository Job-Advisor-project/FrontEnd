import { Box, Typography } from "@mui/material";
import { createTheme } from "@mui/material/styles";
export default function TextSection() {
  const theme = createTheme();

  theme.typography.subtitle1 = {
    fontSize: "0.8rem",
    "@media (min-width:600px)": {
      fontSize: "1.2rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.8rem",
    },
  };
  theme.typography.h4 = {
    fontSize: "1.2rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        height: "20vh",
        my: 2,
      }}
    >
      <Typography
        theme={theme}
        variant="subtitle1"
        style={{
          color: "#EC615B",
          lineHeight: "30px",
          maxWidth: "35%",
        }}
      >
        Search by specific company
      </Typography>
      <Typography
        theme={theme}
        variant="h6"
        sx={{
          lineHeight: "42px",
          maxWidth: "35%",
          mt: 3,
        }}
      >
        Check out our selection of companies working towards following goals
      </Typography>
    </Box>
  );
}
