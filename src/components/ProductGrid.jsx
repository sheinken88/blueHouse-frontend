import { useSelector } from "react-redux";
import { ProductCard } from "../common/ProductCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Center } from "@chakra-ui/react";

export const ProductGrid = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 2560, min: 768 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
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
      showDots={true}
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      keyBoardControl={true}
    >
      {products.map((product) => (
        <Center>
          <ProductCard key={product.id} product={product} />
        </Center>
      ))}
    </Carousel>
    // <Grid container spacing={2} direction={"horizontal"}>
    //   {prod.map((item) => (
    //     <Grid padding={2}>
    //       <ProductCard key={item.id} item={item} />
    //     </Grid>
    //   ))}
    // </Grid>
  );
};
