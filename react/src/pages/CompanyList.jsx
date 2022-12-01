import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { companiesByDisplay } from "../api/companiesByDisplay";

export default function getCompanyListVm() {
  const { data } = companiesByDisplay();
  console.log("inside companylist", data);
  return (
    <Box
      sx={{
        display: "flex",
        m: 5,
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "#fff",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
      }}
    >
      <Card sx={{ px: 3, maxWidth: 10100 }}>
        <CardHeader
          avatar={
            <Avatar
              alt="logo"
              src="assets/amazon.jpg"
              variant="square"
            ></Avatar>
          }
          title={<Typography variant="h6">Amazon</Typography>}
          subheader="Business consulting and services"
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
            Description
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Read More</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
