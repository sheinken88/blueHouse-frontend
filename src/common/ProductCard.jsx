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
      maxW={{ base: "148px", md: "322px" }}
      maxH={{ base: "230px", md: "475px" }}
      p={0}
      // borderRadius="lg"
      // overflow="hidden"
      display="flex"
      // flexDirection={{ base: "column", md: "row" }}
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
                w={{ base: "40px", md: "80px" }}
                h={{ base: "40px", md: "80px" }}
                fontSize={{ base: "10px", md: "25px" }}
                textColor={"white"}
                borderRadius="full"
                backgroundColor={"#EA6244"}
                position="absolute"
                bottom={{ base: 0, md: 3 }}
                right={{ base: 0, md: 3 }}
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
            w={{ base: "148px", md: "322px" }}
            h={{ base: "148px", md: "322px" }}
            // flex={{ base: "initial", md: 1 }}
            objectFit="cover"
            objectPosition="center"
            src={product.images[0].src}
            alt={product.name}
          />
        </Box>
        <CardBody>
          <Heading
            fontWeight="normal"
            color="#254788"
            fontSize={{ base: "13px", md: "25px" }}
            textAlign={"justify"}
            maxH={{ base: "27px", md: "70px" }}
            maxW={{ base: "148px", md: "322px" }}
            overflow="hidden"
            lineHeight={"shorter"}
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
                  fontSize={{ base: "12px", md: "28px" }}
                  fontWeight="semibold"
                  position="relative"
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
                  color="lightgrey"
                  fontSize={{ base: "12px", md: "28px" }}
                  fontWeight="semibold"
                  position="relative"
                  h={5}
                >
                  € {product.regular_price}
                  <Box
                    position="absolute"
                    top={{ base: "7px", md: "20px" }}
                    left={{ base: -1, md: -1 }}
                    right={{ base: -1, md: -1 }}
                    height={{ base: "2px", md: "5px" }}
                    backgroundColor="#254787"
                    transform="rotate(20deg)"
                    transformOrigin="center"
                  />
                </Text>
                <Text
                  color="#254787"
                  fontSize={{ base: "12px", md: "28px" }}
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
                  fontSize={{ base: "12px", md: "28px" }}
                >
                  Sale
                </Text>
              </Box>
            )
          }
        </CardBody>
        <CardFooter justifyContent="left">
          <Text
            color="#B3BCF5"
            fontSize={{ base: "12px", md: "20px" }}
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
