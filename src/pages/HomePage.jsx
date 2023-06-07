import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../state/thunks/productsThunks";
import { fetchAllReviews } from "../state/thunks/reviewsThunks";
import { ProductGrid } from "../components/ProductGrid";
import { About } from "../components/About";

import { FilterSection } from "../components/FilterSection";


import { PeopleOpinions } from "../components/PeopleOpinions";
import { NewsLetter } from "../components/NewsLetter";
import { BrandClaims } from "../components/BrandClaims";
import { ShopByCategory } from "../components/ShopByCategory";
import { HeroBanner } from "../components/HeroBanner";

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
      <FilterSection />
      <ProductGrid />
      <PeopleOpinions />
      <BrandClaims/>
      <About />
      <NewsLetter />
    </>
  );
};
