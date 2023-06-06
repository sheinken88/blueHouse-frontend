import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect } from "react";
import { fetchAllCategories } from "../state/thunks/categoriesThunks";
import { CategoryCard } from "../common/CategoryCard";
import { Box } from "@chakra-ui/react";

export const ShopByCategory = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  const responsive = {
    desktop: {
      breakpoint: { max: 2560, min: 1920 },
      items: 10,
    },
    medial: {
      breakpoint: { max: 1920, min: 990 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 990, min: 600 },
      items: 5,
    },
    smartphone: {
      breakpoint: { max: 600, min: 425 },
      items: 3,
    },

    mobile: {
      breakpoint: { max: 425, min: 0 },
      items: 2,
    },
  };

  return (
    <Box maxW="1020px" mx="auto">
      <Carousel responsive={responsive}>
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </Carousel>
    </Box>
  );
};
