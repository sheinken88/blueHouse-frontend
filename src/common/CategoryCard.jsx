import React from "react";
import { Image, Center, Text } from "@chakra-ui/react";

export const CategoryCard = (category) => {
  console.log(category.category);

  const image = category.category.image
    ? category.category.image.src
    : "https://bit.ly/dan-abramov";
  // console.log(imge);

  return (
    <div>
      <Center>
        <Image
          borderRadius="full"
          boxSize="118px"
          src={image}
          alt="Dan Abramov"
        />
      </Center>
      <Center>
        <Text fontSize="lg">{category.category.slug}</Text>
      </Center>
    </div>
  );
};
