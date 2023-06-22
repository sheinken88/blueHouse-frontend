import React from "react";
import {
  Box,
  HStack,
  Flex,
  Spacer,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SubItemMenuDesktop } from "../common/SubItemMenuDesktop";
import NetherlandsFlag from "../assets/language.png";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import he from "he";
import {
  fetchProductsByCategory,
  fetchProductsByType,
} from "../state/thunks/productsThunks";

export const MenuDesktop = ({ categories }) => {
  const dispatch = useDispatch();
  const categoriesMap = categories;
  const subCategories = useSelector((state) => state.categories.subCategories);
  const [toggleCategories, setToggleCategories] = useState(false);
  const [chosenCategory, setChosenCategory] = useState(null);
  const [chosenSubCategories, setChosenSubCategories] = useState(null);

  const handleClickCategories = () => {
    toggleCategories ? setToggleCategories(false) : setToggleCategories(true);
  };

  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkToAbout = () => {
    navigate("/aboutus");
    setToggleCategories(false)
  };

  const handleOnSale = () => {
    dispatch(fetchProductsByType("on_sale"));
    if (location != "/productdesk") {
      navigate("/productdesk");
    }
  };

  const subCat = [];

  const handleCategorySelector = (event) => {
    categories.map((category) => {
      if (category.name === event.target.innerHTML) {
        setChosenCategory(category);
        subCategories.map((subcategory) => {
          if (subcategory.parent === category.id) {
            subCat.push(subcategory);
          }
        });
        setChosenSubCategories(subCat);
      }
    });
  };

  const handleSubCategorySelector = (event) => {
    chosenSubCategories.map((subcategory) => {
      if (event.target.innerHTML === subcategory.name) {
        dispatch(fetchProductsByCategory(subcategory.id));
        navigate(`/productdesk/`);
        setToggleCategories(false)
      }
    });
  };

  return (
    <>
      <HStack
        sx={{
          mt: "1rem",
          px: "3rem",
          color: "#22488B",
        }}
      >
        <Box as={Link} to={"/productdesk"}>
          Store
        </Box>
        <Spacer />
        <Box onClick={handleClickCategories} cursor={"pointer"}>Categories</Box>
        <Spacer />
        <Box>Shop all</Box>
        <Spacer />
        <Box>
          <Button
            onClick={handleOnSale}
            variant="unstyled"
            fontWeight="normal"
            colorScheme="#22488B"
          >
            Sale
          </Button>
        </Box>
        <Spacer />
        <Box>Mother's Day</Box>
        <Spacer />
        <Spacer />
        <Spacer />
        <Box>Blog</Box>
        <Spacer />
        <Box onClick={handleLinkToAbout} cursor={"pointer"}>Our Values</Box>
        <Spacer />
        <Box>
          <Image
            w="1rem"
            src={NetherlandsFlag}
            alt="netherlands_flag"
            mx="auto"
          />
        </Box>
      </HStack>
      <HStack sx={{ alignItems: "top" }}>
        {toggleCategories && (
          <Box
            sx={{
              mt: "1rem",
              borderTopWidth: "0.5px",
              px: "1.5rem",
              color: "#22488B",
            }}
          >
            <Box sx={{ w: "25vw", borderRightWidth: "0.5px" }}>
              <Text
                sx={{
                  p: "2rem",
                  fontSize: 24,
                  fontWeight: "bold",
                }}
              >
                All Categories
              </Text>
              {categoriesMap.map((category) => (
                <Flex key={category.id} onClick={handleCategorySelector}>
                  <SubItemMenuDesktop category={category} />
                  <Spacer />
                  <ArrowForwardIcon sx={{ m: "1rem" }} />
                </Flex>
              ))}
            </Box>
          </Box>
        )}
        {toggleCategories && chosenCategory && chosenSubCategories && (
          <Box
            sx={{
              mt: "1rem",
              borderTopWidth: "0.5px",
              px: "1.5rem",
              color: "#22488B",
            }}
          >
            <Box sx={{ w: "25vw", borderRightWidth: "0.5px" }}>
              <Text
                sx={{
                  p: "2rem",
                  fontSize: 24,
                  fontWeight: "bold",
                }}
              >
                {he.decode(chosenCategory.name)}
              </Text>
              {chosenSubCategories.map((subcategory) => (
                <Box key={subcategory.id} onClick={handleSubCategorySelector}>
                  <SubItemMenuDesktop category={subcategory} />
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </HStack>
    </>
  );
};
