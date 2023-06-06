import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../state/thunks/productsThunks";
import { fetchAllReviews } from "../state/thunks/reviewsThunks";
import { ProductGrid } from "../components/ProductGrid";
import { About } from "../components/About";
import { PeopleOpinions } from "../components/PeopleOpinions";

export const HomePage = () => {
  const dispatch = useDispatch();
  // const products = useSelector((state) => state.products.products);
  const isLoading = useSelector((state) => state.products.isLoading);

  useEffect(() => {
    dispatch(fetchAllProducts());
    dispatch(fetchAllReviews());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ProductGrid />
      <PeopleOpinions />
      <About />
    </>
  );
};
