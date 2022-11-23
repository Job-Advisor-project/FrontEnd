import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import slider from "../api/slider.json";

export default function TitleTag({ tag }) {
  const Div = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  }));
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  let title = slider.find((item) => item.collection === tag).title;
  let imgUrl = slider.find((item) => item.collection === tag).image;
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
        src={imgUrl}
        alt="img"
        style={{ width: "25%", height: "35vh" }}
      ></img>
    </Box>
  );
}
