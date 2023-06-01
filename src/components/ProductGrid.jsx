import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../state/thunks/productsThunks";
import { ProductCard } from "../common/ProductCard";
import Grid from "@mui/material/Grid";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const ProductGrid = () => {
  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 1024, min: 800 },
  //     items: 5,
  //   },
  //   tablet: {
  //     breakpoint: { max: 800, min: 464 },
  //     items: 3,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };
  const prod = useSelector((state) => state.products.products);
  const isLoading = useSelector((state) => state.products.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    // <Carousel responsive={responsive}>
    //   {prod.map((item) => (
    //     <ProductCard key={item.id} item={item} />
    //   ))}
    // </Carousel>

    <Grid container spacing={2} direction={"horizontal"}>
      {prod.map((item) => (
        <Grid padding={2}>
          <ProductCard key={item.id} item={item} />
        </Grid>
      ))}
    </Grid>
  );
};
