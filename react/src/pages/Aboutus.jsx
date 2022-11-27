import { Box, Typography } from "@mui/material";

export default function Aboutus() {
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
          variant="h3"
          style={{ textAlign: "center", fontWeight: "700px" }}
          gutterBottom
        >
          About JobAdvisor
        </Typography>
        <Typography
          variant="paragraph"
          style={{ textAlign: "center", marginBottom: "78px" }}
          gutterBottom
        >
          We help the motivated students and job seekers to help them to
          kickstart their career and also search their dream job without
          registration.
        </Typography>
      </div>
      <img
        src="../../assets/design/workpicture.png"
        alt="Team"
        style={{ width: "652px", height: "410px" }}
      />
    </Box>
  );
}
