import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    //name of the component
    MuiButton: {
      styleOverrides: {
        //name of the slot
        contained: {
          //some CSS
        },
      },
    },
  },
  // palette: {
  //   primary: {
  //     main: "#bada55",
  //   },
  // },
  typography: {
    fontFamily: ["Open Sans", "sans-serif", "Poppins", "sans-serif"].join(","),
    h3: { fontWeight: 800, fontSize: 50, fontFamily: "Poppins" },
    h4: { fontWeight: 700, fontSize: 35 },
    h5: { fontWeight: 600, fontSize: 25 },
    body1: { fontWeight: 200, fontSize: 18 },
  },
});
