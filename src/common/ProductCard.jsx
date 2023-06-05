import React from "react";
import { GrFavorite } from "react-icons/gr";
import {
  Box,
  Card,
  Stack,
  CardBody,
  CardFooter,
  Heading,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";

const ProductCard = (item) => {
  return (
    <Box maxW="322.1" maxH="475.62">
      <Card boxShadow="none">
        <Box position="relative">
          <IconButton
            icon={<GrFavorite />}
            borderRadius="full"
            position="absolute"
            top={0}
            left={0}
            zIndex={1}
            color="blue"
          />
          <Image
            w="100%"
            h="auto"
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
          />
        </Box>
        <CardBody>
          <Stack>
            <Heading
              fontWeight="normal"
              color="rgba(37, 71, 135, 1)"
              fontSize={25}
              h={75}
            >
              Living room Sofa
            </Heading>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text
                color="grey"
                fontSize={28}
                fontWeight="semibold"
                position="relative"
                opacity={"50%"}
                h={5}
              >
                €450
                <Box
                  position="absolute"
                  top={4}
                  left={0}
                  right={0}
                  height="4px"
                  backgroundColor="rgba(37, 71, 135, 1)"
                  transform="rotate(20deg)"
                  transformOrigin="center"
                />
              </Text>
              <Text
                color="rgba(37, 71, 135, 1)"
                fontSize={28}
                fontWeight="semibold"
                position="relative"
                h={5}
              >
                €450
              </Text>
              <Text
                h={5}
                color="rgba(234, 98, 68, 1)"
                fontWeight="bold"
                fontSize={20}
              >
                Sale
              </Text>
            </Box>
          </Stack>
        </CardBody>
        <CardFooter justifyContent="left">
          <Text color="rgba(179, 188, 245, 1)" fontSize={20} fontWeight="bold">
            FREE SHIPPING
          </Text>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default ProductCard;
