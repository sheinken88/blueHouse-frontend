import { useSelector } from "react-redux";
import { ProductCard } from "../common/ProductCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button, Center, Stack, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";

export const FilterSection = () => {
  const [selected, setSelected] = useState(null);
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const responsive = {
    desktop: {
      breakpoint: { max: 3500, min: 1441 },
      items: 5,
    },
    laptop: {
      breakpoint: { max: 769, min: 1440 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 426 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 425, min: 0 },
      items: 1,
    },
  };

  const handleClick = (e) => {
    setSelected(e.target.value);
    setIsLoading(true);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/products/type/${selected}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      });
  }, [selected]);

  return (
    <div>
      <Stack
        direction={["column", "row"]}
        spacing={4}
        align="center"
        ml={[0, 20]}
      >
        <Button
          fontWeight={"semibold"}
          fontSize={"30"}
          variant="link"
          value={"Top sellers"}
          onClick={handleClick}
          isLoading={selected == "Top sellers" ? isLoading : false}
          leftIcon={selected == "Top sellers" ? <ArrowForwardIcon /> : null}
          color={selected == "Top sellers" ? "#22488B" : "#D4D9FF"}
        >
          Top sellers
        </Button>
        <Button
          variant="link"
          fontWeight={"semibold"}
          fontSize={"30"}
          value={"New arrivals"}
          onClick={handleClick}
          isLoading={selected == "New arrivals" ? isLoading : false}
          leftIcon={selected == "New arrivals" ? <ArrowForwardIcon /> : null}
          color={selected == "New arrivals" ? "#22488B" : "#D4D9FF"}
        >
          New arrivals
        </Button>
        <Button
          variant="link"
          fontWeight={"semibold"}
          fontSize={"30"}
          value={"on_sale"}
          onClick={handleClick}
          isLoading={selected == "on_sale" ? isLoading : false}
          leftIcon={selected == "on_sale" ? <ArrowForwardIcon /> : null}
          color={selected == "on_sale" ? "#22488B" : "#D4D9FF"}
        >
          On sale
        </Button>
      </Stack>
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        keyBoardControl={true}
        infinite={true}
        focusOnSelect={true}
      >
        {product.map((product) => (
          <Center>
            <ProductCard key={product.id} product={product} />
          </Center>
        ))}
      </Carousel>

      <Text color="#22488B" textAlign={"center"} textDecor={"underline"}>
        Shop More Top Sellers
      </Text>
    </div>
  );
};
