import Footer from "../components/footer/Footer";
import BasicTabs from "../components/Tabs";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CompanyOverview({ company, setCompanyId }) {
  const responsive = {
    flexDirection: "column",
    display: "flex",
    alignItems: "stretch",
    mx: { xs: 0.1, sm: 0.1, md: 5, lg: 10 },
    mt: 3,
  };
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        alignItems: "stretch",
        backgroundImage: `url('${process.env.PUBLIC_URL}/assets/background.png')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "auto",
        maxWidth: "100%",
        fontSize: "0.875rem",
        fontWeight: "700",
      }}
    >
      <Typography sx={{ ml: 4 }}>
        <img
          src="../assets/ja-logo.png"
          alt="jobadvisorlogo"
          style={{ cursor: "pointer" }}
          width={170}
          height={150}
          onClick={() => navigate("/")}
        />
      </Typography>
      <Box sx={responsive}>
        <BasicTabs company={company} setCompanyId={setCompanyId}></BasicTabs>
      </Box>
      <Footer></Footer>
    </Box>
  );
}
