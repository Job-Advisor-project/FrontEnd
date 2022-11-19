import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

export default function Cards({ companies }) {
  return (
    <Box
      sx={{
        flexDirection: "column",
        display: "flex",
        alignItems: "stretch",
        m: 5,
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "#fff",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
      }}
    >
      {companies &&
        companies.map((item) => (
          <Card
            key={item.attributes.company.data.attributes.name}
            sx={{ mt: 0.1, px: 3, maxWidth: 10100 }}
          >
            <CardHeader
              avatar={
                <Avatar
                  alt="logo"
                  // src={`.${item.attributes.company.data.attributes.image.data.attributes.formats.small.url}`}
                  variant="square"
                ></Avatar>
              }
              title={
                <Typography variant="h6">
                  {item.attributes.company.data.attributes.name}
                </Typography>
              }
              subheader="Business consulting and services"
            />
            <CardContent key={item.attributes.company.data.attributes.name}>
              <Typography
                key={item.attributes.company.data.attributes.name}
                gutterBottom
                variant="h7"
                component="div"
              >
                Description
              </Typography>
              <Typography
                key={item.attributes.company.data.attributes.name}
                variant="body2"
                color="text.secondary"
              >
                {item.attributes.company.data.attributes.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Read More</Button>
            </CardActions>
          </Card>
        ))}
    </Box>
  );
}

//------------------------Tryout W/o Strapi---------------------------------

// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import CardHeader from "@mui/material/CardHeader";
// import Avatar from "@mui/material/Avatar";
// import Box from "@mui/material/Box";

// export default function MediaCard() {
//   return (
//     <Box
//       sx={{
//         flexDirection: "column",
//         display: "flex",
//         alignItems: "stretch",
//         m: 5,
//         bgcolor: (theme) =>
//           theme.palette.mode === "dark" ? "#101010" : "#fff",
//         color: (theme) =>
//           theme.palette.mode === "dark" ? "grey.300" : "grey.800",
//         border: "1px solid",
//         borderColor: (theme) =>
//           theme.palette.mode === "dark" ? "grey.800" : "grey.300",
//         borderRadius: 2,
//         fontSize: "0.875rem",
//         fontWeight: "700",
//       }}
//     >
//       <Card sx={{ px: 3, maxWidth: 10100 }}>
//         <CardHeader
//           avatar={
//             <Avatar
//               alt="logo"
//               src="assets/amazon.jpg"
//               variant="square"
//             ></Avatar>
//           }
//           title={<Typography variant="h6">Amazon</Typography>}
//           subheader="Business consulting and services"
//           subheader2="Business consulting and services"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h7" component="div">
//             Description
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Lorem ipsum .
//           </Typography>
//         </CardContent>
//         <CardActions>
//           <Button size="small">Read More</Button>
//         </CardActions>
//       </Card>
//     </Box>
//   );
// }
