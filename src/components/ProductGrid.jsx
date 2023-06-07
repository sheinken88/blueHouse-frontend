import { useSelector } from "react-redux";
import { ProductCard } from "../common/ProductCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Center } from "@chakra-ui/react";

export const ProductGrid = () => {
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
      items: 1,
    },
  };

  const products = useSelector((state) => state.products.products);
  const isLoading = useSelector((state) => state.products.isLoading);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
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
  );
};
