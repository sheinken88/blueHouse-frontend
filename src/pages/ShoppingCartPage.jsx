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
  useBreakpointValue,
  Button,
} from "@chakra-ui/react";
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { removeItemFromCart, updateQuantity } from "../state/slices/cartSlice";
import { AddToCartButton } from "../common/Buttons";
import { Link } from "react-router-dom";

export const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleRemove = (id, attribute) => {
    dispatch(removeItemFromCart({ id, attribute: attribute ? attribute : "" }));
  };

  const handleQuantityChange = (id, quantity, attribute) => {
    if (quantity > 0) {
      dispatch(
        updateQuantity({
          id,
          quantity,
          attribute: attribute ? attribute : "",
        })
      );
    }
  };

  const getTotalPrice = () => {
    return Object.values(cart.items).reduce((acc, item) => {
      return acc + Number(item.price) * Number(item.quantity);
    }, 0);
  };

  const handleCheckout = () => {
    const queryParams = Object.values(cart.items).map(
      (item) => `${item.id}:${item.quantity}`
    );

    const queryString = queryParams.join(",");

    const url = `https://staging15.bluehouseworld.nl/?add-to-cart=${queryString}`;

    console.log(url);
    window.location.href = url;
  };

  const boxSize = useBreakpointValue({ base: "full", md: "xl" });
  const shadowStyle = useBreakpointValue({ base: "none", md: "md" });
  const btnBgColor = useBreakpointValue({ base: "#FDB32C", md: "primary" });
  const btnSize = useBreakpointValue({ base: "80%", md: "30%" });
  const btnColor = "white";

  return (
    <Center>
      <Box
        bg="white"
        p={5}
        mb={40}
        mt={10}
        w={boxSize}
        shadow={shadowStyle}
        width={"80%"}
      >
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

              {item.attribute && (
                <Text color="black" fontSize="sm">
                  option: {item.attribute}
                </Text>
              )}

              <Flex align="center" mt={2}>
                <IconButton
                  icon={<AiOutlineMinus boxSize="10px" />}
                  size="sm"
                  color="primary"
                  bgColor="secondary"
                  onClick={() =>
                    item.quantity > 1
                      ? handleQuantityChange(
                          item.id,
                          item.quantity - 1,
                          item.attribute
                        )
                      : null
                  }
                />
                <Text mx={2}>{item.quantity}</Text>
                <IconButton
                  icon={<AiOutlinePlus boxSize="10px" />}
                  size="sm"
                  color="primary"
                  bgColor="secondary"
                  onClick={() =>
                    handleQuantityChange(
                      item.id,
                      item.quantity + 1,
                      item.attribute
                    )
                  }
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
                onClick={() => handleRemove(item.id, item.attribute)}
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
            <Button
              // as={Link}
              // to="/checkout"
              bg={btnBgColor}
              color={btnColor}
              w={btnSize}
              mt="8"
              onClick={handleCheckout}
            >
              Checkout
            </Button>
          </Center>
        </Flex>
      </Box>
    </Center>
  );
};
