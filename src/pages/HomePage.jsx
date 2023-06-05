import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../state/thunks/productsThunks";
import { ProductGrid } from "../components/ProductGrid";
import { About } from "../components/About";
import { NewsLetter } from "../components/NewsLetter";

export const HomePage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.products.isLoading);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ProductGrid />
      <About />
      <NewsLetter />
    </>
  );
};
