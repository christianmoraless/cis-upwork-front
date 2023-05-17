import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3f51b5",
      light: "rgb(71, 145, 219)",
      dark: "rgb(17, 82, 147)",
      contrastText: "#fff",
    },
    secondary: {
      main: "#f50057",
      light: "rgb(247, 51, 120)",
      dark: "rgb(171, 0, 60)",
      contrastText: "#fff",
    },
    error: {
      main: "#f44336",
      light: "rgb(246, 104, 94)",
      dark: "rgb(170, 46, 37)",
      contrastText: "#fff",
    },
    warning: {
      main: "#ff9800",
      light: "rgb(255, 177, 105)",
      dark: "rgb(178, 96, 0)",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    info: {
      main: "#2196f3",
      light: "rgb(100, 181, 246)",
      dark: "rgb(25, 105, 176)",
      contrastText: "#fff",
    },
  },
});

export default theme;
