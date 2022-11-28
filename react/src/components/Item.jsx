import { Paper, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Item({ item, onSelect }) {
  const navigate = useNavigate();
  return (
    <Paper
      sx={{
        margin: "0px",
        backgroundImage: `url('${process.env.PUBLIC_URL}/assets/background.png')`,
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "350px",
        height: "350px",
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
