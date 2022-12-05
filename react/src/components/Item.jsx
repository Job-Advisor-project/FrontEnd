// import { Paper, Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// export default function Item({ item, onSelect }) {
//   const navigate = useNavigate();
//   return (
//     <Paper
//       sx={{
//         margin: "0px",
//         backgroundImage: `url('${process.env.PUBLIC_URL}/assets/background.png')`,
//       }}
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         width: "350px",
//         height: "350px",
//       }}
//       onClick={() => {
//         onSelect(item.collection);
//         navigate("/searchResult");
//       }}
//     >
//       <img
//         src={item.image}
//         alt={item.title}
//         style={{ maxWidth: "80%", alignSelf: "center" }}
//       ></img>

//       <Button>{item.title}</Button>
//     </Paper>
//   );
// }
//===================tryout=========================

import { Box, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Item({ item, onSelect }) {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        flexDirection: "row",
        display: "flex",
        //flexDirection: "column",
        justifyContent: "center",
        width: "350px",
        height: "350px",
        cursor: "pointer",
      }}
      onClick={() => {
        onSelect(item.collection);
        navigate("/searchResult");
      }}
    >
      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        <Grid item md={6} lg={12}>
          <Typography sx={{ ml: 4 }}>
            <img
              src={item.image}
              alt={item.title}
              style={{
                maxWidth: "100%",
                height: "auto",
                alignItems: "center",
              }}
            />
          </Typography>
        </Grid>
        <Button>{item.title}</Button>
      </Grid>
    </Box>
  );
}
