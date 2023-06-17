import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLastViewProducts } from "../state/slices/lastViewsProdSlice";
import { Box, Center, Heading, Text, Wrap } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import { ProductCard } from "../common/ProductCard";

export const LastViews = () => {
  const ids = JSON.parse(localStorage.getItem("lastViews")).lastViews;

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/products/ids?include=${ids}`)
      .then((res) => {
        dispatch(setLastViewProducts(res.data));
      })
      .catch((error) => error.log);
  }, []);

  const lastProducts = useSelector((state) => state.lastviewprod.lastProd);
  const isLoading = useSelector((state) => state.products.isLoading);

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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Box maxW="1500px" mx="auto" p="4">
      <Text p="4" sx={{ fontSize: 25, fontWeight: 700, color: "#254787" }}>
        Last Views
      </Text>
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        keyBoardControl={true}
        infinite="true"
      >
        {lastProducts.map((views) => (
          <Wrap key={views.id}>
            <ProductCard key={views.id} product={views} />
          </Wrap>
        ))}
      </Carousel>
    </Box>
  );
};
