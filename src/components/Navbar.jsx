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
  useColorModeValue 
} from "@chakra-ui/react";
import { SearchIcon, HamburgerIcon } from '@chakra-ui/icons'
import { FaShoppingCart, FaUser } from "react-icons/fa";

import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCategories } from '../state/thunks/categoriesThunks';

import logo_blueHouse from "../assets/logo_blueHouse.svg";

export const Navbar = () => {
  const bgColor = useColorModeValue("secondary", "primary");

  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.categories);

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  return (
    <Box>
      <Flex bg={bgColor} justify="center" py={2}>
        <Text color="primary">Free Shipping over €35</Text>
      </Flex>

      <Flex bg="white" justify="space-between" align="center" p={4}>
        <a href="/" style={{ textDecoration: 'none', cursor: 'pointer' }}>
          <Image src={logo_blueHouse} alt="Logo" />
        </a>
        <Flex>
          <IconButton aria-label="Account" icon={<FaUser />} color="primary" mx={2} borderRadius="full" bg="secondary" _hover={{ bg: "primary" }} />
          <IconButton aria-label="Shopping Cart" icon={<FaShoppingCart />} color="primary" mx={2} borderRadius="full" bg="secondary" _hover={{ bg: "primary" }} />
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
              color="primary"
              mx={2}
              _before={{ bg: "primary" }}
              _after={{ bg: "primary" }}
            />
              <MenuList>
                {categories.map(category => (
                <MenuItem key={category.id}>
                {category.name}
                </MenuItem>
                ))}
              </MenuList> 

          </Menu>

        </Flex>
      </Flex>

      <Flex justify="center" mx="2.5rem">
        <InputGroup mt={2} w="80%" borderRadius="2rem">
          <InputLeftElement>
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input type="search" placeholder="What are you looking for?" borderRadius="2rem" border="1px" borderColor="white" boxShadow="inset 0 0 3px gray" pl="2.5rem" />
        </InputGroup>
      </Flex>
    </Box>
  );
}
