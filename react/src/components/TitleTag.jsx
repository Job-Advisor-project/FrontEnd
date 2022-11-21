import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export default function TitleTag({ tag }) {
  const Div = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  }));
  let title;
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  tag === "work-life-balances" && (title = "Work-Life Balance");
  tag === "diversity-inclusions" && (title = "Diversity & Inclusion");
  tag === "benefits-compensations" && (title = "Benefits and Compensations");
  tag === "social-responsibilities" && (title = "Sustainability");
  return title === undefined ? (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ThemeProvider theme={theme}>
        <Typography variant="h4">Explore companies in Belgium</Typography>
        <Typography variant="h5">
          Job Advisor has many company overview. Find best one for you!
        </Typography>
      </ThemeProvider>
    </Box>
  ) : (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Div sx={{ alignSelf: "center" }} component="div">
        {`Top companies for `}
        <span style={{ fontWeight: "bold" }}>{title}</span>
      </Div>
      <img
        src="/./assets/figma download/pixeltrue-giveaway-1.png"
        alt="img"
        style={{ width: "25%", height: "35vh" }}
      ></img>
    </Box>
  );
}
