import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function Teamjob() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "right",
        alignItems: "center",
        margin: "0px",
        backgroundImage: `url('${process.env.PUBLIC_URL}/assets/background.png')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "auto",
        maxWidth: "100%",
      }}
    >
      <Typography
        sx={{
          display: "flex",
          flexDirection: "column",
          alignSelf: "center",
          marginLeft: "3rem",
        }}
        variant="h3"
        style={{
          textAlign: "center",
          fontWeight: "600px",
          color: "Orange",
        }}
        gutterBottom
      >
        Our Team
      </Typography>
      <div>
        <Card sx={{ maxWidth: 320, marginRight: 30 }}>
          <CardContent>
            <img
              src="../../assets/fenny.png"
              alt="Team"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "90px",
              }}
            />
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="teal"
              align="center"
            >
              <h5>Fenny</h5>
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              align="center"
            >
              <h6>UI/UX Designer</h6>
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card sx={{ maxWidth: 320, marginRight: 30 }}>
          <CardContent>
            <img
              src="../../assets/maria.png"
              alt="Team"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "90px",
              }}
            />
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              align="center"
              color="teal"
            >
              <h5>Maria</h5>
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              align="center"
            >
              <h6>Project Manager</h6>
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card sx={{ maxWidth: 320, marginRight: 30 }}>
          <CardContent>
            <img
              src="../../assets/minju.png"
              alt="Team"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "90px",
              }}
            />
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              align="center"
              color="teal"
            >
              <h5>Minju</h5>
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              align="center"
            >
              <h6>Jr Developer</h6>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </Box>
  );
}
