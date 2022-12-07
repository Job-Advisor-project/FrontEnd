import * as React from "react";
import { Grid, Typography, List, ListItem } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/assets/footer-bg.png')`,
          backgroundRepeat: "no-repeat",
          alignItems: "stretch",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "auto",
          maxWidth: "100%",
          fontSize: "0.875rem",
          fontWeight: "700",
          flexDirection: "row",
          mt: 5,
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          <Grid item md={4} lg={4}>
            <Typography sx={{ ml: 13 }}>
              <img
                src="../assets/ja-logo.png"
                alt="jobadvisorlogo"
                width={170}
                height={150}
                onClick={() => navigate("/")}
              />
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              sx={{ mx: 10, mb: 3, marginLeft: 19 }}
            >
              <Link href="https://github.com/Job-Advisor-project">
                <GitHubIcon />
              </Link>

              <Link href="https://www.youtube.com/watch?v=2pmx9FF3mdI">
                <YouTubeIcon />
              </Link>
            </Stack>
          </Grid>
          <Grid item md={4} lg={2} sx={{ my: 5 }}>
            <List>
              <ListItem>
                <Button
                  sx={{
                    fontWeight: "200",
                    color: "#66cdaa",
                  }}
                  variant="Text"
                  onClick={() => {
                    navigate("/AboutUs");
                  }}
                >
                  About
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  sx={{
                    fontWeight: "200",
                    color: "#66cdaa",
                  }}
                  variant="Text"
                  onClick={() => {
                    navigate("/Team");
                  }}
                >
                  Our Team
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  sx={{
                    fontWeight: "200",
                    color: "#66cdaa",
                  }}
                  variant="Text"
                  onClick={() => {
                    navigate("/ContactUs");
                  }}
                >
                  Contact Us
                </Button>
              </ListItem>
            </List>
          </Grid>
          <Grid item md={4} lg={2} sx={{ my: 5 }}>
            <List>
              <ListItem>
                <Button
                  sx={{
                    fontWeight: "200",
                    color: "#66cdaa",
                  }}
                  variant="Text"
                  onClick={() => {
                    navigate("/Privacy");
                  }}
                >
                  Privacy &amp; Policy
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  sx={{
                    fontWeight: "200",
                    color: "#66cdaa",
                  }}
                  variant="Text"
                  onClick={() => {
                    navigate("/TermsofUse");
                  }}
                >
                  Terms of Use
                </Button>
              </ListItem>

              <ListItem>
                <Button
                  sx={{
                    fontWeight: "200",
                    color: "#66cdaa",
                  }}
                  variant="Text"
                  onClick={() => {
                    navigate("/CareersPage");
                  }}
                >
                  Careers
                </Button>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        &reg; {new Date().getFullYear()} All Right Reserved
      </Box>
    </>
  );
}
