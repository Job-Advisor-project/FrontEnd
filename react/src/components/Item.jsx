import { Paper, Button } from "@mui/material";

export default function Item({ item, onInput }) {
  return (
    <Paper
      onClick={() => {
        onInput(item.collection);
      }}
    >
      <img
        src={item.image}
        alt={item.title}
        style={{ width: "25%", height: "35vh", display: "flex" }}
      ></img>

      <Button display="flex">{item.title}</Button>
    </Paper>
  );
}
