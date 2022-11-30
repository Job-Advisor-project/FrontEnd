import { Box, Typography } from "@mui/material";

export default function Terms() {
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
          Site Terms
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ textAlign: "center", marginBottom: "78px" }}
          gutterBottom
        >
          These Terms of Use were updated effective 20th November 2022.
          Understanding your rights and responsibilities as a CareerOne user
        </Typography>
        <Typography
          variant="subtitle2"
          style={{ textAlign: "center", marginBottom: "78px" }}
          gutterBottom
        >
          Understanding your rights and responsibilities as a CareerOne user
        </Typography>
        <Typography
          variant="paragrapgh"
          style={{ textAlign: "center", marginBottom: "78px" }}
          gutterBottom
        >
          This page states the Terms of Use (“Terms”) under which You (“You”)
          may use the JobAdvisor Sites and the JobAdvisor Services (each as
          defined below)
        </Typography>
        <Typography
          variant="paragrapgh"
          style={{ textAlign: "center", marginBottom: "78px" }}
          gutterBottom
        >
          These Terms include the JobAdvisor Privacy Statement, which is
          incorporated into these Terms by reference. Please read these Terms
          carefully. If You do not accept the Terms stated here, do not use the
          JobAdvisor Sites and the JobAdvisor Services. By using the JobAdvisor
          Sites and/or JobAdvisor Services, You agree to be bound by these
          Terms, including the CareerOne Privacy Statement. JobAdvisor may
          revise these Terms at any time by posting an updated version to this
          Web page.who violate these Terms may have their access and use of the
          JobAdvisor Sites suspended or terminated, at JobAdvisor discretion.
          <br></br>
          <ul>
            <li>Eligibility.</li>
            If You are under the age of 18 or the age of majority as that is
            defined in Your jurisdiction, You must use any JobAdvisor Site under
            the supervision of a parent, legal guardian, or other responsible
            adult.
            <li>Use ofJobAdvisor Content.</li>
            JobAdvisor authorises You to view and access a single copy of the
            content available on or from the CareerOne Sites solely for Your
            personal use.
          </ul>
        </Typography>
      </div>
    </Box>
  );
}
