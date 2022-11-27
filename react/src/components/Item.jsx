import { Paper, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Item({ item, onSelect }) {
  const navigate = useNavigate();
  return (
    <Paper
      //itemClass="item-container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "400px",
        height: "300px",
      }}
      onClick={() => {
        onSelect(item.collection);
        navigate("/searchResult");
      }}
    >
      <img
        src={item.image}
        alt={item.title}
        style={{ maxWidth: "80%", alignSelf: "center" }}
      ></img>

      <Button>{item.title}</Button>
    </Paper>
  );
}
