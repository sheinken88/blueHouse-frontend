import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductCard } from "../common/ProductCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { fetchAllProducts } from "../state/thunks/productsThunks";
import { CarrouselGeneric } from "./CarrouselGeneric";

export const OLD_ProductGrid = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 2560, min: 768 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 768, min: 425 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 425, min: 0 },
      items: 1,
    },
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const prod = useSelector((state) => state.products.products);
  const isLoading = useSelector((state) => state.products.isLoading);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Carousel responsive={responsive}>
      {prod.map((item) => (
        <ProductCard key={item.id} item={item} />
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
