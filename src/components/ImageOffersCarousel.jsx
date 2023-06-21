import { Image, Flex, useBreakpointValue, Box } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BigCategory1 from "../assets/BigCategory1.png";
import BigCategory2 from "../assets/BigCategory2.png";

export const ImageOffersCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const isMobile = useBreakpointValue({ base: true, md: false });

  const images = [BigCategory1, BigCategory2];

  return (
    <>
      {isMobile ? (
        <Box w="100%">
          <Carousel responsive={responsive} showDots={true}>
            {images.map((image, i) => (
              <Image key={i} src={image} w="100%" objectFit="cover" />
            ))}
          </Carousel>
        </Box>
      ) : (
        <Flex justify="center" mt={10} mb={10}>
          <Image src={BigCategory1} boxSize="500px" mr={2} />
          <Image src={BigCategory2} boxSize="500px" ml={2} />
        </Flex>
      )}
    </>
  );
};
