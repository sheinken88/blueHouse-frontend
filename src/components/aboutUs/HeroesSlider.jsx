import { Box, Text } from "@chakra-ui/react";
import "react-multi-carousel/lib/styles.css";
import Marquee from "react-fast-marquee";

export const HeroesSlider = () => {
  return (
    <Box>
      <Box
        sx={{ bg: "primary", mb: "1rem", mx: "auto", w: "100%", py: "1px" }}
      />
      <Marquee autoFill={true}>
        <Text sx={{ fontSize: 18, fontWeight: "bold", color: "primary" }}>
          YOU AND US ARE THE HEROES FOR THE FUTURE GENERATIONS! &nbsp; - &nbsp;
        </Text>
        <Text
          sx={{ fontSize: 18, fontWeight: "bold", color: "primary" }}
        ></Text>
      </Marquee>
      <Box
        sx={{ bg: "primary", mt: "1rem", mx: "auto", w: "100%", py: "1px" }}
      />
    </Box>
  );
};
