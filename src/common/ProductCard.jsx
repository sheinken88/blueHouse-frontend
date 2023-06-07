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
  Badge,
  useColorModeValue as mode,
  Tooltip,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart } from "../state/slices/cartSlice";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const isAuthenticated = true;

  const dispatch = useDispatch();

  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = (event) => {
    event.preventDefault();
    if (!isAuthenticated) {
      alert("Login to add items to your cart");
      return;
    }

    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0].src,
      quantity: 1,
    };

    const existingItem = cartItems[item.id];

    if (existingItem) {
      alert("Item is already in the cart");
    } else {
      dispatch(addItemToCart(item));

      setShowAlert(true);

      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  return (
    <Box
      maxWidth="321.79px"
      h="475.62"
      mb={10}
      mt={10}
      as={Link}
      to={`/product/${product.id}`}
    >
      {showAlert && (
        <Alert status="success">
          <AlertIcon />
          Product successfully added!
        </Alert>
      )}
      <Card boxShadow="none">
        <Box position="relative">
          <IconButton
            icon={<GrFavorite />}
            borderRadius="full"
            position="absolute"
            top={0}
            left={0}
            zIndex={1}
          />
          <Tooltip
            label="Add to cart"
            placement="top"
            hasArrow
            bg={mode("gray.800", "white")}
            color={mode("white", "gray.800")}
          >
            <IconButton
              icon={<FaShoppingCart />}
              aria-label="Add to cart"
              borderRadius="full"
              position="absolute"
              bottom={0}
              left={0}
              zIndex={1}
              color="primary"
              bg="secondary"
              _hover={{ bg: "primary" }}
              onClick={handleAddToCart}
            />
          </Tooltip>

          {
            //EN CASO DE TENER DESCUENTO SE APLICA ESTE TERNARIO:
            product.on_sale == true ? (
              <Badge
                h={"75px"}
                w={"75px"}
                textColor={"white"}
                borderRadius="full"
                backgroundColor={"tomato"}
                position="absolute"
                bottom={5}
                right={5}
                zIndex={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
              >
                Sale
              </Badge>
            ) : (
              <></>
            )
          }
          <Image
            w="321.79px"
            h="321.79px"
            src={product.images[0].src}
            alt={product.name}
          />
        </Box>
        <CardBody>
          <Stack>
            <Heading
              fontWeight="normal"
              color="rgba(37, 71, 135, 1)"
              fontSize={25}
              h={"44.58px"}
              w={"321.99px"}
              overflow="hidden"
            >
              {product.name}
            </Heading>

            {
              //EN CASO DE TENER DESCUENTO SE APLICA ESTE TERNARIO:
              product.on_sale == false ? (
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
                    h={"20.04px"}
                  >
                    € {product.price}
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
                    € {product.price}
                    <Box
                      position="absolute"
                      top={4}
                      left={0}
                      right={0}
                      height="2px"
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
                    € {product.sale_price}
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
              )
            }
          </Stack>
        </CardBody>
        <CardFooter justifyContent="left">
          <Text
            color="rgba(179, 188, 245, 1)"
            fontSize={20}
            fontWeight="bold"
            textTransform={"uppercase"}
          >
            {product.shipping_class}
          </Text>
        </CardFooter>
      </Card>
    </Box>
  );
};
