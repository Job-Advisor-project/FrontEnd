import { Paper, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Item({ item, onSelect }) {
  const navigate = useNavigate();
  return (
    <Paper
      //itemClass="item-container"
      width="10%"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      onClick={() => {
        onSelect(item.collection);
        navigate("/searchResult");
      }}
    >
      <img
        src={item.image}
        alt={item.title}
        style={{ width: "80%", alignSelf: "stretch" }}
      ></img>

      <Button display="flex">{item.title}</Button>
    </Paper>
  );
}
