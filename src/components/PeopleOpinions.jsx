import { useSelector } from "react-redux";
import { OpinionCard } from "../common/OpinionCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Center, Stack, Text } from "@chakra-ui/react";

export const PeopleOpinions = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 2560, min: 768 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 425 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 425, min: 0 },
      items: 1,
    },
  };

  const reviews = useSelector((state) => state.reviews.reviews);
  const isLoading = useSelector((state) => state.products.isLoading);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Box m={5}>
      <Box m={5}>
        <Stack>
          <Text
            fontWeight={{ base: "semibold", md: "bold" }}
            fontSize={{ base: "18px", md: "40px" }}
            color={"rgba(37, 71, 135, 1)"}
          >
            What People are Saying
          </Text>
        </Stack>
      </Box>
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        keyBoardControl={true}
        autoPlay={true}
        infinite={true}
      >
        {reviews.map((reviews) => (
          <Center key={reviews.id}>
            <OpinionCard key={reviews.id} reviews={reviews} />
          </Center>
        ))}
      </Carousel>
    </Box>
  );
};
