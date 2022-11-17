import { Paper, Button } from "@mui/material";
import { height } from "@mui/system";

export default function Item({ item }) {
  return (
    <Paper>
      <img
        src={item.image}
        alt={item.title}
        style={{ width: "25%", height: "35vh", display: "flex" }}
      ></img>

      <Button display="flex" justifyContent="center" alignitems="center">
        {item.title}
      </Button>
    </Paper>
  );
}
