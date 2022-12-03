import { Grid, Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function Teamjob() {
  return (
    <Box
      sx={{
        display: "flex",
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
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid item md={5} lg={6} sx={{ my: 5, mx: 3 }}>
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
        </Grid>
        <div>
          <Grid>
            <Card sx={{ maxWidth: 300, marginRight: 70 }}>
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
          </Grid>
        </div>
        <div>
          <Grid>
            <Card sx={{ maxWidth: 250, marginLeft: -50 }}>
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
          </Grid>
        </div>
        <div>
          <Grid>
            <Card sx={{ maxWidth: 300, marginLeft: -1 }}>
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
          </Grid>
        </div>
      </Grid>
    </Box>
  );
}
