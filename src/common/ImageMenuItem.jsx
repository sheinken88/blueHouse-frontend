import { Image } from "@chakra-ui/react";

export const ImageMenuItem = (category) => {

  const image = category.category.image
    ? category.category.image.src
    : "src/assets/logo_blueHouse.svg";

  return (
       <Image
          p="2"
          borderRadius="full"
          boxSize="50px"
          src={image}
          alt={category.category.name}
        />
      );
};
