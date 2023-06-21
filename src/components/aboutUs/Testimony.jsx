import { Box, HStack, Image, Text, VStack, useMediaQuery } from "@chakra-ui/react";
import TestimonyPicture from "../../assets/testimony_picture.svg";

export const Testimony = () => {
  const [mobileDesign] = useMediaQuery("(max-width: 425px)");

  return (
    <>
      {mobileDesign ? (
        <Box>
          <Image src={TestimonyPicture} />
          <Text
            sx={{
              textAlign: "left",
              fontSize: 16,
              color: "primary",
              pt: "2rem",
              pb: "1rem",
              px: "2rem",
            }}
          >
            “Our collaboration with Bluehouse is one of a kind. Together we are
            working on the same mission and because of that the collaboration is
            a perfect match. I rate our collaboration 10/10!”
          </Text>
          <Text
            sx={{
              textAlign: "left",
              fontSize: 16,
              fontWeight: "bold",
              color: "primary",
              pt: "1rem",
              px: "2rem",
            }}
          >
            THIJS BALEMANS
          </Text>
          <Text
            sx={{
              textAlign: "left",
              fontSize: 16,
              color: "primary",
              pb: "3rem",
              px: "2rem",
            }}
          >
            Founder of Vann Bottle
          </Text>
        </Box>
      ) : (
        <HStack sx={{  
          px: "8rem",
        }}>
          <VStack sx={{
              alignItems: "left"}}>
          <Text
            sx={{
              textAlign: "left",
              fontSize: 20,
              color: "primary",
              pt: "2rem",
              pb: "1rem",
              px: "2rem",
            }}
          >
            “Our collaboration with Bluehouse is one of a kind. Together we are
            working on the same mission and because of that the collaboration is
            a perfect match. I rate our collaboration 10/10!”
          </Text>
          <Text
            sx={{
              textAlign: "left",
              fontSize: 16,
              fontWeight: "bold",
              color: "primary",
              pt: "1rem",
              px: "2rem",
            }}
          >
            THIJS BALEMANS
          </Text>
          <Text
            sx={{
              textAlign: "left",
              fontSize: 16,
              color: "primary",
              pb: "3rem",
              px: "2rem",
            }}
          >
            Founder of Vann Bottle
          </Text>
          </VStack>
          <Image src={TestimonyPicture} sx={{
          w: "26rem",
          p: "2rem",
        }}/>
        </HStack>
      )}
    </>
  );
};
