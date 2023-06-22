import { Image, Center, Text, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const CategoryCard = (category) => {
  const image = category.category.image
    ? category.category.image.src
    : "src/assets/logo_blueHouse.svg";

  return (
    <Box category={category.id}>
      <Center>
        <Image
          borderRadius="full"
          h={{ base: "90px", md: "130px" }}
          w={{ base: "90px", md: "130px" }}
          src={image}
          alt={category.category.name}
        />
      </Center>
      <Center>
        <Text
          h={{ base: "45px", md: "130px" }}
          w={{ base: "45px", md: "130px" }}
          color={"#254787"}
          textAlign={"center"}
          // maxW={{ base: "auto", md: "132px" }}
          fontSize={{ base: "14px", md: "20px" }}
          dangerouslySetInnerHTML={{ __html: category.category.name }}
        />
      </Center>
    </Box>
  );
};
