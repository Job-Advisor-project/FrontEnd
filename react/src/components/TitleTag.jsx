import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export default function TitleTag({ tag }) {
  const Div = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  }));
  return (
    <Box sx={{ display: "flex" }}>
      <Div
        sx={{ alignSelf: "center" }}
        component="div"
      >{`Top companies for ${tag}`}</Div>
      <img
        src="/./assets/figma download/pixeltrue-giveaway-1.png"
        alt="img"
        style={{ width: "25%", height: "35vh" }}
      ></img>
    </Box>
  );
}
