import Footer from "../components/Footer";
import BasicTabs from "../components/Tabs";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CompanyOverview({ company }) {
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
          width={170}
          height={150}
          onClick={() => navigate("/")}
        />
      </Typography>
      <Box
        sx={{
          flexDirection: "column",
          display: "flex",
          alignItems: "stretch",
          mx: 10,
          mt: 3,
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
        <BasicTabs company={company}></BasicTabs>
      </Box>
      <Footer></Footer>
    </Box>
  );
}
