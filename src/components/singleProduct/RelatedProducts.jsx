import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductCard } from "../../common/ProductCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Center, Heading, Text } from "@chakra-ui/react";

export const RelatedProducts = ({ relatedProducts }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3500, min: 1441 },
      items: 5,
    },
    laptop: {
      breakpoint: { max: 769, min: 1440 },
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
    <>
      {relatedProducts.map((product) => (
        <Text key={product.id}>{product.name}</Text>
      ))}
    </>
  );
};
