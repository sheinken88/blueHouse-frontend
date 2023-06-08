import { PurchaseSettings } from "../components/singleProduct/PurchaseSettings";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchSingleProduct } from "../state/thunks/productsThunks";
import { Center, Image, Spinner, Text } from "@chakra-ui/react";
import { Review } from "../components/singleProduct/Review";

export const SingleProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [id]);

  if (
    !product ||
    !product.images ||
    !product.images[0] ||
    !product.images[0].src
  ) {
    return (
      <Center m={10}>
        <Spinner
          thickness="4px"
          speed="o.65s"
          emptyColor="#D4D9FF"
          color="#22488B"
          size="xl"
        />
      </Center>
    );
  }

  return (
    <>
      <PurchaseSettings product={product} />
      <Review />
    </>
  );
};
