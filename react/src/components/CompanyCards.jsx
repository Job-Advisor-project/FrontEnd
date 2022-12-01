import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

export default function Cards({ companies, setCompany }) {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        flexDirection: "column",
        display: "flex",
        alignItems: "stretch",
        mt: 5,
        mx: 10,

        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
      }}
    >
      {companies &&
        companies.map((item) => (
          <Card
            key={item.attributes.company.data.attributes.name}
            sx={{
              my: 0.5,
              px: 3,
              maxWidth: 10100,
              border: "1px solid",
              bgcolor: (theme) =>
                theme.palette.mode === "dark" ? "#101010" : "#fff",
              color: (theme) =>
                theme.palette.mode === "dark" ? "grey.300" : "grey.800",

              borderColor: (theme) =>
                theme.palette.mode === "dark" ? "grey.800" : "grey.300",
            }}
          >
            <CardHeader
              avatar={
                <Avatar
                  alt="logo"
                  src={`${item.attributes.company.data.attributes.image.data.attributes.formats.thumbnail.url}`}
                  variant="square"
                ></Avatar>
              }
              title={
                <Typography variant="h6">
                  {item.attributes.company.data.attributes.name}
                </Typography>
              }
              subheader={item.attributes.company.data.attributes.industry}
            />
            <CardContent key={item.attributes.company.data.attributes.name}>
              <Typography
                key={item.attributes.company.data.attributes.name}
                gutterBottom
                variant="h7"
                component="div"
              >
                Description
              </Typography>
              <Typography
                key={item.attributes.company.data.attributes.name}
                variant="body2"
                color="text.secondary"
              >
                {item.attributes.company.data.attributes.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => {
                  setCompany(item.attributes.company.data.attributes.name);
                  navigate("/companyOverview");
                }}
                size="small"
              >
                Read More
              </Button>
            </CardActions>
          </Card>
        ))}
    </Box>
  );
}
