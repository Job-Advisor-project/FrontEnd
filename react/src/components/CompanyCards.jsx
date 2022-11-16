import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Cards({ companies }) {
  return (
    <>
      {companies &&
        companies.map((item) => (
          <Card
            key={item.attributes.company.data.attributes.name}
            sx={{ minWidth: 275 }}
          >
            <CardContent key={item.attributes.company.data.attributes.name}>
              <Typography
                key={item.attributes.company.data.attributes.name}
                variant="h3"
                component="div"
              >
                {item.attributes.company.data.attributes.name}
              </Typography>
              <Typography
                key={item.attributes.company.data.attributes.name}
                variant="p"
                component="div"
              >
                {item.attributes.company.data.attributes.location}
              </Typography>
              <Typography
                key={item.attributes.company.data.attributes.name}
                sx={{ fontSize: 14 }}
                color="text.secondary"
              >
                {item.attributes.company.data.attributes.description}
              </Typography>
            </CardContent>
            <CardActions key={item.attributes.company.data.attributes.name}>
              <Button
                key={item.attributes.company.data.attributes.name}
                size="small"
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        ))}
    </>
  );
}
