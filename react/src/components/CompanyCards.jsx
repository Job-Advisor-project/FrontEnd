import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Cards({ companies }) {
  return (
    <>
      {companies.map((company) => (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h3" component="div">
              {company.attributes.name}
            </Typography>
            <Typography variant="p" component="div">
              {company.attributes.location}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
              {company.attributes.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
}
