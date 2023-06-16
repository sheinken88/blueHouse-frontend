import { Box, Image, Text, Wrap } from "@chakra-ui/react";
import NicoleCiniPicture from "../../assets/nicole_cini_picture.svg";
import LucasCorradoPicture from "../../assets/lucas_corrado_picture.svg";
import SofiaRosemfettPicture from "../../assets/sofia_rosemfett_picture.svg";
import IgnacioBivortPicture from "../../assets/ignacio_bivort_picture.svg";
import LinkedInBadge from "../../assets/linkedin_badge.svg";

export const WhoIsBehind = () => {

  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          mt: 5,
          pt: 10,
          px: 8,
        }}
      >
        <Text sx={{ fontSize: 30, fontWeight: "bold", color: "primary" }}>
          Who are behind the platform?
        </Text>
      </Box>
      <Wrap spacing="20px" justify="center" sx={{ mb: 10 }}>
        <Box
          sx={{
            border: "1px",
            borderColor: "primary",
            borderRadius: "50%",
            height: "152px",
            width: "158px",
            textAlign: "center",
            color: "primary",
            mb: 20,
            mt: 10,
          }}
        >
          <Box>
            <Image
              src={NicoleCiniPicture}
              sx={{ mb: 4, position: "absolute" }}
            />
            <Image
              src={LinkedInBadge}
              sx={{ position: "absolute", mt: "7rem", ml: "7rem" }}
            />
          </Box>
          <Text
            sx={{ fontWeight: "semibold", position: "relative", mt: "10rem" }}
          >
            Nicole Cini
          </Text>
          <Text sx={{ fontWeight: "semibold" }}>Stepancic</Text>
          <Text>Co-Founder</Text>
        </Box>
        <Box
          sx={{
            border: "1px",
            borderColor: "primary",
            borderRadius: "50%",
            height: "152px",
            width: "159px",
            textAlign: "center",
            color: "primary",
            mb: 20,
            mt: 10,
          }}
        >
          <Box>
            <Image
              src={LucasCorradoPicture}
              sx={{ mb: 4, position: "absolute" }}
            />
            <Image
              src={LinkedInBadge}
              sx={{ position: "absolute", mt: "7rem", ml: "7rem" }}
            />
          </Box>
          <Text
            sx={{ fontWeight: "semibold", position: "relative", mt: "10rem" }}
          >
            Lucas Andreacchio
          </Text>
          <Text sx={{ fontWeight: "semibold" }}>Corrado</Text>
          <Text>Co-Founder</Text>
        </Box>
        <Box
          sx={{
            border: "1px",
            borderColor: "primary",
            borderRadius: "50%",
            height: "152px",
            width: "158px",
            textAlign: "center",
            color: "primary",
            mb: 20,
            mt: 10,
          }}
        >
          <Box>
            <Image
              src={SofiaRosemfettPicture}
              sx={{ mb: 4, position: "absolute" }}
            />
            <Image
              src={LinkedInBadge}
              sx={{ position: "absolute", mt: "7rem", ml: "7rem" }}
            />
          </Box>
          <Text
            sx={{ fontWeight: "semibold", position: "relative", mt: "10rem" }}
          >
            Sofía Rosemfett
          </Text>
          <Text>Partnerships</Text>
        </Box>
        <Box
          sx={{
            border: "1px",
            borderColor: "primary",
            borderRadius: "50%",
            height: "152px",
            width: "159px",
            textAlign: "center",
            color: "primary",
            mb: 20,
            mt: 10,
          }}
        >
          <Box>
            <Image
              src={IgnacioBivortPicture}
              sx={{ mb: 4, position: "absolute" }}
            />
            <Image
              src={LinkedInBadge}
              sx={{ position: "absolute", mt: "7rem", ml: "7rem" }}
            />
          </Box>
          <Text
            sx={{ fontWeight: "semibold", position: "relative", mt: "10rem" }}
          >
            Ignacio Bivort
          </Text>
          <Text>Financials</Text>
        </Box>
      </Wrap>
    </>
  );
};
