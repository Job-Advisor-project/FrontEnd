import * as React from "react";
import { Grid, Typography, List, ListItemText } from "@mui/material";
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
          bgcolor: (theme) =>
            theme.palette.mode === "amber" ? "yellow.50" : "#fffde7",
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
            <Typography variant="caption1">INFORMATION</Typography>
            <List>
              <ListItemText>
                <Typography lineHeight={2} variant="body2"></Typography>
              </ListItemText>
              <ListItemText>
                <Typography lineHeight={2} variant="body2">
                  About us
                </Typography>
                <Typography lineHeight={2} variant="body2">
                  FAQ
                </Typography>
              </ListItemText>
              <ListItemText>
                <Typography lineHeight={2} variant="body2">
                  Privacy &amp; Policy
                </Typography>
              </ListItemText>
              <ListItemText>
                <Typography lineHeight={2} variant="body2">
                  Terms &amp; Conditions
                </Typography>
              </ListItemText>
            </List>
          </Grid>
          <Grid item md={6} lg={2} sx={{ my: 3 }}>
            <Typography variant="caption1">WORK WITH US</Typography>
            <List>
              <ListItemText>
                <Typography lineHeight={2} variant="body2">
                  Advertiser
                </Typography>
              </ListItemText>
              <ListItemText>
                <Typography lineHeight={2} variant="body2">
                  Developers
                </Typography>
              </ListItemText>
              <ListItemText>
                <Typography lineHeight={2} variant="body2">
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
          bgcolor: (theme) =>
            theme.palette.mode === "amber" ? "yellow.50" : "#fffde7",
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
