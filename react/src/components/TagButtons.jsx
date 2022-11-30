import { Button, Grid } from "@mui/material";
//import { Box } from "@mui/system";

import slider from "../api/slider.json";
export const TagButtons = ({ onClick, selected }) => {
  return (
    // <Stack
    //   direction="row"
    //   justifyContent="center"
    //   alignItems="center"
    //   flexWrap="wrap"
    //   margin="20px"
    // >
    <Grid container sx={{ justifyContent: "center" }}>
      {slider.map(
        (item) =>
          selected !== item.collection && (
            <Button
              sx={{ m: 2 }}
              variant="outlined"
              key={item.name}
              onClick={() => {
                onClick(item.collection);
              }}
            >
              {item.title}
            </Button>
          )
      )}
    </Grid>
    // </Stack>
  );
};
