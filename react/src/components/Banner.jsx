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
      <Grid item xs={6} md={4}>
        <Typography sx={{ ml: 4 }}>
          <img
            src="../assets/ja-logo.png"
            alt="jobadvisorlogo"
            width={170}
            height={150}
            onClick={() => navigate("/")}
          />
        </Typography>
      </Grid>
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid item md={5} lg={6} sx={{ my: 5, mx: 3 }}>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "sans-serif",
              typography: {
                md: "h3",
                sm: "h4",
                xs: "h5",
              },
            }}
          >
            Discover a company DNA
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: "center",
              fontFamily: "sans-serif",
              typography: {
                md: "h3",
                sm: "h4",
                xs: "h5",
              },
            }}
          >
            to the find perfect match for YOU!
          </Typography>
          <List>
            <ListItemText>
              <Typography
                lineHeight={2}
                sx={{
                  mt: 3,
                  textAlign: "center",
                  typography: { md: "body1", sm: "body2" },
                }}
              >
                Job Advisor helps companies promote the right values and job
                seekers make the right career choice.
              </Typography>
            </ListItemText>
            <SearchBar setCompany={setCompany}></SearchBar>
          </List>
        </Grid>
        <Grid item md={5} lg={4} sx={{ mb: 5 }}>
          <Typography>
            <img
              src="../../assets/figma download/edited-idea.png"
              alt="women"
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
