import { Box, Typography } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function CompanycardsByVacancy({ companies }) {
  return (
    <Box
      sx={{
        flexDirection: "column",
        display: "flex",
        alignItems: "stretch",
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
      {companies &&
        companies.map((comp) => (
          <Card
            key={comp.attributes.title}
            sx={{
              mt: 0.1,
              px: 3,
              backgroundImage:
                "url(http://localhost:3000/assets/background.png)",
              display: "flex",
              maxWidth: 2010,
            }}
          >
            <Typography>
              <CardContent key={comp.attributes.title}>
                <Typography
                  key={comp.attributes.title}
                  gutterBottom
                  variant="h7"
                  component="div"
                >
                  Job Title
                </Typography>
                <Typography
                  key={comp.attributes.title}
                  variant="body2"
                  color="text.secondary"
                >
                  {comp.attributes.title}
                </Typography>
              </CardContent>
              <CardContent key={comp.attributes.title}>
                <Typography
                  key={comp.attributes.title}
                  gutterBottom
                  variant="h7"
                  component="div"
                >
                  Description
                </Typography>
                <Typography
                  key={comp.attributes.title}
                  variant="body2"
                  color="text.secondary"
                >
                  {comp.attributes.description}
                </Typography>
              </CardContent>
              <CardContent key={comp.attributes.title}>
                <Typography
                  key={comp.attributes.title}
                  gutterBottom
                  variant="h7"
                  component="div"
                >
                  Package
                </Typography>
                <Typography
                  key={comp.attributes.title}
                  variant="body2"
                  color="text.secondary"
                >
                  {comp.attributes.package}
                </Typography>
              </CardContent>
              <CardContent key={comp.attributes.title}>
                <Typography
                  key={comp.attributes.title}
                  gutterBottom
                  variant="h7"
                  component="div"
                >
                  ContactEmail
                </Typography>
                <Typography
                  key={comp.attributes.title}
                  variant="body2"
                  color="text.secondary"
                >
                  {comp.attributes.contactEmail}
                </Typography>
              </CardContent>
              <CardContent key={comp.attributes.title}>
                <Typography
                  key={comp.attributes.title}
                  gutterBottom
                  variant="h7"
                  component="div"
                >
                  Date of Apply
                </Typography>
                <Typography
                  key={comp.attributes.title}
                  variant="body2"
                  color="text.secondary"
                >
                  {comp.attributes.data}
                </Typography>
              </CardContent>
            </Typography>
          </Card>
        ))}
    </Box>
  ); //Company Card component might be added instead of <Typography>
}
