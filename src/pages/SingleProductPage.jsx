import { PurchaseSettings } from "../components/singleProduct/PurchaseSettings";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  fetchMultipleProductsByIds,
  fetchSingleProduct,
} from "../state/thunks/productsThunks";
import { Center, Image, Spinner, Text } from "@chakra-ui/react";
import { Review } from "../components/singleProduct/Review";
import { setViews } from "../state/slices/viewsSlice";
import { InfoDisplay } from "../components/singleProduct/InfoDisplay";
import { RelatedProducts } from "../components/singleProduct/RelatedProducts";
import { Contact } from "../components/singleProduct/Contact";

export const SingleProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);
  const relatedProducts = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
    dispatch(setViews(id));
  }, [id]);

  useEffect(() => {
    if (product?.related_ids) {
      dispatch(fetchMultipleProductsByIds(product.related_ids));
      console.log("related products: ", relatedProducts);
    }
  }, [product]);

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
      <InfoDisplay product={product} />
      <Review />
      <RelatedProducts relatedProducts={relatedProducts} />
      <Contact />
    </>
  );
};
