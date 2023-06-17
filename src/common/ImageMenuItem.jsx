import { Image } from "@chakra-ui/react";

export const ImageMenuItem = ({ category }) => {
  const image = category.image
    ? category.image.src
    : "src/assets/logo_blueHouse.svg";

  return (
    <>
      <Image
        p="1"
        borderRadius="full"
        boxSize="50px"
        src={image}
        alt={category.name}
      />
    </>
  );
};
