import * as React from "react";
import { Grid, Typography, List, ListItemText } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Avatar from "@mui/material/Avatar";
import { Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";

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
          <Grid item md={6} lg={4}>
            <Typography sx={{ ml: 16 }}>
              <img
                src="../assets/ja-logo.png"
                style={{ cursor: "pointer" }}
                alt="jobadvisorlogo"
                width={170}
                height={150}
                onClick={() => navigate("/")}
              />
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mx: 12, mb: 3 }}>
              <Avatar sx={{ width: 31, height: 31 }}>
                <FacebookIcon />
              </Avatar>
              <Avatar sx={{ width: 31, height: 31 }}>
                <YouTubeIcon />
              </Avatar>
              <Avatar sx={{ width: 31, height: 31 }}>
                <TwitterIcon />
              </Avatar>
              <Avatar sx={{ width: 31, height: 31 }}>
                <InstagramIcon />
              </Avatar>
              <Avatar sx={{ width: 31, height: 31 }}>
                <LinkedInIcon />
              </Avatar>
            </Stack>
          </Grid>
          <Grid item md={8} xs={6} lg={2} sx={{ my: 5, mx: 3, mr: 1 }}>
            <List>
              <ListItemText>
                <Typography
                  lineHeight={2}
                  sx={{
                    fontFamily: "sans-serif",
                    fontSize: {
                      lg: 20,
                      md: 10,
                      xs: 10,
                    },
                  }}
                >
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
                </Typography>
              </ListItemText>
              <ListItemText>
                <Typography
                  lineHeight={2}
                  sx={{
                    fontFamily: "sans-serif",
                    fontSize: {
                      lg: 20,
                      md: 10,
                      xs: 10,
                    },
                  }}
                >
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
                </Typography>
              </ListItemText>
              <ListItemText>
                <Typography
                  lineHeight={2}
                  sx={{
                    fontFamily: "sans-serif",
                    fontSize: {
                      lg: 20,
                      md: 10,
                      xs: 10,
                    },
                  }}
                >
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
                </Typography>
              </ListItemText>
            </List>
          </Grid>
          <Grid item md={8} xs={6} lg={2} sx={{ my: 5, mx: 3, mr: 1 }}>
            <List>
              <ListItemText>
                <Typography
                  lineHeight={2}
                  sx={{
                    fontFamily: "sans-serif",
                    fontSize: {
                      lg: 20,
                      md: 10,
                      xs: 10,
                    },
                  }}
                >
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
                </Typography>
              </ListItemText>
              <ListItemText>
                <Typography
                  lineHeight={2}
                  sx={{
                    fontFamily: "sans-serif",
                    fontSize: {
                      lg: 20,
                      md: 10,
                      xs: 10,
                    },
                  }}
                >
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
                    TermsofUse
                  </Button>
                </Typography>
              </ListItemText>

              <ListItemText>
                <Typography
                  lineHeight={2}
                  sx={{
                    fontFamily: "sans-serif",

                    fontSize: {
                      lg: 20,
                      md: 10,
                      xs: 10,
                    },
                  }}
                >
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
                </Typography>
              </ListItemText>
            </List>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          flexDirection: "row",
          textAlign: "center",
          backgroundImage: `url('${process.env.PUBLIC_URL}/assets/background.png')`,
          alignItems: "stretch",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "auto",
          maxWidth: "100%",
          fontSize: "0.875rem",
          fontWeight: "700",
          mt: 3,
        }}
      >
        &reg; {new Date().getFullYear()} All Right Reserved
      </Box>
    </>
  );
}
