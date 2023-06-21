import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLastViewProducts } from "../state/slices/lastViewsProdSlice";
import { Box, Center, Text } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import { ProductCard } from "../common/ProductCard";

export const LastViews = () => {
  const ids = JSON.parse(localStorage.getItem("lastViews"))?.lastViews || 0;
  const dispatch = useDispatch();

  useEffect(() => {
    !(ids == 0) &&
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
    LargeDesktop: {
      breakpoint: { max: 3500, min: 1501 },
      items: ids.length,
    },
    SmallDesktop: {
      breakpoint: { max: 1500, min: 1441 },
      items: ids.length >= 2 ? 5 : 1,
    },

    laptop: {
      breakpoint: { max: 1440, min: 769 },
      items: ids.length > 2 ? 3 : 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 426 },
      items: ids.length >= 2 ? 2 : 1,
    },
    mobile: {
      breakpoint: { max: 425, min: 0 },
      items: ids.length >= 2 ? 2 : 1,
    },
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    !(ids == 0) && (
      <>
        <Text p="4" sx={{ fontSize: 25, fontWeight: 700, color: "#254787" }}>
          Last Views
        </Text>
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          keyBoardControl={true}
          infinite={true}
        >
          {lastProducts.map((views) => (
            <Center>
              <ProductCard key={views.id} product={views} />
            </Center>
          ))}
        </Carousel>
      </>
    )
  );
};
