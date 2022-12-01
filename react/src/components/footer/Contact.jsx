import { Box, Grid, Typography, List, ListItemText } from "@mui/material";
import { Link } from "@mui/material";

export default function Contact() {
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
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid item md={5} lg={6} sx={{ my: 5, mx: 3 }}>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "sans-serif",
              typography: {
                md: "h3",
                sm: "h4",
                xs: "h5",
              },
            }}
          >
            Contact Us
          </Typography>
          <List>
            <ListItemText>
              <Typography
                lineHeight={2}
                sx={{
                  mt: 3,
                  textAlign: "center",
                }}
              >
                Email enquires:
                <Link href="mailto:jobadvisor2022@gmail.com">
                  jobadvisor2022@gmail.com
                </Link>
              </Typography>
            </ListItemText>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
