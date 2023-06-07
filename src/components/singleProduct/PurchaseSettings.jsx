import { useEffect, useState } from "react";
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
} from "@chakra-ui/react";
import { GrFavorite } from "react-icons/gr";
import { AddToCartButton } from "../../common/Buttons";
import { useSelector } from "react-redux";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { useDisclosure } from "@chakra-ui/react";

export const PurchaseSettings = ({ product }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isScrolled, setIsScrolled] = useState(false);
  const reviews = useSelector((state) => state.reviews.reviews);

  const checkScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    console.log("REVIEWS: ", reviews);
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <>
      <Box position="relative" mt={6} mb={40}>
        <IconButton
          icon={<GrFavorite size="24px" />}
          borderRadius="full"
          position="absolute"
          bgColor="white"
          top={8}
          right={2}
          zIndex={1}
        />
        <Image
          w="100%"
          h="300px"
          src={product.images[0].src}
          alt={product.name}
        />
        <Text color="primary" fontSize="xx-large" textAlign="center" mt={6}>
          {product.name}
        </Text>
        <AddToCartButton
          style={{
            position: isScrolled ? "static" : "fixed",
            bottom: isScrolled ? undefined : 0,
            width: isScrolled ? undefined : "100%",
            display: isScrolled ? "none" : "block",
            cursor: "pointer",
            borderRadius: "0",
            height: "70px",
          }}
        >
          add to cart
        </AddToCartButton>

        {isScrolled &&
          (product.on_sale === true ? (
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
          ))}
        {isScrolled && (
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
            <HStack mt={4} gap={4}>
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
                  <Modal isOpen={isOpen} onClose={onClose}>
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
                              <Text color="primary">{review.review}</Text>
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
              {/* {product.categories[0].name === "Footwear" ? () : ()} */}
            </HStack>
          </Box>
        )}
      </Box>
    </>
  );
};
