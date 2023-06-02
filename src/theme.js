import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#254787",
    secondary: "#D4D9FF",
    fontHover: "#FFFFFF",
    addToCart: "#FDB32B",
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
  },
});

export default theme;
