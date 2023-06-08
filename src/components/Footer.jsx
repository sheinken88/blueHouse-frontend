import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Image,
  HStack,
  VStack,
  Stack,
  Spacer,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import LogoBlueHouse from "../assets/logo_blueHouse_noWording.svg";
import LogoTikTok from "../assets/logo_tikTok.svg";
import LogoFacebook from "../assets/logo_facebook.svg";
import LogoInstagram from "../assets/logo_instagram.svg";
import LogoLinkedIn from "../assets/logo_linkedIn.svg";
import PaymentMethodsIcon from "../assets/payment_methods.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  const [mobileDesign] = useMediaQuery("(max-width: 425px)");

  return (
    <>
      {mobileDesign ? (
        <>
          <Box
            sx={{
              w: "100%",
              my: 3,
              color: "primary",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <HStack>
              {" "}
              <Image src={LogoBlueHouse} />
              <Text>Your Conscious Marketplace</Text>
            </HStack>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Link to="https://www.tiktok.com">
              <Image mx={1} src={LogoTikTok} />
            </Link>
            <Link to="https://www.instagram.com">
              <Image mx={1} src={LogoInstagram} />
            </Link>
            <Link to="https://www.facebook.com">
              <Image mx={1} src={LogoFacebook} />
            </Link>
            <Link to="https://www.linkedin.com">
              <Image mx={1} src={LogoLinkedIn} />
            </Link>
          </Box>
          <Accordion
            sx={{
              mt: 8,
              w: "100%",
              borderColor: "white" /*COLOR DE FONDO DEL FIGMA: "#F8F8F5"*/,
              color: "primary",
            }}
            allowMultiple
          >
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box pl={10} flex="1" textAlign="left">
                    BLUEHOUSE
                  </Box>
                  <AccordionIcon sx={{ w: "30%" }} />
                </AccordionButton>
              </h2>
              <AccordionPanel
                as={Link}
                to="/"
                sx={{ fontSize: 12, pb: "2px", pl: 20 }}
              >
                About Us
              </AccordionPanel>
              <AccordionPanel
                as={Link}
                to="/"
                sx={{ fontSize: 12, pb: "2px", pl: 20 }}
              >
                Blue Labels
              </AccordionPanel>
              <AccordionPanel
                as={Link}
                to="/"
                sx={{ fontSize: 12, pb: "2px", pl: 20 }}
              >
                Our Values
              </AccordionPanel>
              <AccordionPanel
                as={Link}
                to="/"
                sx={{ fontSize: 12, pb: "2px", pl: 20 }}
              >
                Store List
              </AccordionPanel>
              <AccordionPanel
                as={Link}
                to="/"
                sx={{ fontSize: 12, pb: 2, pl: 20 }}
              >
                Blog
              </AccordionPanel>
              <AccordionPanel
                as={Link}
                to="/"
                sx={{ fontSize: 12, pb: 2, pl: 20 }}
              >
                Our Glossary
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box pl={10} border="none" flex="1" textAlign="left">
                    SELL
                  </Box>
                  <AccordionIcon sx={{ w: "30%" }} />
                </AccordionButton>
              </h2>
              <AccordionPanel
                as={Link}
                to="/"
                sx={{ fontSize: 12, pb: "2px", pl: 20 }}
              >
                Terms & Conditions
              </AccordionPanel>
              <AccordionPanel
                as={Link}
                to="/"
                sx={{ fontSize: 12, pb: "2px", pl: 20 }}
              >
                Register
              </AccordionPanel>
              <AccordionPanel
                as={Link}
                to="/"
                sx={{ fontSize: 12, pb: 2, pl: 20 }}
              >
                Contact Us
              </AccordionPanel>
            </AccordionItem>


            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box pl={10} flex="1" textAlign="left">
                    CUSTOMER SERVICE
                  </Box>
                  <AccordionIcon sx={{ w: "30%" }} />
                </AccordionButton>
              </h2>
              <AccordionPanel
                as={Link}
                to="/"
                sx={{ fontSize: 12, pb: "2px", pl: 20 }}
              >
                FAQs
              </AccordionPanel>
              <AccordionPanel
                as={Link}
                to="/"
                sx={{ fontSize: 12, pb: "2px", pl: 20 }}
              >
                Help
              </AccordionPanel>
              <AccordionPanel
                as={Link}
                to="/"
                sx={{ fontSize: 12, pb: "2px", pl: 20 }}
              >
                Return & Refund
              </AccordionPanel>
              <AccordionPanel
                as={Link}
                to="/"
                sx={{ fontSize: 12, pb: "2px", pl: 20 }}
              >
                Shipping
              </AccordionPanel>
              <AccordionPanel
                as={Link}
                to="/"
                sx={{ fontSize: 12, pb: 2, pl: 20 }}
              >
                Contact Us
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </>
      ) : (
        <>
          <Box
            sx={{
              fontSize: 20,
              my: 12,
              ml: 40,
              color: "primary",
            }}
          >
            <HStack>
              <Image sx={{ minHeight: "60px" }} src={LogoBlueHouse} />
              <Text>Your Conscious Marketplace</Text>
            </HStack>
          </Box>
          <HStack
            sx={{
              my: 8,
              mx: 40,
              alignItems: "top",
            }}
            spacing={"100px"}
          >
            <VStack alignItems={"left"} color={"primary"}>
              <Text sx={{ fontSize: 18, mb: "8px", fontWeight: "bold" }}>
                BLUEHOUSE
              </Text>
              <Text as={Link} to="/" sx={{ fontSize: 12 }}>
                About Us
              </Text>
              <Text as={Link} to="/" sx={{ fontSize: 12 }}>
                Blue Labels
              </Text>
              <Text as={Link} to="/" sx={{ fontSize: 12 }}>
                Our Values
              </Text>
              <Text as={Link} to="/" sx={{ fontSize: 12 }}>
                Store List
              </Text>
              <Text as={Link} to="/" sx={{ fontSize: 12 }}>
                Blog
              </Text>
              <Text as={Link} to="/" sx={{ fontSize: 12 }}>
                Our Glossary
              </Text>
            </VStack>
            <VStack alignItems={"left"} color={"primary"}>
              <Text sx={{ fontSize: 18, mb: "8px", fontWeight: "bold" }}>
                SELL
              </Text>
              <Text as={Link} to="/" sx={{ fontSize: 12 }}>
                Terms & Conditions
              </Text>
              <Text as={Link} to="/" sx={{ fontSize: 12 }}>
                Register
              </Text>
              <Text as={Link} to="/" sx={{ fontSize: 12 }}>
                Contact Us
              </Text>
            </VStack>
            <VStack alignItems={"left"} color={"primary"}>
              <Text sx={{ fontSize: 18, mb: "8px", fontWeight: "bold" }}>
                CUSTOMER SERVICE

              </Text>
              <Text as={Link} to="/" sx={{ fontSize: 12 }}>
                FAQs
              </Text>
              <Text as={Link} to="/" sx={{ fontSize: 12 }}>
                Help
              </Text>
              <Text as={Link} to="/" sx={{ fontSize: 12 }}>
                Return & Refund
              </Text>
              <Text as={Link} to="/" sx={{ fontSize: 12 }}>
                Shipping
              </Text>
              <Text as={Link} to="/" sx={{ fontSize: 12 }}>
                Contact Us
              </Text>
            </VStack>
            <Spacer />
            <Box display="flex" justifyContent="center">
              <Link to="https://www.tiktok.com">
                <Image mx={1} src={LogoTikTok} />
              </Link>
              <Link to="https://www.instagram.com">
                <Image mx={1} src={LogoInstagram} />
              </Link>
              <Link to="https://www.facebook.com">
                <Image mx={1} src={LogoFacebook} />
              </Link>
              <Link to="https://www.linkedin.com">
                <Image mx={1} src={LogoLinkedIn} />
              </Link>
            </Box>
          </HStack>
        </>
      )}
      {mobileDesign ? (
        <Box sx={{ bg: "primary", mt: 4, mx: "auto", w: "77%", py: "1px" }} />
      ) : (
        <Box sx={{ bg: "primary", mt: 4, mx: 40, py: "1px" }} />
      )}
      {mobileDesign ? (
        <Stack direction={"column"}>
          <Image
            sx={{
              my: 7,
              mx: "auto",
              color: "primary",
              justifyContent: "center",
              display: "flex",
            }}
            src={PaymentMethodsIcon}
          />
          <Text sx={{ pl: 10, ml: 3, fontSize: 12, color: "primary" }}>
            CHAMBER OF COMMERCE: 81691955
          </Text>
          <Text sx={{ pl: 10, ml: 3, fontSize: 12, color: "primary" }}>
            VAT: NL862183595B01
          </Text>
          <Text sx={{ pl: 10, fontSize: 12, ml: 3, mb: 10, color: "primary" }}>
            COPYRIGHT © 2023 BLUEHOUSE WORLD
          </Text>
        </Stack>
      ) : (
        <HStack sx={{ my: 10, ml: 40 }}>
          <Text sx={{ fontSize: 10, color: "primary" }}>
            CHAMBER OF COMMERCE: 81691955
          </Text>
          <Text sx={{ pl: 4, fontSize: 10, color: "primary" }}>
            VAT: NL862183595B01
          </Text>
          <Text sx={{ pl: 4, fontSize: 10, color: "primary" }}>
            COPYRIGHT © 2023 BLUEHOUSE WORLD
          </Text>
          <Image
            sx={{
              ml: "auto",
              mr: 40,
            }}
            src={PaymentMethodsIcon}
          />
        </HStack>
      )}
    </>
  );
};
