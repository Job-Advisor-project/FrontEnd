import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

export default function CompanycardsBysearch({ companies }) {
  return (
    <Box
      sx={{
        backgroundImage: "url(http://localhost:3000/assets/background.png)",
        display: "flex",
        m: 5,
        bgcolor: (theme) => (theme.palette.mode === "dark" ? "#101010" : "red"),
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
      {companies &&
        companies.map((item) => (
          <Card
            key={item.attributes.name}
            sx={{
              mt: 0.1,
              px: 3,
              backgroundImage:
                "url(http://localhost:3000/assets/background.png)",
              maxWidth: 10100000,
            }}
          >
            <CardHeader
              avatar={
                <Avatar
                  alt="logo"
                  src={`.${item.attributes.image.data.attributes.formats.thumbnail.url}`}
                  variant="square"
                ></Avatar>
              }
              title={
                <Typography variant="h6">{item.attributes.name}</Typography>
              }
              subheader={item.attributes.industry}
            />
            <CardContent key={item.attributes.name}>
              <Typography
                key={item.attributes.name}
                gutterBottom
                variant="h7"
                component="div"
              >
                Location
              </Typography>
              <Typography
                key={item.attributes.name}
                variant="body2"
                color="text.secondary"
              >
                {item.attributes.location}
              </Typography>
            </CardContent>
            <CardContent key={item.attributes.name}>
              <Typography
                key={item.attributes.name}
                gutterBottom
                variant="h7"
                component="div"
              >
                Description
              </Typography>
              <Typography
                key={item.attributes.name}
                variant="body2"
                color="text.secondary"
              >
                {item.attributes.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
    </Box>
  );
}
