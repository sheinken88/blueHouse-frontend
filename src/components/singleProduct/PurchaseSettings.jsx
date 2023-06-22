import { useEffect, useState, useRef } from "react";
import {
  Box,
  Text,
  IconButton,
  Image,
  Flex,
  HStack,
  Spacer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  VStack,
  Select,
  Center,
  Divider,
  useBreakpointValue,
  SimpleGrid,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { GrFavorite } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";
import { AddToCartButton } from "../../common/Buttons";
import { useSelector, useDispatch } from "react-redux";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { useDisclosure } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { addItemToCart, updateQuantity } from "../../state/slices/cartSlice";
import { setAlert, clearAlert } from "../../state/slices/alertSlice";
import { useMediaQuery } from "react-responsive";

import blueLabels from "../../utils/blue_labels";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { all } from "axios";

export const PurchaseSettings = ({ product }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const [mainImgSrc, setMainImgSrc] = useState(product.images[0]?.src);

  const blueLabelData = product.meta_data.find(
    (data) => data.key === "bluelabels"
  );
  const blueLabels = blueLabelData ? blueLabelData.value : [];

  const isMobile = useBreakpointValue({ base: true, md: false });
  const breakpoint = useBreakpointValue({
    base: "full",
    sm: "full",
    md: "full",
    lg: "50%",
    xl: "50%",
  });
  const buttonAlignment = useBreakpointValue({
    base: "center",
    sm: "center",
    md: "center",
    lg: "flex-start",
    xl: "flex-start",
  });

  const textAlignment = useBreakpointValue({
    base: "center",
    sm: "center",
    md: "center",
    lg: "flex-start",
    xl: "flex-start",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [count, setCount] = useState(1);
  const [selectedAttribute, setSelectedAttribute] = useState(null);

  const [isVisible, setIsVisible] = useState(true);
  const secondButtonRef = useRef(null);

  const reviews = useSelector((state) => state.reviews.reviews);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const checkScroll = () => {
    const secondButtonPosition =
      secondButtonRef.current.getBoundingClientRect().top;
    setIsVisible(secondButtonPosition > window.innerHeight);
  };

  const handleImageClick = (src) => {
    setMainImgSrc(src);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  useEffect(() => {
    setMainImgSrc(product.images[0].src);
  }, [product]);

  const handleAddToCart = () => {
    console.log("selectedAttribute:", selectedAttribute);
    if (product.attributes.length > 0 && !selectedAttribute) {
      dispatch(
        setAlert({
          message: "Please select an option before adding to cart",
          status: "warning",
        })
      );
      setTimeout(() => {
        dispatch(clearAlert());
      }, 3000);
      return;
    }

    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0].src,
      quantity: count > 0 ? count : 1,
      attribute: selectedAttribute,
    };

    const existingItem = cartItems[item.id];

    if (existingItem) {
      dispatch(
        setAlert({ message: "Item is already in the cart", status: "warning" })
      );
    } else {
      dispatch(addItemToCart(item));

      dispatch(
        setAlert({ message: "Product successfully added!", status: "success" })
      );
    }
    setTimeout(() => {
      dispatch(clearAlert());
    }, 3000);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const responsiveMultipleItems = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Box position="relative" mt={6} mb={10}>
          <IconButton
            icon={<GrFavorite size="24px" />}
            borderRadius="full"
            position="absolute"
            bgColor="white"
            top={8}
            right={2}
            zIndex={1}
            style={{
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
            }}
          />

          {isMobile ? (
            <Carousel
              removeArrowOnDeviceType={["tablet", "mobile"]}
              swipeable={true}
              draggable={false}
              showDots={true}
              responsive={responsive}
              ssr={true}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {product.images.map((image, index) => (
                <Image
                  key={index}
                  w="100%"
                  h="300px"
                  src={image.src}
                  alt={product.name}
                />
              ))}
            </Carousel>
          ) : (
            <Flex direction="column" p={10} alignItems={"center"}>
              <Box flex="1" alignSelf="center" mb={10}>
                <Image
                  w="90%"
                  h="600px"
                  display="block"
                  margin="0 auto"
                  src={mainImgSrc}
                  alt={product.name}
                  borderRadius={"12px"}
                />
              </Box>
              <HStack spacing={4}>
                {product.images.map((image, index) => (
                  <Image
                    key={index}
                    w="70px"
                    h="70px"
                    src={image.src}
                    alt={product.name}
                    onClick={() => handleImageClick(image.src)}
                    cursor="pointer"
                    borderRadius={"12px"}
                    border={
                      image.src === mainImgSrc ? "2px solid #333" : "none"
                    }
                    opacity={image.src === mainImgSrc ? "1" : "0.4"}
                  />
                ))}
              </HStack>
            </Flex>
          )}
        </Box>

        <Flex direction={"column"} gap={20}>
          <Text
            color="primary"
            fontSize="xx-large"
            textAlign={textAlignment}
            mt={6}
          >
            {product.name}
          </Text>
          {isVisible && isMobile && (
            <AddToCartButton
              style={{
                position: "fixed",
                bottom: 0,
                width: "100%",
                cursor: "pointer",
                borderRadius: "0",
                height: "70px",
                zIndex: 8888,
                alignItems: "center",
              }}
              onClick={handleAddToCart}
            >
              <FaShoppingCart style={{ marginRight: "10px" }} /> add to cart
            </AddToCartButton>
          )}

          {product.on_sale === true ? (
            <HStack padding={4}>
              <HStack gap={6}>
                <Text color="red" fontSize="x-large" fontWeight="bold">
                  € {product.price}
                </Text>
                <Text color="gray" as="s">
                  € {product.sale_price}
                </Text>
              </HStack>
              <Spacer />
              <Text color="red" fontSize="large" fontWeight="bold">
                SALE!
              </Text>
            </HStack>
          ) : (
            <>
              <Text color="primary" fontSize="x-large" fontWeight="bold">
                € {product.price}
              </Text>
            </>
          )}

          <Box padding={4}>
            <Box as="span" color="primary" marginRight={2}>
              Sold by
            </Box>
            <Text
              as="span"
              color="primary"
              fontWeight="bold"
              textDecoration="underline"
            >
              {product.store.shop_name}
            </Text>
            <HStack mt={8} gap={4}>
              <Rating
                emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                fullSymbol={<FontAwesomeIcon icon={fullStar} color="gold" />}
                initialRating={parseFloat(product.average_rating)}
                readonly
              />
              {reviews.length > 0 ? (
                <>
                  <Text
                    color="primary"
                    textDecoration="underline"
                    onClick={onOpen}
                  >
                    {reviews.length} customer reviews
                  </Text>
                  <Modal isOpen={isOpen} onClose={onClose} zIndex="9999">
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader color="primary">
                        Customer Reviews
                      </ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        {reviews.map((review) => {
                          return (
                            <VStack key={review.id} gap={4}>
                              <Text
                                color="primary"
                                fontWeight="bold"
                                textDecoration="underline"
                              >
                                {review.reviewer}
                              </Text>
                              <Text
                                color="primary"
                                dangerouslySetInnerHTML={{
                                  __html: review.review,
                                }}
                              />
                            </VStack>
                          );
                        })}
                      </ModalBody>
                      <ModalFooter>
                        <Button
                          bgColor="secondary"
                          color="primary"
                          mr={3}
                          onClick={onClose}
                        >
                          Close
                        </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </>
              ) : (
                <></>
              )}
            </HStack>

            <Box>
              {product.attributes.length > 0 ? (
                <Select
                  placeholder="Choose an option"
                  color="gray"
                  mt={8}
                  borderRadius={30}
                  width={breakpoint}
                  onChange={(e) => {
                    console.log("e:", e.target.value);
                    setSelectedAttribute(e.target.value);
                  }}
                >
                  {product.attributes[0].options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              ) : (
                <></>
              )}
            </Box>

            <Flex mt={8}>
              <IconButton
                onClick={decrement}
                aria-label="Decrease"
                borderRadius="full"
                bgColor="white"
                border="1px"
                borderColor="white"
                boxShadow="inset 0 0 3px gray"
                color="gray"
                icon={<MinusIcon />}
              />
              <Box
                border="1px solid"
                borderRadius="50%"
                padding={2}
                paddingLeft={4}
                paddingRight={4}
                mx="2"
                color="gray"
                boxShadow="inset 0 0 3px gray"
                borderColor="white"
              >
                {count}
              </Box>
              <IconButton
                onClick={increment}
                aria-label="Increase"
                borderRadius="full"
                bgColor="white"
                border="1px"
                borderColor="white"
                boxShadow="inset 0 0 3px gray"
                color="gray"
                icon={<AddIcon />}
              />
            </Flex>
            {/* <Box bgColor="gray" height={20} mt={10}>
              GIFT WRAPPING???
            </Box> */}

            <Flex
              display="flex"
              justifyContent={buttonAlignment}
              mt={10}
              ref={secondButtonRef}
            >
              <AddToCartButton
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  border: "none",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                }}
                onClick={handleAddToCart}
              >
                <FaShoppingCart style={{ marginRight: "10px" }} /> add to cart
              </AddToCartButton>
            </Flex>
            <Flex direction="column" mt={10} textAlign="left">
              <Text color="primary">
                Order before 15:00 hs and receive between <strong>19/04</strong>{" "}
                and <strong>21/04</strong>
              </Text>
              <Divider
                borderColor="gray.300"
                w="95%"
                alignSelf="center"
                mt={2}
                mb={5}
              />
              <Text color="primary" fontWeight="bold">
                Return paid by customer.
              </Text>
              <Divider
                borderColor="gray.300"
                w="95%"
                alignSelf="center"
                mt={2}
                mb={5}
              />
              <Text color="primary">
                <strong>14 days</strong> to change your mind
              </Text>
              <Divider
                borderColor="gray.300"
                w="95%"
                alignSelf="center"
                mt={2}
                mb={5}
              />
              <Text color="primary">
                This store offers Free Shipping for orders over{" "}
                <strong>€35</strong>
              </Text>
              <Divider
                borderColor="gray.300"
                w="95%"
                alignSelf="center"
                mt={2}
                mb={5}
              />

              <Text padding={4} color="primary" fontWeight="bold">
                Blue Labels
              </Text>
              {isDesktop ? (
                <Wrap justifyContent="center" gap={2}>
                  {blueLabels.map((label, i) => (
                    <Button
                      key={i}
                      bgColor="white"
                      color="primary"
                      borderRadius="30px"
                      paddingRight="20"
                      paddingLeft="20"
                      fontSize="sm"
                      style={{
                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                        width: "15%",
                        marginBottom: "1em",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {label}
                    </Button>
                  ))}
                </Wrap>
              ) : (
                <Carousel responsive={responsiveMultipleItems} arrows={false}>
                  {blueLabels.map((label, i) => (
                    <HStack key={i} spacing={0} padding={4}>
                      <Button
                        bgColor="primary"
                        color="white"
                        borderRadius="30px"
                        paddingLeft={12}
                        paddingRight={12}
                        fontSize="10px"
                        style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)" }}
                        w="fit-content"
                        overflowWrap="break-word"
                      >
                        {label}
                      </Button>
                    </HStack>
                  ))}
                </Carousel>
              )}
            </Flex>
          </Box>
        </Flex>
      </SimpleGrid>
    </>
  );
};
