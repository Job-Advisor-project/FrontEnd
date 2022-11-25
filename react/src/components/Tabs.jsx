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
function TabPanel(props) {
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

export default function BasicTabs() {
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
      {/* card*/}
      <Card sx={{ mt: 0.1, px: 2, maxWidth: 10100 }}>
        <CardHeader
          avatar={
            <Avatar
              variant="square"
              sx={{ mt: 1, width: 56, height: 56 }}
            ></Avatar>
          }
          action={
            <Stack spacing={3} direction="row" sx={{ mt: 3 }}>
              <Button variant="contained" startIcon={<ArrowOutwardIcon />}>
                Visit Website
              </Button>
              <Button variant="contained" endIcon={<AddIcon />}>
                Review
              </Button>
            </Stack>
          }
        />
        <CardActions>
          {/* tabs */}
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderTop: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="About" {...a11yProps(0)} />
                <Tab label="Benefits & Compensation" {...a11yProps(1)} />
                <Tab label="Sustainability" {...a11yProps(2)} />
                <Tab label="Work/Life Balance" {...a11yProps(3)} />
                <Tab label="Review" {...a11yProps(4)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </TabPanel>
            <TabPanel value={value} index={1}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </TabPanel>
            <TabPanel value={value} index={2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </TabPanel>
            <TabPanel value={value} index={3}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </TabPanel>
            <TabPanel value={value} index={4}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse.
            </TabPanel>
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
}
