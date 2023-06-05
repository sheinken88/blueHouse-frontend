import { Box, Image, Text } from "@chakra-ui/react";
import AboutIcons from "../assets/about_component_icons.svg";

export const About = () => {
  return (
    <Box sx={{ bg: "#D4D9FF", color: "primary", py: 7, px: 8 }}>
      <Box sx={{ pb: 4, textAlign: "center" }}>
        <Text sx={{ fontSize: 34, fontWeight: "semibold" }}>What is</Text>
        <Text sx={{ fontSize: 34, fontWeight: "semibold" }}>Bluehouse?</Text>
      </Box>
      <Text sx={{ fontSize: 16, fontWeight: "semibold" }}>
        Support Ethical Sellers
      </Text>
      <Text sx={{ my: 3, fontSize: 12 }}>
        Products play an important part in our life. Supporting eco brands means
        taking action against climate change and preserving resources for future
        generations.
      </Text>
      <Text sx={{ mb: 8, fontSize: 12 }}>
        Shop from multiple vendors and find unique products they can't find
        anywhere else.
      </Text>
      <Text sx={{ fontSize: 16, fontWeight: "semibold" }}>
        All products are
      </Text>
      <Image src={AboutIcons} sx={{ my: 3 }} />
      <Text sx={{ fontSize: 16, fontWeight: "semibold", pt: 6 }}>
        Shop with a purpose
      </Text>
      <Text sx={{ my: 3, fontSize: 12 }}>
        PENDIENTE TEXTO DEFINITIVO EN FIGMA.
      </Text>
    </Box>
  );
};
