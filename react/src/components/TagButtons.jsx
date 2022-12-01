import { Button, Stack } from "@mui/material";

import slider from "../api/slider.json";
export const TagButtons = ({ onClick, selected }) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      flexWrap="wrap"
      margin="20px"
    >
      {slider.map(
        (item) =>
          selected !== item.collection && (
            <Button
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
    </Stack>
  );
};
