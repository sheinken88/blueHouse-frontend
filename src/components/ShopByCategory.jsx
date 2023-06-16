import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect } from "react";
import { fetchAllCategories } from "../state/thunks/categoriesThunks";
import { CategoryCard } from "../common/CategoryCard";
import { Box, Stack, Text, Wrap } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { fetchProductsByCategory } from "../state/thunks/productsThunks";

export const ShopByCategory = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  // const handleClick = (e) => {
  //   console.log("SOY LA CATEGORIA SELECCIONADA", e);
  //   dispatch(fetchProductsByCategory(e));
  // };

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
    <Box maxW="1500px" mx="auto" p="4">
      <Text p="4" sx={{ fontSize: 25, fontWeight: 700, color: "#254787" }}>
        Shop By Top Categories
      </Text>
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        keyBoardControl={true}
        infinite="true"
      >
        {categories.map((category) => (
          // <Wrap
          //   onClick={() => {
          //     handleClick(category.id);
          //   }}
          //   key={category.id}
          //   as={Link}
          //   to={`/productdesk/`}
          // >
          <CategoryCard key={category.id} category={category} />
          //</Wrap>
        ))}
      </Carousel>
    </Box>
  );
};
