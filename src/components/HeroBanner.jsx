import { Box, Image, useMediaQuery } from "@chakra-ui/react";
import HeroBannerImage from "../assets/hero_banner.png";
import HeroBannerMovil from "../assets/hero_bannermovil.png";

export const HeroBanner = () => {
  const [isSmallerScreen] = useMediaQuery("(max-width: 800px)");

  return (
    <Box w="100%" px="2">
      {isSmallerScreen ? (
        <Image
          w="100%" // Adjust the size for smaller screens
          src={HeroBannerMovil}
          alt="Hero Banner"
          mx="auto"
          py="2"
        />
      ) : (
        <Image w="95%" src={HeroBannerImage} alt="Hero Banner" mx="auto" />
      )}
    </Box>
  );
};
