import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../state/thunks/productsThunks";
import { fetchAllReviews } from "../state/thunks/reviewsThunks";
import { ProductGrid } from "../components/ProductGrid";
import { About } from "../components/About";

import { FilterSection } from "../components/FilterSection";

import { PeopleOpinions } from "../components/PeopleOpinions";
import { BrandClaims } from "../components/BrandClaims";
import { ShopByCategory } from "../components/ShopByCategory";
import { HeroBanner } from "../components/HeroBanner";
import { Image } from "@chakra-ui/react";

export const HomePage = () => {
  const dispatch = useDispatch();
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
      <HeroBanner />
      <ShopByCategory />
      <Image src="src/assets/BigCategory1.png" mt={10} mb={10} ml={2}></Image>
      <FilterSection />
      <ProductGrid />
      <PeopleOpinions />
      <BrandClaims />
      <About />
    </>
  );
};
