import {
  Box,
  Flex,
  IconButton,
  InputGroup,
  Input,
  InputLeftElement,
  Text,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  useMediaQuery,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
} from "@chakra-ui/react";
import { CloseIcon, SearchIcon, HamburgerIcon } from "@chakra-ui/icons";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllCategories,
  fetchSubCategories,
} from "../state/thunks/categoriesThunks";
import { MenuDesktop } from "./MenuDesktop";
import logo_blueHouse from "../assets/logo_blueHouse.svg";
import { SubItemMenu } from "../common/SubItemMenu";
import {
  fetchFilteredProducts,
  fetchProductsByType,
} from "../state/thunks/productsThunks";

export const Navbar = () => {
  const [mobileDesign] = useMediaQuery("(max-width: 425px)");
  const bgColor = useColorModeValue("secondary", "primary");
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const [categoriesDispatched, setCategoriesDispatched] = useState(null);
  const [subCategoriesDispatched, setSubCategoriesDispatched] = useState(null);
  const [request, setRequest] = useState("");

  const runEffect = async () => {
    const data = await dispatch(fetchAllCategories());
    setCategoriesDispatched(true);
  };

  useEffect(() => {
    runEffect();
  }, []);

  useEffect(() => {
    if (categoriesDispatched && !subCategoriesDispatched) {
      categories.map((category) => {
        dispatch(fetchSubCategories(category.id));
      });
      setSubCategoriesDispatched(true);
    }
  }, [categoriesDispatched]);

  const handleInput = (e) => {
    setRequest(`search=${e.target.value}`);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      dispatch(fetchFilteredProducts(request));
      if (location != "/productdesk") {
        navigate("/productdesk");
      }
    }
  };

  const handleOnSale = () => {
    dispatch(fetchProductsByType("on_sale"));
  };

  return (
    <Box>
      <Flex bg={bgColor} justify="center" py={2}>
        <Text color="primary">Free Shipping over €35</Text>
      </Flex>
      <Flex bg="white" justify="space-between" align="center" p={4}>
        <a href="/" style={{ textDecoration: "none", cursor: "pointer" }}>
          <Image src={logo_blueHouse} alt="Logo" />
        </a>
        {mobileDesign ? (
          <></>
        ) : (
          <Flex>
            <InputGroup>
              <InputLeftElement>
                <SearchIcon color="gray.300" />
              </InputLeftElement>
              <Input
                type="search"
                placeholder="What are you looking for?"
                px={"14rem"}
                borderRadius="2rem"
                border="1px"
                borderColor="white"
                boxShadow="inset 0 0 3px gray"
                onChange={handleInput}
                onKeyDown={handleSearch}
              />
            </InputGroup>
          </Flex>
        )}
        <Flex>
          <IconButton
            aria-label="Account"
            icon={<FaUser />}
            color="primary"
            mx={2}
            borderRadius="full"
            bg="secondary"
            _hover={{ bg: "primary" }}
          />
          <IconButton
            as={Link}
            to="/cart"
            aria-label="Shopping Cart"
            icon={<FaShoppingCart />}
            color="primary"
            mx={2}
            borderRadius="full"
            bg="secondary"
            _hover={{ bg: "primary" }}
          />
          {mobileDesign ? (
            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    variant="outline"
                    color="primary"
                    mx={1}
                    _before={{ bg: "primary" }}
                    _after={{ bg: "primary" }}
                    isActive={isOpen}
                  >
                    {isOpen ? <CloseIcon /> : <HamburgerIcon />}
                  </MenuButton>
                  <MenuList>
                    <Flex justify="center" mx="2.5rem">
                      <InputGroup mt={2} w="83%" borderRadius="2rem">
                        <InputLeftElement>
                          <SearchIcon color="gray.300" />
                        </InputLeftElement>
                        <Input
                          type="search"
                          placeholder="What are you looking for?"
                          borderRadius="2rem"
                          border="1px"
                          borderColor="white"
                          boxShadow="inset 0 0 3px gray"
                          mb="1rem"
                        />
                      </InputGroup>
                    </Flex>

                    {categories.map((category) => (
                      <MenuItem
                        key={category.id}
                        w="400px"
                        closeOnSelect={false}
                      >
                        <SubItemMenu category={category} />
                      </MenuItem>
                    ))}
                    <Box
                      sx={{
                        color: "primary",
                        pl: "2.5rem",
                        py: "1rem",
                        borderTop: "1px",
                        borderBottom: "1px",
                        borderColor: "#F5F5F5",
                      }}
                    >
                      <Link to="/productdesk">SHOP ALL</Link>
                    </Box>
                    <Box
                      sx={{
                        color: "primary",
                        pl: "2.5rem",
                        py: "1rem",
                        borderBottom: "1px",
                        borderColor: "#F5F5F5",
                      }}
                    >
                      <Link onClick={handleOnSale} to={"/productdesk"}>
                        SALE
                      </Link>
                    </Box>
                    <Box
                      sx={{
                        color: "primary",
                        pl: "2.5rem",
                        py: "1rem",
                        borderBottom: "1px",
                        borderColor: "#F5F5F5",
                      }}
                    >
                      BLOG
                    </Box>
                    <Box
                      sx={{
                        color: "primary",
                        pl: "2.5rem",
                        py: "1rem",
                        borderBottom: "1px",
                        borderColor: "#F5F5F5",
                      }}
                    >
                      <Link to="/aboutus">OUR VALUES</Link>
                    </Box>
                    <Accordion
                      sx={{
                        bg: "#D4D9FF",
                        color: "primary",
                      }}
                      allowMultiple
                    >
                      <AccordionItem>
                        <AccordionButton>
                          <Box
                            pl={"1.5rem"}
                            py={"1rem"}
                            flex="1"
                            textAlign="left"
                          >
                            Customer Service
                          </Box>
                          <AccordionIcon sx={{ w: "30%" }} />
                        </AccordionButton>
                      </AccordionItem>
                    </Accordion>
                  </MenuList>
                </>
              )}
            </Menu>
          ) : (
            <></>
          )}
        </Flex>
      </Flex>
      {mobileDesign ? (
        <Flex justify="center" mx="2.5rem">
          <InputGroup mt={2} w="80%" borderRadius="2rem">
            <InputLeftElement>
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input
              type="search"
              placeholder="What are you looking for?"
              borderRadius="2rem"
              border="1px"
              borderColor="white"
              boxShadow="inset 0 0 3px gray"
              pl="2.5rem"
              onChange={handleInput}
              onKeyDown={handleSearch}
            />
          </InputGroup>
        </Flex>
      ) : (
        <></>
      )}

      {mobileDesign ? <></> : <MenuDesktop categories={categories} />}
    </Box>
  );
};
