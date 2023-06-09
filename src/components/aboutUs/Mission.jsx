import { Box, Text, useMediaQuery } from "@chakra-ui/react";

export const Mission = () => {
  const [mobileDesign] = useMediaQuery("(max-width: 425px)");

  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          bg: "#FBF8EF",
          color: "primary",
          mt: 5,
          py: 10,
          px: 8,
        }}
      >
        <Text sx={{ fontSize: 50, fontWeight: "bold" }}>
          WE ARE ON A MISSION
        </Text>
        <Text sx={{ my: 3, fontSize: 20 }}>
          Create the largest network of ethical producers to help buyers shop
          consciously.
        </Text>
      </Box>
      {mobileDesign ? (
        <Box
          sx={{
            textAlign: "center",
            fontSize: 16,
            color: "primary",
            py: 10,
            px: 8,
          }}
        >
          <Text sx={{ mb: 6 }}>
            Step into the world of Bluehouse, a vibrant marketplace for
            conscious goods. We are more than just an eco-friendly platform; we
            are a gateway to a universe of ethical, transparent, and sustainable
            products. Our mission is to inform, inspire, and connect those who
            seek well-being with the very best in ethical and sustainable
            offerings.
          </Text>
          <Text sx={{ my: 3 }}>
            Join us in revolutionizing the marketplace. Let's explore new
            horizons, support ethical producers, and create a brighter future
            together. With Bluehouse, conscious shopping becomes an exhilarating
            adventure that leads to a more sustainable and fulfilling lifestyle.
          </Text>
        </Box>
      ) : (
        <Box
          sx={{
            justifyItems: "center",
            textAlign: "center",
            fontSize: 16,
            color: "primary",
            py: 10,
            mx: "auto",
            w: "60%",
          }}
        >
          <Text sx={{ mb: 6 }}>
            Step into the world of Bluehouse, a vibrant marketplace for
            conscious goods. We are more than just an eco-friendly platform; we
            are a gateway to a universe of ethical, transparent, and sustainable
            products. Our mission is to inform, inspire, and connect those who
            seek well-being with the very best in ethical and sustainable
            offerings.
          </Text>
          <Text sx={{ my: 3 }}>
            Join us in revolutionizing the marketplace. Let's explore new
            horizons, support ethical producers, and create a brighter future
            together. With Bluehouse, conscious shopping becomes an exhilarating
            adventure that leads to a more sustainable and fulfilling lifestyle.
          </Text>
        </Box>
      )}
    </>
  );
};
