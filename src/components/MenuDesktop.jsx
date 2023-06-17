import React from "react";
import {
  Box,
  Tabs,
  TabList,
  Tab,
  TabIndicator,
  Spacer,
  Image,
} from "@chakra-ui/react";

export const MenuDesktop = () => {
  return (
    <Box maxW="1500px" mx="auto" p="4" display={{ base: "none", md: "block" }}>
      <Tabs position="relative" variant="unstyled">
        <TabList
          sx={{
            w: "100%",
            my: 3,
            color: "#22488B",
            size: 20,
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Tab>Store</Tab>
          <Spacer />
          <Tab>Categories</Tab>
          <Spacer />
          <Tab>Shop all</Tab>
          <Spacer />
          <Tab>Sale</Tab>
          <Spacer />
          <Tab>Mother's Day</Tab>
          <Spacer />
          <Tab>Blog</Tab>
          <Spacer />
          <Tab>Our Values</Tab>
          <Spacer />
          <Tab>
            <Image
              w="100%"
              src="src/assets/language.png"
              alt="Hero_Banner.jpg"
              mx="auto"
            />
          </Tab>
        </TabList>

        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="blue.500"
          borderRadius="1px"
        />
      </Tabs>
    </Box>
  );
};
