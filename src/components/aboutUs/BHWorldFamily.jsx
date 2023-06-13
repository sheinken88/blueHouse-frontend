import {
  Box,
  Button,
  Image,
  HStack,
  Text,
  useMediaQuery,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import SupportEthicalSellers from "../../assets/support_ethical_sellers.svg";
import BHWorldFamily1 from "../../assets/BH_world_family_picture1.svg";
import BHWorldFamily2 from "../../assets/BH_world_family_picture2.svg";
import BHWorldFamily3 from "../../assets/BH_world_family_picture3.svg";
import BHWorldFamily4 from "../../assets/BH_world_family_picture4.svg";

export const BHWorldFamily = () => {
  const [mobileDesign] = useMediaQuery("(max-width: 425px)");

  const responsive = {
    desktop: {
      breakpoint: { max: 9000, min: 3501 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 3500, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      {mobileDesign ? (
        <Box
          sx={{
            textAlign: "center",
            bg: "#FBF8EF",
            color: "primary",
          }}
        >
          <VStack sx={{ px: "2rem", pt: 10 }}>
            <Text sx={{ fontSize: 28, fontWeight: "bold" }}>
              Bluehouse World Family
            </Text>
            <Text sx={{ fontSize: 12 }}>
              This is our collaborative community, where we strive to foster
              positive habits and create a world of ethical choices. We are a
              network of passionate and dedicated ethical sellers, united by our
              mission to bring you closer to a wide range of ethical and
              sustainable products.
            </Text>
          </VStack>
          <Button
            sx={{
              color: "primary",
              borderWidth: "1px",
              borderRadius: "30px",
              height: "48px",
              mt: "2rem",
              px: 5,
              fontWeight: "normal",
              boxShadow: "2xl",
              spacing: "10px",
              textAlign: "center",
              bg: "#FFFFFF",
            }}
          >
            become a seller
          </Button>
        </Box>
      ) : (
        <Box
          sx={{
            textAlign: "center",
            bg: "#FBF8EF",
            color: "primary",
          }}
        >
          <HStack
            sx={{
              pl: "24rem",
              pr: "12rem",
              pt: 10,
            }}
            spacing={"10rem"}
          >
            <VStack>
              <Text sx={{ fontSize: 30, fontWeight: "bold" }}>
                Bluehouse World Family
              </Text>
              <Text sx={{ fontSize: 12 }}>
                This is our collaborative community, where we strive to foster
                positive habits and create a world of ethical choices. We are a
                network of passionate and dedicated ethical sellers, united by
                our mission to bring you closer to a wide range of ethical and
                sustainable products.
              </Text>
            </VStack>
            <Image
              src={SupportEthicalSellers}
              sx={{ height: "6rem", width: "6rem" }}
            />
          </HStack>
          <Button
            sx={{
              color: "primary",
              borderWidth: "1px",
              borderRadius: "30px",
              height: "48px",
              mt: "2rem",
              px: 5,
              fontWeight: "normal",
              boxShadow: "2xl",
              spacing: "10px",
              textAlign: "center",
              bg: "#FFFFFF",
            }}
          >
            become a seller
          </Button>
        </Box>
      )}
      {mobileDesign ? (
        <Box sx={{ pb: "2rem", bg: "#FBF8EF", pt: 10, alignItems: "center" }}>
          <Carousel
            responsive={responsive}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            keyBoardControl={true}
            infinite={false}
            focusOnSelect={true}
            swipeable={true}
            showDots={true}
          >
            <VStack
              sx={{
                pb: "10rem",
                mx: "auto",
                mb: "2rem",
                bg: "#FFFFFF",
                height: "16rem",
                width: "14rem",
                borderRadius: "30px",
                color: "primary",
                textAlign: "center",
              }}
            >
              <Image
                src={BHWorldFamily1}
                sx={{
                  height: "14rem",
                  width: "14rem",
                }}
              />
              <Text sx={{ fontWeight: "semibold", fontSize: 15 }}>ZO</Text>
              <Text sx={{ fontSize: 12 }}>NETHERLANDS</Text>
            </VStack>
            <VStack
              sx={{
                pb: "10rem",
                mx: "auto",
                mb: "2rem",
                bg: "#FFFFFF",
                height: "16rem",
                width: "14rem",
                borderRadius: "30px",
                color: "primary",
                textAlign: "center",
              }}
            >
              <Image
                src={BHWorldFamily2}
                sx={{
                  height: "14rem",
                  width: "14rem",
                }}
              />
              <Text sx={{ fontWeight: "semibold", fontSize: 15 }}>
                Vann Bottle
              </Text>
              <Text sx={{ fontSize: 12 }}>NETHERLANDS</Text>
            </VStack>
            <VStack
              sx={{
                pb: "10rem",
                mx: "auto",
                mb: "2rem",
                bg: "#FFFFFF",
                height: "16rem",
                width: "14rem",
                borderRadius: "30px",
                color: "primary",
                textAlign: "center",
              }}
            >
              <Image
                src={BHWorldFamily3}
                sx={{
                  height: "14rem",
                  width: "14rem",
                }}
              />
              <Text sx={{ fontWeight: "semibold", fontSize: 15 }}>QURC</Text>
              <Text sx={{ fontSize: 12 }}>NETHERLANDS</Text>
            </VStack>
            <VStack
              sx={{
                pb: "10rem",
                mx: "auto",
                mb: "2rem",
                bg: "#FFFFFF",
                height: "16rem",
                width: "14rem",
                borderRadius: "30px",
                color: "primary",
                textAlign: "center",
              }}
            >
              <Image
                src={BHWorldFamily4}
                sx={{
                  height: "14rem",
                  width: "14rem",
                }}
              />
              <Text sx={{ fontWeight: "semibold", fontSize: 15 }}>Hemper</Text>
              <Text sx={{ fontSize: 12 }}>SPAIN</Text>
            </VStack>
          </Carousel>
        </Box>
      ) : (
        <Wrap
          spacing="2rem"
          justify="center"
          sx={{ pb: "2rem", bg: "#FBF8EF", pt: 10 }}
        >
          <VStack
            sx={{
              pb: "4rem",
              bg: "#FFFFFF",
              height: "16rem",
              width: "14rem",
              borderRadius: "30px",
              color: "primary",
              textAlign: "center",
            }}
          >
            <Image
              src={BHWorldFamily1}
              sx={{
                height: "14rem",
                width: "14rem",
              }}
            />
            <Text sx={{ fontWeight: "semibold", fontSize: 15 }}>ZO</Text>
            <Text sx={{ fontSize: 12 }}>NETHERLANDS</Text>
          </VStack>
          <VStack
            sx={{
              pb: "4rem",
              bg: "#FFFFFF",
              height: "16rem",
              width: "14rem",
              borderRadius: "30px",
              color: "primary",
              textAlign: "center",
            }}
          >
            <Image
              src={BHWorldFamily2}
              sx={{
                height: "14rem",
                width: "14rem",
              }}
            />
            <Text sx={{ fontWeight: "semibold", fontSize: 15 }}>
              Vann Bottle
            </Text>
            <Text sx={{ fontSize: 12 }}>NETHERLANDS</Text>
          </VStack>
          <VStack
            sx={{
              pb: "4rem",
              bg: "#FFFFFF",
              height: "16rem",
              width: "14rem",
              borderRadius: "30px",
              color: "primary",
              textAlign: "center",
            }}
          >
            <Image
              src={BHWorldFamily3}
              sx={{
                height: "14rem",
                width: "14rem",
              }}
            />
            <Text sx={{ fontWeight: "semibold", fontSize: 15 }}>QURC</Text>
            <Text sx={{ fontSize: 12 }}>NETHERLANDS</Text>
          </VStack>
          <VStack
            sx={{
              pb: "4rem",
              bg: "#FFFFFF",
              height: "16rem",
              width: "14rem",
              borderRadius: "30px",
              color: "primary",
              textAlign: "center",
            }}
          >
            <Image
              src={BHWorldFamily4}
              sx={{
                height: "14rem",
                width: "14rem",
              }}
            />
            <Text sx={{ fontWeight: "semibold", fontSize: 15 }}>Hemper</Text>
            <Text sx={{ fontSize: 12 }}>SPAIN</Text>
          </VStack>
        </Wrap>
      )}
      <Text
        sx={{
          textAlign: "center",
          fontSize: 16,
          fontWeight: "semibold",
          textDecoration: "underline",
          bg: "#FBF8EF",
          color: "primary",
          pb: "2rem",
        }}
      >
        See more stores
      </Text>
    </>
  );
};
