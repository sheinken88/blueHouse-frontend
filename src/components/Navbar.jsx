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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
} from "@chakra-ui/react";
import { CloseIcon, SearchIcon, HamburgerIcon } from "@chakra-ui/icons";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategories } from "../state/thunks/categoriesThunks";

import logo_blueHouse from "../assets/logo_blueHouse.svg";
import { ImageMenuItem } from "../common/ImageMenuItem";
import { SubItemMenu } from "../common/SubItemMenu";

export const Navbar = () => {
  const bgColor = useColorModeValue("secondary", "primary");

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  return (
    <Box>
      <Flex bg={bgColor} justify="center" py={2}>
        <Text color="primary">Free Shipping over €35</Text>
      </Flex>

      <Flex bg="white" justify="space-between" align="center" p={4}>
        <a href="/" style={{ textDecoration: "none", cursor: "pointer" }}>
          <Image src={logo_blueHouse} alt="Logo" />
        </a>
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
                    <MenuItem key={category.id} w="400px" closeOnSelect={false}>
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
                    <Link to="/pd">SHOP ALL</Link>
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
                    <Link to="/pd">SALE</Link>
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
        </Flex>
      </Flex>

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
          />
        </InputGroup>
      </Flex>
    </Box>
  );
};
