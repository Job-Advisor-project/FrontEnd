import { Button, Grid } from "@mui/material";
//import { Box } from "@mui/system";

import slider from "../api/slider.json";
export const TagButtons = ({ onClick, selected }) => {
  const responsive = {
    m: { xs: 0.5, sm: 1, md: 2, lg: 2 },
  };
  return (
    <Grid container sx={{ justifyContent: "center" }}>
      {slider.map((item) =>
        selected !== item.collection ? (
          <Button
            sx={responsive}
            variant="outlined"
            cursor="pointer"
            key={item.name}
            onClick={() => {
              onClick(item.collection);
            }}
          >
            {item.title}
          </Button>
        ) : (
          <Button
            sx={responsive}
            style={{ color: "#EC615B", borderColor: "#EC615B" }}
            variant="outlined"
            disabled
            key={item.name}
          >
            {item.title}
          </Button>
        )
      )}
    </Grid>
    // </Stack>
  );
};
