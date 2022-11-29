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
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
