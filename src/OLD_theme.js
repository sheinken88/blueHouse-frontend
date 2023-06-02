import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      // light: "",
      main: "#254787",
      // dark: ""
    },
    secondary: {
      main: "#D4D9FF",
    },
    fontHover: {
      main: "#FFFFFF"
    },
    addToCart: {
      main: "#FDB32B"
    }       
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(",")
  },
});

export default theme;