import { Button, Stack } from "@mui/material";
import slider from "../api/slider.json";
export const TagButtons = ({ onClick }) => {
  return (
    <Stack direction="row" spacing={2}>
      {slider.map((item) => (
        <Button
          variant="outlined"
          key={item.name}
          onClick={() => onClick(item.collection)}
        >
          {item.title}
        </Button>
      ))}
    </Stack>
  );
};
