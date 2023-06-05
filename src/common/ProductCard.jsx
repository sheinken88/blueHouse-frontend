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
  console.log(item);
  return (
    <Box w="322.1" h="475.62" margin={10}>
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
            w="321.79px"
            h="321.79px"
            src={item.item.images[0].src}
            alt={item.item.name}
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
              {item.item.name}
            </Heading>

            {item.item.on_sale == false ? (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Text
                  color="rgba(37, 71, 135, 1)"
                  fontSize={28}
                  fontWeight="semibold"
                  position="relative"
                  h={5}
                >
                  € {item.item.price}
                </Text>
              </Box>
            ) : (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Text
                  color="grey"
                  opacity={"75%"}
                  fontSize={28}
                  fontWeight="semibold"
                  position="relative"
                  h={5}
                >
                  € {item.item.price}
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
                  € {item.item.sale_price}
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
            )}
          </Stack>
        </CardBody>
        <CardFooter justifyContent="left">
          <Text
            color="rgba(179, 188, 245, 1)"
            fontSize={20}
            fontWeight="bold"
            textTransform={"uppercase"}
          >
            {item.item.shipping_class}
          </Text>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default ProductCard;
