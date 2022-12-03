import { Box, Grid, Typography } from "@mui/material";
//import Card from "@mui/material/Card";
//import CardContent from "@mui/material/CardContent";

export default function About() {
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignSelf: "center",
          marginLeft: "3rem",
        }}
      >
        <Grid item xs={6} md={4} sx={{ my: 8, mx: 2 }}>
          <Typography
            sx={{
              ml: 4,
              color: "#66cdaa",
              marginTop: "50px",
            }}
            variant="h2"
            style={{
              textAlign: "center",
              fontWeight: "700px",
            }}
            gutterBottom
          >
            About JobAdvisor
          </Typography>
        </Grid>
        <Grid item md={5} lg={6} sx={{ my: 28, mx: 2, marginBottom: "28px" }}>
          <Typography
            variant="h5"
            style={{ textAlign: "left", marginTop: "-5px" }}
            gutterBottom
          >
            We are here to help the motivated students and job seekers to
            kickstart their career and also search their dream job without
            registration.
          </Typography>
        </Grid>
        <div>
          <Grid item md={5} lg={6} sx={{ my: 5, mx: 3 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              marginRight={"80px"}
            >
              MISSION
            </Typography>
          </Grid>
          <Grid item md={5} lg={6} sx={{ my: 5, mx: 3 }}>
            <Typography variant="paragraph" justify="" color="text.primary">
              At Job Advisor, We help people to get jobs. We believe financial
              independence can help people live up to their potential and get
              back control of their own lives .
            </Typography>
          </Grid>

          <Grid item md={5} lg={6} sx={{ my: 5, mx: 3 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              marginRight={"80px"}
            >
              VISION
            </Typography>
            <Typography variant="paragraph" justify="" color="text.primary">
              Create economic opportunity for every member of the global
              workforce. our users can find all the information they need with
              one or two clicks
            </Typography>
          </Grid>
        </div>
      </div>
      <Grid item md={5} lg={12}>
        <img
          src="../../assets/workpicture1.png"
          alt="Team"
          style={{ width: "700px", height: "410px", borderRadius: "90px" }}
        />
      </Grid>
    </Box>
  );
}
