import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Text,
  Image,
  Divider,
  IconButton,
  Flex,
  Center,
  HStack,
} from "@chakra-ui/react";
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { removeItemFromCart, updateQuantity } from "../state/slices/cartSlice";
import { AddToCartButton } from "../common/Buttons";
import { Link } from "react-router-dom";

export const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleRemove = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const getTotalPrice = () => {
    return Object.values(cart.items).reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  };

  const handleCheckout = () => {
    const queryParams = Object.values(cart.items).map(
      (item) => `productId=${item.id}&qty=${item.quantity}`
    );

    const queryString = queryParams.join("&");

    const url = `https://websitedeprueba.com/checkout?${queryString}`;

    console.log(url);
  };

  return (
    <Box bg="white" p={5}>
      <Flex justify="space-between" mb={5}>
        <Text fontSize="xl" fontWeight="bold" color="primary">
          SHOPPING CART
        </Text>
        <IconButton as={Link} to="/" icon={<AiOutlineClose />} />
      </Flex>
      <Divider borderColor="gray.200" w="80%" alignSelf="center" mb={5} />
      {Object.values(cart.items).map((item) => (
        <Flex key={item.id} my={4}>
          <Image
            boxSize="100px"
            objectFit="cover"
            src={item.image}
            alt={item.name}
          />
          <Flex
            direction="column"
            justify="center"
            align="flex-start"
            ml={4}
            justifyContent="space-between"
          >
            <Text color="primary" fontSize="m">
              {item.name}
            </Text>
            <Flex align="center" mt={2}>
              <IconButton
                icon={<AiOutlineMinus boxSize="10px" />}
                size="sm"
                color="primary"
                bgColor="secondary"
                onClick={() =>
                  item.quantity > 1
                    ? handleQuantityChange(item.id, item.quantity - 1)
                    : null
                }
              />
              <Text mx={2}>{item.quantity}</Text>
              <IconButton
                icon={<AiOutlinePlus boxSize="10px" />}
                size="sm"
                color="primary"
                bgColor="secondary"
                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
              />
            </Flex>
          </Flex>
          <Flex
            justify="flex-end"
            align="center"
            ml="auto"
            direction="column-reverse"
            gap={4}
          >
            <Text fontSize="lg">
              ${(item.price * item.quantity).toFixed(2)}
            </Text>
            <IconButton
              icon={<AiOutlineClose boxSize="10px" />}
              borderRadius="full"
              bgColor="secondary"
              color="primary"
              onClick={() => handleRemove(item.id)}
              ml={4}
              size="sm"
            />
          </Flex>
        </Flex>
      ))}

      <Flex direction="column" gap={4}>
        <HStack justify="space-between" color="primary">
          <Text>Shipping Costs</Text>
          <Text>$0.00</Text>
        </HStack>
        <HStack justify="space-between" color="primary" fontWeight="bold">
          <Text>TOTAL</Text>
          <Text>${getTotalPrice().toFixed(2)}</Text>
        </HStack>
        <Center>
          <AddToCartButton width="80%" mt="8" onClick={handleCheckout}>
            Checkout
          </AddToCartButton>
        </Center>
      </Flex>
    </Box>
  );
};
