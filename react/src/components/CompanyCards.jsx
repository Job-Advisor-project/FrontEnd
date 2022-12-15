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
  const responsive = {
    flex: { xs: "100%", sm: "calc(50% - 20px)", md: "calc(33% - 20px)" },
    mx: { xs: "auto", sm: "auto", md: 5, lg: 10 },
    mt: { xs: 0.5, sm: 0.5, md: 1, lg: 1 },
  };
  return (
    <Box
      sx={{
        flexDirection: "column",
        flexWrap: "wrap",
        justifyItems: "center",
        display: "flex",
        borderRadius: 2,
      }}
    >
      {companies &&
        companies.map((item) => (
          <Card
            key={item.attributes.company.data.attributes.name}
            sx={responsive}
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
