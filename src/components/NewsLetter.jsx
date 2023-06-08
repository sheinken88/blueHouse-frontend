import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  HStack,
  VStack,
  Spacer,
  useMediaQuery,
} from "@chakra-ui/react";
import useInput from "../hooks/useInput.js";

export const NewsLetter = () => {
  const [mobileDesign] = useMediaQuery("(max-width: 425px)");
  const email = useInput();

  const handleSubmitEmail = (event) => {
    event.preventDefault();
    //EL EMAIL INGRESADO QUEDA GUARDADO EN email.value
    //PENDIENTE RESOLVER SI CLIENTE QUIERE DARLE FUNCIONALIDAD AL BOTÓN
  };

  return (
    <>
      {mobileDesign ? (
        <Box
          sx={{ bg: "primary", color: "fontHover", py: 8, textAlign: "center" }}
        >
          <Box>
            <Text sx={{ fontSize: 18 }}>SUBSCRIBE TO OUR NEWSLETTER</Text>
            <Text sx={{ fontSize: 23, fontWeight: 900, color: "#A3D8E4" }}>
              AND GET A 5% DISCOUNT
            </Text>
          </Box>
          <InputGroup sx={{ my: 4, w: "100%" }}>
            <Input
              type="email"
              placeholder="e-mail"
              {...email}
              sx={{
                mx: 4,
                color: "primary",
                borderRadius: "2rem",
                bg: "white",
              }}
            />
            <InputRightElement>
              <Button
                sx={{
                  borderRadius: "2rem",
                  bg: "#A3D8E4",
                  color: "primary",
                  px: 10,
                  mr: 16,
                  fontWeight: "normal",
                  fontSize: "small",
                }}
                onClick={handleSubmitEmail}
              >
                Subscribe
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
      ) : (
        <HStack
          sx={{
            bg: "primary",
            color: "fontHover",
            py: 10,
            px: 40,
            textAlign: "center",
          }}
        >
          <VStack>
            <Box>
              <Text sx={{ fontSize: 27 }}>SUBSCRIBE TO OUR NEWSLETTER</Text>
              <Text sx={{ fontSize: 35, fontWeight: 900, color: "#A3D8E4" }}>
                AND GET A 5% DISCOUNT
              </Text>
            </Box>
          </VStack>
          <Spacer />
          <InputGroup sx={{ my: 4, w: "45%" }}>
            <Input
              type="email"
              placeholder="e-mail"
              {...email}
              sx={{
                mx: 4,
                color: "primary",
                borderRadius: "2rem",
                bg: "white",
              }}
            />
            <InputRightElement>
              <Button
                sx={{
                  borderRadius: "2rem",
                  bg: "#A3D8E4",
                  color: "primary",
                  px: 10,
                  mr: 16,
                  fontWeight: "normal",
                  fontSize: "small",
                }}
                onClick={handleSubmitEmail}
              >
                Subscribe
              </Button>
            </InputRightElement>
          </InputGroup>
        </HStack>
      )}
    </>
  );
};
