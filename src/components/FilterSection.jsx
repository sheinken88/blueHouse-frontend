import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "../common/ProductCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  Center,
  Stack,
  Text,
  Tabs,
  TabList,
  Tab,
  Spinner,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { fetchProductsByType } from "../state/thunks/productsThunks";
import { Link } from "react-router-dom";

export const FilterSection = () => {
  const isLoading = useSelector((state) => state.products.isLoading);
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("");
  const [product, setProduct] = useState([]);
  const responsive = {
    desktop: {
      breakpoint: { max: 3500, min: 1441 },
      items: 5,
    },
    laptop: {
      breakpoint: { max: 1440, min: 769 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 426 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 425, min: 0 },
      items: 2,
    },
  };

  const handleClick = (e) => {
    setSelected(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/products/type/${selected}`, {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        setProduct(res.data);
      });
  }, [selected]);

  return (
    // <div>
    //   <Stack
    //     direction={["column", "row"]}
    //     spacing={4}
    //     align="center"
    //     ml={[0, 20]}
    //   >
    //     <Button
    //       fontWeight={"semibold"}
    //       fontSize={"30"}
    //       variant="link"
    //       value={"Top sellers"}
    //       onClick={handleClick}
    //       isLoading={selected == "Top sellers" ? isLoading : false}
    //       leftIcon={selected == "Top sellers" ? <ArrowForwardIcon /> : null}
    //       color={selected == "Top sellers" ? "#22488B" : "#D4D9FF"}
    //     >
    //       Top sellers
    //     </Button>
    //     <Button
    //       variant="link"
    //       fontWeight={"semibold"}
    //       fontSize={"30"}
    //       value={"New arrivals"}
    //       onClick={handleClick}
    //       isLoading={selected == "New arrivals" ? isLoading : false}
    //       leftIcon={selected == "New arrivals" ? <ArrowForwardIcon /> : null}
    //       color={selected == "New arrivals" ? "#22488B" : "#D4D9FF"}
    //     >
    //       New arrivals
    //     </Button>
    //     <Button
    //       variant="link"
    //       fontWeight={"semibold"}
    //       fontSize={"30"}
    //       value={"on_sale"}
    //       onClick={handleClick}
    //       isLoading={selected == "on_sale" ? isLoading : false}
    //       leftIcon={selected == "on_sale" ? <ArrowForwardIcon /> : null}
    //       color={selected == "on_sale" ? "#22488B" : "#D4D9FF"}
    //     >
    //       On sale
    //     </Button>
    //   </Stack>
    //   <Carousel
    //     responsive={responsive}
    //     removeArrowOnDeviceType={["tablet", "mobile"]}
    //     keyBoardControl={true}
    //     infinite={true}
    //     focusOnSelect={true}
    //   >
    //     {product.map((product) => (
    //       <Center>
    //         <ProductCard key={product.id} product={product} />
    //       </Center>
    //     ))}
    //   </Carousel>

    //   <Text color="#22488B" textAlign={"center"} textDecor={"underline"}>
    //     Shop More Top Sellers
    //   </Text>
    // </div>

    //OPTION 2, WITH TABS /////////////////////////////////////////////////////////////////////////////////////<<-----------------------

    <div>
      <Tabs isFitted variant="enclosed">
        <TabList>
          <Tab
            boxShadow={
              selected == "top_sellers"
                ? "5px -5px 5px -5px rgba(0, 0, 0, 0.3)"
                : "none"
            }
            fontWeight={"semibold"}
            fontSize={{ base: "15", md: "30" }}
            variant="link"
            value={"top_sellers"}
            onClick={handleClick}
            color={selected == "top_sellers" ? "#22488B" : "#D4D9FF"}
          >
            Top sellers
          </Tab>
          <Tab
            boxShadow={
              selected == "new_arrivals"
                ? "5px -5px 5px -5px rgba(0, 0, 0, 0.3)"
                : "none"
            }
            fontWeight={"semibold"}
            fontSize={{ base: "15", md: "30" }}
            variant="link"
            value={"new_arrivals"}
            onClick={handleClick}
            color={selected == "new_arrivals" ? "#22488B" : "#D4D9FF"}
          >
            New arrivals
          </Tab>
          <Tab
            boxShadow={
              selected == "on_sale"
                ? "5px -5px 5px -5px rgba(0, 0, 0, 0.3)"
                : "none"
            }
            fontWeight={"semibold"}
            fontSize={{ base: "15", md: "30" }}
            variant="link"
            value={"on_sale"}
            onClick={handleClick}
            color={selected == "on_sale" ? "#22488B" : "#D4D9FF"}
          >
            On sale
          </Tab>
        </TabList>

        <Stack
          direction={["column", "row"]}
          spacing={4}
          align="center"
          ml={[0, 20]}
        ></Stack>
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          keyBoardControl={true}
          infinite={true}
          focusOnSelect={true}
        >
          {!selected
            ? products.map((product) => (
                <Center key={product.id}>
                  <ProductCard key={product.id} product={product} />
                </Center>
              ))
            : product.map((product) =>
                isLoading ? (
                  <Spinner
                    maxW="321.79px"
                    maxH="321.79px"
                    mb={10}
                    mt={10}
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="#D4D9FF"
                    color="#22488B"
                    size="xl"
                  />
                ) : (
                  <Center key={product.id}>
                    <ProductCard key={product.id} product={product} />
                  </Center>
                )
              )}
        </Carousel>
        <Link to={"/productdesk"}>
          <Text
            color="#22488B"
            textAlign={"center"}
            fontSize={{ base: "18px", md: "22px" }}
          >
            Shop More
          </Text>
        </Link>
      </Tabs>
    </div>
  );
};
