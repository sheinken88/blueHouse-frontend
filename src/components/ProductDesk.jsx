import { useSelector } from "react-redux";
import { ProductCard } from "../common/ProductCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { SearchIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
  Box,
  Center,
  Button,
  Checkbox,
  Text,
  Select,
  RangeSlider,
  RangeSliderTrack,
  Wrap,
  RangeSliderFilledTrack,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
  RangeSliderThumb,
  Input,
  InputGroup,
  InputRightElement,
  Collapse,
} from "@chakra-ui/react";
import { CategoryCard } from "../common/CategoryCard";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { SubItemMenu } from "../common/SubItemMenu";
import blueLabels from "../utils/blue_labels";

export const ProductDesk = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const categories = useSelector((state) => state.categories.categories);
  const products = useSelector((state) => state.products.products);

  console.log("SOY PRODUCT EN PRODUCT DESK", products);

  const [id, setId] = useState();
  const [sliderValues, setSliderValues] = useState([150, 350]);
  const [showBluelabels, setShowBluelabels] = useState(false);
  const [showBrands, setShowBrands] = useState(false);

  const AllBlueLabels = blueLabels;

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
    console.log("SOY LO QUE ELEGIS DE CATEGORIA", e);
    // setId(e);
  };

  const handleSliderChange = (newValues) => {
    setSliderValues(newValues);
  };

  const handleClickBluelabels = () => {
    setShowBluelabels(!showBluelabels);
  };

  const handleClickBrands = () => {
    setShowBrands(!showBrands);
  };

  useEffect(() => {
    const obj = { store: 62 };

    axios
      .post(`http://localhost:8080/api/products/filtered`, obj)

      .then((res) => console.log("SOY LO QUE LLEGA DEL BACK A PD", res.data));
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
        overflowY={"hidden"}
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
          <Center>
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
                  backgroundColor="none"
                  key={category.id}
                  onClick={() => {
                    handleCategorie(category.id);
                  }}
                >
                  <CategoryCard category={category} />
                </Center>
              ))}
            </Carousel>
          </Center>
        </Box>
      </Box>
      <Text m={4} fontSize={{ md: "30px" }} color={"#254787"}>
        Shop with a purpose!
      </Text>
      <Box
        m={4}
        direction={{ base: "column", md: "row" }}
        display={{ md: "flex" }}
        justifyContent={"space-between"}
      >
        <Button
          maxW={"256px"}
          maxH={"64px"}
          borderRadius={"full"}
          backgroundColor="#D4D9FF"
          color={"#254787"}
          ref={btnRef}
          onClick={onOpen}
          fontSize={{ base: "15px" }}
          fontWeight={"normal"}
        >
          All Filters
        </Button>

        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
          size={{ base: "full", md: "sm" }}
        >
          <DrawerOverlay />
          <DrawerContent color={"#254787"}>
            <DrawerHeader mt={3}>FILTERS</DrawerHeader>

            <DrawerBody>
              <Box>
                <Text>CATEGORIES</Text>
                {categories.map((category) => (
                  <SubItemMenu
                    key={category.id}
                    category={category}
                    id={category.id}
                  />
                ))}
              </Box>

              <Box>
                <Text>Special offers</Text>
                <Stack p={4} color="#254787">
                  <Checkbox>Free shipping</Checkbox>
                  <Checkbox defaultChecked color="#254787">
                    On sale
                  </Checkbox>
                </Stack>
              </Box>

              <Box>
                <Text>Blue labels (Values)</Text>
                <Stack p={4} color="#254787">
                  <Collapse startingHeight={100} in={showBluelabels}>
                    {AllBlueLabels.map((blueLabel) => (
                      <Stack key={blueLabel.id}>
                        <Checkbox>{blueLabel.name}</Checkbox>
                      </Stack>
                    ))}
                  </Collapse>
                  <Button
                    size="sm"
                    onClick={handleClickBluelabels}
                    mt="1rem"
                    colorScheme="none"
                    color={"#254787"}
                  >
                    Show {showBluelabels ? "Less" : "More"}
                  </Button>
                </Stack>
              </Box>

              <Box>
                <Text>Price</Text>
                <Box pt={6} pb={2}>
                  <RangeSlider
                    min={1}
                    max={500}
                    aria-label={["min", "max"]}
                    defaultValue={sliderValues}
                    onChange={handleSliderChange}
                  >
                    <RangeSliderTrack>
                      <RangeSliderFilledTrack backgroundColor={"#0068FF"} />
                    </RangeSliderTrack>

                    <RangeSliderThumb
                      color={"white"}
                      index={0}
                      backgroundColor={"#0068FF"}
                      value={sliderValues[0]}
                      textAlign="center"
                      w="35px"
                      h="35px"
                    >
                      {sliderValues[0]}
                    </RangeSliderThumb>
                    <RangeSliderThumb
                      color={"white"}
                      index={1}
                      backgroundColor={"#0068FF"}
                      value={sliderValues[1]}
                      textAlign="center"
                      w="35px"
                      h="35px"
                    >
                      {sliderValues[1]}
                    </RangeSliderThumb>
                  </RangeSlider>
                  <Stack direction={"row"} justifyContent={"space-around"}>
                    <Text left={0} top={-4}>
                      1
                    </Text>
                    <Text right={0} top={-4}>
                      500
                    </Text>
                  </Stack>
                </Box>
              </Box>

              <Box>
                <Text>Brand</Text>
                <Stack p={4} color="#254787">
                  <InputGroup>
                    <InputRightElement>
                      <SearchIcon />
                    </InputRightElement>
                    <Input placeholder="Search" borderRadius={"full"}></Input>
                  </InputGroup>
                </Stack>
              </Box>

              <Box>
                <Stack p={4} color="#254787">
                  <Collapse startingHeight={100} in={showBrands}>
                    {AllBlueLabels.map((blueLabel) => (
                      <Stack key={blueLabel.id}>
                        <Checkbox>{blueLabel.name}</Checkbox>
                      </Stack>
                    ))}
                  </Collapse>
                  <Button
                    size="sm"
                    onClick={handleClickBrands}
                    mt="1rem"
                    colorScheme="none"
                    color={"#254787"}
                  >
                    Show {showBrands ? "Less" : "More"}
                  </Button>
                </Stack>
              </Box>
            </DrawerBody>

            <DrawerFooter justifyContent={"space-between"}>
              <Button
                variant={"outline"}
                border={"2px"}
                borderColor={"#D2D7FD"}
                w={"150px"}
                h={"40px"}
                color={"#254787"}
                borderRadius={"full"}
                fontWeight={"normal"}
              >
                Cancel
              </Button>
              <Button
                w={"150px"}
                h={"40px"}
                backgroundColor={"#D2D7FD"}
                color={"#254787"}
                borderRadius={"full"}
                fontWeight={"normal"}
              >
                Apply filter
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

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
      <Center>
        <Wrap spacing={{ base: "50px", md: "200px" }} p={5}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Wrap>
      </Center>
    </div>
  );
};
