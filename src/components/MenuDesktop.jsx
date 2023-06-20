import React from "react";
import { Box, HStack, Spacer, Image, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { SubItemMenuDesktop } from "../common/SubItemMenuDesktop";
import NetherlandsFlag from "../assets/language.png";

export const MenuDesktop = ({ categories }) => {
  const categoriesMap = categories;
  const subCategories = useSelector((state) => state.categories.subCategories);
  const [toggleCategories, setToggleCategories] = useState(false);
  const [chosenCategory, setChosenCategory] = useState(null);
  const [chosenSubCategories, setChosenSubCategories] = useState(null);

  const handleClickCategories = () => {
    toggleCategories ? setToggleCategories(false) : setToggleCategories(true);
  };

  const navigate = useNavigate();

  const handleLinkToAbout = () => {
    navigate("/aboutus");
  };

  const subCat = [];

  const handleCategorySelector = (event) => {
    categories.map((category) => {
      if (category.name === event.target.innerHTML) {
        setChosenCategory(category);
      }
    });
    subCategories.map((subcategory) => {
      if (subcategory.parent === chosenCategory.id) {
        subCat.push(subcategory);
      }
    });
    setChosenSubCategories(subCat)
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
        <Box onClick={handleClickCategories}>Categories</Box>
        <Spacer />
        <Box as={Link} to={"/productdesk"}>
          Shop all
        </Box>
        <Spacer />
        <Box>Sale</Box>
        <Spacer />
        <Box>Mother's Day</Box>
        <Spacer />
        <Spacer />
        <Spacer />
        <Box>Blog</Box>
        <Spacer />
        <Box onClick={handleLinkToAbout}>Our Values</Box>
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
                <Box key={category.id} onClick={handleCategorySelector}>
                  <SubItemMenuDesktop category={category} />
                </Box>
              ))}
            </Box>
          </Box>
        )}
        {toggleCategories && chosenCategory && (
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
                {chosenCategory.name}
              </Text>
              {chosenSubCategories.map((subcategory) => (
                <Box key={subcategory.id}>
                  <SubItemMenuDesktop category={subcategory} />
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </HStack>
      {/* {subCat.map((subCategory) => (
          <Box
            key={category.id}
            as={Link}
            to="/"
            sx={{ fontSize: 12, pb: "2px", pl: 10 }}
          >
            {subCategory.name}
          </Box>
        ))} */}
    </>
  );
};
