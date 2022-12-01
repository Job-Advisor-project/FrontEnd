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
    fontFamily: ["Poppins", "sans-serif", "Open Sans"].join(","),
    h3: { fontFamily: "Open Sans", fontWeight: 800, fontSize: 50 },
    h4: { fontFamily: "Open Sans", fontWeight: 600, fontSize: 35 },
    h5: { fontFamily: "POpen Sans", fontWeight: 600, fontSize: 25 },
    body1: { fontFamily: "Poppins", fontWeight: 400 },
  },
});
