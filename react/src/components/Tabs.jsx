import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import {
  Card,
  CardHeader,
  CardActions,
  Avatar,
  Stack,
  Button,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import AddIcon from "@mui/icons-material/Add";
import { settings } from "../config/config.dev";

function TabPanel(props, company) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ company }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    /* Flexbox */
    <Box
      sx={{
        flexDirection: "column",
        display: "flex",
        alignItems: "stretch",
        mx: 10,
        mt: 5,
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
      {company.map((c) => (
        <Card sx={{ mt: 0.1, px: 2, maxWidth: 10100 }}>
          <CardHeader
            // sx={{ bgcolor: "#64d2ae" }}
            avatar={
              <Avatar
                variant="square"
                src={`${settings.BACKEND_URL}${c.attributes.image.data.attributes.formats.thumbnail.url}`}
                sx={{ width: 100, height: 100 }}
              ></Avatar>
            }
            action={
              <Stack spacing={3} direction="row" sx={{ mt: 3 }}>
                <Button
                  sx={{ bgcolor: "#5A85C2" }}
                  variant="contained"
                  startIcon={<ArrowOutwardIcon />}
                >
                  Visit Website
                </Button>
                <Button
                  sx={{ bgcolor: "#5A85C2" }}
                  variant="contained"
                  endIcon={<AddIcon />}
                >
                  Review
                </Button>
              </Stack>
            }
          />
          <CardActions>
            {/* tabs */}
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  borderBottom: 1,
                  borderTop: 1,
                  borderColor: "divider",
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  // sx={{ display: "flex", textAlign: "center" }}
                >
                  <Tab label="About" {...a11yProps(0)} />
                  {c.attributes.benefits_compensations.data.map(
                    (w) =>
                      w.attributes.condition && (
                        <Tab
                          label="Benefits & Compensation"
                          {...a11yProps(1)}
                        />
                      )
                  )}
                  {c.attributes.social_responsibilities.data.map(
                    (w) =>
                      w.attributes.description && (
                        <Tab label="Sustainability" {...a11yProps(2)} />
                      )
                  )}
                  {/* <Tab label="Sustainability" {...a11yProps(2)} /> */}

                  <Tab label="Work/Life Balance" {...a11yProps(3)} />
                  <Tab label="Diversity & Inclusion" {...a11yProps(4)} />
                  <Tab label="Review" {...a11yProps(5)} />
                </Tabs>
              </Box>
              <TabPanel
                sx={{ display: "flex", flexDirection: "column" }}
                value={value}
                index={0}
              >
                <Typography variant="h5" gutterBottom>
                  {c.attributes.name} overview
                </Typography>
                <Typography subtitle1="h5" gutterBottom>
                  {c.attributes.industry}
                </Typography>
                <Typography variant="p" gutterBottom>
                  {c.attributes.description}
                </Typography>
              </TabPanel>
              <TabPanel value={value} index={1}>
                {c.attributes.benefits_compensations.data.map(
                  (w) => w.attributes.condition
                )}
              </TabPanel>
              <TabPanel value={value} index={2}></TabPanel>
              <TabPanel value={value} index={3}>
                {c.attributes.work_life_balances.data.map(
                  (w) => w.attributes.workingHours
                )}
              </TabPanel>
              <TabPanel value={value} index={4}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse.
              </TabPanel>
              <TabPanel value={value} index={5}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse.
              </TabPanel>
            </Box>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
