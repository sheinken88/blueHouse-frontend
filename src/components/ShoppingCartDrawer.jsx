import React from "react";
import { useSelector } from "react-redux";
import {
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Box,
  Text,
  VStack,
  HStack,
  Flex,
  Image,
  Divider,
  DrawerFooter,
  Button,
} from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const ShoppingCartDrawer = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cart = useSelector((state) => state.cart);

  const cartItemCount = Object.values(cart.items).length;
  const cartItems = Object.values(cart.items);
  const subtotal = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  const handleViewCartClick = () => {
    navigate("/cart");
    onClose();
  };

  return (
    <>
      <Box position="relative" display="inline-block">
        <IconButton
          icon={
            <HStack>
              <FaShoppingCart />
              {cartItemCount > 0 && (
                <Text
                  fontSize="sm"
                  color="white"
                  position="absolute"
                  top="-3"
                  right="0"
                  bgColor="primary"
                  padding="1"
                  paddingLeft={2}
                  paddingRight={2}
                  borderRadius="full"
                >
                  {cartItemCount}
                </Text>
              )}
            </HStack>
          }
          onClick={onOpen}
          position="fixed"
          bottom="10"
          right="0"
          m={4}
          zIndex="1000"
          color="primary"
          bgColor="white"
          boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
          padding={6}
          borderRadius="30px"
        />
      </Box>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader color={"primary"}>Your Shopping Cart</DrawerHeader>
            <DrawerBody>
              {cartItems.map((item, index) => (
                <Box key={item.id} mb={4}>
                  <Flex>
                    <Image
                      boxSize="100px"
                      objectFit="cover"
                      width={"100px"}
                      src={item.image}
                      alt={item.name}
                    />
                    <VStack align="start" ml={4}>
                      <Text fontWeight="bold">{item.name}</Text>
                      <Text color={"primary"}>{item.attribute}</Text>
                      <Text>
                        {item.quantity} x € {item.price} = €
                        {Number(item.quantity * item.price).toFixed(2)}
                      </Text>
                    </VStack>
                  </Flex>
                  {index < cartItems.length - 1 && <Divider my={4} />}{" "}
                </Box>
              ))}
            </DrawerBody>
            <DrawerFooter justifyContent="center">
              <VStack>
                <Text fontWeight="bold" color={"primary"}>
                  Subtotal: € {subtotal.toFixed(2)}
                </Text>
                <HStack>
                  <Button
                    bgColor={"white"}
                    color={"primary"}
                    border={"1px solid #22488B"}
                    borderRadius={"full"}
                    onClick={handleViewCartClick}
                  >
                    View Cart
                  </Button>
                  <Button
                    bgColor={"primary"}
                    color={"white"}
                    border={"1px solid #22488B"}
                    borderRadius={"full"}
                    onClick={console.log()}
                  >
                    Checkout
                  </Button>
                </HStack>
              </VStack>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
