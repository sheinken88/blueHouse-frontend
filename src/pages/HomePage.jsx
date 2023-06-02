import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../state/thunks/productsThunks";
import { ProductGrid } from "../components/ProductGrid";

import { PrimaryButton, SecondaryButton, AddToCartButton } from "../common/Buttons";

export const HomePage = () => {
  const dispatch = useDispatch();
  // const products = useSelector((state) => state.products.products);
  const isLoading = useSelector((state) => state.products.isLoading);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <PrimaryButton>Primary Btn</PrimaryButton>
      <SecondaryButton>Secondary Btn</SecondaryButton>
      <AddToCartButton>Add to cart</AddToCartButton>
      <ProductGrid />

      {/* {products.slice(0, 1).map((product) => (
        <div key={product.id}>{product.name}</div>
      ))} */}
    </>
  );
};
