import { Paper, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Item({ item, onSelect }) {
  const navigate = useNavigate();
  return (
    <Paper
      width="10%"
      onClick={() => {
        onSelect(item.collection);
        navigate("/searchResult");
      }}
    >
      <img
        src={item.image}
        alt={item.title}
        style={{ width: "55%", display: "flex" }}
      ></img>

      <Button display="flex">{item.title}</Button>
    </Paper>
  );
}
