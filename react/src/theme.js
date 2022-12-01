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
    h3: { fontFamily: "Open Sans", fontWeight: 800, fontSize: 40 },
    h4: { fontFamily: "Open Sans", fontWeight: 600, fontSize: 35 },
    h5: { fontFamily: "Open Sans", fontWeight: 600, fontSize: 25 },
    h6: { fontFamily: "Poppins", fontWeight: 400, fontSize: 30 },
    subtitle1: { fontFamily: "Open Sans", fontWeight: 400, fontSize: 30 },
    subtitle2: { fontFamily: "Poppins", fontWeight: 400, fontSize: 30 },
    body1: { fontFamily: "Poppins", fontWeight: 400 },
  },
});
