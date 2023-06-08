import { Image } from "@chakra-ui/react";

export const ImageMenuItem = (category) => {
  const image = category.category.category.image
    ? category.category.category.image.src
    : "src/assets/logo_blueHouse.svg";

  return (
    <>
      <Image
        p="1"
        borderRadius="full"
        boxSize="50px"
        src={image}
        alt={category.category.category.name}
      />
    </>
  );
};
