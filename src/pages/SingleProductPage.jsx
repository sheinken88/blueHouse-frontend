import { PurchaseSettings } from "../components/singleProduct/PurchaseSettings";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchSingleProduct } from "../state/thunks/productsThunks";
import { Image, Text } from "@chakra-ui/react";

export const SingleProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);
  console.log("PRODUCT", product);

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [id]);

  if (
    !product ||
    !product.images ||
    !product.images[0] ||
    !product.images[0].src
  ) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <PurchaseSettings product={product} />
    </>
  );
};
