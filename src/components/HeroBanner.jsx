import { Box, Image, useMediaQuery } from "@chakra-ui/react";

export const HeroBanner = () => {
  const [isSmallerScreen] = useMediaQuery("(max-width: 800px)");

  return (
    <Box w="100%" px="2">
      {isSmallerScreen ? (
        <Image
          w="100%" // Adjust the size for smaller screens
          src="src/assets/hero bannermovil.png"
          alt="Hero_Banner.jpg"
          mx="auto"
          py="2"
        />
      ) : (
        <Image
          w="80%"
          src="src/assets/hero_banner.png"
          alt="Hero_Banner.jpg"
          mx="auto"
        />
      )}
    </Box>
  );
};
