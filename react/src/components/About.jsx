import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

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
        <Typography
          variant="h2"
          style={{
            textAlign: "center",
            fontWeight: "700px",
          }}
          gutterBottom
        >
          JobAdvisor
        </Typography>
        <Typography
          variant="paragraph"
          style={{ textAlign: "center", marginBottom: "78px" }}
          gutterBottom
        >
          We are here to help the motivated students and job seekers to
          kickstart their career and also search their dream job without
          registration.
        </Typography>
        <div>
          <Card sx={{ maxWidth: 320 }}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="center"
              >
                <h5>OUR MISSION</h5>
              </Typography>
              <Typography variant="paragraph" justify="" color="text.primary">
                At Job Advisor, We help people to get jobs. We believe financial
                independence can help people live up to their potential and get
                back control of their own lives .
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              maxWidth: 320,
              marginLeft: 50,
              marginTop: -28,
              marginBottom: 2,
            }}
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="center"
              >
                <h5>OUR VISION</h5>
              </Typography>
              <Typography variant="paragraph" justify="" color="text.primary">
                Create economic opportunity for every member of the global
                workforce. our users can find all the information they need with
                one or two clicks
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>

      <img
        src="../../assets/workpicture.png"
        alt="Team"
        style={{ width: "652px", height: "410px", borderRadius: "90px" }}
      />
    </Box>
  );
}
