import * as React from "react";
import { Grid, Typography, List, ListItemText, Link } from "@mui/material";
import Box from "@mui/material/Box";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Avatar from "@mui/material/Avatar";
import { Stack } from "@mui/system";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          flexDirection: "row",
          alignItems: "stretch",
          mt: 5,
          backgroundImage: `url('${process.env.PUBLIC_URL}/assets/footer-bg.png')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "auto",
          maxWidth: "100%",
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#101010" : "#fff",
          color: (theme) =>
            theme.palette.mode === "dark" ? "grey.300" : "grey.800",
          border: "1px solid",
          borderColor: (theme) =>
            theme.palette.mode === "dark" ? "grey.800" : "grey.300",
          fontSize: "0.875rem",
          fontWeight: "700",
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          <Grid item md={6} lg={4}>
            <Typography sx={{ ml: 13 }}>
              <img
                src="../assets/ja-logo.png"
                alt="jobadvisorlogo"
                width={130}
                height={100}
              />
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mx: 7, mb: 3 }}>
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
          <Grid item md={6} lg={2} sx={{ my: 3 }}>
            <Typography
              sx={{
                fontWeight: "750",
                fontSize: {
                  lg: 12,
                  md: 10,
                  xs: 8,
                },
              }}
            >
              INFORMATION
            </Typography>
            <List>
              <ListItemText>
                <Link href="/aboutUs">About us</Link>
              </ListItemText>
              <ListItemText>
                <Typography
                  lineHeight={2}
                  sx={{
                    fontSize: {
                      lg: 12,
                      md: 10,
                      xs: 8,
                    },
                  }}
                >
                  FAQ
                </Typography>
              </ListItemText>
              <ListItemText>
                <Typography
                  lineHeight={2}
                  sx={{
                    fontSize: {
                      lg: 12,
                      md: 10,
                      xs: 8,
                    },
                  }}
                >
                  Privacy &amp; Policy
                </Typography>
              </ListItemText>
              <ListItemText>
                <Typography
                  lineHeight={2}
                  sx={{
                    fontSize: {
                      lg: 12,
                      md: 10,
                      xs: 8,
                    },
                  }}
                >
                  Terms &amp; Conditions
                </Typography>
              </ListItemText>
            </List>
          </Grid>
          <Grid item md={6} lg={2} sx={{ my: 3 }}>
            <Typography
              sx={{
                fontWeight: "750",
                fontSize: {
                  lg: 12,
                  md: 10,
                  xs: 8,
                },
              }}
            >
              WORK WITH US
            </Typography>
            <List>
              <ListItemText>
                <Typography
                  lineHeight={2}
                  sx={{
                    fontSize: {
                      lg: 12,
                      md: 10,
                      xs: 8,
                    },
                  }}
                >
                  Advertiser
                </Typography>
              </ListItemText>
              <ListItemText>
                <Typography
                  lineHeight={2}
                  sx={{
                    fontSize: {
                      lg: 12,
                      md: 10,
                      xs: 8,
                    },
                  }}
                >
                  Developers
                </Typography>
              </ListItemText>
              <ListItemText>
                <Typography
                  lineHeight={2}
                  sx={{
                    fontSize: {
                      lg: 12,
                      md: 10,
                      xs: 8,
                    },
                  }}
                >
                  Careers
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
          backgroundImage: `url('${process.env.PUBLIC_URL}/assets/footer-bg.png')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "auto",
          maxWidth: "100%",
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#101010" : "#fff",
          color: (theme) =>
            theme.palette.mode === "dark" ? "grey.300" : "grey.800",
          border: "1px solid",
          borderColor: (theme) =>
            theme.palette.mode === "dark" ? "grey.800" : "grey.300",
          fontSize: "0.800rem",
          fontWeight: "300",
        }}
      >
        &reg; {new Date().getFullYear()} All Right Reserved
      </Box>
    </>
  );
}
