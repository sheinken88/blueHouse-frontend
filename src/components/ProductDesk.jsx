import { useSelector } from "react-redux";
import { ProductCard } from "../common/ProductCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  Box,
  Center,
  Button,
  Stack,
  Text,
  Select,
  Spinner,
  HStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { CategoryCard } from "../common/CategoryCard";
import { useEffect, useState } from "react";
import axios from "axios";

export const ProductDesk = (category) => {
  console.log(category);
  const categories = useSelector((state) => state.categories.categories);

  const [id, setId] = useState();
  const [prodCat, setProdCat] = useState([]);

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
      items: 4,
    },
  };

  const handleCategorie = (e) => {
    setId(e);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/products/bycategory/${id}`)
      .then((res) => setProdCat(res.data));
  }, [id]);

  return (
    <div>
      <Box
        backgroundColor={"#F8F8F5"}
        direction={{ base: "column", md: "row" }}
        display={{ md: "flex" }}
        color={"#254787"}
        alignItems={"center"}
        h={{ md: "229px" }}
      >
        <Box
          alignContent={"center"}
          w={{ md: "40%" }}
          flexDirection={"column"}
          alignItems="center"
        >
          <Text fontSize={{ base: "15px", md: "30px" }}>
            Popular items at Bluehouse
          </Text>
          <Text
            fontSize={{ md: "22px" }}
            display={{ base: "none", md: "block" }}
          >
            Discover our top rated products and categories.
          </Text>
        </Box>
        <Box w="75%" mx="auto" maxH={"auto"}>
          <Carousel
            responsive={responsive}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            keyBoardControl={true}
            infinite="true"
            focusOnSelect="true"
          >
            {categories.map((category) => (
              <Center
                mt={{ md: 75 }}
                fontWeight={"normal"}
                h={{ base: "auto", md: "130px" }}
                w={{ base: "45px", md: "130px" }}
                colorScheme="none"
                key={category.id}
                onClick={() => {
                  handleCategorie(category.id);
                }}
              >
                <CategoryCard category={category} />
              </Center>
            ))}
          </Carousel>
        </Box>
      </Box>
      <Text>Shop with a purpose!</Text>
      <Box
        direction={{ base: "column", md: "row" }}
        display={{ md: "flex" }}
        justifyContent={"space-evenly"}
      >
        <Button
          w={"256px"}
          h={"64px"}
          borderRadius={"full"}
          backgroundColor="#D4D9FF"
          color={"#254787"}
        >
          All Filters
        </Button>

        <Select
          w={"298px"}
          h={"50px"}
          borderRadius={"full"}
          placeholder="Sort by"
          color={"#254787"}
          size={"xs"}
          display={{ base: "none", md: "block" }}
        >
          <option value="option1">Product Name (A - Z)</option>
          <option value="option2">Product Name (Z - A)</option>
          <option value="option3">Price (Lowest)</option>
          <option value="option4">Price (Highest)</option>
          <option value="option5">Date (New)</option>
          <option value="option6">Date (Old)</option>
        </Select>
      </Box>
      <Wrap spacing={{ base: "50px", md: "200px" }} p={5}>
        {prodCat.map((product) => (
          <Center>
            <ProductCard key={product.id} product={product} />
          </Center>
        ))}
      </Wrap>
    </div>
  );
};
