import { useSelector } from "react-redux";
import { ProductCard } from "../common/ProductCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Center, Heading } from "@chakra-ui/react";

export const ProductGrid = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3500, min: 1441 },
      items: 5,
    },
    laptop: {
      breakpoint: { max: 1440, min: 769 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 426 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 425, min: 0 },
      items: 2,
    },
  };

  const products = useSelector((state) => state.products.products);
  const isLoading = useSelector((state) => state.products.isLoading);

  if (isLoading) {
    return (
      <Center>
        <Spinner
          maxW="321.79px"
          maxH="321.79px"
          mb={10}
          mt={10}
          thickness="4px"
          speed="0.65s"
          emptyColor="#D4D9FF"
          color="#22488B"
          size="xl"
        />
      </Center>
    );
  }

  return (
    <Box maxW="95%" mx="auto" p="4" mt={"50px"} color={"#254787"}>
      <Heading fontSize={{ base: "18px", md: "40px" }} fontWeight={"semibold"}>
        Summer Essentials
      </Heading>
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        keyBoardControl={true}
        infinite={true}
        focusOnSelect={true}
      >
        {products.map((product) => (
          <Center key={product.id}>
            <ProductCard key={product.id} product={product} />
          </Center>
        ))}
      </Carousel>
    </Box>
  );
};
