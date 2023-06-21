import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductCard } from "../../common/ProductCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Center, Flex, Heading, Text, VStack } from "@chakra-ui/react";

export const RelatedProducts = ({ relatedProducts }) => {
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

  return (
    <Box mt={"50px"} color={"#254787"} padding={4}>
      <Heading fontSize={{ base: "18px", md: "40px" }} fontWeight={"semibold"}>
        YOU MIGHT ALSO LIKE
      </Heading>
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        keyBoardControl={true}
        infinite={true}
        focusOnSelect={true}
      >
        {relatedProducts.map((product) => (
          <Center key={product.id}>
            <ProductCard key={product.id} product={product} />
          </Center>
        ))}
      </Carousel>
    </Box>
  );
};
