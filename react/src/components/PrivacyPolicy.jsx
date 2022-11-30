import { Box, Typography } from "@mui/material";

export default function PrivacyPolicy() {
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
      <img
        src="../../assets/workpicture2.png"
        alt="Team"
        style={{ width: "652px", height: "410px", borderRadius: "90px" }}
      />
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
          Privacy Policy
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ textAlign: "center", marginBottom: "78px" }}
          gutterBottom
        >
          Your information is used to support you in your career.
          <br></br>
          Nothing more.Nothing less.
        </Typography>
        <Typography
          variant="paragrapgh"
          style={{ textAlign: "center", marginBottom: "78px" }}
          gutterBottom
        >
          Our purpose is to help people live more fulfilling and productive
          working lives and help organisations succeed. We believe it’s
          important that you understand how your information is collected, used,
          protected and how you can manage it when you use JOB Advisor.
        </Typography>
      </div>
    </Box>
  );
}
