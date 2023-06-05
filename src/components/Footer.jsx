import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import LogoBlueHouse from "../assets/logo_blueHouse_noWording.svg";
import LogoTikTok from "../assets/logo_tikTok.svg";
import LogoFacebook from "../assets/logo_facebook.svg";
import LogoInstagram from "../assets/logo_instagram.svg";
import LogoLinkedIn from "../assets/logo_linkedIn.svg";
import PaymentMethodsIcon from "../assets/payment_methods.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  const tab = <>&nbsp;&nbsp;</>;

  return (
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
        <Link to='https://www.tiktok.com'><Image src={LogoTikTok} /></Link>
        {tab}
        <Link to='https://www.instagram.com'><Image src={LogoInstagram} /></Link>
        {tab}
        <Link to='https://www.facebook.com'><Image src={LogoFacebook} /></Link>
        {tab}
        <Link to='https://www.linkedin.com'><Image src={LogoLinkedIn} /></Link>
      </Box>
      <Accordion
        sx={{
          mt: 8,
          w: "100%",
          borderColor: "white",/*COLOR DE FONDO DEL FIGMA: "#F8F8F5"*/
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
              <AccordionIcon sx={{w: "30%"}}/>
            </AccordionButton>
          </h2>
          <AccordionPanel as={Link} to='/' sx={{ fontSize: 12, pb: "2px", pl: 20 }}>
            About Us
          </AccordionPanel>
          <AccordionPanel as={Link} to='/' sx={{ fontSize: 12, pb: "2px", pl: 20 }}>
            Blue Labels
          </AccordionPanel>
          <AccordionPanel as={Link} to='/' sx={{ fontSize: 12, pb: "2px", pl: 20 }}>
            Our Values
          </AccordionPanel>
          <AccordionPanel as={Link} to='/' sx={{ fontSize: 12, pb: "2px", pl: 20 }}>
            Store List
          </AccordionPanel>
          <AccordionPanel as={Link} to='/' sx={{ fontSize: 12, pb: 2, pl: 20 }}>
            Blog
          </AccordionPanel>
          <AccordionPanel as={Link} to='/' sx={{ fontSize: 12, pb: 2, pl: 20 }}>
            Our Glossary
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box pl={10} border="none" flex="1" textAlign="left">
                SELL
              </Box>
              <AccordionIcon sx={{w: "30%"}} />
            </AccordionButton>
          </h2>
          <AccordionPanel as={Link} to='/' sx={{ fontSize: 12, pb: "2px", pl: 20 }}>
            Terms & Conditions
          </AccordionPanel>
          <AccordionPanel as={Link} to='/' sx={{ fontSize: 12, pb: "2px", pl: 20 }}>
            Register
          </AccordionPanel>
          <AccordionPanel as={Link} to='/' sx={{ fontSize: 12, pb: 2, pl: 20 }}>
            Contact Us
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box pl={10} flex="1" textAlign="left">
                CUSTOMER SERVICE
              </Box>
              <AccordionIcon sx={{w: "30%"}}/>
            </AccordionButton>
          </h2>
          <AccordionPanel as={Link} to='/' sx={{ fontSize: 12, pb: "2px", pl: 20 }}>
            FAQs
          </AccordionPanel>
          <AccordionPanel as={Link} to='/' sx={{ fontSize: 12, pb: "2px", pl: 20 }}>
            Help
          </AccordionPanel>
          <AccordionPanel as={Link} to='/' sx={{ fontSize: 12, pb: "2px", pl: 20 }}>
            Return & Refund
          </AccordionPanel>
          <AccordionPanel as={Link} to='/' sx={{ fontSize: 12, pb: "2px", pl: 20 }}>
            Shipping
          </AccordionPanel>
          <AccordionPanel as={Link} to='/' sx={{ fontSize: 12, pb: 2, pl: 20 }}>
            Contact Us
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Text
        sx={{
          display: "flex",
          justifyContent: "center",
          w: "100%",
          color: "primary",
        }}
      >
        _____________________________________
      </Text>
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
      <Text sx={{ pl: 10, fontSize: 12, color: "primary" }}>
        CHAMBER OF COMMERCE: 81691955
      </Text>
      <Text sx={{ pl: 10, fontSize: 12, color: "primary" }}>
        VAT: NL862183595B01
      </Text>
      <Text sx={{ pl: 10, fontSize: 12, mb: 10, color: "primary" }}>
        COPYRIGHT © 2023 BLUEHOUSE WORLD
      </Text>
    </>
  );
};
