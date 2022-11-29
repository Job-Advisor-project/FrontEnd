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
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  h3: { fontWeight: 600 },
});
