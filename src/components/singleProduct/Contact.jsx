import {
  Heading,
  Box,
  Flex,
  Button,
  useTheme,
  useBreakpointValue,
} from "@chakra-ui/react";
// import { PrimaryButton } from "../../common/Buttons";

export const Contact = () => {
  const buttonDirection = useBreakpointValue({
    base: "column",
    sm: "column",
    md: "column",
    lg: "row",
    xl: "row",
  });

  const theme = useTheme();
  return (
    <Box p={4} mb={10}>
      <Heading color="primary" textAlign="center">
        Need help deciding?
      </Heading>
      <Heading color="primary" textAlign="center">
        We are happy to help you
      </Heading>
      <Flex
        mt={10}
        direction={buttonDirection}
        gap={4}
        justifyContent="center"
        alignContent="center"
        alignItems="center"
      >
        <Button
          p={6}
          width="200px"
          borderRadius="30px"
          bgColor="white"
          color="primary"
          border={`2px solid ${theme.colors.secondary}`}
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
        >
          Chat with us
        </Button>
        <Button
          p={6}
          width="200px"
          borderRadius="30px"
          bgColor="white"
          color="primary"
          border={`2px solid ${theme.colors.secondary}`}
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
        >
          Send an Email
        </Button>
        <Button
          p={6}
          width="200px"
          borderRadius="30px"
          bgColor="#D4D9FF"
          color="primary"
          border={`2px solid #B3BCF5`}
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
        >
          Contact Store
        </Button>
      </Flex>
    </Box>
  );
};
